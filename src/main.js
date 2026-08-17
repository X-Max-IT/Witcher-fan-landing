import './scss/main.scss'
import { images } from './data/images'
import { videos } from './data/videos';
import { initBurger } from './js/components/burger';
import { initHeroVideo } from './js/components/hero-video';


document.querySelector('[data-js="logo"]').src = images.logo;

document.querySelector('[data-js="twitter"]').src = images.iconTwitter;
document.querySelector('[data-js="youtube"]').src = images.iconYoutube;
document.querySelector('[data-js="facebook"]').src = images.iconFacebook;

document.querySelector('[data-js="geralt-horse"]').src = images.witcherHorse;


initBurger();
initHeroVideo();

