import './sp-form.js';
import login from '../../tools/sharepoint/login.js';

// const item = await getItem('/drafts/sarchibeque');
// const origin = 'https://main--milo--adobecom.hlx.live/';
// const { sharepoint } = await getServiceConfig(origin);
// const { site, rootMapping } = sharepoint;
// const driveId = sharepoint.driveId ? `drives/${sharepoint.driveId}` : 'drive';
// const reqOpts = getReqOptions();
// 01TMM4TXCN7BYYN6DAGRG2LEVP2H3NG2NM - CM
// 01TMM4TXCVDONQTSQ2M5CJJRVV7SYB3XAE - SA
// const resp = await
// fetch(`${site}/${driveId}/root:/${rootMapping}/drafts/sarchibeque`, reqOpts);
// const { id } = await resp.json();
// console.log(id);
// if (!id) return;
// const childResp = await fetch(`${site}/${driveId}/items/${id}/children`, reqOpts);
// const json = await childResp.json();
// json.value.forEach((item) => {
//   console.log(item);
//   el.insertAdjacentHTML('beforeend', `<p>${item.name} - ${item.id}</p>`);
// });

async function loginUser() {
  const scopes = ['files.readwrite', 'sites.readwrite.all'];
  const telemetry = { application: { appName: 'Adobe SharePoint Folder List' } };
  try {
    await login(scopes, telemetry);
  } catch {
    console.error('could not log you in');
  }
}

export default async function init(el) {
  await loginUser();
  el.append(document.createElement('sp-form'));
}
