export function generateUUID() { // Public Domain/MIT
  var d = new Date().getTime();//Timestamp
  var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if(d > 0){//Use timestamp until depleted
          r = (d + r)%16 | 0;
          d = Math.floor(d/16);
      } else {//Use microseconds since page-load if supported
          r = (d2 + r)%16 | 0;
          d2 = Math.floor(d2/16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

export async function loadAnalyticsAndInteractionData({locale}) {
  const DATA_STREAM_ID = 'a44f0037-2ada-441f-a012-243832ce5ff9';
  const REPORT_SUITES_ID = ['adbadobenonacdcqa'];
  const AT_PROPERTY_VAL = 'bc8dfa27-29cc-625c-22ea-f7ccebfc6231';
  const TARGET_API_URL = 'https://edge.adobedc.net/ee/v2/interact';

  const KNDCTR_COOKIE_KEYS = [
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_identity',
    'kndctr_9E1005A551ED61CA0A490D45_AdobeOrg_cluster'
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

  // Utility function to parse cookies by key
  function getCookie(key) {
    const cookie = document.cookie.split(';').map(x => x.trim().split('=')).find(([k]) => k === key);
    return cookie ? cookie[1] : null;
  };

  function setCookie(key, value, options = {}) {
    // Check if the cookie already exists
    const existingValue = getCookie(key);
    if (existingValue) {
        console.log(`The cookie ${key} already exists. Updating it.`);
    } else {
        console.log(`The cookie ${key} does not exist. Adding a new one.`);
    }

    // Set default expiration (24 months)
    const expires = options.expires || 730;

    // Format the expiration date for the cookie
    const date = new Date();
    date.setTime(date.getTime() + expires * 24 * 60 * 60 * 1000);
    const expiresString = `expires=${date.toUTCString()}`;

    // Create the cookie string
    const cookieString = `${key}=${value}; ${expiresString}; path=/`;

    // Set the cookie
    document.cookie = cookieString;
  }

  let fpidCookie = getCookie('FPID');
  if(!fpidCookie){
    fpidCookie = generateUUID();
    setCookie('FPID',fpidCookie);
  }

  // Function to parse the MarTech cookies
  const getMarctechCookies = () => {
    return document.cookie
      .split(';')
      .map(x => x.trim().split('='))
      .filter(([key]) => KNDCTR_COOKIE_KEYS.includes(key))
      .map(([key, value]) => ({ key, value }));
  };

  // Function to get page name for analytics
  const getPageNameForAnalytics = () => {
    const { host, pathname } = new URL(window.location.href);
    const [modifiedPath] = pathname.split('/').filter((x) => x !== locale.prefix).join(':').split('.');
    return host.replace('www.', '') + ':' + modifiedPath;
  };

  // Main function logic for loading analytics and interaction data
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

  console.log('updatedContext', updatedContext);

  // console.log(await getECID());

  const body = {
    event: {
      xdm: {
        ...updatedContext,
        identityMap: {
          FPID: [{
            id: fpidCookie,
            authenticatedState: "ambiguous",
            primary: true
          }]
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
    const targetResp = await fetch(`${TARGET_API_URL}?dataStreamId=${DATA_STREAM_ID}`, {
      method: 'POST',
      body: JSON.stringify(body),
    });

    function getECID(data) {
      return data.handle
        .flatMap(item => item.payload)
        .find(p => p.namespace?.code === "ECID")?.id || null;
    }

    const targetRespJson = await targetResp.json();
    const ECID = getECID(targetRespJson);
    const cookieName = 'AMCV_9E1005A551ED61CA0A490D45%40AdobeOrg';
    const cookieValue = `MCMID|${ECID}`;
    if(getCookie(cookieName) !== cookieValue){
      setCookie(cookieName, `MCMID|${ECID}`, {});
    }

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
  } catch(err){
    console.log('err', err);
  }
}

export function isSignedOut(){
  let w = window, perf = w.performance, serverTiming = {};

  if (perf && perf.getEntriesByType) {
    serverTiming = Object.fromEntries(
      perf.getEntriesByType("navigation")?.[0]?.serverTiming?.map?.(
        ({name, description}) => ([name, description])
      ) ?? []
    );
  }

  const isSignedOutOnStagingOrProd = serverTiming && serverTiming.sis === '0';

  // check if its dev
  return !Object.keys(serverTiming||{}).length || isSignedOutOnStagingOrProd;
}

export function enablePersonalisationV2 (){
  //TODO: add meta-logic
  const enablePersV2 = true;

  return enablePersV2 && isSignedOut();
}
