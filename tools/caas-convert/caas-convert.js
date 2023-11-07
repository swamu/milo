/* eslint-disable no-plusplus */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-continue */
// import { docx2md } from '../../libs/deps/docx2md.js';
// import { md2docx } from '../../libs/deps/md2docx.js';
import { setConfig } from '../../libs/utils/utils.js';
import login from '../../libs/tools/sharepoint/login.js';
import { getReqOptions } from '../../libs/tools/sharepoint/msal.js';
import getSharePointDetails from '../../libs/tools/sharepoint/shared.js';
// import { getFilenames } from '../../libs/tools/sharepoint/file.js';

const getUrls = (country) => [
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/customer-journey-analytics/adobe-customer-journey-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/customer-journey-analytics/ai-driven-insights`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/customer-journey-analytics/end-to-end-visualization`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/adobe-experience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/assets/adobe-asset-link`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/digital-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/guides/aem-guides`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/guides/webinars`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/headless-cms`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/partners`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-manager/sites/aem-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/data-governance`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/features`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/intelligent-services`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/open-data-initiative`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/query-service`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/experience-platform/trust`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/data-warehousing-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/ecommerce-user-experience`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/experience-commerce-site-assessment-nuture`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/extended-capabilities`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/headless-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/health-beauty`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/inventory-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/multibrand-solution`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/optimized-page-performance`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/pci-compliance`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/product-recommendations`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/account-based-marketing`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/financial-services`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/healthcare`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/higher-education`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/lead-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/manufacturing`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/marketing-automation`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/marketo-partners`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/technology`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/real-time-customer-data-platform/actionable-unified-profiles`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/real-time-customer-data-platform/activation-anywhere`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/real-time-customer-data-platform/data-governance-security-privacy`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/real-time-customer-data-platform/resources`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/real-time-customer-data-platform/rtcdp`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/target/competitors`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/aem-integration`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/agile-work-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/competitors`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/goal-alignment`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/main`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/reporting-dashboards`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/resource-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/scenario-planning`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/strategic-planning`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/team-collaboration`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront/workflow-management`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/adobe-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/adobe-audience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/adobe-journey-optimizer`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/adobe-target`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/advertising`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/aem-assets`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/aem-forms`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/audience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/campaign`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/cja-2022-summit-sessions`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/customer-journey-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/customer-stories-adobe-target`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/experience-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/experience-manager-assets`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/experience-manager-forms`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/experience-manager-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/experience-platform`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/learning-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-automotive`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-b2b-commerce`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-benefits`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-business-intelligence`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-channel-manager`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-commerce-personalization`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/magento-fully-managed-service`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/marketo-random`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/planning-and-measurement`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/platform-architecture`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/primetime`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/product-analytics`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/quick-checkout`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/rtcdp`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/scale-and-extensibility`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/screens`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/sensei`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/sites-aem-sites`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/products/cards/workfront`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/resources/cards/thank-you-collections/generic`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}fragments/resources/recommended/template-a-recommended`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/ecommerce-cms`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/live-search`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/magento/progressive-web-apps`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/marketo/dynamic-chat`,
  `https://main--bacom--adobecom.hlx.page/${country}${country ? '/' : ''}products/workfront-aem-assets-cc`,
];

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

const BODY_BASE = { '@microsoft.graph.conflictBehavior': 'replace' };

const spLogin = async ({ origin, telemetry }) => {
  setConfig(config);

  await login({ origin, telemetry });
};

async function downloadFile(site, id) {
  const options = getReqOptions({ method: 'GET' });
  const resp = await fetch(`${site}/drive/items/${id}/content`, options);
  return resp.blob();
}

export async function getFilenames(site, driveId, rootMapping, path) {
  const opts = getReqOptions();
  const root = rootMapping ? `/${rootMapping}` : '';

  const resp = await fetch(`${site}/${driveId}/root:${root}${path}:/children`, opts);

  const json = await resp.json();
  return json.value;
}

export async function getItem(site, driveId, rootMapping, path) {
  const opts = getReqOptions();
  const root = rootMapping ? `/${rootMapping}` : '';

  const resp = await fetch(`${site}/${driveId}/root:${root}${path}`, opts);

  const json = await resp.json();
  return json;
}

export async function createFolder(site, driveId, parentId, folderName) {
  const body = {
    name: folderName,
    folder: {},
  };

  const opts = getReqOptions({ method: 'POST', body });
  const resp = await fetch(`${site}/${driveId}/items/${parentId}/children`, opts);

  const json = await resp.json();
  return json;
}

