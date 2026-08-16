import { images } from '../../data/images';
import { videos } from '../../data/videos';

export function initHeroVideo() {
    const video = document.querySelector('[data-js="hero-video"]');
    const overlay = document.querySelector('[data-js="hero-overlay"]');
    const playButton = document.querySelector('[data-js="hero-play-button"]');

    if (video && overlay && playButton) {
        video.src = videos.trailer;
        video.poster = images.heroBanner;
        overlay.style.backgroundImage = `url(${images.heroBanner})`;

        playButton.addEventListener('click', () => {
            video.play();
        })
        video.addEventListener('click', () => {
            if (video.controls) return;

            if (video.paused) {
                video.play();
            }
            else {
                video.pause();
            }
        })
        video.addEventListener('play', () => {
            overlay.hidden = true;
            playButton.hidden = true;
        })
        video.addEventListener('pause', () => {
            playButton.hidden = false;
            video.controls = true;
        })
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            overlay.hidden = false;
            playButton.hidden = false;
            video.controls = false;
        })
    }
}