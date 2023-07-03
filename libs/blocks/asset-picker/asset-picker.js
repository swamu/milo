import { createTag } from '../../utils/utils.js';

export default function init(el) {
  const getURLs = `/drafts/sarangi/hack/url-list`;
  const resPromise = fetch(`${getURLs}.json`);
  resPromise.then((res) => {
    if (!res.ok) return;
    res.json().then((urlRes) => {
        const gallery = createTag('div', {class:'gallery'});
        const checkmark = createTag('div', {class: 'checkmark'});
        // add button
        urlRes.data.forEach((url, index) => {
          const bg = createTag('img', { src: `${url[0]}`, class: `gallery__item`});
          gallery.append(bg);
          bg.addEventListener('click', (clickedImg) => {
            gallery.querySelectorAll('img').forEach(img => img.classList.remove('green'));
            clickedImg.currentTarget.classList.add('green');
            console.log('selected src', clickedImg.currentTarget);
          });
        });
        el.append(gallery);
    })

  });


}
