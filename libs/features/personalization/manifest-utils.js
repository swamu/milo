import { loadLink, getMetadata } from '../../utils/utils.js';

export const appendJsonExt = (path) => (path.endsWith('.json') ? path : `${path}.json`);

export const normalizePath = (p) => {
  let path = p;

  if (!path.includes('/')) {
    return path;
  }

  if (path.startsWith('http')) {
    try {
      path = new URL(path).pathname;
    } catch (e) { /* return path below */ }
  } else if (!path.startsWith('/')) {
    path = `/${path}`;
  }
  return path;
};

const xlSerialToJsDate = (xlSerial) => new Date(-2209075200000
  + (xlSerial - (xlSerial < 61 ? 0 : 1)) * 86400000);
const getEvents = () => {
  const events = 'blackfriday | 2023-11-11T19:00 | 2023-14-11T19:00, bts | 2023-11-11T19:00 | 2023-14-11T19:00';
  return events ? events.split(',').map((event) => {
    let [name, start, end] = event.trim().split('|').map((s) => s.trim());
    start = name === 'bts' ? 45117.5034722222 : 45270.5034722222;
    end = name === 'bts' ? 45270.5034722222 : 45271.5034722222;
    return { name, start: xlSerialToJsDate(start), end: xlSerialToJsDate(end) };
  }) : [];
};

export const preloadManifests = ({ targetManifests = [], persManifests = [] }) => {
  let manifests = targetManifests;
  const events = getEvents();
  manifests = manifests.concat(
    persManifests.map((manifestPath) => {
      const regex = /\/promos\/(\w+)\//;
      let disabled = false;
      const scheduled = manifestPath.match(regex);
      if (scheduled) {
        const event = events.find((e) => e.name === scheduled[1]);
        const currentDate = new Date();
        if (event.start && event.end
            && (currentDate < event.start || currentDate > event.end)) {
          disabled = true;
        }
        return { manifestPath: appendJsonExt(manifestPath), disabled, event };
      }
      return { manifestPath: appendJsonExt(manifestPath) };
    }),
  );

  for (const manifest of manifests) {
    if (!manifest.manifestData && manifest.manifestPath && !manifest.disabled) {
      manifest.manifestPath = normalizePath(manifest.manifestPath);
      loadLink(
        manifest.manifestPath,
        { as: 'fetch', crossorigin: 'anonymous', rel: 'preload' },
      );
    }
  }
  return manifests;
};
