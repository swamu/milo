import { signal } from '../../deps/htm-preact.js';

const initState = {
  "label": {
      "html": "<p>Upgrade</p>\n",
      "markdown": "Upgrade\n\n ",
      "plaintext": "Upgrade",
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

export function addElement(obj, emptyType) {
  obj[''] = '';
  formData.value = {...formData.value}
};

// export function select

export function removeElement() {

};
