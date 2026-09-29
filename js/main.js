'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const links = [...navigation.querySelectorAll('a')];
const mobileViewport = window.matchMedia('(max-width: 760px)');

function closeMenu(restoreFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  if (restoreFocus) menuButton.focus();
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
});
links.forEach(link => link.addEventListener('click', () => {
  closeMenu();
  const destination = document.querySelector(link.hash);
  destination.setAttribute('tabindex', '-1');
  destination.focus({ preventScroll: true });
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
navigation.addEventListener('focusout', event => {
  if (mobileViewport.matches && !event.relatedTarget?.closest('.header')) closeMenu();
});
mobileViewport.addEventListener('change', () => closeMenu());
document.documentElement.classList.add('js');
document.querySelector('#year').textContent = new Date().getFullYear();

// The nearest section heading determines the active navigation link.
if ('IntersectionObserver' in window) {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-15% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}
