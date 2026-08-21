import './scss/main.scss'
import { images } from './data/images'
import { videos } from './data/videos';
import { initBurger } from './js/components/burger';
import { initHeroVideo } from './js/components/hero-video';
import { renderCard } from './js/components/characters';
import './js/components/character-modal';
import './js/components/preorder-modal';


const logo = document.querySelectorAll('[data-js="logo"]');
logo.forEach(l => {
    l.src = images.logo;
})

function renderIcons(element, icon) {
    element.forEach(el => {
        el.src = icon;
    })
}

const twitter = document.querySelectorAll('[data-js="twitter"]');
const youtube = document.querySelectorAll('[data-js="youtube"]');
const facebook = document.querySelectorAll('[data-js="facebook"]');

renderIcons(twitter, images.iconTwitter);
renderIcons(youtube, images.iconYoutube);
renderIcons(facebook, images.iconFacebook);


document.querySelector('[data-js="rich-story"]').src = images.iconMech;
document.querySelector('[data-js="open-world"]').src = images.iconFlower;
document.querySelector('[data-js="meaningful-choices"]').src = images.iconArrow;

document.querySelector('[data-js="geralt-horse"]').src = images.witcherHorse;


initBurger();
initHeroVideo();
renderCard();

