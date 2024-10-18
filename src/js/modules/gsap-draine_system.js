import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export function initImageScrollAnimation() {
  const sectionHero = document.querySelector('.lightrock-section__hero');
  const productAppealTitle = document.querySelector('.js-product-appeal-title > div > span');
  const pressureResistanceScroll = document.querySelector('.js-pressure-resistance-about-scroll');

  if (!sectionHero) {
    console.error('Елемент .lightrock-section__hero не знайдено');
    return;
  }
  if (!productAppealTitle) {
    console.error('Елемент .js-product-appeal-title > div > span не знайдено');
    return;
  }
  if (!pressureResistanceScroll) {
    console.error('Елемент .js-pressure-resistance-about-scroll не знайдено');
    return;
  }

  gsap.to(sectionHero, {
    x: '-7.1vw',
    ease: 'none',
    scrollTrigger: {
      trigger: '.lightrock-section__hero',
      start: '-65% top',
      end: '-10% top',
      scrub: 0.9,
      markers: false,
    },
  });

  gsap.set('.js-product-appeal-title > div > span', { width: 0 });

  gsap.timeline({
    scrollTrigger: {
      trigger: '.js-product-appeal-title',
      scrub: true,
      start: 'top 70%',
      end: 'top 35%',
      markers: false,
    },
  })
  .to('.js-product-appeal-title > div > span', {
    width: '100%',
    duration: 1,
    ease: 'power1.inOut',
    stagger: 1,
  });

  gsap.to(pressureResistanceScroll, {
    top: '-10rem',
    ease: 'none',
    scrollTrigger: {
      trigger: pressureResistanceScroll,
      start: '-400px 50%',
      end: '10% 60%',
      scrub: true,
      markers: true,
    },
  });
}