(() => {
  const container=document.querySelector('[data-review-carousel]');
  const list=document.querySelector('#review-grid');
  const path=location.pathname.includes('/reviews/')?'../client-reviews-data.json':'./client-reviews-data.json';
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  const esc=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const stars=(rating)=>{
    if(typeof rating!=='number'||rating<1||rating>5) return '<span class="sg-rating-pending" aria-label="Star rating not provided">Rating not provided</span>';
    return '<span class="sg-stars" aria-label="'+rating+' out of 5 stars">'+Array.from({length:5},(_,i)=>'<span class="'+(i<Math.floor(rating)?'filled':'empty')+'">★</span>').join('')+' <small>'+rating.toFixed(1)+'/5</small></span>';
  };
  fetch(path).then(r=>{if(!r.ok)throw Error('Reviews unavailable');return r.json()}).then(data=>{
    if(!Array.isArray(data)||!data.length)return;
    if(list) {
      [...list.querySelectorAll('.review-card')].forEach((card,i)=>{
        const review=data[i];
        if(!review)return;
        const heading=card.querySelector('h3');
        if(heading)heading.insertAdjacentHTML('afterend','<div class="sg-rating-line">'+stars(review.rating)+'</div>');
      });
    }
    if(!container)return;
    const track=container.querySelector('.sg-review-track');
    const status=container.querySelector('.sg-review-status');
    const count=()=>window.innerWidth<700?1:window.innerWidth<1100?2:3;
    let index=0, timer;
    const render=()=>{
      const n=count();
      track.innerHTML=Array.from({length:n},(_,j)=>{
        const x=data[(index+j)%data.length];
        return '<article class="sg-review-card"><div class="sg-rating-line">'+stars(x.rating)+'</div><h3>'+esc(x.project)+'</h3><p class="sg-review-quote">“'+esc(x.quote)+'”</p><p class="sg-review-author"><strong>'+esc(x.name)+'</strong> · '+esc(x.country)+'</p><p class="sg-review-service">'+esc(x.service)+'</p></article>';
      }).join('');
      status.textContent=(index+1)+'–'+Math.min(index+n,data.length)+' of '+data.length;
    };
    const move=step=>{index=(index+step+data.length)%data.length;render()};
    container.querySelector('.sg-review-prev').addEventListener('click',()=>{move(-count());restart()});
    container.querySelector('.sg-review-next').addEventListener('click',()=>{move(count());restart()});
    const stop=()=>{clearInterval(timer);timer=null};
    const restart=()=>{stop();if(!reduced.matches)timer=setInterval(()=>{if(!document.hidden)move(count())},5000)};
    container.addEventListener('mouseenter',stop);
    container.addEventListener('mouseleave',restart);
    container.addEventListener('focusin',stop);
    container.addEventListener('focusout',e=>{if(!container.contains(e.relatedTarget))restart()});
    window.addEventListener('resize',render);
    reduced.addEventListener('change',restart);
    render();restart();
  }).catch(err=>console.warn('Client reviews:',err));
})();