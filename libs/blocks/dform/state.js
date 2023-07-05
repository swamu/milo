import { signal } from '../../deps/htm-preact.js';

const initState = {
  "label": {
      "html": "<p>Upgrade</p>\n",
      "markdown": "Upgrade\n\n ",
      "plaintext": "Upgrade",
      "_publishUrl": "https://main--cc--adobecom.hlx.page/media_1d9ea525fb4d8f4a65e6a96497ea4db204e66e223.jpeg#width=2000&height=3000",
      "json": [{
          "nodeType": "paragraph",
          "content": [{
              "nodeType": "text",
              "value": "Upgrade"
          }]
      }]
  },
  "clickAction": "commitment",
};

// const initState = {
//   test: {
//     name: {
//       name1:  {
//         name2: 'foo',
//         name3: 'bar'
//       }
//     },
//   }
// };

export const formData = signal(initState);
export const type = signal('');

export function addElement(obj, emptyType) {
  obj[''] = '';
  formData.value = {...formData.value}
};

export function updateData(value, obj, key) {
  obj[key] = value;
  formData.value = {...formData.value}
  window.MyNamespace.data.master[type.value+"s"][0] = formData.value;
  window.dispatchEvent(new Event('paywallUpdated'));
}

export function setFormData(t) {
  type.value = t;
  formData.value = window.MyNamespace.data.master[t+"s"][0];
}

// export function select

export function removeElement() {

};
