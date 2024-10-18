/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import initializeAllSliders from './modules/SwiperInit.js';
import { PhoneMask } from './modules/PhoneMask.js';
import { initImageScrollAnimation } from './modules/gsap-draine_system.js';

BaseHelpers.checkWebpSupport(); BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // slider init
  initializeAllSliders([
    {
      selector: '.js-work-slider-init',
      options: {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1,
        spaceBetween: 0
      }
    },
    {
      selector: '.js-goods-slider-init',
      options: {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        slidesPerView: 4,
        spaceBetween: 0
      }
    }
  ]);

  const swiperCursor = document.querySelector('.js-swiper-cursor');
  const goodsSlider = document.querySelector('.js-goods-slider-init');
  let isDragging = false; // Перемінна для перевірки стану перетягування

  if (goodsSlider && swiperCursor) {
    goodsSlider.addEventListener('mouseenter', () => {
      swiperCursor.classList.add('is-show');
    });

    goodsSlider.addEventListener('mouseleave', () => {
      swiperCursor.classList.remove('is-show');
    });

    goodsSlider.addEventListener('mousemove', (e) => {
      if (!isDragging) { // Оновлювати координати курсору лише коли не перетягується
        const rect = goodsSlider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        swiperCursor.style.left = `${x}px`;
        swiperCursor.style.top = `${y}px`;
      }
    });

    goodsSlider.addEventListener('mousedown', () => {
      isDragging = true; // Початок перетягування
    });

    document.addEventListener('mouseup', () => {
      isDragging = false; // Закінчення перетягування, знову активуємо курсор
    });
  }

  PhoneMask();

  initImageScrollAnimation();
});