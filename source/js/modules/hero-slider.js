// Слайдер блока Hero
// https://swiperjs.com/get-started#installation

import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

new Swiper('.hero-slider__wrap', {
  direction: 'horizontal',
  modules: [Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 0,
  speed: 500,

  pagination: {
    el: '.hero-slider__slider-pagination',
    type: 'bullets',
    bulletClass: 'hero-slider__slider-pagination-bullet',
    bulletActiveClass: 'hero-slider__slider-pagination-bullet--selected',
    clickable: true,
  },

  breakpoints: {
    320: {
      pagination: {
        el: '.hero-slider__slider-pagination',
        type: 'bullets',
        bulletClass: 'hero-slider__slider-pagination-bullet',
        bulletActiveClass: 'hero-slider__slider-pagination-bullet--selected',
        clickable: false,
      },
      allowTouchMove: true,
      touchMove: true,
    },

    768: {
      pagination: {
        el: '.hero-slider__slider-pagination',
        type: 'bullets',
        clickable: false,
      },
      allowTouchMove: true,
      touchMove: true,
    },

    1440: {
      pagination: {
        el: '.hero-slider__slider-pagination',
        type: 'bullets',
        clickable: true,
      },
      allowTouchMove: false,
      touchMove: false
    }
  }
});
