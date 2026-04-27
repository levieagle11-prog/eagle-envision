/* ─── PRELOADER ──────────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => {
    const p = document.getElementById('preloader');
    if (p) p.classList.add('hidden');
  }, 1000);
});

/* ─── CURSOR ─────────────────────────────────────────────── */
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; });
(function animC() {
  rx += (mx-rx)*.12; ry += (my-ry)*.12;
  if (dot)  { dot.style.left=mx+'px'; dot.style.top=my+'px'; }
  if (ring) { ring.style.left=rx+'px'; ring.style.top=ry+'px'; }
  requestAnimationFrame(animC);
})();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => { if(ring){ring.style.width='50px';ring.style.height='50px';ring.style.borderColor='rgba(59,130,246,.7)';} });
  el.addEventListener('mouseleave', () => { if(ring){ring.style.width='34px';ring.style.height='34px';ring.style.borderColor='rgba(59,130,246,.45)';} });
});

/* ─── NAVBAR SCROLL ──────────────────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 40));
}

/* ─── HAMBURGER ──────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}
function closeMenu() {
  if (!hamburger) return;
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── ACTIVE NAV LINK ─────────────────────────────────────── */
(function() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });
})();

/* ─── BLOB CANVAS ─────────────────────────────────────────── */
(function() {
  const canvas = document.getElementById('blob-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  window.addEventListener('resize', resize); resize();

  class Blob {
    constructor(x,y,r,hue,spd) {
      this.x=x;this.y=y;this.r=r;this.hue=hue;
      this.vx=(Math.random()-.5)*spd; this.vy=(Math.random()-.5)*spd;
      this.w=Math.random()*Math.PI*2; this.ws=.007+Math.random()*.005;
    }
    update() {
      this.x+=this.vx; this.y+=this.vy; this.w+=this.ws;
      if(this.x<-this.r) this.x=W+this.r; if(this.x>W+this.r) this.x=-this.r;
      if(this.y<-this.r) this.y=H+this.r; if(this.y>H+this.r) this.y=-this.r;
    }
    draw() {
      const rw=this.r+Math.sin(this.w*1.3)*this.r*.16+Math.cos(this.w*.9)*this.r*.09;
      const g=ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,rw);
      g.addColorStop(0,  `hsla(${this.hue},88%,55%,0.2)`);
      g.addColorStop(.5, `hsla(${this.hue},80%,42%,0.09)`);
      g.addColorStop(1,  `hsla(${this.hue},70%,28%,0.00)`);
      ctx.beginPath();
      ctx.ellipse(this.x,this.y,rw+Math.sin(this.w*.7)*rw*.1,rw+Math.cos(this.w*1.1)*rw*.09,this.w*.3,0,Math.PI*2);
      ctx.fillStyle=g; ctx.fill();
    }
  }

  const blobs = [
    new Blob(W*.2, H*.3, 280, 222, .42),
    new Blob(W*.75,H*.2, 210, 215, .34),
    new Blob(W*.5, H*.7, 300, 228, .38),
    new Blob(W*.85,H*.65,170, 218, .48),
    new Blob(W*.1, H*.8, 190, 225, .36),
  ];

  function loop() {
    ctx.clearRect(0,0,W,H);
    blobs.forEach(b=>{b.update();b.draw();});
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ─── SCROLL REVEAL ──────────────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');
const revealIO  = new IntersectionObserver((entries) => {
  entries.forEach((e,i) => {
    if (e.isIntersecting) {
      setTimeout(()=>e.target.classList.add('visible'), i*75);
      revealIO.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });
revealEls.forEach(el=>revealIO.observe(el));

/* ─── CARD TILT ──────────────────────────────────────────── */
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r=card.getBoundingClientRect();
    const x=(e.clientX-r.left)/r.width-.5;
    const y=(e.clientY-r.top)/r.height-.5;
    card.style.transform=`perspective(900px) rotateY(${x*7}deg) rotateX(${-y*7}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave',()=>{ card.style.transform=''; });
});
