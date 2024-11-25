import { getEnv } from "../utils/utils";

/**
 * Generates a unique UUID based on timestamp and random values.
 * This function is a public domain implementation and follows the pattern of UUIDv4.
 * 
 * @returns {string} A UUID string in the format 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.
 */
export function generateUUID() {
  let d = new Date().getTime(); // Timestamp
  let d2 = (typeof performance !== 'undefined' && performance.now)
    ? performance.now() * 1000
    : 0; // Microseconds since page load or 0 if unsupported

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; // Random number between 0 and 16

    if (d > 0) { // Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else { // Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }

    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

/**
 * Loads analytics and interaction data based on user and page context.
 * Sends the data to Adobe Analytics and Target for personalization.
 * 
 * @param {Object} params - The parameters for the function.
 * @param {string} params.locale - The locale object containing language/region info.
 */
export async function loadAnalyticsAndInteractionData({ locale }) {
  const env = getEnv()?.name;
  let AT_PROPERTY_VAL = 'bc8dfa27-29cc-625c-22ea-f7ccebfc6231';

  if (
    env === 'prod'
  ) {
    //EMEA & LATAM
    if (
      pathname.search(
        /(\/africa\/|\/be_en\/|\/be_fr\/|\/be_nl\/|\/cis_en\/|\/cy_en\/|\/dk\/|\/de\/|\/ee\/|\/es\/|\/fr\/|\/gr_en\/|\/ie\/|\/il_en\/|\/it\/|\/lv\/|\/lu_de\/|\/lu_en\/|\/lu_fr\/|\/hu\/|\/mt\/|\/mena_en\/|\/nl\/|\/no\/|\/pl\/|\/pt\/|\/ro\/|\/ch_de\/|\/si\/|\/sk\/|\/ch_fr\/|\/fi\/|\/se\/|\/ch_it\/|\/tr\/|\/uk\/|\/at\/|\/cz\/|\/bg\/|\/ru\/|\/cis_ru\/|\/ua\/|\/il_he\/|\/mena_ar\/|\/lt\/|\/sa_en\/|\/ae_en\/|\/ae_ar\/|\/sa_ar\/|\/ng\/|\/za\/|\/qa_ar\/|\/eg_en\/|\/eg_ar\/|\/kw_ar\/|\/eg_ar\/|\/qa_en\/|\/kw_en\/|\/gr_el\/|\/br\/|\/cl\/|\/la\/|\/mx\/|\/co\/|\/ar\/|\/pe\/|\/gt\/|\/pr\/|\/ec\/|\/cr\/)/
      ) !== -1
    ) {
      AT_PROPERTY_VAL = "488edf5f-3cbe-f410-0953-8c0c5c323772";
    }
    //APAC
    else if (
      pathname.search(
        /(\/au\/|\/hk_en\/|\/in\/|\/nz\/|\/sea\/|\/cn\/|\/hk_zh\/|\/tw\/|\/kr\/|\/sg\/|\/th_en\/|\/th_th\/|\/my_en\/|\/my_ms\/|\/ph_en\/|\/ph_fil\/|\/vn_en\/|\/vn_vi\/|\/in_hi\/|\/id_id\/|\/id_en\/)/
      ) !== -1
    ) {
      AT_PROPERTY_VAL = "3de509ee-bbc7-58a3-0851-600d1c2e2918";
    }
    //JP
    else if (pathname.indexOf("/jp/") !== -1) {
      AT_PROPERTY_VAL = "ba5bc9e8-8fb4-037a-12c8-682384720007";
    }
  }
  const DATA_STREAM_ID = env === 'prod' ? '5856abb0-95d8-4f9a-bb92-37f99d2bd492' : '87f9b644-5fd3-4015-81d5-f68ad81c3561';
  const REPORT_SUITES_ID = env === 'prod' ? ['adbadobenonacdcprod'] : ['adbadobenonacdcqa'];
  const TARGET_API_URL = 'https://edge.adobedc.net/ee/v2/interact';
  const KNDCTR_COOKIE_KEYS = [
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity',
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster',
  ];

  const SCREEN_WIDTH = window.screen.width;
  const SCREEN_HEIGHT = window.screen.height;
  const SCREEN_ORIENTATION = (window.innerWidth > window.innerHeight) ? "landscape" : "portrait";
  const VIEWPORT_WIDTH = window.innerWidth;
  const VIEWPORT_HEIGHT = window.innerHeight;

  // Date and Time Constants
  const CURRENT_DATE = new Date();
  const LOCAL_TIME = CURRENT_DATE.toISOString();
  const LOCAL_TIMEZONE_OFFSET = CURRENT_DATE.getTimezoneOffset();

  /**
   * Retrieves the value of a specific cookie by its key.
   * 
   * @param {string} key - The cookie key.
   * @returns {string|null} The cookie value or null if the cookie doesn't exist.
   */
  function getCookie(key) {
    const cookie = document.cookie.split(';')
      .map(x => x.trim().split('='))
      .find(([k]) => k === key);
    return cookie ? cookie[1] : null;
  }

  /**
   * Sets a cookie with a specified expiration time (default 730 days).
   * 
   * @param {string} key - The cookie key.
   * @param {string} value - The cookie value.
   * @param {Object} [options={}] - Optional settings for cookie properties.
   */
  function setCookie(key, value, options = {}) {
    const existingValue = getCookie(key);
    if (existingValue) {
      console.log(`The cookie ${key} already exists. Updating it.`);
    } else {
      console.log(`The cookie ${key} does not exist. Adding a new one.`);
    }

    // Default expiration (24 months)
    const expires = options.expires || 730;
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    const expiresString = `expires=${date.toUTCString()}`;

    document.cookie = `${key}=${value}; ${expiresString}; path=/`;
  }

  // Retrieve or create FPID cookie
  let fpidCookie = getCookie('FPID');
  if (!fpidCookie) {
    fpidCookie = generateUUID();
    setCookie('FPID', fpidCookie);
  }

  /**
   * Retrieves specific MarTech cookies by their keys.
   * 
   * @returns {Array} List of MarTech cookies with key and value.
   */
  const getMarctechCookies = () => {
    return document.cookie.split(';')
      .map(x => x.trim().split('='))
      .filter(([key]) => KNDCTR_COOKIE_KEYS.includes(key))
      .map(([key, value]) => ({ key, value }));
  };

  /**
   * Extracts the page name for analytics from the current URL.
   * 
   * @returns {string} The modified page name for analytics.
   */
  const getPageNameForAnalytics = () => {
    const { host, pathname } = new URL(window.location.href);
    const [modifiedPath] = pathname.split('/').filter(x => x !== locale.prefix).join(':').split('.');
    return host.replace('www.', '') + ':' + modifiedPath;
  };

  // Check if the user is logged in based on server timing
  const isLoggedIn = window.performance.getEntriesByType('navigation')?.[0]
    ?.serverTiming
    ?.find((entry) => entry.name === 'sis')
    ?.description === '1';

  const pageName = getPageNameForAnalytics();

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

  const prevPageName = getCookie('gpv');

  // Prepare request payload for the analytics and personalization data
  const body = {
    event: {
      xdm: {
        ...updatedContext,
        identityMap: {
          FPID: [{
            id: fpidCookie,
            authenticatedState: "ambiguous",
            primary: true,
          }],
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
              adobeLocale: locale.ietf,
              hasGnav: true,
            },
          },
          digitalData: {
            page: { pageInfo: { language: locale.ietf } },
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

  try {
    // Send request to Adobe Target API
    const targetResp = await fetch(`${TARGET_API_URL}?dataStreamId=${DATA_STREAM_ID}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    /**
     * Extracts ECID (Experience Cloud ID) from the response.
     * 
     * @param {Object} data - The response data from the API.
     * @returns {string|null} The ECID or null if not found.
     */
    function getECID(data) {
      return data.handle
        .flatMap(item => item.payload)
        .find(p => p.namespace?.code === "ECID")?.id || null;
    }

    const targetRespJson = await targetResp.json();
    const ECID = getECID(targetRespJson);
    const cookieName = 'AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg';
    const cookieValue = `MCMID|${ECID}`;

    // Update the AMCV cookie if the ECID has changed
    if (getCookie(cookieName) !== cookieValue) {
      setCookie(cookieName, `MCMID|${ECID}`, {});
    }

    // Retrieve propositions from the response
    const resultPayload = targetRespJson?.handle?.find(d => d.type === 'personalization:decisions')?.payload;

    window.eventPromise = new Promise((resolve, reject) => {
      if (resultPayload.length > 0) {
        resolve({
          type: 'propositionFetch',
          result: {
            propositions: resultPayload,
          },
        });
      } else {
        reject(new Error('No propositions found'));
      }
    });
  } catch (err) {
    console.log('Error during API call:', err);
  }
}

/**
 * Checks if the user is signed out based on the server timing and navigation performance.
 * 
 * @returns {boolean} True if the user is signed out, otherwise false.
 */
export function isSignedOut() {
  let w = window, perf = w.performance, serverTiming = {};

  if (perf && perf.getEntriesByType) {
    serverTiming = Object.fromEntries(
      perf.getEntriesByType("navigation")?.[0]?.serverTiming?.map?.(
        ({ name, description }) => ([name, description])
      ) ?? []
    );
  }

  const isSignedOutOnStagingOrProd = serverTiming && serverTiming.sis === '0';

  // Return true if it's a dev environment or signed out on staging/prod
  return !Object.keys(serverTiming || {}).length || isSignedOutOnStagingOrProd;
}

/**
 * Enables personalization (V2) for the page.
 * 
 * @returns {boolean} True if personalization is enabled, otherwise false.
 */
export function enablePersonalizationV2() {
  const enablePersV2 = document.head.querySelector(`meta[name="personalization-v2"]`);
  return enablePersV2 && isSignedOut();
}
