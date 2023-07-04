import { createTag } from '../../utils/utils.js';

export default function init(el) {
  const getURLs = `/drafts/sarangi/hack/url-list`;
  const resPromise = fetch(`${getURLs}.json`);
  resPromise.then((res) => {
    if (!res.ok) return;
    res.json().then((urlRes) => {
        const gallery = createTag('div', {class:'gallery'});
        const galleryContainer = createTag('div', {class:'gallery-container'});
        const addButton = createTag('button', { class: 'gallery-add-button feds-cta feds-cta--primary' }, 'Add');
        galleryContainer.append(addButton);
        galleryContainer.append(gallery);
        urlRes.data.forEach(url => {
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
        addButton.addEventListener('click',() => {
          console.log('button click!');
        });
        el.append(galleryContainer);
    })

  });


}
