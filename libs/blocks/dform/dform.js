import {
  html,
  render,
  useState,
} from '../../deps/htm-preact.js';

import { formData, addElement, removeElement } from './state.js';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}

function AddButton({onClick}) {
  function updateFormData() {
    const uuid = uuidv4();
    formData.value = [...formData.value, uuid];
  }
  return html`<div>
    <button class="icon-button" id="add" onClick=${onClick}>
      <img src="/img/home/add-plus.svg" />
    </button>
  </div>`;
}

function CreateElements({ localData, spacer }) {
  if (typeof localData === 'object' && !Array.isArray(localData) && localData !== null) {
    return html`${Object.keys(localData).map((value, key) => createFromRow(localData, value, key, Number(spacer) + 1))}`;
  } else if (Array.isArray(localData)) {
    return html`${localData.map((value, key) => createFromRow(localData, value, key, Number(spacer) + 1))}`;
  }
  return '';
}

const createFromRow = (localData, key, value, spacer) => {
  let localDataType = '';
  if (Array.isArray(localData[key])) {
    localDataType = 'array';
  } else if (typeof localData[key] === 'object' && !Array.isArray(localData[key]) && localData[key] !== null) {
    localDataType = 'object';
  } else if (key === '_publishUrl') {
    localDataType = 'image';
  } else if (typeof localData[key] === 'string') {
    localDataType = 'string';
  }  
  // const [selectedOption, setSelectedOption] = useState(localDataType);
  const handleSelectChange = (event) => {
    // setSelectedOption(event.target.value);
    localDataType = event.target.value;
  };

  const showImagePicker = (event) => {
    window.addButton = event.currentTarget;
    const assetPicker = document.querySelector('.modal.link-block').getAttribute('href');
    window.location.href = assetPicker;
  };
  // const removeElement = () => {
  // };  

  return html`<div class='form-row spacer-${spacer * 8}'>
      <select value=${localDataType} onChange=${handleSelectChange}>
        <option value="">Select a Type</option>
        <option value="string">string</option>
        <option value="boolean">boolean</option>
        <option value="array">array</option>
        <option value="image">image</option>
        <option value="object">object</option>
      </select>
      <button class="icon-button minus-circle" onClick=${removeElement}>
        <img src="/img/home/minus-circle.svg" />
      </button>
      ${localDataType === 'string' && html`<div class="mulfield">
        <input type="text" placeholder="key" value=${key}/>
        <input type="text" placeholder="value" value=${localData[key]}/>
      </div>`}
      ${localDataType === 'image' && html`<div class="mulfield">
      <input type="text" placeholder="src" value=${key}/>
      <input type="text" placeholder="value" value=${localData[key]}/>
      <input type="button" id="btnImage" value="Add" onClick=${showImagePicker} />  
    </div>`}
      ${localDataType === 'boolean' && html`<div class="mulfield">
        <input type="text" placeholder="key"/>
        <select>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
      </div>`}
      ${localDataType === 'array' && html`<div class="mulfield">
        <input type="text" placeholder="key" value=${key} />
      </div>
      <${CreateElements} localData=${localData[key]} spacer=${spacer} />
      <${AddButton} onClick=${() => addElement(localData[key], [])} />`}
      ${localDataType === 'object' && html`<div class="mulfield">
      </div><${CreateElements} localData=${localData[key]} spacer=${spacer} />
      <${AddButton} onClick=${() => addElement(localData[key], {})} />`}
    </div>
  `;
}

function Form() {
  console.log(formData.value);
  return html`
    <${AddButton} onClick=${() => { addElement(formData.value, {}); }}/>
    <${CreateElements} localData=${formData.value} spacer=0 />`;
}

export default function init(el) {

  document.addEventListener('editPandoraElement', (event) => {
    console.log(event);
    console.log('inside dform: type:', event.detail.type);
  });
  

  render(html`
      <${Form} />`, el);
}
