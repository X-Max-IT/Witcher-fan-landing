import { images } from '../../data/images';

function setImage(selector, image) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        element.src = image;
    });
}

export function initImages() {
    setImage('[data-js="logo"]', images.logo);

    setImage('[data-js="telegram"]', images.iconTelega);
    setImage('[data-js="youtube"]', images.iconYoutube);
    setImage('[data-js="facebook"]', images.iconFacebook);
    setImage('[data-js="rich-story"]', images.iconMech);
    setImage('[data-js="open-world"]', images.iconFlower);
    setImage('[data-js="meaningful-choices"]', images.iconArrow);
    setImage('[data-js="geralt-horse"]', images.witcherHorse);
}