// Simple JS to power the interactive template
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const response = document.getElementById('response');
const extras = document.getElementById('extras');
const openLetter = document.getElementById('openLetter');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('closeModal');
const ok = document.getElementById('ok');

function showResponse(text){
  response.textContent = text;
  response.classList.remove('hidden');
  response.style.opacity = '1';
  response.style.transform = 'translateY(0)';
  extras.classList.remove('hidden');
  extras.style.opacity = '1';
  extras.style.transform = 'translateY(0)';
}

yes.addEventListener('click', ()=>{
  // navigate to the yes page
  window.location.href = 'yes.html';
});

no.addEventListener('click', ()=>{
  // navigate to the no page
  window.location.href = 'no.html';
});

openLetter.addEventListener('click', ()=>{
  modal.classList.remove('hidden');
});
closeModal.addEventListener('click', ()=>{
  modal.classList.add('hidden');
});
ok.addEventListener('click', ()=>{
  modal.classList.add('hidden');
  alert('Welcome to the special page!');
});

// small helper animations
function burstHearts(color){
  for(let i=0;i<8;i++){
    const el = document.createElement('div');
    el.textContent = '💖';
    el.style.position='fixed';
    el.style.left = (50 + (Math.random()*40-20)) + '%';
    el.style.top = (40 + (Math.random()*40-20)) + '%';
    el.style.fontSize = (12+Math.random()*20)+'px';
    el.style.opacity=1; el.style.zIndex=99; el.style.pointerEvents='none';
    document.body.appendChild(el);
    const tx = (Math.random()*140-70);
    const ty = - (60 + Math.random()*80);
    el.animate([{transform:'translate(0,0) scale(1)'},{transform:`translate(${tx}px, ${ty}px) scale(.6)`}],{duration:900+Math.random()*600,easing:'cubic-bezier(.2,.8,.2,1)'});
    setTimeout(()=>{el.remove();},1400);
  }
}

function shakeCard(){
  const card = document.querySelector('.card');
  card.animate([
    {transform:'translateX(0)'},
    {transform:'translateX(-10px)'},
    {transform:'translateX(8px)'},
    {transform:'translateX(-6px)'},
    {transform:'translateX(0)'}
  ],{duration:500,easing:'ease-in-out'});
}

// make extras visible after first interaction
// (extras are shown on the dedicated pages after navigation)