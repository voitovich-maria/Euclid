let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLinks = nav.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
});

navLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

let searchBtn = document.querySelector('.header__search-btn');
let search = document.querySelector('.search');
let searchCloseBtn = document.querySelector('.search__close-btn');

searchBtn.addEventListener('click', function() {
  searchBtn.classList.add('header__search-btn--active');
  search.classList.add('search--active');
});

searchCloseBtn.addEventListener('click', function() {
  searchBtn.classList.remove('header__search-btn--active');
  search.classList.remove('search--active');
});

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

let stepsNavBtn = document.querySelectorAll('.steps-nav__btn');
let stepsSubtitle = document.querySelectorAll('.steps__subtitle');
let stepsExcerpt = document.querySelectorAll('.steps__excerpt');
let stepsImg = document.querySelectorAll('.steps__img');


stepsNavBtn.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		const path = e.currentTarget.dataset.path;

		stepsNavBtn.forEach(function(btn) {
			btn.classList.remove('steps-nav__btn--active');
		});

    e.currentTarget.classList.add('steps-nav__btn--active');

    stepsSubtitle.forEach(function(subtitle) {
			subtitle.classList.remove('steps__subtitle--active');
      if (subtitle.matches(`[data-target="${path}"]`)) subtitle.classList.add('steps__subtitle--active');
		});

    stepsExcerpt.forEach(function(excerpt) {
			excerpt.classList.remove('steps__excerpt--active');
      if (excerpt.matches(`[data-target="${path}"]`)) excerpt.classList.add('steps__excerpt--active');
		});

    stepsImg.forEach(function(img) {
			img.classList.remove('steps__img--active');
      if (img.matches(`[data-target="${path}"]`)) img.classList.add('steps__img--active');
		});
	});
});

new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'faq__link',
  panelClass: 'faq__content',
  activeClass: 'faq__item--active',
});
