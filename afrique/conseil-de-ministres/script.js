(() => {
  'use strict';

  document.querySelectorAll('.news-card__media img').forEach((img) => {
    const media = img.closest('.news-card__media');
    const markMissing = () => { img.hidden = true; media?.classList.add('is-placeholder'); };
    if (img.complete && !img.naturalWidth) markMissing();
    img.addEventListener('error', markMissing, { once: true });
  });

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


  /* Pagination interactive */
  const pagination = document.querySelector('[data-pagination]');
  if (pagination) {
    const totalResults = Number(pagination.dataset.totalResults || 0);
    const perPage = Math.max(1, Number(pagination.dataset.perPage || 6));
    const totalPages = Math.max(1, Math.ceil(totalResults / perPage));
    const rangeEl = pagination.querySelector('[data-pagination-range]');
    const totalEl = pagination.querySelector('[data-pagination-total]');
    const prevBtn = pagination.querySelector('[data-pagination-prev]');
    const nextBtn = pagination.querySelector('[data-pagination-next]');
    const grid = document.querySelector('.news-grid');

    const params = new URLSearchParams(window.location.search);
    let currentPage = Math.min(totalPages, Math.max(1, Number(params.get('page')) || 1));

    function pageHref(page) {
      const url = new URL(window.location.href);
      if (page <= 1) url.searchParams.delete('page');
      else url.searchParams.set('page', String(page));
      url.hash = '';
      return url.pathname + url.search;
    }

    function animateGrid(direction) {
      if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      grid.classList.remove('is-page-leaving-left', 'is-page-leaving-right', 'is-page-entering');
      // Force a reflow so repeated clicks replay the transition.
      void grid.offsetWidth;
      grid.classList.add(direction >= 0 ? 'is-page-leaving-left' : 'is-page-leaving-right');
      window.setTimeout(() => {
        grid.classList.remove('is-page-leaving-left', 'is-page-leaving-right');
        grid.classList.add('is-page-entering');
        window.setTimeout(() => grid.classList.remove('is-page-entering'), 260);
      }, 190);
    }

    function render({ push = false, direction = 0 } = {}) {
      const start = totalResults === 0 ? 0 : ((currentPage - 1) * perPage) + 1;
      const end = Math.min(totalResults, currentPage * perPage);
      if (rangeEl) rangeEl.textContent = `${start}–${end}`;
      if (totalEl) totalEl.textContent = String(totalResults);

      if (prevBtn) prevBtn.disabled = currentPage <= 1;
      if (nextBtn) nextBtn.disabled = currentPage >= totalPages;

      if (push) {
        history.pushState({ page: currentPage }, '', pageHref(currentPage));
      } else {
        history.replaceState({ page: currentPage }, '', pageHref(currentPage));
      }

      if (direction) {
        animateGrid(direction);
        document.querySelector('.news-listing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    function goToPage(page, direction = 0) {
      const nextPage = Math.min(totalPages, Math.max(1, page));
      if (nextPage === currentPage) return;
      const actualDirection = direction || (nextPage > currentPage ? 1 : -1);
      currentPage = nextPage;
      render({ push: true, direction: actualDirection });
    }

    prevBtn?.addEventListener('click', () => goToPage(currentPage - 1, -1));
    nextBtn?.addEventListener('click', () => goToPage(currentPage + 1, 1));

    window.addEventListener('popstate', () => {
      const p = new URLSearchParams(window.location.search);
      currentPage = Math.min(totalPages, Math.max(1, Number(p.get('page')) || 1));
      render();
    });

    render();
  }
})();
