
document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.querySelector('[data-gallery-lightbox]');
  const lightboxImage = document.querySelector('[data-gallery-image]');
  const items = [...document.querySelectorAll('[data-gallery-open]')];
  const prevButton = document.querySelector('[data-gallery-prev]');
  const nextButton = document.querySelector('[data-gallery-next]');

  if (!lightbox || !lightboxImage || !items.length) return;

  let currentIndex = 0;

  const show = index => {
    currentIndex = (index + items.length) % items.length;

    const item = items[currentIndex];
    const thumb = item.querySelector('img');

    lightboxImage.src = item.dataset.src || thumb?.src || '';
    lightboxImage.alt = thumb?.alt || '';

    lightbox.hidden = false;
    document.documentElement.style.overflow = 'hidden';
  };

  const close = () => {
    lightbox.hidden = true;
    lightboxImage.src = '';
    lightboxImage.alt = '';
    document.documentElement.style.overflow = '';
  };

  const previous = event => {
    event?.stopPropagation();
    show(currentIndex - 1);
  };

  const next = event => {
    event?.stopPropagation();
    show(currentIndex + 1);
  };

  items.forEach((item, index) => {
    item.addEventListener('click', () => show(index));
  });

  document.querySelectorAll('[data-gallery-close]').forEach(button => {
    button.addEventListener('click', close);
  });

  prevButton?.addEventListener('click', previous);
  nextButton?.addEventListener('click', next);

  document.addEventListener('keydown', event => {
    if (lightbox.hidden) return;

    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') previous(event);
    if (event.key === 'ArrowRight') next(event);
  });
});
