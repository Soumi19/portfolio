/* site-fx.js — progressive enhancement only. No dependencies; every effect is skipped for reduced-motion users. */
(function(){
  var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia&&matchMedia('(hover: hover) and (pointer: fine)').matches;
  /* 1. reading-progress bar */
  var bar=document.createElement('div');bar.className='fx-progress';bar.setAttribute('aria-hidden','true');document.body.appendChild(bar);
  var tick=false;function prog(){tick=false;var d=document.documentElement,h=d.scrollHeight-d.clientHeight;bar.style.transform='scaleX('+(h>0?Math.min(1,d.scrollTop/h):0)+')'}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(prog)}},{passive:true});prog();
  if(rm)return;
  /* 2. cursor spotlight inside cards */
  var sel='.service-card,.solution-card,.project-card,.repo-card,.article-card,.plain-card,.tech-node,.visual-card,.industry-card,.brief-guide-card,.timeline article,.language-card';
  var seen=new WeakSet();
  function arm(c){if(seen.has(c))return;seen.add(c);var s=document.createElement('i');s.className='fx-spot';s.setAttribute('aria-hidden','true');c.appendChild(s)}
  if(fine){
    document.addEventListener('pointermove',function(e){
      var c=e.target.closest&&e.target.closest(sel);
      if(c){arm(c);var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}
      var hero=e.target.closest&&e.target.closest('.os-hero');
      if(hero){var hr=hero.getBoundingClientRect();hero.style.setProperty('--px',((e.clientX-hr.left)/hr.width*2-1).toFixed(3));hero.style.setProperty('--py',((e.clientY-hr.top)/hr.height*2-1).toFixed(3))}
    },{passive:true});
    /* 3. magnetic buttons */
    document.addEventListener('pointermove',function(e){
      var b=e.target.closest&&e.target.closest('.button');
      document.querySelectorAll('.button.fx-mag').forEach(function(x){if(x!==b){x.style.translate='';x.classList.remove('fx-mag')}});
      if(b){var r=b.getBoundingClientRect();var dx=(e.clientX-(r.left+r.width/2))/r.width,dy=(e.clientY-(r.top+r.height/2))/r.height;b.classList.add('fx-mag');b.style.translate=(dx*8).toFixed(1)+'px '+(dy*6).toFixed(1)+'px'}
    },{passive:true});
  }
  /* 4. count-up for numbers marked data-count */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(es){es.forEach(function(en){if(!en.isIntersecting)return;io.unobserve(en.target);var el=en.target,to=parseFloat(el.dataset.count),sfx=el.dataset.suffix||'',t0=performance.now();(function f(t){var p=Math.min(1,(t-t0)/1100);el.textContent=Math.round(to*(1-Math.pow(1-p,3)))+sfx;if(p<1)requestAnimationFrame(f)})(t0)})},{threshold:.6}):null;
  if(io)document.querySelectorAll('[data-count]').forEach(function(n){io.observe(n)});
  /* 5. smooth anchor scrolling is handled by CSS; open the dropdown if the URL hash points into one */
  if(location.hash){var t=document.querySelector(location.hash);if(t){var d=t.closest&&t.closest('details');if(d)d.open=true}}
})();
/* header gets a soft shadow once the page scrolls */
(function(){var h=document.querySelector('.header');if(!h)return;function f(){h.classList.toggle('is-scrolled',scrollY>12)}addEventListener('scroll',f,{passive:true});f()
  /* 6. back-to-top button + copy buttons (also run for reduced-motion users) */
})();
(function(){
  var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var up=document.createElement('button');up.className='fx-top';up.type='button';up.setAttribute('aria-label','Back to top');up.innerHTML='&#8593;';document.body.appendChild(up);
  var t=false;function on(){t=false;up.classList.toggle('on',window.scrollY>900)}
  addEventListener('scroll',function(){if(!t){t=true;requestAnimationFrame(on)}},{passive:true});on();
  up.addEventListener('click',function(){window.scrollTo({top:0,behavior:rm?'auto':'smooth'})});
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-copy]');if(!b)return;
    var el=document.getElementById(b.getAttribute('data-copy'));if(!el)return;
    var txt=el.innerText.trim();
    function done(){var o=b.textContent;b.setAttribute('data-done','1');b.textContent='Copied';setTimeout(function(){b.removeAttribute('data-done');b.textContent=o},1800)}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(txt).then(done,function(){})}
    else{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);try{document.execCommand('copy');done()}catch(x){}s.removeAllRanges()}
  });

  /* 7. copy page link buttons + open every dropdown when printing */
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-copy-url]');if(!b)return;
    var u=b.getAttribute('data-copy-url');var o=b.textContent;
    function ok(){b.setAttribute('data-done','1');b.textContent='Link copied';setTimeout(function(){b.removeAttribute('data-done');b.textContent=o},1800)}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,function(){})}
    else{var t=document.createElement('textarea');t.value=u;document.body.appendChild(t);t.select();try{document.execCommand('copy');ok()}catch(x){}t.remove()}
  });
  addEventListener('beforeprint',function(){document.querySelectorAll('details').forEach(function(d){d.dataset.was=d.open?'1':'0';d.open=true})});
  addEventListener('afterprint',function(){document.querySelectorAll('details').forEach(function(d){d.open=d.dataset.was==='1'})});
})();
