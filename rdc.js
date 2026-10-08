(() => {
  'use strict';

  /* FILE MODE PATH NORMALIZATION */
  if (location.protocol === 'file:') {
    const currentScript = document.currentScript || [...document.scripts].find(s => /(?:^|\/)rdc\.js(?:\?|$)/.test(s.src));
    const projectRoot = currentScript?.src ? new URL('./', currentScript.src) : null;

    if (projectRoot) {
      const siteUrl = (value, isLink = false) => {
        if (!value || !value.startsWith('/') || value.startsWith('//')) return value;
        const hashIndex = value.indexOf('#');
        const queryIndex = value.indexOf('?');
        let cut = value.length;
        if (hashIndex >= 0) cut = Math.min(cut, hashIndex);
        if (queryIndex >= 0) cut = Math.min(cut, queryIndex);
        const pathname = value.slice(0, cut);
        const suffix = value.slice(cut);
        let localPath = pathname.replace(/^\//, '');
        if (isLink) {
          if (!localPath) localPath = 'index.html';
          else if (localPath.endsWith('/')) localPath += 'index.html';
        }
        return new URL(localPath + suffix, projectRoot).href;
      };

      document.querySelectorAll('a[href^="/"]').forEach(a => {
        a.href = siteUrl(a.getAttribute('href'), true);
      });
      document.querySelectorAll('img[src^="/"], source[src^="/"]').forEach(el => {
        el.src = siteUrl(el.getAttribute('src'), false);
      });
    }
  }


  /* 1. NAVIGATION — dropdowns portaled to body so header overflow never clips them */
  const header = document.querySelector('[data-header]');
  const viewport = document.querySelector('[data-nav-viewport]');
  if (header) {
    const entries = [...header.querySelectorAll('[data-dropdown]')].map((item, idx) => {
      const trigger = item.querySelector('.nav-trigger');
      const panel = item.querySelector('.dropdown');
      if (!trigger.id) trigger.id = `nav-trigger-${idx}`;
      if (!panel.id) panel.id = `nav-dropdown-${idx}`;
      trigger.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', trigger.id);
      document.body.appendChild(panel);
      return { item, trigger, panel, overItem: false, overPanel: false };
    });

    let active = null;
    let closeTimer = null;
    const cancelClose = () => { if (closeTimer) clearTimeout(closeTimer); closeTimer = null; };

    const position = (entry) => {
      const r = entry.trigger.getBoundingClientRect();
      const width = Math.min(320, document.documentElement.clientWidth - 24);
      const left = Math.max(12, Math.min(r.left + r.width / 2 - width / 2, innerWidth - width - 12));
      const top = header.getBoundingClientRect().bottom + 10;
      entry.panel.style.width = `${width}px`;
      entry.panel.style.left = `${left}px`;
      entry.panel.style.top = `${top}px`;
      entry.panel.style.setProperty('--available-height', `${Math.max(180, innerHeight - top - 18)}px`);
      entry.panel.style.setProperty('--notch-x', `${Math.max(20, Math.min(width - 20, r.left + r.width/2 - left))}px`);
    };

    const close = (restore = false) => {
      cancelClose();
      if (!active) return;
      const old = active;
      active = null;
      old.panel.hidden = true;
      old.trigger.setAttribute('aria-expanded', 'false');
      if (restore) old.trigger.focus({ preventScroll: true });
    };

    const open = (entry) => {
      cancelClose();
      if (active && active !== entry) close();
      active = entry;
      entry.panel.hidden = false;
      entry.trigger.setAttribute('aria-expanded', 'true');
      position(entry);
    };

    const scheduleClose = (entry) => {
      cancelClose();
      closeTimer = setTimeout(() => {
        const focusInside = entry.item.contains(document.activeElement) || entry.panel.contains(document.activeElement);
        if (active === entry && !entry.overItem && !entry.overPanel && !focusInside) close();
      }, 180);
    };

    entries.forEach(entry => {
      entry.item.addEventListener('mouseenter', () => { entry.overItem = true; open(entry); });
      entry.item.addEventListener('mouseleave', () => { entry.overItem = false; scheduleClose(entry); });
      entry.panel.addEventListener('mouseenter', () => { entry.overPanel = true; cancelClose(); });
      entry.panel.addEventListener('mouseleave', () => { entry.overPanel = false; scheduleClose(entry); });
      entry.trigger.addEventListener('click', (e) => {
        const touchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;
        const dropdownOnly = entry.trigger.dataset.dropdownOnly === 'true';

        // Médias : aucun contenu n'est associé au lien parent.
        // Le clic ouvre ou ferme uniquement le dropdown.
        if (dropdownOnly) {
          e.preventDefault();
          if (active === entry) close();
          else open(entry);
          return;
        }

        // Ordinateur : le survol gère le dropdown, le clic reste un vrai lien.
        if (!touchLike) {
          close();
          return;
        }

        // Mobile/tablette : premier appui = dropdown, second appui = page de rubrique.
        if (active !== entry) {
          e.preventDefault();
          open(entry);
        } else {
          close();
        }
      });
      entry.trigger.addEventListener('keydown', (e) => {
        if (!['ArrowDown','ArrowUp'].includes(e.key)) return;
        e.preventDefault(); open(entry);
        const links = [...entry.panel.querySelectorAll('a')];
        (e.key === 'ArrowUp' ? links.at(-1) : links[0])?.focus();
      });
      entry.panel.addEventListener('keydown', (e) => {
        const links = [...entry.panel.querySelectorAll('a')];
        if (!links.length || !['ArrowDown','ArrowUp','Home','End'].includes(e.key)) return;
        e.preventDefault();
        let i = links.indexOf(document.activeElement);
        if (e.key === 'Home') i = 0;
        else if (e.key === 'End') i = links.length - 1;
        else i = (i + (e.key === 'ArrowDown' ? 1 : -1) + links.length) % links.length;
        links[i]?.focus();
      });
      entry.panel.addEventListener('click', e => { if (e.target.closest('a')) close(); });
    });

    document.addEventListener('click', e => {
      if (active && !active.item.contains(e.target) && !active.panel.contains(e.target)) close();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') close(true); });
    const reposition = () => active && position(active);
    window.addEventListener('resize', reposition);
    window.addEventListener('scroll', reposition, { passive: true });
    viewport?.addEventListener('scroll', reposition, { passive: true });
  }

  /* 2. APPARITION AU SCROLL */
  const revealTargets = document.querySelectorAll('.quotes, .feature');
  if ('IntersectionObserver' in window) {
    revealTargets.forEach(el => el.classList.add('reveal'));
    const io = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('reveal--visible'); io.unobserve(entry.target); }
    }), { threshold: .14 });
    revealTargets.forEach(el => io.observe(el));
  }

  /* 3. CITATIONS */
  const DELAY = 1000;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* HERO VIDEO — conserve la vidéo d'origine de la page d'accueil */
  const heroVideo = document.querySelector('.hero__video');
  if (heroVideo) {
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.setAttribute('playsinline', '');
    heroVideo.play().catch(() => { /* le poster reste visible si le navigateur bloque la lecture */ });
  }
  const quotes = document.querySelector('.quotes');
  if (quotes) {
    const slides = [...quotes.querySelectorAll('[data-slide]')];
    const dots = [...quotes.querySelectorAll('[data-quote-dot]')];
    let current = 0, timer;
    const show = i => {
      current = (i + slides.length) % slides.length;
      slides.forEach((s,k) => s.classList.toggle('is-active', k === current));
      if (dots.length) dots.forEach((d,k) => d.classList.toggle('is-active', k === current));
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const start = () => { if (!reduce && slides.length > 1) { stop(); timer = setInterval(() => show(current + 1), DELAY); } };
    if (dots.length) dots.forEach((d,i) => d.addEventListener('click', () => { show(i); start(); }));
    quotes.addEventListener('mouseenter', stop); quotes.addEventListener('mouseleave', start);
    if (slides.length) { show(0); start(); }
  }

  /* 4. CARROUSELS IMAGES — vrai slider horizontal */
  document.querySelectorAll('[data-carousel-viewport]').forEach(vp => {
    const name = vp.dataset.carouselViewport;
    const slides = [...vp.querySelectorAll('[data-carousel-slide]')];
    const dots = [...document.querySelectorAll(`[data-carousel-dot][data-carousel="${name}"]`)];
    const card = vp.closest('.feature__card') || vp;
    if (slides.length < 1) return;

    // Carte 1 : la nouvelle photo entre par la droite et l'ancienne sort à gauche.
    // Carte 2 : mouvement inverse pour créer le rythme demandé.
    const reverse = card.dataset.introDirection === 'right';
    const ENTER_X = reverse ? -100 : 100;
    const EXIT_X = reverse ? 100 : -100;
    const SLIDE_MS = 1000;
    const AUTO_DELAY = 6000;
    const FIRST_DELAY = 1600;

    let current = 0;
    let timer = null;
    let firstTimer = null;
    let animating = false;
    let started = false;

    const setTransform = (slide, x, animate = true) => {
      slide.style.transition = animate && !reduce
        ? `transform ${SLIDE_MS}ms cubic-bezier(.22,.61,.36,1)`
        : 'none';
      slide.style.transform = `translate3d(${x}%,0,0)`;
    };

    const prepare = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === current);
        slide.style.opacity = '1';
        slide.style.visibility = 'visible';
        slide.style.zIndex = index === current ? '2' : '1';
        setTransform(slide, index === current ? 0 : ENTER_X, false);
      });
      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === current));
    };

    const goTo = (target, restartAuto = false) => {
      if (animating || slides.length < 2) return;
      target = (target + slides.length) % slides.length;
      if (target === current) return;

      if (reduce) {
        current = target;
        prepare();
        return;
      }

      animating = true;
      const outgoing = slides[current];
      const incoming = slides[target];

      incoming.style.zIndex = '3';
      outgoing.style.zIndex = '2';
      incoming.classList.add('is-active');
      setTransform(incoming, ENTER_X, false);
      incoming.getBoundingClientRect(); // force le navigateur à enregistrer la position de départ

      requestAnimationFrame(() => {
        setTransform(outgoing, EXIT_X, true);
        setTransform(incoming, 0, true);
      });

      dots.forEach((dot, index) => dot.classList.toggle('is-active', index === target));

      window.setTimeout(() => {
        outgoing.classList.remove('is-active');
        outgoing.style.zIndex = '1';
        setTransform(outgoing, ENTER_X, false);
        incoming.style.zIndex = '2';
        current = target;
        animating = false;
        if (restartAuto) startAuto();
      }, SLIDE_MS + 40);
    };

    const stopAuto = () => {
      window.clearInterval(timer);
      timer = null;
    };

    const startAuto = () => {
      if (reduce || slides.length < 2) return;
      stopAuto();
      timer = window.setInterval(() => goTo(current + 1), AUTO_DELAY);
    };

    const startWhenVisible = () => {
      if (started) return;
      started = true;
      if (reduce || slides.length < 2) return;
      firstTimer = window.setTimeout(() => {
        goTo(current + 1);
        window.setTimeout(startAuto, SLIDE_MS + 80);
      }, FIRST_DELAY);
    };

    prepare();

    // Le premier glissement se produit quand la carte devient réellement visible.
    if ('IntersectionObserver' in window) {
      const sliderObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startWhenVisible();
            sliderObserver.unobserve(entry.target);
          }
        });
      }, { threshold: .28 });
      sliderObserver.observe(card);
    } else {
      startWhenVisible();
    }

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        window.clearTimeout(firstTimer);
        started = true;
        stopAuto();
        goTo(index, true);
      });
    });

    card.addEventListener('mouseenter', stopAuto);
    card.addEventListener('mouseleave', () => { if (started && !animating) startAuto(); });
  });

  /* 5. NEWSLETTER + MODALES */
  const modal = document.querySelector('[data-modal]');
  const success = document.querySelector('[data-modal-success]');
  const form = document.querySelector('[data-subscribe-form]');
  const newsletterOpeners = document.querySelectorAll('[data-newsletter-open]');

  if (modal) {
    let lastFocused = null;
    const openModal = el => {
      if (!el) return;
      lastFocused = document.activeElement;
      el.hidden = false;
      document.body.style.overflow = 'hidden';
      window.setTimeout(() => el.querySelector('input, button, a')?.focus(), 30);
    };
    const closeModal = el => {
      if (!el) return;
      el.hidden = true;
      document.body.style.overflow = '';
      lastFocused?.focus?.();
    };

    newsletterOpeners.forEach(button => button.addEventListener('click', () => openModal(modal)));
    modal.querySelectorAll('[data-modal-close]').forEach(button => button.addEventListener('click', () => closeModal(modal)));

    form?.addEventListener('submit', e => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      closeModal(modal);
      form.reset();
      if (success) openModal(success);
    });

    success?.querySelectorAll('[data-success-close]').forEach(button => button.addEventListener('click', () => closeModal(success)));

    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      if (modal && !modal.hidden) closeModal(modal);
      else if (success && !success.hidden) closeModal(success);
    });
  }
})();
