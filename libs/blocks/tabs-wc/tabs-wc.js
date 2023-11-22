import './tabs-component.js';
import { createTag } from '../../utils/utils.js';
import { getMetadata } from '../section-metadata/section-metadata.js';

export default function init(el) {
  const { id, selected } = getMetadata(el);
  const tabs = createTag('tabs-block', { id: id?.text, selected: selected?.text ?? 1 }, el.children[0].innerHTML);
  el.replaceChildren(tabs);
}
