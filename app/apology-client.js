'use client';

import { useEffect, useRef, useState } from 'react';

const typedLines = [
  'I am sorry for every mistake I made.',
  'I accept every fault without excuse.',
  'I hurt you, and I take responsibility.',
  'Jiya Rani Madam Ji, your pain matters to me.',
  'I will prove change with consistent actions.'
];

const meterStates = [
  'Regret is present, but I must go deeper.',
  'I sincerely regret hurting you.',
  'This apology comes from my core with accountability.',
  'I am fully committed to repair, growth, and trust rebuilding.'
];

const starNotes = [
  'I should have listened before speaking.',
  'I should have protected your peace.',
  'I should have valued your trust more carefully.',
  'I should have accepted my fault and stayed kind.',
  'I should have acted with emotional maturity.',
  'I should have chosen patience over reaction.',
  'I should have made you feel safe with me.',
  'I should have honored your feelings first.'
];

const timelineItems = [
  {
    label: 'Listen first',
    detail: 'I will listen with patience before reacting.'
  },
  {
    label: 'Protect your peace',
    detail: 'I will protect your peace even when I feel I am at fault.'
  },
  {
    label: 'Be transparent',
    detail: 'I will stay transparent, honest, and emotionally available.'
  },
  {
    label: 'Prove with action',
    detail: 'I will prove change with consistency every day.'
  }
];

const effortCards = [
  'Daily accountability check-ins',
  'Respectful communication always',
  'Anger control and patience practice',
  'Zero excuses, full responsibility',
  'Consistency over empty promises',
  'Your peace above everything'
];

const vaultNotes = [
  'I will never normalize your pain again.',
  'I will communicate with calm, and accept my fault.',
  'I will earn trust slowly and honestly.',
  'I will respect your emotional boundaries.',
  'I will be answerable to my words.',
  'I will prioritize your peace every day.',
  'I will never hide behind excuses.',
  'I will keep showing up with patience.',
  'I will choose maturity over reaction.'
];

const weeklyPlan = [
  'Day 1: Listen without interrupting',
  'Day 2: Speak only with respect',
  'Day 3: Full transparency in communication',
  'Day 4: Keep calm in disagreements',
  'Day 5: Emotional availability all day',
  'Day 6: Gratitude and reassurance',
  'Day 7: Review and improve with honesty'
];

const loaderChapters = [
  'Chapter 1: Accepting Mistakes',
  'Chapter 2: Owning Every Fault',
  'Chapter 3: Building Repair Promises',
  'Chapter 4: Earning Trust Again'
];

