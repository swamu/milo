import { decorateBlockBg, decorateBlockText, getBlockSize, decorateTextOverrides } from '../../utils/decorate.js';
import { createTag } from '../../utils/utils.js';

export default async function init(el) {
  el.classList.add('con-block');
  let rows = el.querySelectorAll(':scope > div');
  const result = createTag('div', { class: 'nested quiz-results-marquee' }, null);
  if (rows.length > 1) {
    if (rows[0].textContent !== '') el.classList.add('has-bg');
    const [head, ...tail] = rows;
    decorateBlockBg(el, head);
    rows = tail;
    result.append(rows[rows.length - 1]);
    el.append(result);
  }

  const { default: quizResults } = await import('../quiz-results/quiz-results.js');
  await quizResults(result);
}
