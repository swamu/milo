/* eslint-disable compat/compat */

// const lmdb = require('node-lmdb');
// import lmdb from 'node-lmdb';
// import { getMarkdown } from '../utils/fetch-utils.js';

const LS_KEY = 'milo-featuredcards';

const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

// Regular expression to check formal correctness of base64 encoded strings
const b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;

const myatob = function(string) {
  // atob can work with strings with whitespaces, even inside the encoded part,
  // but only \t, \n, \f, \r and ' ', which can be stripped.
  string = String(string).replace(/[\t\n\f\r ]+/g, "");
  if (!b64re.test(string))
      throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");

  // Adding the padding if missing, for semplicity
  string += "==".slice(2 - (string.length & 3));
  var bitmap, result = "", r1, r2, i = 0;
  for (; i < string.length;) {
      bitmap = b64.indexOf(string.charAt(i++)) << 18 | b64.indexOf(string.charAt(i++)) << 12
              | (r1 = b64.indexOf(string.charAt(i++))) << 6 | (r2 = b64.indexOf(string.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255)
              : r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255)
              : String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
  }
  return result;
};

const decodeCompressedString = async (txt) => {
  // if (!window.DecompressionStream || !DecompressionStream) {
  //   await import('../../deps/compression-streams-pollyfill.js');
  // }
  const b64decode = (str) => {
    const binaryStr = atob(str);
    const bytes = new Uint8Array(new ArrayBuffer(binaryStr.length));
    binaryStr?.split('')
      .forEach((c, i) => (bytes[i] = c.charCodeAt(0)));
    return bytes;
  };

  const b64toStream = (b) => new Blob([b64decode(b)], { type: 'text/plain' }).stream();

  const decompressStream = async (stream) => new Response(
    // eslint-disable-next-line no-undef
    stream.pipeThrough(new DecompressionStream('gzip')),
  );

  const responseToJSON = async (response) => {
    const blob = await response.blob();
    return JSON.parse(await blob.text());
  };

  const stream = b64toStream(txt);
  const resp = await decompressStream(stream);
  return responseToJSON(resp);
};

const getEncodedObject = async (obj, replacer = null) => {
  // if (!window.CompressionStream || CompressionStream) {
  //   await import('../../deps/compression-streams-pollyfill.js');
  // }

  const objToStream = (data) => new Blob(
    [JSON.stringify(data, replacer)],
    { type: 'text/plain' },
  ).stream();

  const compressStream = async (stream) => new Response(
    // eslint-disable-next-line no-undef
    stream.pipeThrough(new CompressionStream('gzip')),
  );

  const responseToBuffer = async (res) => {
    const blob = await res.blob();
    return blob.arrayBuffer();
  };

  const b64encode = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf)));

  const stream = objToStream(obj);
  const compressedResponse = await compressStream(stream);
  const buffer = await responseToBuffer(compressedResponse);
  return b64encode(buffer);
};

const b64ToUtf8 = (str) => decodeURIComponent(escape(atob(str)));

function parseEncodedConfig(encodedConfig) {
  return JSON.parse(b64ToUtf8(decodeURIComponent(encodedConfig)));
}

const fgKeyReplacer = (key, value) => (key === 'fetchCardsFromFloodgateTree' ? undefined : value);



const getState = async (link) => {
  const [url, hash] = link.split('#');
  if (hash.startsWith('~~')) return;

  const stateObj = await parseEncodedConfig(hash);
  return { url, state: stateObj };
};

const getIdStr = (cardStr, id) => {
  if (id) {
    return cardStr.length ? `${cardStr}%2C${id}` : id;
  }
  return cardStr;
};

const getCaasData = async (state, newIds = [], fullEntityId = true) => {
  if (!newIds.length) return null;
  console.log('fetching: ', newIds);
  // TODO localize?
  const language = 'en';
  const country = 'us';

  const featuredCards = newIds.reduce(getIdStr, '');
  const originSelection = Array.isArray(state.source) ? state.source.join(',') : state.source;
  const collectionTags = state.includeTags ? state.includeTags.join(',') : '';

  const endpoint = `https://${
    state.endpoint
  }?originSelection=${originSelection}&contentTypeTags=${state.contentTypeTags.join(
    ',',
  )}&collectionTags=&excludeContentWithTags=&language=${language}&country=${country}&complexQuery=&excludeIds=&currentEntityId=&featuredCards=${featuredCards}&environment=&draft=${
    state.draftDb
  }&size=${newIds.length}&debug=${fullEntityId}`;
  // }&size=${state.collectionSize || state.totalCardsToShow}`;

  const res = await fetch(endpoint);
  const json = await res.json();
  return json;
};

