/* eslint-disable no-continue */
// import { docx2md } from '../../libs/deps/docx2md.js';
// import { md2docx } from '../../libs/deps/md2docx.js';
import { setConfig } from '../../libs/utils/utils.js';
import login from '../../libs/tools/sharepoint/login.js';
import { getReqOptions } from '../../libs/tools/sharepoint/msal.js';
import getSharePointDetails from '../../libs/tools/sharepoint/shared.js';
// import { url } from 'inspector';
// import { convertCaasMd } from './caaslinks.js';
// import {
//   copyFile,
//   getFile,
//   saveFile,
//   updateExcelTable,
// } from '../loc/sharepoint.js';

const getFiles = (country) => {
  return [
  `https://main--bacom--adobecom.hlx.page/${country}/products/customer-journey-analytics/adobe-customer-journey-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/customer-journey-analytics/ai-driven-insights`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/customer-journey-analytics/end-to-end-visualization`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/adobe-experience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/assets/adobe-asset-link`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/digital-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/guides/aem-guides`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/guides/webinars`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/headless-cms`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/partners`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-manager/sites/aem-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/data-governance`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/features`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/intelligent-services`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/open-data-initiative`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/query-service`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/experience-platform/trust`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/data-warehousing-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/ecommerce-user-experience`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/experience-commerce-site-assessment-nuture`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/extended-capabilities`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/headless-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/health-beauty`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/inventory-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/multibrand-solution`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/optimized-page-performance`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/pci-compliance`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/magento/product-recommendations`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/account-based-marketing`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/financial-services`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/healthcare`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/higher-education`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/lead-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/manufacturing`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/marketing-automation`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/marketo-partners`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/marketo/technology`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/actionable-unified-profiles`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/activation-anywhere`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/data-governance-security-privacy`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/real-time-customer-data-platform/rtcdp`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/target/competitors`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/aem-integration`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/agile-work-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/competitors`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/goal-alignment`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/main`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/reporting-dashboards`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/resource-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/scenario-planning`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/strategic-planning`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/team-collaboration`,
  `https://main--bacom--adobecom.hlx.page/${country}/products/workfront/workflow-management`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/adobe-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/adobe-audience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/adobe-journey-optimizer`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/adobe-target`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/advertising`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/aem-assets`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/aem-forms`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/audience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/campaign`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/cja-2022-summit-sessions`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/customer-journey-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/customer-stories-adobe-target`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/experience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/experience-manager-assets`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/experience-manager-forms`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/experience-manager-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/experience-platform`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/learning-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-automotive`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-b2b-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-benefits`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-business-intelligence`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-channel-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-commerce-personalization`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/magento-fully-managed-service`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/marketo-random`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/planning-and-measurement`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/platform-architecture`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/primetime`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/product-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/quick-checkout`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/rtcdp`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/scale-and-extensibility`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/screens`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/sensei`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/sites-aem-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/products/cards/workfront`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/resources/cards/thank-you-collections/generic`,
  `https://main--bacom--adobecom.hlx.page/${country}/fragments/resources/recommended/template-a-recommended`,
  ];
};
const urls = getFiles('kr');

const spLogin = async ({ origin, telemetry }) => {
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

  await login({ origin, telemetry });
};

async function getItem(site, driveId, rootMapping, path) {
  const opts = getReqOptions();
  const root = rootMapping ? `/${rootMapping}` : '';
  const resp = await fetch(`${site}/${driveId}/root:${root}${path}`, opts);
  if (!resp.ok) return null;
  return resp.json();
}

async function downloadFile(site, id) {
  const options = getReqOptions({ method: 'GET' });
  const resp = await fetch(`${site}/drive/items/${id}/content`, options);
  return resp.blob();
}

const TELEMETRY = { application: { appName: 'Adobe CaaS Updater' } };

const saveBlob = (() => {
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display: none';
  return (blob, fileName) => {
    const url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
  };
})();

const getPath = (fullUrl) => {
  const url = new URL(fullUrl);
  return url.pathname;
};

const main = async () => {
  await spLogin({ origin: 'https://main--bacom--adobecom.hlx.page', telemetry: TELEMETRY });
  const { site, driveId, rootMapping } = await getSharePointDetails('https://main--bacom--adobecom.hlx.page');

  for (let i = 0; i < urls.length; i++) {
    const path = getPath(urls[i]);
    const filename = path.split('/').pop();
    const item = await getItem(site, driveId, rootMapping, `${path}.docx`);
    if (!item) continue;
    const blob = await downloadFile(site, item.id);
    saveBlob(blob, `${filename}--${i}.docx`);
    // if (i === 1) break;
  }
  // const md = await docx2md(blob);

  // const file = new Blob(['This is my text file'], { type: 'text/plain' });
  // saveBlob(file, 'bleh.info');
  // const { getItem } = await import('../../libs/tools/sharepoint/file.js');
  // console.log(getItem('/drafts/cpeyer/ben-and-jerrys-case-study'));
};

main();
