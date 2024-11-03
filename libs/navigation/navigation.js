const blockConfig = [
  {
    key: 'header',
    name: 'global-navigation',
    targetEl: 'header',
    appendType: 'prepend',
    params: ['imsClientId', 'searchEnabled', 'unav', 'customLinks', 'jarvis'],
  },
  {
    key: 'footer',
    name: 'global-footer',
    targetEl: 'footer',
    appendType: 'appendChild',
    params: ['privacyId', 'privacyLoadDelay'],
  },
];

const envMap = {
  prod: 'https://www.adobe.com',
  stage: 'https://www.stage.adobe.com',
  qa: 'https://gnav--milo--adobecom.hlx.page',
};

const stageDomainsMap = {
  'www.stage.adobe.com': {
    'www.adobe.com': 'origin',
    'helpx.adobe.com': 'helpx.stage.adobe.com',
    'creativecloud.adobe.com': 'stage.creativecloud.adobe.com',
  },
  // Test app
  'adobecom.github.io': {
    'www.adobe.com': 'www.stage.adobe.com',
    'helpx.adobe.com': 'helpx.stage.adobe.com',
    'creativecloud.adobe.com': 'stage.creativecloud.adobe.com',
  },
};

function getParamsConfigs(configs) {
  return blockConfig.reduce((acc, block) => {
    block.params.forEach((param) => {
      const value = configs[block.key]?.[param];
      if (value !== undefined) {
        acc[param] = value;
      }
    });
    return acc;
  }, {});
}

/* eslint import/no-relative-packages: 0 */
export default async function loadBlock(configs, customLib) {
  const {
    header,
    footer,
    authoringPath,
    env = 'prod',
    locale = '',
    theme,
  } = configs || {};
  if (!header && !footer) {
    // eslint-disable-next-line no-console
    console.error('Global navigation Error: header and footer configurations are missing.');
    return;
  }
  const branch = new URLSearchParams(window.location.search).get('navbranch');
  const miloLibs = branch ? `https://${branch}--milo--adobecom.hlx.page` : customLib || envMap[env];

  // Relative paths work just fine since they exist in the context of this file's origin
  const [{ default: bootstrapBlock }, { default: locales }, { setConfig }] = await Promise.all([
    import('./bootstrapper.js'),
    import('../utils/locales.js'),
    import('../utils/utils.js'),
  ]);

  const paramConfigs = getParamsConfigs(configs);
  const clientConfig = {
    clientEnv: env,
    origin: `https://main--federal--adobecom.hlx.${env === 'prod' ? 'live' : 'page'}`,
    pathname: `/${locale}`,
    miloLibs: `${miloLibs}/libs`,
    locales: configs.locales || locales,
    contentRoot: authoringPath || footer.authoringPath,
    theme,
    ...paramConfigs,
    stageDomainsMap,
    standaloneGnav: true,
  };
  setConfig(clientConfig);
  for await (const block of blockConfig) {
    const configBlock = configs[block.key];
    try {
      if (configBlock) {
        if (block.key === 'header') {
          const { default: init } = await import('../blocks/global-navigation/global-navigation.js');
          await bootstrapBlock(init, {
            ...block,
            unavComponents: configBlock.unav?.unavComponents,
            redirect: configBlock.redirect,
            layout: configBlock.layout,
            noBorder: configBlock.noBorder,
            jarvis: configBlock.jarvis,
          });
        } else if (block.key === 'footer') {
          const { default: init } = await import('../blocks/global-footer/global-footer.js');
          await bootstrapBlock(init, { ...block });
        }
        configBlock.onReady?.();
      }
    } catch (e) {
      configBlock.onError?.(e);
    }
  }
}

window.loadNavigation = loadBlock;
