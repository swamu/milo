import { handleFocalpoint } from '../../utils/decorate.js';

function handleBackground(div, section) {
  const pic = div.background.content?.querySelector('picture');
  if (pic) {
    section.classList.add('has-background');
    pic.classList.add('section-background');
    handleFocalpoint(pic, div.background.content);
    section.insertAdjacentElement('afterbegin', pic);
  } else {
    const color = div.background.content?.textContent;
    if (color) {
      section.style.background = color;
    }
  }
}

export async function handleStyle(text, section) {
  if (!text || !section) return;
  const styles = text.split(', ').map((style) => style.replaceAll(' ', '-'));
  const sticky = styles.find((style) => style === 'sticky-top' || style === 'sticky-bottom');
  if (sticky) {
    const { default: handleStickySection } = await import('./sticky-section.js');
    await handleStickySection(sticky, section);
  }
  if (styles.includes('masonry')) styles.push('masonry-up');
  section.classList.add(...styles);
}

function handleLayout(text, section) {
  if (!(text || section)) return;
  const layoutClass = `grid-template-columns-${text.replaceAll(' | ', '-')}`;
  section.classList.add(layoutClass);
}

const formatAttr = (val, aprev = false) => {
  let value = val?.trim().replaceAll(' ', '-') ?? val;
  const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'];
  if (sizes.includes(val)) value = `var(--spacing-${val})`;
  if (aprev) value = value.substring(0, 3);
  return value;
};

function handleAdvancedGrid(metadata, section) {
  section.classList.add('advanced-grid');
  const attrs = ['up', 'align', 'justify', 'gap', 'item width'];
  attrs.forEach((attr) => {
    const props = metadata[attr];
    if (props) {
      if (Array.isArray(props)) {
        props.forEach((value, index) => {
          section.style.setProperty(`--${formatAttr(attr, true)}-${['m', 't', 'd'][index]}`, formatAttr(value.text));
        });
      } else {
        section.style.setProperty(`--${formatAttr(attr, true)}`, formatAttr(props.text));
      }
      if (attr === attrs[0] && !Array.isArray(props)) section.classList.add('mobile-min-max');
    }
  });
}

export const getMetadata = (el) => [...el.childNodes].reduce((rdx, row) => {
  if (row.children) {
    const format = (val) => val.textContent.trim().toLowerCase();
    const props = [...row.children];
    const key = format(props.shift());
    let metadata;
    if (props.length === 3) {
      metadata = props.map((content) => ({ content, text: format(content) }));
    } else {
      metadata = { content: props[0], text: format(props[0]) };
    }
    if (key && metadata) rdx[key] = metadata;
  }
  return rdx;
}, {});

export default async function init(el) {
  const section = el.closest('.section');
  const metadata = getMetadata(el);
  if (metadata.style) await handleStyle(metadata.style.text, section);
  if (metadata.background) handleBackground(metadata, section);
  if (metadata.layout) handleLayout(metadata.layout.text, section);
  if (metadata.up) handleAdvancedGrid(metadata, section);
}
