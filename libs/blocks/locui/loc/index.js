import { getConfig, getLocale } from '../../../utils/utils.js';
import {
  allowSendForLoc,
  heading,
  languages,
  urls,
  getSiteConfig,
  showLogin,
  telemetry,
  allowSyncToLangstore,
  canRefresh,
  user,
} from '../utils/state.js';
import { setStatus } from '../utils/status.js';
import { getStatus, origin, preview } from '../utils/franklin.js';
import login from '../../../tools/sharepoint/login.js';
import { getServiceUpdates } from '../utils/miloc.js';
import { connectSK } from '../../../utils/sidekick.js';

const LANG_ACTIONS = ['Translate', 'English Copy', 'Rollout', 'Transcreate'];
const MOCK_REFERRER = 'https%3A%2F%2Fadobe.sharepoint.com%2F%3Ax%3A%2Fr%2Fsites%2Fadobecom%2F_layouts%2F15%2FDoc.aspx%3Fsourcedoc%3D%257B94460FAC-CDEE-4B31-B8E0-AA5E3F45DCC5%257D%26file%3Dwesco-demo.xlsx';

const urlParams = new URLSearchParams(window.location.search);

let resourcePath;
let previewPath;

async function validateUrl(url) {
  try {
    const request = await fetch(url.href);
    return request;
  } catch (error) {
    return { ok: false, url: url.href };
  }
}

export function validateUrlsOrigin(projectUrls) {
  projectUrls.forEach((projectUrl) => {
    const url = Array.isArray(projectUrl) ? projectUrl[0] : projectUrl;
    let urlOrigin = url.origin;
    if (url?.alt) {
      try {
        const altUrl = new URL(url.alt);
        urlOrigin = altUrl.origin;
      } catch (error) {
        url.alt = null;
      }
    }
    if (urlOrigin !== origin) {
      url.valid = 'not same domain';
    }
  });
  return projectUrls;
}

async function validatedUrls(projectUrls) {
  const validateUrls = [...projectUrls];
  while (validateUrls.length) {
    try {
      const reqs = await Promise.all(validateUrls.splice(0, 49).map(validateUrl));
      setStatus('details', 'info', 'Validating Project URLs');
      for (const res of reqs) {
        const projectUrl = projectUrls.find((url) => url.href === res.url);
        projectUrl.valid = res.ok || 'not found';
      }
    } catch (error) {
      setStatus('details', 'error', 'There was an error validating project URLs.', error);
    }
  }
  return validateUrlsOrigin(projectUrls);
}

export function getUrls(jsonUrls) {
  const { locales } = getConfig();
  // Assume all URLs will be the same locale as the first URL
  const locale = getLocale(locales, jsonUrls[0].pathname);
  const langstorePrefix = locale.prefix ? `/langstore${locale.prefix}` : '/langstore/en';
  // Loop through each url to get langstore information
  return jsonUrls.map((url) => {
    url.langstore = {
      lang: locale.prefix ? locale.prefix.replace('/', '') : 'en',
      pathname: url.pathname.replace(locale.prefix, langstorePrefix),
    };
    return url;
  });
}

async function loadLocales() {
  const config = await getSiteConfig();
  languages.value = [...languages.value.map((language) => {
    const found = config.locales.data.find(
      (locale) => language.Language === locale.language,
    );
    if (found) language.code = found.languagecode;

    const locales = language.Locales || found?.livecopies;
    if (locales) {
      const localesTrim = locales.replaceAll(' ', '');
      language.locales = localesTrim.includes('\n') ? localesTrim.split('\n') : localesTrim.split(',');
    }
    return language;
  })];
}

async function loadProjectSettings(projSettings) {
  const settings = projSettings.reduce((acc, { key, value }) => ({ ...acc, [key]: value }), {});
  heading.value = { ...heading.value, env: settings.env, projectId: settings['Project ID'] };
  if (settings['Project ID']) {
    setStatus('service', 'info', 'Connecting to localization service.');
    await getServiceUpdates();
    setStatus('service');
  } else {
    canRefresh.value = true;
    allowSyncToLangstore.value = true;
    allowSendForLoc.value = true;
  }
}

function sanitize(url) {
  const hlxUrl = /^https?:\/\/[^/?#]+/g;
  const [hostname] = url.match(hlxUrl);
  const enDash = hostname.replaceAll('–', '--');
  const newURL = url.replace(hlxUrl, enDash);
  return new URL(newURL);
}

async function loadDetails() {
  setStatus('details', 'info', 'Loading languages and URLs.');
  try {
    const resp = await fetch(previewPath);
    const json = await resp.json();
    const jsonUrls = json.urls.data.map(({ URL }) => sanitize(URL));
    const projectUrls = getUrls(jsonUrls);
    const projectLangs = json.languages.data.reduce((rdx, lang) => {
      if (LANG_ACTIONS.includes(lang.Action)) {
        lang.size = projectUrls.length;
        rdx.push(lang);
      }
      return rdx;
    }, []);
    languages.value = projectLangs;
    setStatus('details', 'info', 'Validating Project Configuration');
    urls.value = await validatedUrls(projectUrls);
    if (json.settings) loadProjectSettings(json.settings.data);
    const errors = urls.value.filter((url) => typeof url.valid === 'string');
    if (errors?.length > 0) {
      setStatus('details', 'error', 'Invalid URLs.', errors.map((url) => (`${url.href} was ${url.valid}.`)));
    } else {
      setStatus('details');
    }
  } catch {
    setStatus('details', 'error', 'Error loading languages and URLs.');
  }
}

async function loadHeading() {
  setStatus('details', 'info', 'Getting latest project info.');
  const editUrl = urlParams.get('referrer') || MOCK_REFERRER;
  const json = await getStatus('', editUrl);
  resourcePath = json.resourcePath;
  previewPath = json.preview.url;
  const path = resourcePath.replace(/\.[^/.]+$/, '');
  const projectName = json.edit.name.split('.').shift().replace('-', ' ');
  heading.value = { name: projectName, editUrl: json.edit.url, path };
  window.document.title = `${projectName} - LocUI`;
  await preview(`${path}.json`);
}

async function loginToSharePoint() {
  const scopes = ['files.readwrite', 'sites.readwrite.all'];
  await login({ scopes, telemetry });
}

async function connectSidekick() {
  return new Promise((resolve) => {
    const onStatus = ({ detail }) => {
      const userInfo = detail?.data?.profile ?? null;
      user.value = userInfo;
      if (user.value) {
        setStatus('details');
        resolve();
      } else {
        setStatus('details', 'info', 'Please sign-in to AEM sidekick.');
      }
    };
    connectSK(onStatus, () => {
      setStatus('details', 'info', 'Please open AEM sidekick to continue.');
    });
  });
}

export async function setup() {
  await connectSidekick();
  await loginToSharePoint();
  await loadHeading();
  await loadDetails();
  await loadLocales();
}

export async function autoSetup() {
  try {
    await setup();
  } catch {
    showLogin.value = true;
  }
}