(() => {
  'use strict';
  const form=document.getElementById('portal-search-form');
  const input=document.getElementById('portal-search-input');
  const wrap=document.getElementById('search-results-wrap');
  const results=document.getElementById('search-results');
  const empty=document.getElementById('search-empty');
  const count=document.getElementById('search-count');
  const index=Array.isArray(window.RDC_SEARCH_INDEX)?window.RDC_SEARCH_INDEX:[];
  const normalize=s=>(s||'').toString().normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  const escapeHTML=s=>(s||'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  function score(entry,q){const words=q.split(/\s+/).filter(Boolean);const t=normalize(entry.title),d=normalize(entry.description),all=normalize(entry.search);let points=0;for(const w of words){if(t===w)points+=30;if(t.includes(w))points+=12;if(d.includes(w))points+=5;if(all.includes(w))points+=2;else return 0;}return points;}
  function render(){const q=normalize(input?.value);if(!q){if(wrap)wrap.hidden=true;if(results)results.innerHTML='';return;}let matches=index.map(e=>({e,s:score(e,q)})).filter(x=>x.s>0).sort((a,b)=>b.s-a.s||a.e.title.localeCompare(b.e.title,'fr')).slice(0,40);wrap.hidden=false;results.innerHTML=matches.map(({e})=>`<a class="search-result" href="${escapeHTML(e.url)}"><div class="search-result__content"><span class="search-result__category">${escapeHTML(e.category)}</span><h2 class="search-result__title">${escapeHTML(e.title)}</h2><p class="search-result__description">${escapeHTML(e.description||'Consulter cette rubrique du portail de la Présidence.')}</p></div><span class="search-result__arrow" aria-hidden="true">→</span></a>`).join('');empty.hidden=matches.length>0;results.hidden=matches.length===0;count.textContent=`${matches.length} résultat${matches.length>1?'s':''}`;}
  form?.addEventListener('submit',e=>{e.preventDefault();render();});
  input?.addEventListener('input',()=>{if(!input.value.trim()&&wrap)wrap.hidden=true;});
  const preset=new URLSearchParams(location.search).get('q');if(preset){input.value=preset;render();}
})();
