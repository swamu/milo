import { LitElement, html } from '../../deps/lit-all.min.js';
import { getSheet } from '../../../tools/utils/utils.js';
import { getConfig } from '../../utils/utils.js';
import { copyFile } from '../../tools/sharepoint/file.js';

const { miloLibs, codeRoot } = getConfig();
const base = miloLibs || codeRoot;
const styleSheet = await getSheet(`${base}/blocks/sp-list/sp-list.css`);
const loaderSheet = await getSheet(`${base}/blocks/bulk-publish-v2/components/loader.css`);

class SPForm extends LitElement {
  static properties = {
    copies: { state: true },
    srcPath: { state: true },
    destPath: { state: true },
    running: { state: true },
    results: { state: true },
  };

  constructor() {
    super();
    this.running = false;
    this.results = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    this.renderRoot.adoptedStyleSheets = [styleSheet, loaderSheet];
  }

  async start() {
    this.running = true;
    const iter = Array.from(Array(this.copies));
    for (const [idx] of iter.entries()) {
      const source = `/drafts/${this.srcPath}`;
      const destination = `/drafts/${this.destPath}${idx + 1}`;
      const resp = await copyFile(source, destination);
      this.results = [...this.results, resp];
    }
  }

  clear() {
    this.running = false;
    this.results = [];
    this.copies = null;
    this.srcPath = null;
    this.destPath = null;
  }

  renderForm() {
    return html`
      <label>Quantity</label>
      <input 
        type="number"
        value=${this.copies}
        @change=${(e) => { this.copies = parseInt(e.target.value, 10); }} />
      <div class="path-input">
        <label>Source Path</label>
        <input type="text" value=${this.srcPath} @change=${(e) => { this.srcPath = e.target.value; }} />
      </div>
      <div class="path-input">
        <label>Destination Path</label>
        <input type="text" value=${this.destPath} @change=${(e) => { this.destPath = e.target.value; }} />
      </div>
      <button class="start-button" @click=${() => this.start()}>Start</button>
    `;
  }

  renderResults() {
    const showResults = this.results.length > 0;
    const showClear = this.results.length === this.copies;
    return html`
      <div class="results${showResults ? ' has-results' : ''}">
        ${showResults && !showClear ? html`
          <h3>Processing Request</h3>
          <h4><div class="load-ind"><span class="loader pink"></span></div>
          ${this.results.length}/${this.copies}</h4>` : ''}
        ${showClear ? html`
          <button class="log-button" @click=${() => { console.log(this.results); }}>Log Results</button>
          <button class="clear-button" @click=${() => this.clear()}>Clear</button>` : ''}
      </div>
    `;
  }

  render() {
    return html`
      <h2>Mock Test Files</h2>
      <p>Create (x) number of draft files iterated: 'file-name-{i}.docx'</p>
      ${this.running ? this.renderResults() : this.renderForm()}
    `;
  }
}

customElements.define('sp-form', SPForm);
