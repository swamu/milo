import { createTag } from '../../utils/utils.js';

class TabsComponent extends HTMLElement {
  static get observedAttributes() {
    return ['selected'];
  }

  handleTabContent() {
    const sections = Array.from(document.querySelectorAll(`[tab-id='${this.getAttribute('id')}']`));
    sections.forEach((section) => {
      section.setAttribute(
        'hidden',
        parseInt(section.getAttribute('tab-content'), 10) !== parseInt(this.getAttribute('selected'), 10),
      );
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'selected') {
      const tabs = this.querySelectorAll('.tab');
      tabs?.forEach((tab, index) => {
        tab.setAttribute('selected', parseInt(newValue, 10) === (index + 1));
      });
      this.handleTabContent();
    }
  }

  connectedCallback() {
    const tabContainer = this.children[0];
    tabContainer.classList.add('container', ...this.getAttribute('style').split(' '));
    const config = this.querySelector('ol');
    config.style.display = 'none';
    const tabs = Array.from(this.querySelectorAll('li'));
    tabs.forEach((tab, index) => {
      const tabButton = createTag(
        'button',
        { class: 'tab', selected: (index + 1) === parseInt(this.getAttribute('selected'), 10) },
        tab.textContent,
      );
      tabButton.onclick = () => this.setAttribute('selected', index + 1);
      tabContainer.appendChild(tabButton);
    });
    this.handleTabContent();
  }
}

window.customElements.define('tabs-component', TabsComponent);
