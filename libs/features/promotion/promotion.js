import { loadArea, createTag } from '../../utils/utils.js';
/**
 * fetches promotion index.
 * @returns {object} index with data
 */
export async function fetchPromotionIndex() {
  const indexPath = '/drafts/mariia/promopoc/promotions/query-index.json';
  const response = await fetch(indexPath);
  const json = await response.json();
  return json;
}

export async function applyPromotions(activePromotions) {
  const promo = activePromotions[0];
  // fetch promotion data
  const promoPath = `${promo.path}`;
  const response = await fetch(`${promoPath}.plain.html`);
  if (!response.ok) {
    // todo lana log error
    return;
  }
  const html = await response.text();
  const doc = (new DOMParser()).parseFromString(html, 'text/html');

  // find the promotion for current page
  const promoAncher = doc.querySelector(`strong > a[href="${window.location.pathname}"]`);
  if (promoAncher) {
    // in promotion document get closest parent tag p
    const promoParagraph = promoAncher.closest('p');
    // in promo doc get next sibling - which is a block with promo content
    const promoSibling = promoParagraph.nextElementSibling;
    // in the current document find the element with the same class as promoSibling
    const currentSibling = document.querySelector(`.${promoSibling.className}`);
    // replace the content of currentSibling with promoSibling
    // render promoSibling
    const fragment = createTag('div', { class: 'fragment', 'data-path': 'relHref' });
    const subdiv = createTag('div', { });
    subdiv.append(promoSibling);
    fragment.append(subdiv);
    currentSibling.parentElement.replaceChild(fragment, currentSibling);
    await loadArea(fragment);
  }
}

export default async function loadPromotion() {
  const currentPath = window.location.pathname; // '/drafts/mariia/promopoc/products/indesign'
  const indexOld = await fetchPromotionIndex();
  const index = {};
  index.data = [
    {
      path: '/drafts/mariia/promopoc/promotions/blackfriday',
      promocode: 'blackfridayy',
      promostart: '1688421759490', // 4 jul
      promoend: '1789923759490', // 20 sep 2026
      promopages: '/drafts/mariia/promopoc/products/indesign,https://promopoc--milo--adobecom.hlx.page/drafts/mariia/promopoc/collections/catalog',
    },
    {
      path: '/drafts/mariia/promopoc/promotions/max',
      promocode: 'max',
      promostart: '1688421759490',
      promoend: '1789923759490',
      promopages: '/edrafts/mariia/promopoc/products/indesign,https://promopoc--milo--adobecom.hlx.page/drafts/mariia/promopoc/collections/catalog',
    },
  ];
  // for each promotion in index check if current time is between start and end time of promotion
  // if yes, check if current path is in promopages
  const activePromotions = index.data.filter((promotion) => {
    const currentTime = new Date().getTime();
    // todo check later if dosDateTimeToDate should be used
    const promoStart = new Date(Number(promotion.promostart)).getTime();
    const promoEnd = new Date(Number(promotion.promoend)).getTime();
    const promoIsOn = currentTime >= promoStart && currentTime <= promoEnd;
    const pageInPromo = promotion.promopages.split(',').includes(currentPath);
    return promoIsOn && pageInPromo;
  });

  applyPromotions(activePromotions);
  // for each activePromotion
}
