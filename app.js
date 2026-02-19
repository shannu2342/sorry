const typedLines = [
  'I am sorry for every mistake I made.',
  'I accept every fault without excuse.',
  'I hurt you, and I take responsibility.',
  'Jiya, your pain matters to me.',
  'I will prove change with consistent actions.'
];

const typedNode = document.getElementById('typed');
let line = 0;
let char = 0;
let removing = false;

function typeWriter() {
  const active = typedLines[line];

  if (!removing) {
    typedNode.textContent = active.slice(0, char + 1);
    char += 1;
    if (char === active.length) {
      removing = true;
      setTimeout(typeWriter, 1200);
      return;
    }
    setTimeout(typeWriter, 48);
    return;
  }

  typedNode.textContent = active.slice(0, char - 1);
  char -= 1;
  if (char === 0) {
    removing = false;
    line = (line + 1) % typedLines.length;
  }
  setTimeout(typeWriter, 25);
}

typeWriter();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const meter = document.getElementById('meter');
const meterFill = document.getElementById('meterFill');
const meterText = document.getElementById('meterText');
const meterStates = [
  'Regret is present, but I must go deeper.',
  'I sincerely regret hurting you.',
  'This apology comes from my core with accountability.',
  'I am fully committed to repair, growth, and trust rebuilding.'
];

function updateMeter() {
  const value = Number(meter.value);
  meterFill.style.width = `${value}%`;

  if (value < 30) meterText.textContent = meterStates[0];
  else if (value < 60) meterText.textContent = meterStates[1];
  else if (value < 85) meterText.textContent = meterStates[2];
  else meterText.textContent = meterStates[3];
}

meter.addEventListener('input', updateMeter);
updateMeter();

const starField = document.getElementById('starField');
const starMessage = document.getElementById('starMessage');
const starNotes = [
  'I should have listened before speaking.',
  'I should have protected your peace.',
  'I should have valued your trust more carefully.',
  'I should have controlled my ego and stayed kind.',
  'I should have acted with emotional maturity.',
  'I should have chosen patience over reaction.',
  'I should have made you feel safe with me.',
  'I should have honored your feelings first.'
];

function createConstellation() {
  for (let i = 0; i < 16; i += 1) {
    const star = document.createElement('button');
    star.className = 'star';
    star.type = 'button';
    star.style.left = `${8 + Math.random() * 84}%`;
    star.style.top = `${10 + Math.random() * 78}%`;
    star.style.animationDelay = `${Math.random() * 1.2}s`;
    star.dataset.note = starNotes[i % starNotes.length];
    star.ariaLabel = 'Memory star';

    star.addEventListener('click', () => {
      starMessage.textContent = star.dataset.note;
      chime(520 + Math.random() * 140, 0.06);
      star.animate(
        [
          { transform: 'scale(1)', opacity: 1 },
          { transform: 'scale(1.5)', opacity: 0.35 },
          { transform: 'scale(1)', opacity: 1 }
        ],
        { duration: 480, easing: 'ease-out' }
      );
    });

    starField.appendChild(star);
  }
}

createConstellation();

const timelineItems = document.querySelectorAll('.timeline__item');
const timelineEcho = document.getElementById('timelineEcho');

timelineItems.forEach((item) => {
  item.addEventListener('click', () => {
    timelineItems.forEach((node) => node.classList.remove('is-active'));
    item.classList.add('is-active');
    timelineEcho.textContent = item.dataset.label;
    chime(680, 0.05);
  });
});

const garden = document.getElementById('garden');
const plantBtn = document.getElementById('plantBtn');
const gardenCount = document.getElementById('gardenCount');
let planted = 0;

plantBtn.addEventListener('click', () => {
  planted += 1;
  gardenCount.textContent = `Flowers planted: ${planted}`;

  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.title = 'One apology planted';
  flower.style.filter = `hue-rotate(${Math.random() * 24 - 12}deg)`;
  garden.appendChild(flower);

  if (garden.children.length > 28) {
    garden.removeChild(garden.firstElementChild);
  }

  chime(420 + Math.random() * 90, 0.07);
});

const yesBtn = document.getElementById('yesBtn');
const timeBtn = document.getElementById('timeBtn');
const response = document.getElementById('response');

yesBtn.addEventListener('click', () => {
  response.textContent = 'Thank you. I will honor this chance with consistency, patience, and respect.';
  confettiBurst();
  chime(760, 0.1);
});

timeBtn.addEventListener('click', () => {
  response.textContent = 'Take all the time you need. I will keep proving my sincerity respectfully.';
  chime(500, 0.06);
});

const scrollBtn = document.querySelector('[data-scroll]');
scrollBtn.addEventListener('click', () => {
  document.querySelector(scrollBtn.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
});

function confettiBurst() {
  const colors = ['#ffd3b2', '#ffb08a', '#ff8a65', '#ffe6cc'];
  for (let i = 0; i < 96; i += 1) {
    const piece = document.createElement('span');
    piece.style.position = 'fixed';
    piece.style.left = '50%';
    piece.style.top = '56%';
    piece.style.width = '8px';
    piece.style.height = '8px';
    piece.style.borderRadius = '2px';
    piece.style.pointerEvents = 'none';
    piece.style.background = colors[i % colors.length];
    piece.style.zIndex = '9999';

    const dx = (Math.random() - 0.5) * 640;
    const dy = (Math.random() - 0.8) * 480;
    const rot = (Math.random() - 0.5) * 600;

    piece.animate(
      [
        { transform: 'translate(-50%, -50%) rotate(0deg)', opacity: 1 },
        {
          transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) rotate(${rot}deg)`,
          opacity: 0
        }
      ],
      { duration: 1200 + Math.random() * 800, easing: 'cubic-bezier(.2,.8,.18,1)' }
    );

    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2200);
  }
}

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function chime(freq, gainValue) {
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(freq, now);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(gainValue, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.38);
}

window.addEventListener('pointerdown', () => {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}, { once: true });

const sky = document.getElementById('sky');
const ctx = sky.getContext('2d');
const dots = [];

function resizeSky() {
  sky.width = window.innerWidth;
  sky.height = window.innerHeight;
}

resizeSky();
window.addEventListener('resize', resizeSky);

for (let i = 0; i < 140; i += 1) {
  dots.push({
    x: Math.random() * sky.width,
    y: Math.random() * sky.height,
    r: Math.random() * 1.7 + 0.4,
    s: Math.random() * 0.4 + 0.08,
    a: Math.random() * 0.55 + 0.12
  });
}

function animateSky() {
  ctx.clearRect(0, 0, sky.width, sky.height);
  dots.forEach((dot) => {
    dot.y -= dot.s;
    if (dot.y < -8) {
      dot.y = sky.height + 8;
      dot.x = Math.random() * sky.width;
    }

    ctx.beginPath();
    ctx.fillStyle = `rgba(255, 235, 220, ${dot.a})`;
    ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateSky);
}

animateSky();
