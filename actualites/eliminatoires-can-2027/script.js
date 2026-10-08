(() => {
  'use strict';
  const slider = document.querySelector('[data-photo-slider]');
  if (slider) {
    const slides = [...slider.querySelectorAll('[data-photo-slide]')];
    const count = slider.querySelector('[data-photo-count]');
    let index = 0;
    const render = (next, direction = 1) => {
      slides.forEach((slide, i) => {
        slide.classList.remove('is-active','is-before');
        if (i === next) slide.classList.add('is-active');
        else if (i === index) slide.classList.add('is-before');
        slide.style.transform = i === next ? 'translateX(0)' : (direction > 0 ? 'translateX(100%)' : 'translateX(-100%)');
      });
      const previous = slides[index];
      if (previous && index !== next) previous.style.transform = direction > 0 ? 'translateX(-100%)' : 'translateX(100%)';
      index = next;
      if (count) count.textContent = `${index + 1} / ${slides.length}`;
    };
    slider.querySelector('[data-photo-next]')?.addEventListener('click', () => render((index + 1) % slides.length, 1));
    slider.querySelector('[data-photo-prev]')?.addEventListener('click', () => render((index - 1 + slides.length) % slides.length, -1));
  }
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);
  document.querySelectorAll('[data-share]').forEach((link) => {
    const network = link.dataset.share;
    let href = '#';
    if (network === 'whatsapp') href = `https://wa.me/?text=${pageTitle}%20${pageUrl}`;
    if (network === 'facebook') href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    if (network === 'x') href = `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
    if (network === 'linkedin') href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
    if (network === 'email') href = `mailto:?subject=${pageTitle}&body=${pageUrl}`;
    link.href = href;
    if (network !== 'email') { link.target = '_blank'; link.rel = 'noopener noreferrer'; }
  });

})();