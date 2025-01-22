import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

let advSwiper;


function initializeSwiper() {
  if (window.innerWidth >= 1440 && !advSwiper) {
    advSwiper = new Swiper('.adv__slider-content', {
      loop: true,
      slidesPerGroup: 1,
      slidesPerView: 'auto',
      allowTouchMove: false,
      initialSlide: 2,
      centeredSlides: true,
      spaceBetween: 30,
      modules: [Navigation],
      navigation: {
        nextEl: '.adv__next-button',
        prevEl: '.adv__prev-button',
      },
    });
  }

  if (window.innerWidth < 1440 && advSwiper) {
    advSwiper.destroy();
    advSwiper = null;
  }
}

window.addEventListener('load', initializeSwiper);
window.addEventListener('resize', initializeSwiper);
