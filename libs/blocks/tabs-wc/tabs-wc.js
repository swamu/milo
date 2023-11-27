import './tabs-component.js';
import { createTag } from '../../utils/utils.js';
import { getMetadata } from '../section-metadata/section-metadata.js';

export default function init(el) {
  const { id, selected } = getMetadata(el);
  const tabs = createTag(
    'tabs-component',
    { id: id?.text, selected: selected?.text ?? 1, style: el.classList },
    el.children[0].innerHTML,
  );
  const sections = Array.from(document.querySelectorAll('.section-metadata'));
  sections.forEach((section) => {
    const { tab } = getMetadata(section);
    if (tab) {
      const [tabId, tabContent] = tab.text.split(',');
      section.parentElement.setAttribute('tab-id', tabId);
      section.parentElement.setAttribute('tab-content', tabContent);
    }
  });
  el.replaceChildren(tabs);
}
