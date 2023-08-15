import getMiloConfig from '../../utils/author-config.js';

export default async function init(el) {
  const config = await getMiloConfig(window.location.origin);
  console.log(config);
}
