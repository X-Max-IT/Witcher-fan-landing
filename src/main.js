import './scss/main.scss'

import { initImages } from './js/components/images';
import { videos } from './data/videos';
import { initBurger } from './js/components/burger';
import { initHeroVideo } from './js/components/hero-video';
import { renderCard } from './js/components/characters';
import { initCharacterModal } from './js/components/character-modal';
import { initPreorderModal } from './js/components/preorder-modal';


initImages();
initBurger();
initHeroVideo();
renderCard();
initCharacterModal();
initPreorderModal();
