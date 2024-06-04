import init from '../../libs/blocks/merch/merch.js';

class MerchDataSource extends HTMLElement {
  static properties = { source: { type: String, attribute: 'source', reflect: true } };

  constructor() {
    super();
    this.source = '';
  }

  connectedCallback() {
    if (!this.getAttribute('source') === 'json' || !this.querySelector('script')?.text) return;
    try {
      const cardJson = JSON.parse(this.querySelector('script').text);
      this.parseMerchCard(cardJson, this.parentElement);
    } catch (e) {
      console.warn('Failed to parse card json', e);
    }
  }

  createTag(tag, attributes, html, options = {}) {
    const el = document.createElement(tag);
    if (html) {
      if (html instanceof HTMLElement
        || html instanceof SVGElement
        || html instanceof DocumentFragment) {
        el.append(html);
      } else if (Array.isArray(html)) {
        el.append(...html);
      } else {
        el.insertAdjacentHTML('beforeend', html);
      }
    }
    if (attributes) {
      Object.entries(attributes).forEach(([key, val]) => {
        el.setAttribute(key, val);
      });
    }
    options.parent?.append(el);
    return el;
  }

  parseMerchLink(merchLinkHTML) {
    const div = document.createElement('div');
    div.innerHTML = merchLinkHTML;
    const placeholder = init(div.querySelector('.merch'));
    return placeholder;
  }

  parseMerchCard(cardJson, merchCard) {
    merchCard.setAttribute('variant', 'plans');
    if (cardJson.icon?.length > 0) {
      const merchIcon = this.createTag('merch-icon', { slot: 'icons', src: cardJson.icon[0], alt: '', href: '', size: 'l' });
      merchCard.append(merchIcon);
    }

    if (cardJson.title) {
      merchCard.append(this.createTag('h4', { slot: 'heading-xs' }, cardJson.title));
    }

    if (cardJson.prices?.html) {
      const pricePromise = this.parseMerchLink(cardJson.prices.html);
      pricePromise.then((price) => {
        const headingM = this.createTag('h3', { slot: 'heading-m' }, price);
        merchCard.append(headingM);
      }).catch((e) => {
        console.warn('Failed to resolve price', e);
      });
    }

    merchCard.append(this.createTag('p', { slot: 'body-xxs', id: 'individuals1' }, 'Desktop'));

    if (cardJson.description?.html) {
      const bodyXS = this.createTag('div', { slot: 'body-xs' }, cardJson.description.html);
      merchCard.append(bodyXS);
    }

    if (cardJson.ctas?.html) {
      const ctaPromise = this.parseMerchLink(cardJson.prices.html);
      ctaPromise.then((cta) => {
        const footer = this.createTag('div', { slot: 'footer' }, cta);
        merchCard.append(footer);
      }).catch((e) => {
        console.warn('Failed to resolve checkout link', e);
      });
    }
  }
}
customElements.define('merch-datasource', MerchDataSource);
