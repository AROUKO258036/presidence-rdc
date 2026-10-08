(() => {
  'use strict';
  const $=(s,c=document)=>c.querySelector(s); const $$=(s,c=document)=>[...c.querySelectorAll(s)];

  // Mega menus - click + hover desktop. Panels are fixed so they are never clipped.
  const triggers=$$('[data-mega-trigger]'); let active=null; let closeTimer;
  function closeAll(){clearTimeout(closeTimer); triggers.forEach(t=>{t.setAttribute('aria-expanded','false'); const p=document.getElementById(t.getAttribute('aria-controls')); if(p)p.classList.remove('is-open')}); active=null;}
  function position(t,p){const r=t.getBoundingClientRect(); const w=Math.min(840,innerWidth-40); let left=r.left+r.width/2-w/2; left=Math.max(20,Math.min(left,innerWidth-w-20)); p.style.width=w+'px';p.style.left=left+'px';p.style.top=document.querySelector('.site-header').getBoundingClientRect().bottom+10+'px';}
  function openMenu(t){const p=document.getElementById(t.getAttribute('aria-controls')); if(!p)return; if(active&&active!==t)closeAll(); t.setAttribute('aria-expanded','true');p.classList.add('is-open');position(t,p);active=t;}
  triggers.forEach(t=>{const p=document.getElementById(t.getAttribute('aria-controls')); t.addEventListener('click',e=>{e.stopPropagation(); t.getAttribute('aria-expanded')==='true'?closeAll():openMenu(t)}); t.addEventListener('mouseenter',()=>{if(matchMedia('(hover:hover)').matches)openMenu(t)}); t.closest('.nav-item')?.addEventListener('mouseleave',()=>{if(matchMedia('(hover:hover)').matches)closeTimer=setTimeout(closeAll,220)}); p?.addEventListener('mouseenter',()=>clearTimeout(closeTimer)); p?.addEventListener('mouseleave',()=>{if(matchMedia('(hover:hover)').matches)closeTimer=setTimeout(closeAll,180)});});
  document.addEventListener('click',e=>{if(!e.target.closest('.mega-menu')&&!e.target.closest('[data-mega-trigger]'))closeAll()}); document.addEventListener('keydown',e=>{if(e.key==='Escape')closeAll()}); addEventListener('resize',()=>{if(active){const p=document.getElementById(active.getAttribute('aria-controls'));position(active,p)}});

  // Current route state.
  const path=(location.pathname.replace(/\/+$/,'')||'')+'/'; $$('a[href]').forEach(a=>{const h=a.getAttribute('href'); if(h&&h.startsWith('/')&&h!=='/'&&path.startsWith(h))a.classList.add('is-current'); if(h==='/'&&path==='/')a.classList.add('is-current')});

  // Home hero: initial left/right reveal then automatic changes every 6.5 sec.
  const slides=$$('[data-hero-slide]'), dots=$$('[data-hero-dot]'); let heroIndex=0, heroTimer, direction=1;
  function showHero(i,manual=false){if(!slides.length)return; slides.forEach((s,n)=>{s.classList.toggle('is-active',n===i);s.classList.remove('is-intro-left','is-intro-right')}); dots.forEach((d,n)=>d.classList.toggle('is-active',n===i)); const current=slides[i]; if(current){current.classList.add(direction>0?'is-intro-left':'is-intro-right');setTimeout(()=>current.classList.remove('is-intro-left','is-intro-right'),1450)} heroIndex=i; direction*=-1; if(manual)restartHero();}
  function restartHero(){clearInterval(heroTimer); if(slides.length>1)heroTimer=setInterval(()=>showHero((heroIndex+1)%slides.length),6500)}
  dots.forEach((d,i)=>d.addEventListener('click',()=>showHero(i,true))); if(slides.length){showHero(0);setTimeout(restartHero,1500)}

  // Filters
  $$('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{const group=btn.closest('[data-filter-bar]'); if(!group)return; $$('[data-filter]',group).forEach(x=>x.classList.remove('is-active'));btn.classList.add('is-active');const v=btn.dataset.filter; $$('[data-category]').forEach(card=>{card.hidden=!(v==='all'||card.dataset.category===v)})}));

  // Searchable list
  $$('[data-search-input]').forEach(input=>input.addEventListener('input',()=>{const q=input.value.trim().toLowerCase(); const scope=input.closest('[data-search-scope]')||document; $$('[data-searchable]',scope).forEach(row=>row.hidden=q&&!row.textContent.toLowerCase().includes(q))}));

  // Reveal on scroll
  const reveal=$$('.reveal'); if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12});reveal.forEach(el=>io.observe(el))}else reveal.forEach(el=>el.classList.add('is-visible'));

  // Gallery lightbox
  const lb=$('[data-lightbox]'), lbImg=lb?.querySelector('img'); $$('[data-lightbox-src]').forEach(card=>card.addEventListener('click',()=>{if(!lb||!lbImg)return;lbImg.src=card.dataset.lightboxSrc;lb.classList.add('is-open')})); $$('[data-lightbox-close]').forEach(b=>b.addEventListener('click',()=>lb?.classList.remove('is-open')));

  // Forms / demo download actions
  const toast=$('[data-toast]'); function showToast(msg){if(!toast)return;toast.textContent=msg;toast.classList.add('is-show');setTimeout(()=>toast.classList.remove('is-show'),3200)}
  $$('form[data-demo-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();showToast('Formulaire prêt : connectez ensuite votre API ou votre service d’envoi.')}));
  $$('[data-demo-download]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();showToast('Ajoutez le document PDF final à cette action.')}));
})();
