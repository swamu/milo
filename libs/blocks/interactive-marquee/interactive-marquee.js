import { createTag } from '../../utils/utils.js';

export default function init(el) {
  const rows = el.querySelectorAll(':scope > div');
  rows.forEach((row) => { row.className = 'hide-block'; });

  // Move text overlay to top of stack (todo: this only works for mobile for now)
  const textDiv = el.querySelector(':scope > div:last-child > div:first-child');

  const bgPic = el.querySelector(':scope > div:nth-child(2) > div:first-child picture');
  bgPic.className = 'imarquee-background';

  const fgPic = el.querySelector(':scope > div:nth-child(4) > div:first-child picture');
  fgPic.className = 'imarquee-foreground';

  const bgContainer = createTag('div', { class: 'bg-container' }, [bgPic, fgPic]);

  const container = createTag('div', { class: 'interactive-marquee-container' }, [textDiv, bgContainer]);
  el.append(container);
}
