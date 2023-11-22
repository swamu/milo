import { createTag } from '../../utils/utils.js';

class TabsBlock extends HTMLElement {
  static get observedAttributes() {
    return ['selected'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'selected') {
      const tabs = this.querySelectorAll('.tab');
      tabs?.forEach((tab, index) => {
        tab.setAttribute('selected', parseInt(newValue, 10) === (index + 1));
      });
    }
  }

  tabAttrs(tabIndex) {
    const selectedTab = this.getAttribute('selected');
    return { class: 'tab', selected: tabIndex === parseInt(selectedTab, 10) };
  }

  connectedCallback() {
    const tabContainer = this.children[0];
    tabContainer.classList.add('container');
    const config = this.querySelector('ol');
    config.style.display = 'none';
    const tabs = Array.from(this.querySelectorAll('li'));
    tabs.forEach((tab, index) => {
      const tabButton = createTag('div', this.tabAttrs(index + 1), tab.textContent);
      tabButton.onclick = () => this.setAttribute('selected', index + 1);
      tabContainer.appendChild(tabButton);
    });
  }
}

window.customElements.define('tabs-block', TabsBlock);
