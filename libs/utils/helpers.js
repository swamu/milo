export const b64ToUtf8 = (str) => decodeURIComponent(escape(window.atob(str)));

export const utf8ToB64 = (str) => window.btoa(unescape(encodeURIComponent(str)));

export function parseEncodedConfig(encodedConfig) {
  try {
    return JSON.parse(b64ToUtf8(decodeURIComponent(encodedConfig)));
  } catch (e) {
    console.log(e);
  }
  return null;
}

export function isInTextNode(node) {
  return node.parentElement.firstChild.nodeType === Node.TEXT_NODE;
}

export function createIntersectionObserver({ el, callback, once = true, options = {} }) {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(async (entry) => {
      if (entry.isIntersecting) {
        if (once) observer.unobserve(entry.target);
        callback(entry.target, entry);
      }
    });
  }, options);
  io.observe(el);
  return io;
}
