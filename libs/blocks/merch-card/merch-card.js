/* eslint-disable prefer-destructuring */
import { decorateButtons, decorateBlockHrs } from '../../utils/decorate.js';
import { loadStyle, getConfig, createTag } from '../../utils/utils.js';
import { addBackgroundImg, addWrapper, addFooter } from '../card/cardUtils.js';
import { decorateLinkAnalytics } from '../../martech/attributes.js';
import { replaceKey } from '../../features/placeholders.js';

const { miloLibs, codeRoot } = getConfig();
const base = miloLibs || codeRoot;

const SEGMENT_BLADE = 'SegmentBlade';
const SPECIAL_OFFERS = 'SpecialOffers';
const PLANS_CARD = 'PlansCard';
const CATALOG_CARD = 'CatalogCard';
const cardTypes = {
  segment: SEGMENT_BLADE,
  'special-offers': SPECIAL_OFFERS,
  plans: PLANS_CARD,
  catalog: CATALOG_CARD,
};
const getPodType = (styles) => {
  const authoredType = styles?.find((style) => style in cardTypes);
  return cardTypes[authoredType] || SEGMENT_BLADE;
};

const createDescription = (rows, cardType) => createTag('div', { class: `consonant-${cardType}-description` }, rows.slice(0, rows.length - 1));

const cleanAttrs = (el) => {
  const dataAttrs = Object.keys(el.dataset);
  dataAttrs.forEach((attr) => el.removeAttribute(`data-${attr}`));
};

const createTitle = (titles, cardType) => {
  const titleWrapper = createTag('div', { class: `consonant-${cardType}-title` });
  titles?.forEach((title) => titleWrapper.appendChild(title));
  return titleWrapper;
};

const decorateFooter = (el, altCtaMetaData, cardType) => {
  const cardFooter = el.querySelector('.consonant-CardFooter');
  const decorateWithSecureTransactionSign = () => {
    const secureTransactionWrapper = createTag('div', { class: 'secure-transaction-wrapper' });
    const label = createTag('span', { class: 'secure-transaction-label' });
    const secureElement = createTag('span', { class: 'secure-transaction-icon' });
    secureTransactionWrapper.append(secureElement, label);
    replaceKey('secure-transaction', getConfig()).then((replacedKey) => {
      label.textContent = replacedKey;
    });
    return secureTransactionWrapper;
  };

  const createCheckbox = (checkBoxText) => {
    cardFooter.querySelector('hr')?.remove();
    const container = createTag('label', { class: 'checkbox-container' });
    const input = createTag('input', { id: 'alt-cta', type: 'checkbox' });
    const checkmark = createTag('span', { class: 'checkmark' });
    const label = createTag('span', { class: 'checkbox-label' }, checkBoxText.innerHTML);
    container.append(input, checkmark, label);
    return container;
  };

  const decorateAlternativeCta = () => {
    const altCtaRegex = /href=".*"/;
    if (!altCtaRegex.test(altCtaMetaData[1]?.innerHTML)) return;

    const cardFooterRow = el.querySelector('.consonant-CardFooter-row');
    if (el.classList.contains('secure')) {
      const standardWrapper = createTag('div', { class: 'standard-wrapper' });
      const secureTransactionWrapper = decorateWithSecureTransactionSign();
      standardWrapper.append(secureTransactionWrapper, cardFooterRow);
      cardFooter?.append(standardWrapper);
    }

    const originalCtaButton = cardFooterRow.querySelector('.consonant-CardFooter-cell--right');
    const checkboxContainer = createCheckbox(altCtaMetaData[0]);
    const altCtaButtonData = altCtaMetaData[1];
    decorateButtons(altCtaButtonData);
    const altCtaButton = createTag('div', { class: originalCtaButton.classList }, altCtaButtonData.innerHTML);
    altCtaButton.classList.add('button--inactive');
    checkboxContainer.querySelector('input[type="checkbox"]').addEventListener('change', ({ target: { checked } }) => {
      originalCtaButton.classList.toggle('button--inactive', checked);
      altCtaButton.classList.toggle('button--inactive', !checked);
    });
    cardFooterRow.append(altCtaButton);
    cardFooter.prepend(checkboxContainer);
    altCtaMetaData[0].parentNode.remove();
  };
  if (altCtaMetaData !== null) decorateAlternativeCta();
  cardFooter.querySelectorAll('.consonant-CardFooter-cell').forEach((cell) => cell.classList.add(`consonant-${cardType}-cell`));
};