export async function copyItem(site, driveId, id, parentReference, name, replace = true) {
  const body = { parentReference };
  if (name) body.name = name;

  const opts = getReqOptions({ method: 'POST', body });
  let qp = '';
  if (replace) {
    qp = '?@microsoft.graph.conflictBehavior=replace';
  }
  const resp = await fetch(`${site}/${driveId}/items/${id}/copy${qp}`, opts);
  if (resp.status !== 202) return { error: resp };
  return { resp };
  // return getItem(`${folder}/${name}`);
}

export async function moveItem(site, driveId, id, parentId, name, replace = true) {
  const body = { parentReference: { id: parentId } };
  if (name) body.name = name;

  const opts = getReqOptions({ method: 'PATCH', body });
  let qp = '';
  if (replace) {
    qp = '?@microsoft.graph.conflictBehavior=replace';
  }
  const resp = await fetch(`${site}/${driveId}/items/${id}`, opts);
  if (resp.status !== 202) return { error: resp };
  return { resp };
  // return getItem(`${folder}/${name}`);
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

export const loginToSharePoint = async (origin = 'https://main--bacom--adobecom.hlx.page') => {
  await spLogin({ origin, telemetry: TELEMETRY });
  const { site, driveId, rootMapping } = await getSharePointDetails(origin);
  return { site, driveId, rootMapping };
};

export const fetchCaasFiles = async (countriesStr = '') => {
  const { site, driveId, rootMapping } = await loginToSharePoint();

  const countries = countriesStr.split(',').map((c) => c.trim()).filter(Boolean);
  for (const country of countries) {
    const urls = getUrls(country);

    for (let i = 0; i < urls.length; i++) {
      const path = getPath(urls[i]);
      const filename = path.split('/').pop();
      const item = await getItem(site, driveId, rootMapping, `${path}.docx`);
      if (!item) continue;
      const blob = await downloadFile(site, item.id);
      saveBlob(blob, `${filename}--${country}--${i}.docx`);
    }
  }
};

export const updateCaasFiles = async (countriesStr = '') => {
  const { site, driveId, rootMapping } = await loginToSharePoint();
  const countries = countriesStr.split(',').map((c) => c.trim()).filter(Boolean);
  for (const country of countries) {
    const urls = getUrls(country);
    const files = await getFilenames(site, driveId, rootMapping, '/drafts/cpeyer/caas-updates');
    const backupRootDir = await getItem(site, driveId, rootMapping, '/drafts/MWPW-137829-caas-backup/');

    // eslint-disable-next-line no-unreachable-loop
    for (const file of files) {
      // account-based-marketing--uk--28--v2.docx
      // ['account-based-marketing', 'uk', '28', 'v2.docx']
      const [filename, cntry, idx] = file.name.split('--');

      if (cntry !== country) continue;

      // 'https://main--bacom--adobecom.hlx.page/uk/products/marketo/account-based-marketing'
      const origPath = getPath(urls[idx]);
      console.log(origPath);
      const pathSplit = origPath.split('/');
      const origFilename = pathSplit.pop();

      if (filename !== origFilename) {
        console.log(`Filenames do not match - server filename: ${filename}, filename from list: ${origFilename}`);
        continue;
      }

      // make backup of original
      const origItem = await getItem(site, driveId, rootMapping, `${origPath}.docx`);

      // create folder structure for backup
      let currentFolderPath = '/drafts/MWPW-137829-caas-backup/';
      let folder = backupRootDir;
      let parentFolder;
      for (const pathPart of pathSplit) {
        currentFolderPath += pathPart ? `${pathPart}/` : '';
        folder = await getItem(site, driveId, rootMapping, currentFolderPath);
        if (folder.error) {
          folder = await createFolder(site, driveId, parentFolder.id, pathPart);
        }
        parentFolder = folder;
      }

      const copyRes = await copyItem(site, driveId, origItem.id, { driveId: driveId.replace('drives/', ''), id: folder.id }, `${origFilename}.docx`);
      if (copyRes.error) {
        console.log(`Error copying ${origFilename}.docx: ${copyRes.error.statusText}`);
        continue;
      }

      // overwrite old file with new
      const newCopyRes = await copyItem(site, driveId, file.id, { driveId: driveId.replace('drives/', ''), id: origItem.parentReference.id }, `${origFilename}.docx`);
      // const moveRes = await moveItem(site, driveId, file.id, origItem.parentReference.id, `${origFilename}.docx`);
      if (newCopyRes.error) {
        console.log(`Error copying ${origFilename}.docx: ${newCopyRes.error.statusText}`);
        continue;
      }
      // DEBUG
      // if (i++ > 2) break;
    }

    // const fileId = files[0].id;
    // await copyItem(site, driveId, fileId, { driveId: driveId.replace('drives/', ''), id: dest.id });
  }
  console.log('done');
};
