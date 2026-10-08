document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('[data-modal]');
  document.querySelectorAll('[data-newsletter]').forEach(button => {
    button.addEventListener('click', () => { if (modal) modal.hidden = false; });
  });
  document.querySelectorAll('[data-close]').forEach(button => {
    button.addEventListener('click', () => { if (modal) modal.hidden = true; });
  });
  modal?.addEventListener('click', event => {
    if (event.target === modal) modal.hidden = true;
  });
});
