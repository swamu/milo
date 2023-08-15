/**
 * Get author-facing config options.
 */

import { getConfig } from './utils.js';

const DOT_MILO = '/.milo/config.json';

export default async function getAuthorConfig(origin, envName) {
  const utilsConfig = getConfig();
  console.log(utilsConfig.env.name);
  const env = envName || utilsConfig.env.name;
  const resp = await fetch(`${origin}${DOT_MILO}`);
  if (!resp.ok) return { error: 'Could not fetch .milo/config.' };
  const json = await resp.json();
  const configs = {};
  json.configs.data.forEach((conf) => {
    const [confEnv, confService, confType] = conf.key.split('.');
    configs[confEnv] ??= {};
    configs[confEnv][confService] ??= {};
    configs[confEnv][confService][confType] = conf.value;
  });
  if (env === 'prod') return { ...configs.prod };
  if (env === 'stage') return { ...configs.prod, ...configs.stage };
  return { ...configs.prod, ...configs.stage, ...configs.local };
}
