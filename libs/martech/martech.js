import {
  getConfig, getMetadata, loadIms, loadLink, loadScript, getMepEnablement,
} from '../utils/utils.js';

const ALLOY_SEND_EVENT = 'alloy_sendEvent';
const ALLOY_SEND_EVENT_ERROR = 'alloy_sendEvent_error';
const TARGET_TIMEOUT_MS = 4000;
const ENTITLEMENT_TIMEOUT = 3000;

const setDeep = (obj, path, value) => {
  const pathArr = path.split('.');
  let currentObj = obj;

  for (const key of pathArr.slice(0, -1)) {
    if (!currentObj[key] || typeof currentObj[key] !== 'object') {
      currentObj[key] = {};
    }
    currentObj = currentObj[key];
  }

  currentObj[pathArr[pathArr.length - 1]] = value;
};

// eslint-disable-next-line max-len
const waitForEventOrTimeout = (eventName, timeout, returnValIfTimeout) => new Promise((resolve) => {
  const listener = (event) => {
    // eslint-disable-next-line no-use-before-define
    clearTimeout(timer);
    resolve(event.detail);
  };

  const errorListener = () => {
    // eslint-disable-next-line no-use-before-define
    clearTimeout(timer);
    resolve({ error: true });
  };

  const timer = setTimeout(() => {
    window.removeEventListener(eventName, listener);
    if (returnValIfTimeout !== undefined) {
      resolve(returnValIfTimeout);
    } else {
      resolve({ timeout: true });
    }
  }, timeout);

  window.addEventListener(eventName, listener, { once: true });
  window.addEventListener(ALLOY_SEND_EVENT_ERROR, errorListener, { once: true });
});

const handleAlloyResponse = (response) => {
  const items = (
    (response.propositions?.length && response.propositions)
    || (response.decisions?.length && response.decisions)
    || []
  ).map((i) => i.items).flat();

  if (!items?.length) return [];

  return items
    .map((item) => {
      const content = item?.data?.content;
      if (!content || !(content.manifestLocation || content.manifestContent)) return null;

      return {
        manifestPath: content.manifestLocation || content.manifestPath,
        manifestUrl: content.manifestLocation,
        manifestData: content.manifestContent?.experiences?.data || content.manifestContent?.data,
        manifestPlaceholders: content.manifestContent?.placeholders?.data,
        manifestInfo: content.manifestContent?.info.data,
        name: item.meta['activity.name'],
        variantLabel: item.meta['experience.name'] && `target-${item.meta['experience.name']}`,
        meta: item.meta,
      };
    })
    .filter(Boolean);
};

function roundToQuarter(num) {
  return Math.ceil(num / 250) / 4;
}

function calculateResponseTime(responseStart) {
  const responseTime = Date.now() - responseStart;
  return roundToQuarter(responseTime);
}

function sendTargetResponseAnalytics(failure, responseStart, timeout, message) {
  // temporary solution until we can decide on a better timeout value
  const responseTime = calculateResponseTime(responseStart);
  const timeoutTime = roundToQuarter(timeout);
  let val = `target response time ${responseTime}:timed out ${failure}:timeout ${timeoutTime}`;
  if (message) val += `:${message}`;
  // eslint-disable-next-line no-underscore-dangle
  window._satellite?.track?.('event', {
    documentUnloading: true,
    xdm: {
      eventType: 'web.webinteraction.linkClicks',
      web: {
        webInteraction: {
          linkClicks: { value: 1 },
          type: 'other',
          name: val,
        },
      },
    },
    data: { _adobe_corpnew: { digitalData: { primaryEvent: { eventInfo: { eventName: val } } } } },
  });
}

export const getTargetPersonalization = async () => {
  const params = new URL(window.location.href).searchParams;

  const timeout = parseInt(params.get('target-timeout'), 10)
    || parseInt(getMetadata('target-timeout'), 10)
    || TARGET_TIMEOUT_MS;

  const responseStart = Date.now();
  window.addEventListener(ALLOY_SEND_EVENT, () => {
    const responseTime = calculateResponseTime(responseStart);
    try {
      window.lana.log(`target response time: ${responseTime}`, { tags: 'martech', errorType: 'i' });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error logging target response time:', e);
    }
  }, { once: true });

  let targetManifests = [];
  let targetPropositions = [];
  const response = await waitForEventOrTimeout(ALLOY_SEND_EVENT, timeout);
  if (response.error) {
    try {
      window.lana.log('target response time: ad blocker', { tags: 'martech', errorType: 'i' });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error logging target response time for ad blocker:', e);
    }
    return { targetManifests, targetPropositions };
  }
  if (response.timeout) {
    waitForEventOrTimeout(ALLOY_SEND_EVENT, 5100 - timeout)
      .then(() => sendTargetResponseAnalytics(true, responseStart, timeout));
  } else {
    sendTargetResponseAnalytics(false, responseStart, timeout);
    targetManifests = handleAlloyResponse(response.result);
    targetPropositions = response.result?.propositions || [];
  }

  return { targetManifests, targetPropositions };
};

