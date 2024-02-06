import { html, signal, useEffect } from '../../../deps/htm-preact.js';

const martechBlock = signal(null);

async function checkMartechMeta() {
  martechBlock.value = document.querySelector('.martech-metadata');
}

export default function Martech() {
  useEffect(() => { checkMartechMeta(); }, []);

  return html`
  <div class="access-columns">
    ${martechBlock.value ? html`<h2>Has block</h2>` : html`<h2>No Block!</h2>`}
  </div>`;
}