const addInner = (el, altCta, cardType, merchCard) => {
  const titles = el.querySelectorAll(`
    h1:not(:scope .consonant-${cardType}-actionMenuWrapper h1),
    h2:not(:scope .consonant-${cardType}-actionMenuWrapper h2),
    h3:not(:scope .consonant-${cardType}-actionMenuWrapper h3),
    h4:not(:scope .consonant-${cardType}-actionMenuWrapper h4),
    h5:not(:scope .consonant-${cardType}-actionMenuWrapper h5),
    h6:not(:scope .consonant-${cardType}-actionMenuWrapper h6)
  `);
  const rows = [...el.querySelectorAll(`p:not(:scope .consonant-${cardType}-actionMenuWrapper p)`)];
  const styles = [...el.classList];
  const merch = styles.includes('merch-card');
  const pElement = merch && el.querySelector(':scope > div > div > p:last-of-type');
  const links = pElement ? pElement.querySelectorAll(`a:not(:scope .consonant-${cardType}-actionMenuWrapper a`) : el.querySelectorAll('a');

  const inner = el.querySelector(':scope > div:not([class])');
  inner.classList.add(`consonant-${cardType}-inner`);
  const title = createTitle(titles, cardType);
  const description = createDescription(rows, cardType, inner);

  inner.prepend(title);
  if (cardType === CATALOG_CARD) {
    const badge = el.querySelector(`.consonant-${cardType}-badge`);
    const actionMenu = el.querySelector(`.consonant-${cardType}-actionMenu`);
    if (badge) inner.insertBefore(badge, title);
    if (actionMenu) {
      inner.insertBefore(actionMenu, title);
      const actionMenuWrapper = el.querySelector(`.consonant-${cardType}-actionMenuWrapper`);
      actionMenu.addEventListener('click', () => {
        actionMenuWrapper.classList.toggle('shown');
      });
    }
  }
  inner.append(description);
  addFooter(links, inner, merchCard);
  decorateFooter(el, altCta, cardType);
  merchCard.append(inner);
};

const decorateActionMenu = (el, actionMenuEl, cardType) => {
  if (cardType !== CATALOG_CARD) return;
  actionMenuEl.classList.add(`consonant-${cardType}-actionMenuWrapper`);
  cleanAttrs(actionMenuEl);
  el.append(actionMenuEl);
};

const decorateBadge = (el, badgeMetadata, cardType, actionMenuEl) => {
  const badgeStyleRegex = /^#[0-9a-fA-F]+, #[0-9a-fA-F]+$/;
  if (!badgeStyleRegex.test(badgeMetadata[0]?.innerText)) return;
  const badgeStyle = badgeMetadata[0].innerText;
  const [badgeBgColor, badgeTextColor] = badgeStyle.split(', ');
  const badgeWrapper = badgeMetadata[0].parentNode;
  const badge = badgeMetadata[1];
  badge.classList.add(`consonant-${cardType}-badge`);
  badge.style.backgroundColor = badgeBgColor;
  badge.style.color = badgeTextColor;
  el.style.border = `1px solid ${badgeBgColor}`;
  const picture = el.querySelector(`.consonant-${cardType}-img`);
  if (picture) {
    picture.insertAdjacentElement('afterend', badge);
  } else {
    el.insertAdjacentElement('beforeend', badge);
  }
  if (actionMenuEl) {
    decorateActionMenu(el, actionMenuEl[0], cardType);
    const actionMenu = createTag('div', { class: `consonant-${cardType}-actionMenu` });
    badge.insertAdjacentElement('afterend', actionMenu);
  }
  cleanAttrs(badge);
  badgeWrapper.remove();
};

const decorateIcon = (el, icons, cardType) => {
  if (!icons) return;
  const inner = el.querySelector(`.consonant-${cardType}-inner`);
  const iconWrapper = createTag('div', { class: `consonant-${cardType}-iconWrapper` });
  icons?.forEach((icon) => {
    const url = icon.querySelector('img').src;
    const iconDiv = createTag('div', { class: 'consonant-MerchCard-ProductIcon', style: `background-image: url(${url})` });
    iconWrapper.appendChild(iconDiv);
    icon.parentNode?.remove();
  });
  inner.prepend(iconWrapper);
};

const init = (el) => {
  const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  decorateLinkAnalytics(el, headings);
  loadStyle(`${base}/deps/caas.css`);
  const section = el.closest('.section');
  section.classList.add('milo-card-section');
  const images = el.querySelectorAll('picture');
  let image;
  const icons = [];
  const rows = el.querySelectorAll(':scope > *');
  const styles = [...el.classList];
  const cardType = getPodType(styles);
  const actionMenuEl = rows.length === 3 ? rows[1].children : null;
  const badgeMetadata = rows[0].children?.length === 2 ? rows[0].children : null;
  let row;
  if (cardType === CATALOG_CARD) {
    row = rows[rows.length - 1];
  } else {
    row = rows[badgeMetadata === null ? 0 : 1];
  }
  const altCta = rows[rows.length - 1].children?.length === 2
    ? rows[rows.length - 1].children : null;
  const allPElems = row.querySelectorAll(`p:not(:scope .consonant-${cardType}-actionMenuWrapper p)`);
  const ctas = allPElems[allPElems.length - 1];
  const merchCard = el;
  decorateBlockHrs(el);
  images.forEach((img) => {
    const imgNode = img.querySelector('img');
    const { width, height } = imgNode;
    const isSquare = Math.abs(width - height) <= 10;
    if (img) {
      if (isSquare) {
        icons.push(img);
      } else {
        image = img;
      }
    }
  });
  addWrapper(el, section, cardType);
  merchCard.classList.add('consonant-Card', 'consonant-ProductCard', `consonant-${cardType}`);
  if (image) addBackgroundImg(image, cardType, merchCard);
  if (badgeMetadata !== null) decorateBadge(el, badgeMetadata, cardType, actionMenuEl);
  image?.parentElement.remove();
  if (ctas) decorateButtons(ctas);
  addInner(el, altCta, cardType, merchCard, actionMenuEl);
  decorateIcon(el, icons, cardType);
  const innerCleanup = el.querySelectorAll(':scope > div:not([class])');
  innerCleanup.forEach((div) => div.remove());
};

export default init;
