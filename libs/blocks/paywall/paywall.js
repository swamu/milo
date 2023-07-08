
import { getConfig, loadStyle, parseEncodedConfig } from '../../utils/utils.js';
const defaultContext = '{\n\t"formattedPrice": "US$15.99 per month",\n\t"productName": "Photoshop",\n\t"productDescription": "Creative Cloud single-app membership for Photoshop",\n\t"promotionTermLength": 1,\n\t"promotionTermUnit": "Month"\n}';

window.MyNamespace = {};
window.MyNamespace.context = defaultContext;

const loadPaywall = async (a) => {
  const encodedConfig = a.href.split('#')[1];
  const state = parseEncodedConfig(encodedConfig);
  window.MyNamespace.layout = state.layout;
  window.MyNamespace.uuid = state.uuid;
  window.MyNamespace.width = state.container;
  const block = document.createElement('div');
  block.className = a.className;
  block.id = 'paywall';

  a.insertAdjacentElement('afterend', block);
  a.remove();
};

export default async function init(el) {
  if (el.textContent.includes('standalone')) {
    loadPaywall(el);
  }
  window.MyNamespace.layout = window.MyNamespace.layout || '0';
  window.MyNamespace.uuid = window.MyNamespace.uuid || '0';
  window.MyNamespace.width = window.MyNamespace.width || '1024px';

  const { miloLibs, codeRoot } = getConfig();
  loadStyle(`${miloLibs || codeRoot}/ui/controls/copyBtn.css`);
  loadStyle(`${miloLibs || codeRoot}/ui/page/page.css`);
  // const layoutValue = document.querySelector("#layout").value;
  const urls = [
    '/drafts/sarangi/hack/content.json',
    '/drafts/sarangi/hack/layout.json',
  ];
  const fetchPromises = urls.map((url) => fetch(url));

  Promise.all(fetchPromises)
    .then((responses) => {
      // Process the responses
      const dataPromises = responses.map((response) => {
        if (response.ok) {
          return response.json();
        }
        console.error('Error:', response.status);
        return null;
      });

      return Promise.all(dataPromises);
    })
    .then(dataArray => {
      window.MyNamespace.dataArray = dataArray;
      const arr =  dataArray[0].data.filter(obj => obj.id === window.MyNamespace.uuid);
      window.MyNamespace.data = JSON.parse(arr[0].data);
      const lt = JSON.parse(dataArray[1].data[window.MyNamespace.layout].data);
      window.MyNamespace.layout = lt;
      import('/libs/deps/pandora-bundle.js');
      window.addEventListener('paywallLoaded', (data) => {
        setEditButtons();
      });
      window.addEventListener('paywallModified', (data) => {
        setEditButtons();
      });
      
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

const setEditButtons = () => {
  const paywallElement = document.querySelector('.section .content .paywall.link-block');

  if (paywallElement != null) {
    document.querySelectorAll('.flexWrapper').forEach((element) => {
      element.style.borderColor = 'transparent';
    });
    document.querySelectorAll('.actionButtons').forEach((element) => {
      element.style.display = 'none';
    });
  }
  const editButtons = document.querySelectorAll('.action-button');
  const handleClick = (e) => {
    const dform = document.querySelector('.dform');
    dform.classList.add('show-dform-edit');
    const pandoraElementType = e.target.parentElement.parentElement.nextElementSibling.getAttribute('data-testid').substring(8);
    const editPandoraEvent = new CustomEvent('editPandoraElement', {
        'detail' : { type: pandoraElementType }
    });
    window.dispatchEvent(editPandoraEvent);
  }
  editButtons.forEach(button => {
    button.addEventListener('click', handleClick);
  });
}
