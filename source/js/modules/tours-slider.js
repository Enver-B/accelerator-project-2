// Слайдер блока Tours

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.tours__slider', {
  direction: 'horizontal',
  modules: [Navigation],
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.tours__next-button',
    prevEl: '.tours__prev-button',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      allowTouchMove: true,
      spaceBetween: 18,
    },
    1440: {
      slidesPerView: 3,
      allowTouchMove: false,
      spaceBetween: 30,
    }
  },
});
