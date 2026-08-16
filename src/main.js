import './scss/main.scss'
import { images } from './data/images'
import { initBurger } from './js/components/burger';

document.querySelector('[data-js="logo"]').src = images.logo;

document.querySelector('[data-js="twitter"]').src = images.iconTwitter;
document.querySelector('[data-js="youtube"]').src = images.iconYoutube;
document.querySelector('[data-js="facebook"]').src = images.iconFacebook;

initBurger();

