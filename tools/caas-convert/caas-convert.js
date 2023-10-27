// import { docx2md } from '../../libs/deps/docx2md.js';
// import { md2docx } from '../../libs/deps/md2docx.js';
import { setConfig } from '../../libs/utils/utils.js';
// import { getDb, closeDb, convertLink } from '../../../bulk-updater/caaslinks/caaslinks.js';
import login from '../../libs/tools/sharepoint/login.js';
import { main } from './caaslinks.js';
// import {
//   copyFile,
//   getFile,
//   saveFile,
//   updateExcelTable,
// } from '../loc/sharepoint.js';

const urls = [
  'https://main--bacom--adobecom.hlx.page/drafts/cpeyer/caas-mwpw-137829/uk/adobe-customer-journey-analytics',
  // 'https://main--bacom--adobecom.hlx.page/drafts/cpeyer/caas-mwpw-137829/uk/ai-driven-insights',
  // 'https://main--bacom--adobecom.hlx.page/drafts/cpeyer/caas-mwpw-137829/uk/end-to-end-visualization',
];

const init = async () => {
  const config = {
    geoRouting: 'on',
    fallbackRouting: 'on',
    links: 'on',
    imsClientId: 'milo',
    imsScope: 'AdobeID,openid,gnav',
    codeRoot: '/libs',
    prodDomains: ['milo.adobe.com'],
    jarvis: {
      id: 'milo',
      version: '1.0',
      onDemand: false,
    },
    privacyId: '7a5eb705-95ed-4cc4-a11d-0cc5760e93db', // valid for *.adobe.com
    breadcrumbs: 'on',
    // taxonomyRoot: '/your-path-here',
  };

  setConfig(config);

  const scopes = ['files.readwrite', 'sites.readwrite.all'];
  const telemetry = { application: { appName: 'CaaS Link Converter' } };
  const loginStatus = await login({ scopes, telemetry });
  return loginStatus;
};

const processFile = async (url, db) => {
  const res = await fetch(`${urls[0]}.md`);
  if (!res.ok) {
    console.log('Invalid response: ', res);
    return;
  }
  const md = await res.text();
  console.log(md);
};

// init();
// processFile();
main();
