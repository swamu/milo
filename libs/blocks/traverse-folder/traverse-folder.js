import { createTag } from '../../utils/utils.js';
import login from '../../tools/sharepoint/login.js';
import getChildren from '../../tools/sharepoint/folder.js';

const TELEMETRY = { application: { appName: 'Adobe SharePoint Traversal' } };

async function beginTraverse(parent, inputUrl) {
  let path;
  let origin;
  try {
    const url = new URL(inputUrl);
    path = url.pathname;
    origin = url.origin;
  } catch {
    parent.append(createTag('p', null, 'Could not get path from URL'));
    return;
  }
  await login({ origin, telemetry: TELEMETRY });
  const children = await getChildren(origin, path);
  if (children.length) {
    parent.innerHTML = '';
    children.forEach((child) => {
      const anchor = createTag('a', { href: child.editUrl }, child.path);
      const childEl = createTag('li', { class: 'traversed-item' }, anchor);
      parent.append(childEl);
    });
  }
}

export default function init(el) {
  el.classList.add('contained');
  const input = createTag('input', { type: 'text', placeholder: 'URL', value: 'https://main--bacom--adobecom.hlx.page/products/experience-manager' });
  const button = createTag('button', null, 'Traverse');
  const list = createTag('ul');
  button.addEventListener('click', () => { beginTraverse(list, input.value); });
  el.append(input, button, list);
}
