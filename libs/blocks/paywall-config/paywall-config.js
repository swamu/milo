/* global ClipboardItem */
import {
  createContext,
  html,
  render,
  useContext,
  useEffect,
  useReducer,
  useState,
} from '../../deps/htm-preact.js';
import {
  parseEncodedConfig,
  utf8ToB64,
} from '../../utils/utils.js';
import { Select as FormSelect } from '../../ui/controls/formControls.js';

const defaultState = { layout: '0', theme: 'light', container: '1024px' };
const LS_KEY = 'paywall_key';

function generateUUID() {
  let d = new Date().getTime();
  let d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r)%16 | 0;
      d2 = Math.floor(d2/16);
    }
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
}

const cloneObj = (obj) => JSON.parse(JSON.stringify(obj));

const updateObj = (obj, defaultObj) => {
  const ds = cloneObj(defaultObj);
  Object.keys(ds).forEach((key) => {
    if (obj[key] === undefined) obj[key] = ds[key];
  });
  return obj;
};

const isValidUuid = (id) => /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id);

const getHashConfig = () => {
  const { hash } = window.location;
  if (!hash) return null;
  window.location.hash = '';

  const encodedConfig = hash.startsWith('#') ? hash.substring(1) : hash;
  return parseEncodedConfig(encodedConfig);
}

const ConfiguratorContext = createContext();

const defaultOptions = {
  projects: {
    chekcout: 'Unified Checkout',
    paywall: 'Pawall',
  },
  layout: {
    '0': 'Default',
    '1': 'Right',
    '2': 'Acrobat',
  },
  container: {
    '1024px': '1024px Container',
    '1200px': '1200px Container',
    '1600px': '1600px Container',
  },
  theme: {
    lightest: 'Lightest Theme',
    light: 'Light Theme',
    dark: 'Dark Theme',
    darkest: 'Darkest Theme',
  },
};

const Select = ({ label, options, prop, sort = false }) => {
  const context = useContext(ConfiguratorContext);

  const onSelectChange = (val) => {
    context.dispatch({
      type: 'SELECT_CHANGE',
      prop,
      value: val,
    });
  };

  return html`
    <${FormSelect}
      label=${label}
      name=${prop}
      sort=${sort}
      onChange=${onSelectChange}
      options=${options}
      value=${context.state[prop]}
    />
  `;
};

const UiPanel = () => html`
  <${Select} label="Layout" prop="layout" options=${defaultOptions.layout} />
  <${Select} label="Container" prop="container" options=${defaultOptions.container} />
  <${Select} label="Theme" prop="theme" options=${defaultOptions.theme} />
`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_CHANGE':
    case 'INPUT_CHANGE':
    case 'MULTI_SELECT_CHANGE':
      if (action.prop === 'layout') {
        const lt = JSON.parse(window.dataArray[1].data[action.value].data);
        window.MyNamespace.layout = lt;
        window.dispatchEvent(new Event('paywallUpdated'));
      }

      if (action.prop === 'container') {
        document.querySelector('.paywall').style.maxWidth = action.value;
      }
      return { ...state, [action.prop]: action.value };
    case 'RESET_STATE':
      return cloneObj(defaultState);
    /* c8 ignore next 2 */
    default:
      return state;
  }
};

const getInitialState = () => {
  let state = getHashConfig();
  // /* c8 ignore next 2 */
  if (!state) {
    const lsState = localStorage.getItem(LS_KEY);
    if (lsState?.includes('filtersCustom')) {
      try {
        state = JSON.parse(lsState);
        /* c8 ignore next */
      } catch (e) {}
    }
  } 

  if (!state) state = {};

  return updateObj(state, defaultState);
};

/* c8 ignore start */
const CopyBtn = () => {
  const { state } = useContext(ConfiguratorContext);
  const [isError, setIsError] = useState();
  const [isSuccess, setIsSuccess] = useState();
  const [configUrl, setConfigUrl] = useState('');
  const [btnText, setBtnText] = useState('Copy');

  const setTempStatus = (setFn, status = true) => {
    setFn(status);
    setTimeout(() => {
      setFn(!status);
    }, 2000);
  };

  const getUrl = async () => {
    const url = window.location.href.split('#')[0];
    const uuid = generateUUID();
    const uniqState = { ...state, uuid };
    fetch('/drafts/sarangi/hack/content', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          id: uuid,
          data: window.MyNamespace.data,
        }
      }),
    })
    return `${url}#${utf8ToB64(JSON.stringify(uniqState))}`;
  };

  const copyConfig = () => {
    const url = getUrl();
    setConfigUrl(url);
    if (!navigator?.clipboard) {
      setTempStatus(setIsError);
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    const dateStr = new Date().toLocaleString('us-EN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    });
    const collectionName = state.collectionName ? `- ${state.collectionName} ` : '';
    link.textContent = `Paywall ${collectionName}- ${dateStr}${state.doNotLazyLoad ? ' (no-lazy)' : ''}`;

    const blob = new Blob([link.outerHTML], { type: 'text/html' });
    const data = [new ClipboardItem({ [blob.type]: blob })];
    navigator.clipboard.write(data).then(
      () => {
        setTempStatus((status) => {
          if (status) {
            setBtnText('OK!');
          } else {
            setBtnText('Copy');
          }
          setIsSuccess(status);
        });
      },
      () => {
        setTempStatus((status) => {
          if (status) {
            setBtnText('Error');
          } else {
            setBtnText('Copy');
          }
          setIsError(status);
        });
      },
    );
  };

  return html` <textarea style="display:none;" class=${`copy-text ${(!navigator?.clipboard) ? '' : 'hide'}`}>${configUrl}</textarea>
    <button
      class="copy-config ${isError === true ? 'is-error' : ''} ${isSuccess === true
        ? 'is-success'
        : ''}"
      onClick=${copyConfig}
    >
      ${btnText}
    </button>`;
};

const Configurator = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState() || cloneObj(defaultState));

  useEffect(async () => {

  }, []);

  return html`
    <${ConfiguratorContext.Provider} value=${{ state, dispatch }}>
    <div class="tool-header">
        <${CopyBtn} />
      </div>
      <div class="tool-content">
        <div class="config-panel">
        ${html`<${UiPanel} />`}
        </div>
        <div class="content-panel">
          <div id="caas" class="caas-preview"></div>
        </div>
      </div>
    </ConfiguratorContext.Provider>`;
};

const init = async (el) => {
  const app = html` <${Configurator} rootEl=${el} /> `;
  render(app, el);
};

export {
  init as default,
  cloneObj,
  getHashConfig,
  isValidUuid,
  updateObj,
};
