// Keep tracking tags out of the visible address bar, including ChatGPT's utm_source.
(() => {
  const url = new URL(window.location.href);
  const trackingKeys = [...url.searchParams.keys()].filter(key => key.toLowerCase().startsWith('utm_'));
  if (!trackingKeys.length) return;
  trackingKeys.forEach(key => url.searchParams.delete(key));
  window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
})();

const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'✕':'☰'});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';menu.focus()}});document.querySelector('#print-resume')?.addEventListener('click',()=>window.print());const viewer=document.querySelector('#image-viewer');if(viewer){const image=document.querySelector('#expanded-image'),caption=document.querySelector('#image-caption');document.querySelectorAll('.screenshot-button').forEach(button=>button.addEventListener('click',()=>{image.src=button.dataset.image;image.alt=button.dataset.caption;caption.textContent=button.dataset.caption;viewer.showModal()}));document.querySelector('#close-image').addEventListener('click',()=>viewer.close());viewer.addEventListener('click',e=>{if(e.target===viewer){const r=viewer.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)viewer.close()}})}

if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.06});document.querySelectorAll('.featured,.tool-tile,.process-grid article,.experience-row,.gallery-item').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
