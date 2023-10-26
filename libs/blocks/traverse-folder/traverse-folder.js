import { createTag } from '../../utils/utils.js';
import login from '../../tools/sharepoint/login.js';
import { docs, getChildren } from '../../tools/sharepoint/folder.js';
import { html, render } from '../../deps/htm-preact.js';

function DocList({ origin, path }) {
  getChildren(origin, path);
  return html`
    <ul>
      ${docs.value.map((doc, idx) => html`
        <li key=${idx}>${doc.path}</li>
      `)}
    </ul>
  `;
}

const TELEMETRY = { application: { appName: 'Adobe SharePoint Traversal' } };

async function beginTraverse(el, inputUrl) {
  let path;
  let origin;
  try {
    const url = new URL(inputUrl);
    path = url.pathname;
    origin = url.origin;
  } catch {
    el.append(createTag('p', null, 'Could not get path from URL'));
    return;
  }
  await login({ origin, telemetry: TELEMETRY });
  render(html`<${DocList} path=${path} origin=${origin} />`, el);
}

export default async function init(el) {
  el.classList.add('contained');
  const input = createTag('input', { type: 'text', placeholder: 'URL', value: 'https://main--bacom--adobecom.hlx.page/products/experience-manager' });
  const button = createTag('button', null, 'Traverse');
  const div = createTag('div', { class: 'doc-wrapper' });
  button.addEventListener('click', () => { beginTraverse(div, input.value); });
  el.append(input, button, div);
}