const createEntityMap = (cards) => {
  return cards.reduce((acc, card) => {
    acc[card.id] = card.ctaLink;
    return acc;
  }, {});
};

const addIdsToLS = (entityMap) => {
  let featuredCardsMap = {};
  try {
    featuredCardsMap = JSON.parse(localStorage.getItem(LS_KEY));
  } catch (e) {
    // do nothing
  }
  Object.entries(entityMap).forEach(([entityId, url]) => {
    featuredCardsMap[entityId] = url;
  });
  localStorage.setItem(LS_KEY, JSON.stringify(featuredCardsMap));
};

const getIds = (featuredIds) => {
  let featuredCardsMap = {};
  try {
    featuredCardsMap = JSON.parse(localStorage.getItem(LS_KEY));
  } catch (e) {
    // do nothing
  }
  const idMap = {};
  const newIds = [];

  featuredIds.forEach((id) => {
    const url = featuredCardsMap[id];
    if (url) {
      idMap[id] = url;
    } else {
      newIds.push(id);
    }
  });

  return { newIds, idMap };
};

const getNewIdMap = (newIds, caasData) => {
  return newIds.reduce((acc, id) => {
    const card = caasData.cards.find(({ id:cardId }) => cardId === id);

    acc[id] = card.ctaLink;
    return acc;
  }, {});
};

const convertToFeaturedCardPaths = (state, entityMap) => {
  state.featuredCards = state.featuredCards.map(({ contentId }) => {
    return { contentId: entityMap[contentId] };
  });
}

export const utf8ToB64 = (str) => btoa(unescape(encodeURIComponent(str)));

export const convertLink = async (link, db) => {
  const { url, state } = await getState(link);
  if (!state) {
    throw new Error('Unable to parse link state');
  }
  const featuredIds = state.featuredCards.map(({ contentId }) => contentId);
  const { newIds, idMap } = getIds(featuredIds);
  const caasData = await getCaasData(state, newIds, false);
  const newIdMap = getNewIdMap(newIds, caasData);
  const entityMap = { ...idMap, ...newIdMap };

  if (newIds.length) addIdsToLS(newIdMap);

  convertToFeaturedCardPaths(state, entityMap);

  const v2hash = await getEncodedObject(state, fgKeyReplacer);
  const v2Link = `${url}#~~${v2hash}`;
  // const v1Link = utf8ToB64(JSON.stringify(state, fgKeyReplacer));

  // console.log('original', link);
  // console.log('v1Link: ', v1Link);
  // console.log('v2Link: ', v2Link);

  return v2Link;
};

async function replaceAsync(string, regexp, replacerFunction) {
  const replacements = await Promise.all(
      Array.from(string.matchAll(regexp),
          match => replacerFunction(...match)));
  let i = 0;
  return string.replace(regexp, () => replacements[i++]);
}

async function replacer(match, linkText, link) {
  const v2Link = await convertLink(link);
  const linkParts = linkText.split('-');
  const collectionName = linkParts.length >= 3 ? linkParts[1] : '';
  const noLazy = linkText.endsWith('(no-lazy)') ? ' (no-lazy)' : '';
  const dateStr = new Date().toLocaleString('us-EN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const v2Text = `Content as a Service v2 ${collectionName}- ${dateStr}${noLazy}`;
  return `[${v2Text}](${v2Link})`;
}

const caasLinkRe = /\[(Content.*)\]\((.*)\)/gm;

export const convertCaasMd = async (md, url) => {
  let newMd = null;
  try {
    newMd = await replaceAsync(md, caasLinkRe, replacer);
    console.log('Processed: ', url);
  } catch (e) {
    console.log('Unable to process: ', url, e.message);
  }
  return newMd;
};
