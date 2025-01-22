// Слайдер блока Review

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.reviews__slider-content', {
  direction: 'horizontal',
  modules: [Navigation],
  loop: false,
  speed: 500,
  navigation: {
    nextEl: '.reviews__next-button',
    prevEl: '.reviews__prev-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      allowTouchMove: true,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 'auto',
      allowTouchMove: true,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 'auto',
      allowTouchMove: false,
      spaceBetween: 120,
    }
  }
});
