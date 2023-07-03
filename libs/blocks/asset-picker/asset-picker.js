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
          const imageContainer = createTag('div', {class: 'image-container'});
          imageContainer.append(bg);
          gallery.append(imageContainer);
          bg.addEventListener('click', (clickedImg) => {
            gallery.querySelectorAll('.image-container').forEach(img => img.classList.remove('green'));
            clickedImg.currentTarget.closest('.image-container').classList.add('green');
            console.log('selected src', clickedImg.currentTarget);
          });
        });
        el.append(gallery);
    })

  });


}
