(() => {
  'use strict';
  const form=document.getElementById('president-form');
  const message=document.getElementById('message');
  const count=document.getElementById('message-count');
  const status=document.getElementById('form-status');
  if(message&&count){const update=()=>count.textContent=`${message.value.length} / 3000`;message.addEventListener('input',update);update();}
  form?.addEventListener('submit',e=>{
    e.preventDefault();
    status.className='form-status';
    const required=[...form.querySelectorAll('[required]')];
    let firstInvalid=null;
    required.forEach(el=>{const ok=el.type==='checkbox'?el.checked:el.checkValidity()&&el.value.trim()!=='';el.setAttribute('aria-invalid',ok?'false':'true');if(!ok&&!firstInvalid)firstInvalid=el;});
    if(firstInvalid){status.textContent='Veuillez compléter correctement tous les champs obligatoires.';status.classList.add('is-error');firstInvalid.focus();return;}
    status.textContent="Le formulaire est valide. L’interface est prête ; l’envoi doit maintenant être relié au service/API de réception de la Présidence.";
    status.classList.add('is-success');
  });
  form?.addEventListener('input',e=>{if(e.target.matches('[required]'))e.target.removeAttribute('aria-invalid');});
})();
