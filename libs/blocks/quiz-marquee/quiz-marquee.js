import { decorateBlockBg, decorateBlockHrs } from '../../utils/decorate.js';
import { createTag } from '../../utils/utils.js';

export default async function init(el) {
  el.classList.add('con-block', 'dark'); // dark by default
  let rows = el.querySelectorAll(':scope > div');
  const { default: quizResults } = await import('../quiz-results/quiz-results.js');
  if (rows.length > 1) {
    if (rows[0].textContent !== '') el.classList.add('has-bg');
    const [head, ...tail] = rows;
    decorateBlockBg(el, head);
    rows = tail;
    const foreground = rows[0];
    const fRows = foreground.querySelectorAll(':scope > div');
    let copy = fRows[0];
    if (fRows.length === 2) {
      const asset = foreground.querySelector('picture', 'video');
      if (asset) {
        asset.parentElement.classList.add('asset');
        foreground.classList.add('has-asset');
        if (el.classList.contains('split')) {
          const bgSplit = createTag('div', { class: 'background-split' }, asset);
          el.append(bgSplit);
          // asset.remove();
        }
      }
      const textRow = foreground.querySelector(':scope >  div:not([class])');
      if (textRow) {
        copy = textRow;
      }
    }
    copy.classList.add('copy');
    const staticCopy = createTag('div', { class: 'static' }, copy.innerHTML);
    copy.innerHTML = '';
    copy.append(staticCopy);
    foreground.classList.add('foreground');
    rows.shift();

    copy.append(...rows);

    [...rows].forEach(async (row) => {
      const cols = row.querySelectorAll(':scope > div');
      const isFragRow = cols[0].textContent.trim() === 'nested-fragments';
      if (isFragRow) {
        cols[0].parentElement.classList.add('nested', cols[1].textContent.trim());
        // row.append(fragRows);
        const wrapper = createTag('div', { class: 'copy-wrapper' });
        row.append(wrapper);
        wrapper.append(...cols);
        await quizResults(row);
      } else {
        row.classList.add('static');
        decorateBlockHrs(row);
      }
    });
  }
}