const setupEntitlementCallback = () => {
  const setEntitlements = async (destinations) => {
    const { getEntitlements } = await import('../features/personalization/personalization.js');
    return getEntitlements(destinations);
  };

  const getEntitlements = (resolve) => {
    const handleEntitlements = (detail) => {
      if (detail?.result?.destinations?.length) {
        resolve(setEntitlements(detail.result.destinations));
      } else {
        resolve([]);
      }
    };
    waitForEventOrTimeout(ALLOY_SEND_EVENT, ENTITLEMENT_TIMEOUT, [])
      .then(handleEntitlements)
      .catch(() => resolve([]));
  };

  const { miloLibs, codeRoot, entitlements: resolveEnt } = getConfig();
  getEntitlements(resolveEnt);

  loadLink(
    `${miloLibs || codeRoot}/features/personalization/personalization.js`,
    { as: 'script', rel: 'modulepreload' },
  );
};

function isProxied() {
  return /^(www|milo|business|blog)(\.stage)?\.adobe\.com$/.test(window.location.hostname);
}

let filesLoadedPromise = false;
const loadMartechFiles = async (config) => {
  if (filesLoadedPromise) return filesLoadedPromise;

  filesLoadedPromise = async () => {
    if (getMepEnablement('xlg') === 'loggedout') {
      setupEntitlementCallback();
    } else {
      loadIms()
        .then(() => {
          if (window.adobeIMS.isSignedInUser()) setupEntitlementCallback();
        })
        .catch(() => { });
    }

    setDeep(
      window,
      'alloy_all.data._adobe_corpnew.digitalData.page.pageInfo.language',
      { locale: config.locale.prefix.replace('/', ''), langCode: config.locale.ietf },
    );

    setDeep(window, 'digitalData.diagnostic.franklin.implementation', 'milo');

    // console.log(window)

    const launchUrl = config.env.consumer?.marTechUrl || (
      isProxied()
        ? '/marketingtech'
        : 'https://assets.adobedtm.com'
    ) + (
        config.env.name === 'prod'
          ? '/d4d114c60e50/a0e989131fd5/launch-5dd5dd2177e6.min.js'
          : '/d4d114c60e50/a0e989131fd5/launch-0f4ac335f569-development.min.js'
      );
    // : '/d4d114c60e50/a0e989131fd5/launch-2c94beadc94f-development.min.js'
    loadLink(launchUrl, { as: 'script', rel: 'preload' });

    window.marketingtech = {
      adobe: {
        launch: {
          url: launchUrl,
          controlPageLoad: true,
        },
        alloy: {
          edgeConfigId: config.env.consumer?.edgeConfigId || config.env.edgeConfigId,
          edgeDomain: (
            isProxied()
              ? window.location.hostname
              : 'sstats.adobe.com'
          ),
          edgeBasePath: (
            isProxied()
              ? 'experienceedge'
              : 'ee'
          ),
        },
        target: false,
      },
      milo: true,
    };
    window.edgeConfigId = config.env.edgeConfigId;

    await loadScript((
      isProxied()
        ? ''
        : 'https://www.adobe.com'
    ) + (
        config.env.name === 'prod'
          ? '/marketingtech/main.standard.min.js'
          : '/marketingtech/main.standard.qa.min.js'
      ));
    // eslint-disable-next-line no-underscore-dangle
    window._satellite.track('pageload');
  };

  await filesLoadedPromise();
  return filesLoadedPromise;
};

