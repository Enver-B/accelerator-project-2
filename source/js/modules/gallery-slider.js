import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.gallery__slider-content', {
  direction: 'horizontal',
  modules: [Navigation],
  navigation: {
    nextEl: '.gallery__next-button',
    prevEl: '.gallery__prev-button',
  },
  breakpoints: {
    320: {
      loop: true,
      speed: 500,
      slidesPerGroup: 1,
      slidesPerView: 2,
      allowTouchMove: true,
      spaceBetween: 6,
    },
    768: {
      loop: true,
      speed: 500,
      slidesPerGroup: 1,
      slidesPerView: 3,
      allowTouchMove: true,
      spaceBetween: 5,
    },
    1440: {
      loop: false,
      slidesPerGroup: 5,
      slidesPerView: 5,
      spaceBetween: 5,
      allowSlidePrev: false,
      allowSlideNext: false,
      simulateTouch: false,
      touchMoveStopPropagation: true,
    }
  }
});
