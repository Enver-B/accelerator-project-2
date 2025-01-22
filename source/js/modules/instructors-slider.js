// Слайдер блока Training

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.training__instructors-slider', {
  direction: 'horizontal',
  modules: [Navigation],
  loop: false,
  initialSlide: 2,
  speed: 500,
  spaceBetween: 20,
  navigation: {
    nextEl: '.training__next-button',
    prevEl: '.training__prev-button',
  },

  breakpoints: {
    320: {
      initialSlide: 2,
      allowTouchMove: true,
      slidesPerView: 1,
    },
    768: {
      initialSlide: 0,
      allowTouchMove: true,
      slidesPerView: 3,
    },
    1440: {
      initialSlide: 0,
      allowTouchMove: false,
      slidesPerView: 4,
    }
  }
});