export async function loadAnalyticsAndInteractionData(config) {
  // Constants for URLs and Configurations
  const DATA_STREAM_ID = 'e065836d-be57-47ef-b8d1-999e1657e8fd';
  const REPORT_SUITES_ID = ['adbadobenonacdcprod', 'adbadobeprototype'];
  const AT_PROPERTY_VAL = 'bc8dfa27-29cc-625c-22ea-f7ccebfc6231';
  const ECID_URL = 'https://dpm.demdex.net/id?d_orgid=9E1005A551ED61CA0A490D45&d_ver=2';
  const TARGET_API_URL = 'https://sstats.adobe.com/ee/v2/interact';

  // Cookie names
  const AMCV_COOKIE_NAME = 'AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg';
  const KNDCTR_COOKIE_KEYS = [
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity',
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster'
  ];

  // Screen and Viewport Constants
  const SCREEN_WIDTH = window.screen.width;
  const SCREEN_HEIGHT = window.screen.height;
  const SCREEN_ORIENTATION = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
  const VIEWPORT_WIDTH = window.innerWidth;
  const VIEWPORT_HEIGHT = window.innerHeight;

  // Date and Time Constants
  const CURRENT_DATE = new Date();
  const LOCAL_TIME = CURRENT_DATE.toISOString();
  const LOCAL_TIMEZONE_OFFSET = CURRENT_DATE.getTimezoneOffset();

  // Utility function to parse cookies by key
  const getCookieValue = (key) => {
    const cookie = document.cookie.split(';').map(x => x.trim().split('=')).find(([k]) => k === key);
    return cookie ? cookie[1] : null;
  };

  // Function to parse the MarTech cookies
  const getMarctechCookies = () => {
    return document.cookie
      .split(';')
      .map(x => x.trim().split('='))
      .filter(([key]) => KNDCTR_COOKIE_KEYS.includes(key))
      .map(([key, value]) => ({ key, value }));
  };

  // Function to get ECID from the URL or cookies
  const getEcid = async () => {
    const secidCookie = getCookieValue(AMCV_COOKIE_NAME);
    const clean = /MCMID\|\d+/.exec(decodeURIComponent(secidCookie));
    if (clean) return clean[0].replace('MCMID|', '');

    try {
      const resp = await fetch(ECID_URL);
      const data = await resp.json();
      return data?.d_mid || '7A702A466437E6F50A495C83@86071f62631c0cc0495e71.e';
    } catch {
      return '7A702A466437E6F50A495C83@86071f62631c0cc0495e71.e';
    }
  };

  // Function to get page name for analytics
  const getPageNameForAnalytics = () => {
    const { host, pathname } = new URL(window.location.href);
    const { locale } = getConfig();
    const [modifiedPath] = pathname.split('/').filter((x) => x !== locale.prefix).join(':').split('.');
    return host.replace('www.', '') + ':' + modifiedPath;
  };

  // Main function logic for loading analytics and interaction data
  const isLoggedIn = window.performance.getEntriesByType('navigation')?.[0]
    ?.serverTiming
    ?.find((entry) => entry.name === 'sis')
    ?.description === '1';

  const pageName = getPageNameForAnalytics();
  const ecid = await getEcid();

  const edgeConfigOverrides = {
    com_adobe_analytics: { reportSuites: REPORT_SUITES_ID },
    com_adobe_target: { propertyToken: AT_PROPERTY_VAL },
  };

  const updatedContext = {
    device: {
      screenHeight: SCREEN_HEIGHT,
      screenWidth: SCREEN_WIDTH,
      screenOrientation: SCREEN_ORIENTATION,
    },
    environment: {
      type: "browser",
      browserDetails: {
        viewportWidth: VIEWPORT_WIDTH,
        viewportHeight: VIEWPORT_HEIGHT,
      },
    },
    placeContext: {
      localTime: LOCAL_TIME,
      localTimezoneOffset: LOCAL_TIMEZONE_OFFSET,
    },
  };

  const prevPageName = getCookieValue('gpv');

  console.log('updatedContext', updatedContext);

  const body = {
    event: {
      xdm: {
        ...updatedContext,
        identityMap: {
          ECID: [{ id: ecid, primary: true }],
        },
        web: {
          webPageDetails: {
            URL: window.location.href,
            siteSection: "www.adobe.com",
            server: "www.adobe.com",
            isErrorPage: false,
            isHomePage: false,
            name: pageName,
            pageViews: { value: 0 },
          },
          webInteraction: {
            name: "Martech-API",
            type: "other",
            linkClicks: { value: 1 },
          },
          webReferrer: { URL: document.referrer },
        },
        timestamp: new Date().toISOString(),
        eventType: "decisioning.propositionFetch",
      },
      data: {
        _adobe_corpnew: {
          marketingtech: {
            adobe: {
              alloy: { approach: "martech-API" },
            },
          },
          __adobe: {
            target: {
              is404: false,
              authState: "loggedOut",
              hitType: "propositionFetch",
              isMilo: true,
              adobeLocale: config.locale.ietf,
              hasGnav: true,
            },
          },
          digitalData: {
            page: { pageInfo: { language: config.locale.ietf } },
            diagnostic: { franklin: { implementation: "milo" } },
            previousPage: { pageInfo: { pageName: prevPageName } },
            primaryUser: {
              primaryProfile: {
                profileInfo: {
                  authState: isLoggedIn ? "authenticated" : "loggedOut",
                  returningStatus: "Repeat",
                },
              },
            },
          },
        },
      },
    },
    query: {
      identity: { fetch: ["ECID"] },
      personalization: {
        schemas: [
          "https://ns.adobe.com/personalization/default-content-item",
          "https://ns.adobe.com/personalization/html-content-item",
          "https://ns.adobe.com/personalization/json-content-item",
          "https://ns.adobe.com/personalization/redirect-item",
          "https://ns.adobe.com/personalization/dom-action",
        ],
        decisionScopes: ["__view__"],
      },
    },
    meta: {
      configOverrides: edgeConfigOverrides,
      state: {
        domain: "localhost",
        cookiesEnabled: true,
        entries: getMarctechCookies(),
      },
    },
  };

  const targetResp = await fetch(`${TARGET_API_URL}?dataStreamId=${DATA_STREAM_ID}`, {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const targetRespJson = await targetResp.json();
  const resultPayload = targetRespJson?.handle?.find(d => d.type === 'personalization:decisions')?.payload;
  console.log('resultPayload', resultPayload);

  window.dispatchEvent(new CustomEvent(ALLOY_SEND_EVENT, {
    detail: {
      type: 'propositionFetch',
      result: {
        propositions: resultPayload,
      },
    },
  }));

  return true;
}

export default async function init() {
  const config = getConfig();
  await loadAnalyticsAndInteractionData(config);

  const martechPromise = loadMartechFiles(config);
  return martechPromise;
}
