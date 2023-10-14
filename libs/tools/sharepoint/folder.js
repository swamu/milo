import { getReqOptions } from './msal.js';
import getSharePointDetails from './shared.js';

async function getItem(site, driveId, rootMapping, path) {
  const opts = getReqOptions();
  const root = rootMapping ? `/${rootMapping}` : '';
  const resp = await fetch(`${site}/${driveId}/root:${root}${path}`, opts);
  if (!resp.ok) return null;
  return resp.json();
}

async function listChildren(startUrl, options) {
  let path = startUrl;
  const items = [];
  const folders = [];
  while (path) {
    const resp = await fetch(path, options);
    const json = await resp.json();
    json.value.forEach((child) => {
      if (!child.folder) {
        const parentPath = child.parentReference.path.split('root:').pop();
        const filePath = `${parentPath}/${child.name}`;
        console.log(filePath);
        items.push({ path: filePath, editUrl: child.webUrl });
      } else {
        folders.push(child.id);
      }
    });
    path = json['@odata.nextLink'];
  }
  return { items, folders };
}

export default async function getChildren(origin, path) {
  const { site, driveId, rootMapping } = await getSharePointDetails(origin);

  const json = await getItem(site, driveId, rootMapping, path);
  const { id } = json;

  const items = [];
  const folders = [];

  const options = getReqOptions({ method: 'GET' });
  const children = await listChildren(`${site}/${driveId}/items/${id}/children`, options);

  items.push(...children.items);
  folders.push(...children.folders);

  while (folders.length > 0) {
    const first = folders.shift();
    const { items: subItems, folders: subFolders } = await listChildren(`${site}/${driveId}/items/${first}/children`, options);
    items.push(...subItems);
    folders.push(...subFolders);
  }
  return items;
}