function chime(audioCtxRef, freq, gainValue) {
  const audioCtx = audioCtxRef.current;
  if (!audioCtx) return;

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

function redirectWhatsApp(message) {
  const url = `https://wa.me/918639121263?text=${encodeURIComponent(message)}`;
  window.location.href = url;
}

export default function ApologyClient() {
  const scenes = ['top', 'letter', 'constellation', 'repair', 'challenge', 'effort', 'vault', 'meterZone', 'gardenArea', 'certificate', 'reactor', 'orbit', 'final'];
  const [typedText, setTypedText] = useState('');
  const [meterValue, setMeterValue] = useState(84);
  const [meterText, setMeterText] = useState(meterStates[2]);
  const [starMessage, setStarMessage] = useState('Touch a star to reveal a message.');
  const [timelineEcho, setTimelineEcho] = useState('Click each promise and hold me accountable to it.');
  const [activeTimeline, setActiveTimeline] = useState(-1);
  const [flowers, setFlowers] = useState([]);
  const [effortCount, setEffortCount] = useState(0);
  const [effortMinutes, setEffortMinutes] = useState(0);
  const [vaultMessage, setVaultMessage] = useState('Tap a seal to open one commitment promise.');
  const [openedVault, setOpenedVault] = useState(0);
  const [checks, setChecks] = useState(Array(weeklyPlan.length).fill(false));
  const [introVisible, setIntroVisible] = useState(true);
  const [musicOn, setMusicOn] = useState(false);
  const [activeScene, setActiveScene] = useState('top');
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderProgress, setLoaderProgress] = useState(0);
  const [loaderChapter, setLoaderChapter] = useState(loaderChapters[0]);
  const [atmosphereMode, setAtmosphereMode] = useState('petals');
  const [signature, setSignature] = useState('shannu');
  const [certificateDate, setCertificateDate] = useState('');
  const [certificateReady, setCertificateReady] = useState(false);
  const [reactorEnergy, setReactorEnergy] = useState(15);
  const [orbitHearts, setOrbitHearts] = useState([]);
  const [orbitScore, setOrbitScore] = useState(0);
  const holdTimerRef = useRef(null);

  const skyRef = useRef(null);
  const waveRef = useRef(null);
  const revealRef = useRef([]);
  const audioCtxRef = useRef(null);

  useEffect(() => {
    let value = 0;
    const timer = setInterval(() => {
      value += 2;
      if (value > 100) value = 100;
      setLoaderProgress(value);

      const chapterIndex = Math.min(
        loaderChapters.length - 1,
        Math.floor((value / 100) * loaderChapters.length)
      );
      setLoaderChapter(loaderChapters[chapterIndex]);

      if (value >= 100) {
        clearInterval(timer);
        setTimeout(() => setLoaderVisible(false), 500);
      }
    }, 45);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let line = 0;
    let char = 0;
    let removing = false;
    let timer;

    const tick = () => {
      const active = typedLines[line];

      if (!removing) {
        setTypedText(active.slice(0, char + 1));
        char += 1;

        if (char === active.length) {
          removing = true;
          timer = setTimeout(tick, 1200);
          return;
        }
        timer = setTimeout(tick, 48);
        return;
      }

      setTypedText(active.slice(0, Math.max(0, char - 1)));
      char -= 1;

      if (char <= 0) {
        removing = false;
        line = (line + 1) % typedLines.length;
        char = 0;
      }

      timer = setTimeout(tick, 25);
    };

    tick();

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveScene(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );

    scenes.forEach((id) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      const mx = (event.clientX / window.innerWidth - 0.5) * 2;
      const my = (event.clientY / window.innerHeight - 0.5) * 2;
      document.documentElement.style.setProperty('--mx', mx.toFixed(3));
      document.documentElement.style.setProperty('--my', my.toFixed(3));
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    if (!musicOn) return undefined;
    let flip = false;
    const timer = setInterval(() => {
      chime(audioCtxRef, flip ? 232 : 278, 0.012);
      flip = !flip;
    }, 900);
    return () => clearInterval(timer);
  }, [musicOn]);

  useEffect(() => {
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

    revealRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const wave = waveRef.current;
    if (!wave) return undefined;
    const ctx = wave.getContext('2d');

    const resize = () => {
      wave.width = wave.clientWidth * window.devicePixelRatio;
      wave.height = 120 * window.devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    let t = 0;
    let rafId;
    const draw = () => {
      t += 0.03;
      const w = wave.width;
      const h = wave.height;
      const mid = h / 2;
      const amp = (meterValue / 100) * (h * 0.22);

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 3 * window.devicePixelRatio;
      ctx.strokeStyle = 'rgba(255, 196, 228, 0.95)';
      ctx.beginPath();

      for (let x = 0; x <= w; x += 4) {
        const y = mid + Math.sin(x * 0.012 + t) * amp * 0.6 + Math.sin(x * 0.024 + t * 1.7) * amp * 0.4;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.stroke();
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [meterValue]);

  useEffect(() => {
    const index = meterValue < 30 ? 0 : meterValue < 60 ? 1 : meterValue < 85 ? 2 : 3;
    setMeterText(meterStates[index]);
  }, [meterValue]);

  useEffect(() => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (AudioCtx) {
      audioCtxRef.current = new AudioCtx();
      const unlock = () => {
        if (audioCtxRef.current?.state === 'suspended') {
          audioCtxRef.current.resume();
        }
      };
      window.addEventListener('pointerdown', unlock, { once: true });
      return () => {
        window.removeEventListener('pointerdown', unlock);
        audioCtxRef.current?.close();
      };
    }

    return undefined;
  }, []);

  useEffect(() => {
    let value = 0;
    const target = 100;
    const timer = setInterval(() => {
      value += 2;
      setEffortCount(value);
      if (value >= target) {
        clearInterval(timer);
      }
    }, 35);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let mins = 0;
    const timer = setInterval(() => {
      mins += 1;
      setEffortMinutes(mins);
      if (mins >= 240) clearInterval(timer);
    }, 120);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onMove = (event) => {
      if (Math.random() > 0.26) return;

      const heart = document.createElement('span');
      heart.className = 'heart-trail';
      heart.textContent = '❤';
      heart.style.left = `${event.clientX}px`;
      heart.style.top = `${event.clientY}px`;
      heart.style.fontSize = `${10 + Math.random() * 8}px`;
      heart.style.opacity = `${0.55 + Math.random() * 0.45}`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 950);
    };

    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  useEffect(() => {
    const sky = skyRef.current;
    if (!sky) return undefined;

    const ctx = sky.getContext('2d');
    const dots = [];

    const resize = () => {
      sky.width = window.innerWidth;
      sky.height = window.innerHeight;
    };

    resize();

    const count = atmosphereMode === 'rain' ? 240 : 180;
    for (let i = 0; i < count; i += 1) {
      dots.push({
        x: Math.random() * sky.width,
        y: Math.random() * sky.height,
        r: Math.random() * 1.9 + 0.4,
        s: atmosphereMode === 'rain' ? Math.random() * 6 + 8 : Math.random() * 0.45 + 0.09,
        a: Math.random() * 0.6 + 0.12,
        drift: Math.random() * 0.8 + 0.2
      });
    }

    let rafId;
    let tick = 0;
    const animate = () => {
      tick += 0.03;
      ctx.clearRect(0, 0, sky.width, sky.height);
      dots.forEach((dot) => {
        if (atmosphereMode === 'rain') {
          dot.y += dot.s;
          if (dot.y > sky.height + 10) {
            dot.y = -10;
            dot.x = Math.random() * sky.width;
          }
          ctx.beginPath();
          ctx.strokeStyle = `rgba(220, 236, 255, ${Math.min(0.9, dot.a + 0.15)})`;
          ctx.lineWidth = 1.2;
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(dot.x - 2, dot.y + dot.s * 1.6);
          ctx.stroke();
        } else {
          dot.y -= dot.s;
          dot.x += Math.sin(tick + dot.y * 0.01) * dot.drift * 0.2;
          if (dot.y < -8) {
            dot.y = sky.height + 8;
            dot.x = Math.random() * sky.width;
          }
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 220, 235, ${dot.a})`;
          ctx.ellipse(dot.x, dot.y, dot.r * 1.4, dot.r, Math.sin(dot.y * 0.02), 0, Math.PI * 2);
          ctx.fill();
        }
        if (dot.x < -10) dot.x = sky.width + 10;
        if (dot.x > sky.width + 10) dot.x = -10;
      });

      rafId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
    };
  }, [atmosphereMode]);

  useEffect(() => {
    const spawn = setInterval(() => {
      const id = Date.now() + Math.random();
      const item = {
        id,
        x: 8 + Math.random() * 84,
        size: 20 + Math.random() * 22,
        drift: (Math.random() - 0.5) * 28,
        duration: 4200 + Math.random() * 2600
      };
      setOrbitHearts((prev) => [...prev.slice(-14), item]);
      setTimeout(() => {
        setOrbitHearts((prev) => prev.filter((h) => h.id !== id));
      }, item.duration + 80);
    }, 900);

    return () => clearInterval(spawn);
  }, []);

  const getToday = () =>
    new Date().toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

  const downloadCertificate = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 1600;
    canvas.height = 1000;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#3c0c26');
    gradient.addColorStop(0.55, '#7d1d4d');
    gradient.addColorStop(1, '#b73777');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
    for (let i = 0; i < 150; i += 1) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const r = Math.random() * 2 + 0.5;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.strokeStyle = 'rgba(255, 227, 242, 0.8)';
    ctx.lineWidth = 6;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    ctx.strokeStyle = 'rgba(255, 227, 242, 0.35)';
    ctx.lineWidth = 2;
    ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffe8f6';
    ctx.font = '700 64px Georgia';
    ctx.fillText('CERTIFICATE OF SINCERE EFFORT', canvas.width / 2, 180);

    ctx.font = '500 34px Segoe UI';
    ctx.fillStyle = '#ffd6ec';
    ctx.fillText('A heartfelt commitment to repair trust through actions', canvas.width / 2, 250);

    const lines = [
      `This certifies a sincere apology journey for Jiya Rani Madam Ji.`,
      `From: ${signature || 'shannu'}`,
      `Date: ${certificateDate || getToday()}`,
      `Challenge Progress: ${weeklyProgress}%`,
      `Apology Flowers Planted: ${flowers.length}`,
      `Atmosphere Mode: ${atmosphereMode === 'rain' ? 'Rain' : 'Petals'}`
    ];

    ctx.textAlign = 'left';
    ctx.font = '600 38px Segoe UI';
    ctx.fillStyle = '#fff2fa';
    let y = 390;
    lines.forEach((line) => {
      ctx.fillText(line, 160, y);
      y += 88;
    });

    ctx.textAlign = 'right';
    ctx.font = 'italic 44px Georgia';
    ctx.fillStyle = '#ffe7f5';
    ctx.fillText(signature || 'shannu', canvas.width - 160, 860);

    ctx.textAlign = 'left';
    ctx.font = '600 24px Segoe UI';
    ctx.fillStyle = '#ffd4ea';
    ctx.fillText('Signed with accountability, consistency, and respect.', 160, 920);

    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'jiya-rani-madam-ji-effort-certificate.png';
    a.click();
  };

  const meterFill = `${meterValue}%`;

  const addFlower = () => {
    setFlowers((prev) => {
      const next = [...prev, { id: Date.now() + Math.random(), hue: Math.random() * 30 - 15 }];
      return next.length > 36 ? next.slice(next.length - 36) : next;
    });
    chime(audioCtxRef, 420 + Math.random() * 90, 0.07);
  };

  const openSeal = (idx) => {
    setVaultMessage(vaultNotes[idx % vaultNotes.length]);
    setOpenedVault((prev) => prev + 1);
    chime(audioCtxRef, 620 + idx * 10, 0.06);
  };

  const confettiBurst = () => {
    const colors = ['#ffd4ea', '#ffb0d4', '#ff86bc', '#ffe8f5'];

    for (let i = 0; i < 110; i += 1) {
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
  };

  const checkedCount = checks.filter(Boolean).length;
  const weeklyProgress = Math.round((checkedCount / checks.length) * 100);
  const reactorMessage =
    reactorEnergy < 35
      ? 'Warming up my apology with accountability.'
      : reactorEnergy < 70
        ? 'My apology is deeper, calmer, and more responsible.'
        : 'Full sincerity mode: accepting fault and proving change through action.';

  const startReactorCharge = () => {
    if (holdTimerRef.current) return;
    holdTimerRef.current = setInterval(() => {
      setReactorEnergy((prev) => (prev >= 100 ? 100 : prev + 2));
    }, 45);
  };

  const stopReactorCharge = () => {
    if (holdTimerRef.current) {
      clearInterval(holdTimerRef.current);
      holdTimerRef.current = null;
    }
  };

  const collectOrbitHeart = (id) => {
    setOrbitHearts((prev) => prev.filter((h) => h.id !== id));
    setOrbitScore((prev) => (prev >= 99 ? 100 : prev + 5));
    chime(audioCtxRef, 540 + Math.random() * 120, 0.05);
  };

  return (
    <>
      {loaderVisible && (
        <div className="cine-loader">
          <div className="cine-loader__card">
            <p className="cine-loader__label">Crafting A Sincere Apology Experience</p>
            <h2>{loaderChapter}</h2>
            <div className="cine-loader__bar">
              <div className="cine-loader__fill" style={{ width: `${loaderProgress}%` }} />
            </div>
            <p className="cine-loader__progress">{loaderProgress}% complete</p>
          </div>
        </div>
      )}

      {!loaderVisible && introVisible && (
        <div className="intro">
          <div className="intro__card">
            <p>For Jiya Rani Madam Ji</p>
            <h2>The Most Honest Sorry</h2>
            <p>I made this to show effort, accountability, and real intention to change.</p>
            <button
              className="btn btn--primary"
              onClick={() => {
                setIntroVisible(false);
                setMusicOn(true);
                chime(audioCtxRef, 720, 0.08);
              }}
            >
              Enter Apology Experience
            </button>
          </div>
        </div>
      )}

      <canvas id="sky" ref={skyRef} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <div className="ribbon" aria-hidden="true" />
      <aside className="scene-rail" aria-label="Scene progress">
        {scenes.map((id, idx) => (
          <button
            key={id}
            type="button"
            className={`scene-dot ${activeScene === id ? 'is-active' : ''}`}
            aria-label={`Go to scene ${idx + 1}`}
            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </aside>
      <button
        className="music-toggle"
        type="button"
        onClick={() => {
          setMusicOn((prev) => !prev);
          chime(audioCtxRef, musicOn ? 420 : 620, 0.06);
        }}
      >
        {musicOn ? 'Music On' : 'Music Off'}
      </button>
      <div className="atmosphere-toggle" role="group" aria-label="Atmosphere mode">
        <button
          type="button"
          className={`atmosphere-btn ${atmosphereMode === 'petals' ? 'is-active' : ''}`}
          onClick={() => setAtmosphereMode('petals')}
        >
          Petals
        </button>
        <button
          type="button"
          className={`atmosphere-btn ${atmosphereMode === 'rain' ? 'is-active' : ''}`}
          onClick={() => setAtmosphereMode('rain')}
        >
          Rain
        </button>
      </div>

      <header className="hero shell" id="top" ref={(el) => (revealRef.current[0] = el)}>
        <p className="eyebrow reveal show">This is all effort, all heart, no excuses</p>
        <h1 className="reveal show delay-1">Jiya Rani Madam Ji, I Am Truly Sorry</h1>
        <p className="lead reveal show delay-2">
          I am here to accept every mistake and every fault I made. I hurt you, and I own that completely.
          This page is my effort to show how seriously I want to repair what I broke.
        </p>
        <div className="hero__actions reveal show delay-3">
          <a href="#letter" className="btn btn--primary">Read My Heart</a>
          <a href="#constellation" className="btn btn--ghost">Open Our Sky</a>
        </div>
        <button
          className="down"
          aria-label="Scroll to letter"
          onClick={() => document.querySelector('#letter')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Scroll
        </button>
      </header>

      <main>
        <section className="section shell reveal" id="letter" ref={(el) => (revealRef.current[1] = el)}>
          <h2>My Honest Confession</h2>
          <p>
            Jiya Rani Madam Ji, I made mistakes that I cannot justify. I said things I should never have said,
            and I acted in ways that made your heart heavy. You gave trust, and I failed to protect it.
            I accept this fully.
          </p>
          <p>
            I am sorry for my behavior, my carelessness, and every moment where you felt unloved
            because of me. No excuses. No blame. Only truth.
          </p>
          <div className="typebox" aria-live="polite">
            <span>{typedText}</span>
            <span className="cursor">|</span>
          </div>
        </section>

        <section className="section split" id="constellation">
          <article className="shell reveal" ref={(el) => (revealRef.current[2] = el)}>
            <h2>Memory Constellation</h2>
            <p>Tap each star. Every star carries one truth I should have lived by.</p>
            <p className="star-message">{starMessage}</p>
          </article>

          <article className="shell constellation reveal delay-1" ref={(el) => (revealRef.current[3] = el)}>
            {Array.from({ length: 16 }).map((_, i) => (
              <button
                key={i}
                type="button"
                className="star"
                style={{
                  left: `${8 + ((i * 37) % 84)}%`,
                  top: `${10 + ((i * 29) % 78)}%`,
                  animationDelay: `${(i % 6) * 0.18}s`
                }}
                aria-label="Memory star"
                onClick={() => {
                  setStarMessage(starNotes[i % starNotes.length]);
                  chime(audioCtxRef, 520 + Math.random() * 140, 0.06);
                }}
              />
            ))}
          </article>
        </section>

        <section className="section shell reveal" id="repair" ref={(el) => (revealRef.current[4] = el)}>
          <h2>Repair Plan, Not Just Apology</h2>
          <div className="timeline">
            {timelineItems.map((item, idx) => (
              <button
                key={item.label}
                type="button"
                className={`timeline__item ${activeTimeline === idx ? 'is-active' : ''}`}
                onClick={() => {
                  setActiveTimeline(idx);
                  setTimelineEcho(item.detail);
                  chime(audioCtxRef, 680, 0.05);
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
          <p className="timeline__echo">{timelineEcho}</p>
        </section>

        <section className="section shell reveal" id="challenge" ref={(el) => (revealRef.current[5] = el)}>
          <h2>7-Day Repair Challenge</h2>
          <p>Real apology means trackable effort. Mark each commitment as you complete it.</p>
          <div className="challenge-grid">
            {weeklyPlan.map((step, idx) => (
              <button
                key={step}
                type="button"
                className={`challenge-item ${checks[idx] ? 'is-done' : ''}`}
                onClick={() => {
                  setChecks((prev) => prev.map((v, i) => (i === idx ? !v : v)));
                  chime(audioCtxRef, checks[idx] ? 430 : 700, 0.05);
                }}
              >
                <span>{checks[idx] ? 'Done' : 'Pending'}</span>
                <strong>{step}</strong>
              </button>
            ))}
          </div>
          <div className="challenge-progress">
            <div className="challenge-progress__bar" style={{ width: `${weeklyProgress}%` }} />
          </div>
          <p className="vault-message">Progress: {weeklyProgress}% ({checkedCount}/{checks.length})</p>
        </section>

        <section className="section shell reveal" id="effort" ref={(el) => (revealRef.current[6] = el)}>
          <h2>Effort Meter: {effortCount}%</h2>
          <p>This is not a one-day apology. This is a daily effort commitment.</p>
          <div className="stats">
            <div className="stat-box">
              <strong>{effortMinutes}</strong>
              <span>effort minutes shown</span>
            </div>
            <div className="stat-box">
              <strong>{flowers.length}</strong>
              <span>apology flowers planted</span>
            </div>
            <div className="stat-box">
              <strong>{openedVault}</strong>
              <span>commitment seals opened</span>
            </div>
          </div>
          <div className="effort-grid">
            {effortCards.map((card) => (
              <article key={card} className="effort-card">{card}</article>
            ))}
          </div>
        </section>

        <section className="section shell reveal" id="vault" ref={(el) => (revealRef.current[7] = el)}>
          <h2>Commitment Vault</h2>
          <p>Open seals one by one. Every seal carries a non-negotiable promise.</p>
          <div className="vault-grid">
            {Array.from({ length: 9 }).map((_, idx) => (
              <button key={idx} type="button" className="vault-btn" onClick={() => openSeal(idx)}>
                Seal {idx + 1}
              </button>
            ))}
          </div>
          <p className="vault-message">{vaultMessage}</p>
        </section>

        <section className="section shell reveal" id="meterZone" ref={(el) => (revealRef.current[8] = el)}>
          <h2>Apology Resonance Meter</h2>
          <p>Move this slider and watch the apology become deeper and more committed.</p>
          <label htmlFor="meter" className="sr-only">Apology resonance meter</label>
          <input
            id="meter"
            type="range"
            min="0"
            max="100"
            value={meterValue}
            onChange={(e) => setMeterValue(Number(e.target.value))}
          />
          <div className="meter-row">
            <div className="meter-fill" style={{ width: meterFill }} />
          </div>
          <canvas ref={waveRef} className="wave-canvas" aria-hidden="true" />
          <p className="meter-text">{meterText}</p>
        </section>

        <section className="section split" id="gardenArea">
          <article className="shell reveal" ref={(el) => (revealRef.current[9] = el)}>
            <h2>Forgiveness Garden</h2>
            <p>
              Every click plants a flower that carries one apology. Keep planting,
              and let this garden show how serious I am about fixing what I broke.
            </p>
            <button className="btn btn--primary" onClick={addFlower}>Plant One Apology</button>
            <p className="garden-count">Flowers planted: {flowers.length}</p>
          </article>

          <article className="shell garden reveal delay-1" ref={(el) => (revealRef.current[10] = el)}>
            {flowers.map((flower) => (
              <div
                key={flower.id}
                className="flower"
                title="One apology planted"
                style={{ filter: `hue-rotate(${flower.hue}deg)` }}
              />
            ))}
          </article>
        </section>

        <section className="section shell reveal" id="certificate" ref={(el) => (revealRef.current[11] = el)}>
          <h2>Effort Certificate</h2>
          <p>A promise document that marks this apology as effort, not words.</p>
          <div className="certificate-controls">
            <label htmlFor="sigInput">Your Signature</label>
            <input
              id="sigInput"
              type="text"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Type your name"
            />
            <button
              className="btn btn--primary"
              onClick={() => {
                setCertificateDate(getToday());
                setCertificateReady(true);
                chime(audioCtxRef, 700, 0.08);
              }}
            >
              Generate Certificate
            </button>
          </div>
          {certificateReady && (
            <article className="certificate-card">
              <h3>Certificate Of Sincere Effort</h3>
              <p>This certifies a real commitment to repair trust through action and consistency.</p>
              <p><strong>For:</strong> Jiya Rani Madam Ji</p>
              <p><strong>From:</strong> {signature || 'shannu'}</p>
              <p><strong>Date:</strong> {certificateDate}</p>
              <p><strong>Challenge Progress:</strong> {weeklyProgress}%</p>
              <p><strong>Flowers Planted:</strong> {flowers.length}</p>
              <div className="certificate-actions">
                <button className="btn btn--ghost" onClick={downloadCertificate}>Download PNG Certificate</button>
              </div>
            </article>
          )}
        </section>

        <section className="section shell reveal" id="reactor" ref={(el) => (revealRef.current[12] = el)}>
          <h2>Heart Pulse Reactor</h2>
          <p>Press and hold to charge this apology with full responsibility.</p>
          <div className="reactor-wrap">
            <div className="reactor-orb" style={{ '--energy': `${reactorEnergy}%` }}>
              <span>{reactorEnergy}%</span>
            </div>
            <div className="reactor-side">
              <button
                className="btn btn--primary"
                onMouseDown={startReactorCharge}
                onMouseUp={stopReactorCharge}
                onMouseLeave={stopReactorCharge}
                onTouchStart={startReactorCharge}
                onTouchEnd={stopReactorCharge}
              >
                Hold To Charge
              </button>
              <button className="btn btn--ghost" onClick={() => setReactorEnergy(15)}>Reset</button>
              <p className="vault-message">{reactorMessage}</p>
            </div>
          </div>
        </section>

        <section className="section shell reveal orbit" id="orbit" ref={(el) => (revealRef.current[13] = el)}>
          <h2>Apology Orbit Lab</h2>
          <p>Catch the floating hearts. Each one adds sincerity energy to this apology.</p>
          <div className="orbit-stage">
            {orbitHearts.map((heart) => (
              <button
                key={heart.id}
                type="button"
                className="orbit-heart"
                style={{
                  left: `${heart.x}%`,
                  width: `${heart.size}px`,
                  height: `${heart.size}px`,
                  '--drift': `${heart.drift}px`,
                  '--dur': `${heart.duration}ms`
                }}
                onClick={() => collectOrbitHeart(heart.id)}
                aria-label="Collect sincerity heart"
              >
                ❤
              </button>
            ))}
            <div className="orbit-hud">
              <span>Sincerity Collected: {orbitScore}%</span>
              <div className="orbit-bar"><div style={{ width: `${orbitScore}%` }} /></div>
              <small>{orbitScore >= 70 ? 'Unlocked: Deep sincerity mode.' : 'Collect hearts to unlock deep sincerity mode.'}</small>
            </div>
          </div>
        </section>

        <section className="section shell reveal" id="final" ref={(el) => (revealRef.current[14] = el)}>
          <h2>If Your Heart Says Forgived</h2>
          <p>
            No pressure. I respect your feelings and your timing, always.
          </p>
          <div className="hero__actions">
            <button
              className="btn btn--primary"
              onClick={() => {
                confettiBurst();
                chime(audioCtxRef, 760, 0.1);
                setTimeout(() => redirectWhatsApp('forgived'), 650);
              }}
            >
              Forgived
            </button>
            <button
              className="btn btn--ghost"
              onClick={() => {
                chime(audioCtxRef, 500, 0.06);
                setTimeout(() => redirectWhatsApp('need time'), 220);
              }}
            >
              Not Forgived
            </button>
          </div>
        </section>
      </main>

      <footer>
        <p>Made with sincerity and effort for Jiya Rani Madam Ji.</p>
        <a href="#top">Back to top</a>
      </footer>
    </>
  );
}
