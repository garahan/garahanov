---
layout: home
author_profile: true
---

<!-- LOADER -->
<div id="hp-loader">
  <div class="loader-logo-wrap">
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="36" cy="36" r="33" stroke="#d4a017" stroke-width="1.5" class="loader-ring"/>
    </svg>
    <span class="loader-initials">BG</span>
  </div>
  <div class="loader-bar-wrap"><div class="loader-bar-fill"></div></div>
</div>

<!-- CURSOR -->
<div id="hp-cursor-dot"></div>
<div id="hp-cursor-ring"></div>

<!-- SCROLL PROGRESS -->
<div id="hp-progress"></div>

<!-- PARTICLE CANVAS -->
<canvas id="hp-canvas"></canvas>

<!-- ═══════════════════════════ HERO ═══════════════════════════ -->
<section class="hp-hero">
  <div class="hp-hero__bg"></div>
  <div class="hp-hero__inner">
    <p class="hp-eyebrow">
      <span class="eyebrow-line"></span>
      <span class="eyebrow-dot"></span>
      <span>Tokyo · Researcher · Engineer · Leader</span>
    </p>
    <h1 class="hp-name">
      <span class="hp-name__first">Begench</span>
      <span class="hp-name__last">Garahanov</span>
    </h1>
    <p class="hp-typed-wrap">
      <span id="hp-typed"></span><span class="hp-blink">|</span>
    </p>
    <div class="hp-chips">
      <span class="hp-chip"><span class="chip-dot chip-dot--green"></span>Waseda University · MA</span>
      <span class="hp-chip"><span class="chip-dot chip-dot--blue"></span>Apple Japan · Expert</span>
      <span class="hp-chip"><span class="chip-dot chip-dot--gold"></span>MEXT Scholar</span>
      <span class="hp-chip">🏃 Tokyo Marathon '24</span>
      <span class="hp-chip">📊 CFA L1 Candidate</span>
    </div>
    <div class="hp-cta">
      <a href="/about/" class="hp-btn hp-btn--primary" data-magnetic>
        <span>About Me</span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2.5 7.5h10M8.5 3.5l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
      <a href="/cv/" class="hp-btn hp-btn--ghost" data-magnetic>
        <span>View CV</span>
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M3 12L12 3M12 3H7M12 3v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </div>
    <div class="hp-scroll-hint">
      <span>scroll</span>
      <div class="scroll-line"><div class="scroll-line__inner"></div></div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════ STATS ══════════════════════════ -->
<section class="hp-stats">
  <div class="hp-stats__grid">
    <div class="hp-stat">
      <span class="hp-stat__num"><span class="count-val" data-target="960">0</span></span>
      <span class="hp-stat__bar"><span class="stat-bar-fill" style="--pct:96%"></span></span>
      <span class="hp-stat__label">TOEIC Score</span>
    </div>
    <div class="hp-stat">
      <span class="hp-stat__num"><span class="count-val" data-target="113">0</span></span>
      <span class="hp-stat__bar"><span class="stat-bar-fill" style="--pct:94%"></span></span>
      <span class="hp-stat__label">TOEFL iBT</span>
    </div>
    <div class="hp-stat">
      <span class="hp-stat__num">N1</span>
      <span class="hp-stat__bar"><span class="stat-bar-fill" style="--pct:100%"></span></span>
      <span class="hp-stat__label">JLPT Japanese</span>
    </div>
    <div class="hp-stat">
      <span class="hp-stat__num"><span class="count-val" data-target="5">0</span></span>
      <span class="hp-stat__bar"><span class="stat-bar-fill" style="--pct:100%"></span></span>
      <span class="hp-stat__label">Languages</span>
    </div>
    <div class="hp-stat">
      <span class="hp-stat__num"><span class="count-val" data-target="42">0</span><span class="stat-unit">km</span></span>
      <span class="hp-stat__bar"><span class="stat-bar-fill" style="--pct:84%"></span></span>
      <span class="hp-stat__label">Tokyo Marathon</span>
    </div>
  </div>
</section>

<!-- ═══════════════════════ ABOUT SNAPSHOT ═════════════════════ -->
<section class="hp-about">
  <div class="hp-about__left">
    <h2 class="hp-section-title">Profile</h2>
    <p class="hp-about__text">I bring together a rare trifecta — <strong>engineering rigor</strong> from Tokai University's Applied Chemistry program, <strong>quantitative policy analysis</strong> from Waseda's Graduate School of Social Sciences, and <strong>real-world leadership</strong> at Apple Japan.</p>
    <p class="hp-about__text">My research applies Python and Stata to large-scale administrative data for policy prediction. Currently advancing toward CFA Level I, because the most interesting problems sit at the intersections of disciplines.</p>
    <div class="hp-badges">
      <span class="hp-badge hp-badge--gold">🏆 MEXT Scholar</span>
      <span class="hp-badge hp-badge--blue">🍎 Apple Japan</span>
      <span class="hp-badge hp-badge--green">🎓 Waseda MA</span>
      <span class="hp-badge hp-badge--red">🏅 KHI Scholarship</span>
      <span class="hp-badge hp-badge--gray">🏃 Marathon Finisher</span>
      <span class="hp-badge hp-badge--purple">🏆 Best Presentation</span>
    </div>
  </div>
  <div class="hp-about__right">
    <div class="hp-tools">
      <p class="hp-tools__title">Technical Stack</p>
      <div class="hp-tool-row">
        <span class="tool-name">Python</span>
        <div class="tool-bar"><div class="tool-fill" data-w="88%"></div></div>
        <span class="tool-pct">Advanced</span>
      </div>
      <div class="hp-tool-row">
        <span class="tool-name">Stata</span>
        <div class="tool-bar"><div class="tool-fill" data-w="85%"></div></div>
        <span class="tool-pct">Advanced</span>
      </div>
      <div class="hp-tool-row">
        <span class="tool-name">Econometrics</span>
        <div class="tool-bar"><div class="tool-fill" data-w="82%"></div></div>
        <span class="tool-pct">Graduate</span>
      </div>
      <div class="hp-tool-row">
        <span class="tool-name">UniSim</span>
        <div class="tool-bar"><div class="tool-fill" data-w="70%"></div></div>
        <span class="tool-pct">Proficient</span>
      </div>
      <div class="hp-tool-row">
        <span class="tool-name">CFA Finance</span>
        <div class="tool-bar"><div class="tool-fill" data-w="55%"></div></div>
        <span class="tool-pct">In Progress</span>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════ PILLARS ════════════════════════ -->
<section class="hp-pillars">
  <h2 class="hp-section-title">What I Do</h2>
  <div class="hp-pillars__grid">

    <div class="hp-card js-tilt">
      <div class="hp-card__glow"></div>
      <div class="hp-card__icon-wrap"><span class="hp-card__icon">📐</span></div>
      <h3>Quantitative Research</h3>
      <p>Econometric modeling and large-scale data analysis for policy prediction. Fusing engineering systems thinking with social science at Waseda's Graduate School.</p>
      <ul class="hp-card__tags"><li>Python</li><li>Stata</li><li>Econometrics</li><li>Policy</li></ul>
      <a href="/projects/" class="hp-card__link">Explore Projects <span>→</span></a>
    </div>

    <div class="hp-card js-tilt">
      <div class="hp-card__glow"></div>
      <div class="hp-card__icon-wrap"><span class="hp-card__icon">🍎</span></div>
      <h3>Industry Leadership</h3>
      <p>Technical Expert at Apple Japan — driving data-driven team performance analysis, mentoring, and process optimization in Tokyo's most demanding retail environment.</p>
      <ul class="hp-card__tags"><li>Leadership</li><li>Analytics</li><li>Mentoring</li><li>Strategy</li></ul>
      <a href="/about/" class="hp-card__link">Learn More <span>→</span></a>
    </div>

    <div class="hp-card js-tilt">
      <div class="hp-card__glow"></div>
      <div class="hp-card__icon-wrap"><span class="hp-card__icon">🌏</span></div>
      <h3>Global Communication</h3>
      <p>Japanese N1 · English TOEFL 113 · Russian L1 · Turkmen · Turkish. Former International Relations Officer and student football team captain.</p>
      <ul class="hp-card__tags"><li>Japanese N1</li><li>TOEFL 113</li><li>Russian L1</li><li>5 Languages</li></ul>
      <a href="/cv/" class="hp-card__link">Full Profile <span>→</span></a>
    </div>

  </div>
</section>

<!-- ═══════════════════════════ JOURNEY ════════════════════════ -->
<section class="hp-journey">
  <h2 class="hp-section-title">Journey</h2>
  <div class="hp-timeline">
    <div class="hp-tl-track"><div class="hp-tl-progress" id="tl-progress"></div></div>

    <div class="hp-tl-item">
      <div class="hp-tl-dot"><span>2016</span></div>
      <div class="hp-tl-card">
        <div class="tl-card__header">
          <span class="tl-tag">⚗️ Engineering</span>
          <span class="tl-period">2016 – 2022</span>
        </div>
        <h4>Tokai University · Applied Chemistry (BEng)</h4>
        <p>Built a foundation in thermodynamics, reaction engineering, and material science. Supported throughout by the <strong>Kawasaki Heavy Industries Scholarship</strong> — one of Japan's most prestigious engineering awards.</p>
        <div class="tl-card__meta">
          <span>🏆 KHI Scholarship</span><span>⚗️ Applied Chemistry</span><span>🇯🇵 Kanagawa</span>
        </div>
      </div>
    </div>

    <div class="hp-tl-item">
      <div class="hp-tl-dot"><span>2022</span></div>
      <div class="hp-tl-card">
        <div class="tl-card__header">
          <span class="tl-tag">🌐 International</span>
          <span class="tl-period">2022 – 2023</span>
        </div>
        <h4>International Relations Officer · ETUT National University</h4>
        <p>Managed cross-border academic partnerships and facilitated institutional policy. Presented at the International SDGs Conference, earning the <strong>Best Presentation Award</strong>.</p>
        <div class="tl-card__meta">
          <span>🏅 Best Presentation</span><span>🤝 Cross-border</span><span>🌍 Ashgabat</span>
        </div>
      </div>
    </div>

    <div class="hp-tl-item">
      <div class="hp-tl-dot"><span>2023</span></div>
      <div class="hp-tl-card">
        <div class="tl-card__header">
          <span class="tl-tag">📚 Graduate</span>
          <span class="tl-period">2023 – Present</span>
        </div>
        <h4>Waseda University · Policy Science MA</h4>
        <p><strong>MEXT Scholar</strong> at Waseda's Graduate School of Social Sciences. Research focuses on mathematical modeling for policy prediction using large-scale data with Python and Stata.</p>
        <div class="tl-card__meta">
          <span>🏆 MEXT Scholar</span><span>🐍 Python · Stata</span><span>🏛️ Shinjuku, Tokyo</span>
        </div>
      </div>
    </div>

    <div class="hp-tl-item hp-tl-item--current">
      <div class="hp-tl-dot"><span>2024</span></div>
      <div class="hp-tl-card">
        <div class="tl-card__header">
          <span class="tl-tag tl-tag--live">● Live Now</span>
          <span class="tl-period">2024 – Present</span>
        </div>
        <h4>Apple Japan, LLC · Technical Expert</h4>
        <p>Leading data-driven team performance analysis and mentoring in a multilingual, multicultural environment. Identifying operational challenges from quantitative metrics and designing improvements that maximize outcomes.</p>
        <div class="tl-card__meta">
          <span>🍎 Apple Japan</span><span>📊 Data Leadership</span><span>🏙️ Tokyo</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ═══════════════════════ LATEST WRITING ═════════════════════ -->
<h2 class="hp-writing-title">Latest Writing</h2>
<div class="hp-post-grid">
  <a href="/tokyo-marathon-2024/" class="hp-post-card">
    <span class="hp-post-card__cat">Running · Life</span>
    <span class="hp-post-card__title">Tokyo Marathon 2024</span>
    <span class="hp-post-card__excerpt">Running 42.2km through the streets of Tokyo — preparation, race day, and what the finish line really feels like.</span>
    <span class="hp-post-card__date">2025-06-10</span>
  </a>
  <a href="/life-between-two-worlds/" class="hp-post-card">
    <span class="hp-post-card__cat">Identity · Culture</span>
    <span class="hp-post-card__title">Life Between Two Worlds</span>
    <span class="hp-post-card__excerpt">On navigating identity, language, and belonging across cultures while building a life in Tokyo.</span>
    <span class="hp-post-card__date">2025-03-20</span>
  </a>
  <a href="/quantitative-methods-for-policy-analysis/" class="hp-post-card">
    <span class="hp-post-card__cat">Research · Policy</span>
    <span class="hp-post-card__title">Quantitative Methods for Policy Analysis</span>
    <span class="hp-post-card__excerpt">How econometric modeling bridges engineering intuition with social science precision in policy research.</span>
    <span class="hp-post-card__date">2025-01-15</span>
  </a>
  <a href="/from-chemistry-to-policy-science/" class="hp-post-card">
    <span class="hp-post-card__cat">Career · Reflection</span>
    <span class="hp-post-card__title">From Chemistry to Policy Science</span>
    <span class="hp-post-card__excerpt">The unlikely path from applied chemistry labs to policy research — why the pivot made perfect sense.</span>
    <span class="hp-post-card__date">2024-07-07</span>
  </a>
</div>

<!-- ═══════════════════════ CONTACT CTA ═════════════════════════ -->
<section class="hp-contact">
  <p class="hp-contact__sub">✦ Open to opportunities</p>
  <h2>Let's build something together.</h2>
  <p>Whether it's research collaboration, policy analysis, or conversations about data, leadership, and life in Tokyo — I'd love to connect.</p>
  <div class="hp-contact__links">
    <a href="mailto:garahanov@fuji.waseda.jp" class="hp-contact-btn hp-contact-btn--primary">✉ Send Email</a>
    <a href="https://www.linkedin.com/in/bgarahanov" class="hp-contact-btn hp-contact-btn--ghost" target="_blank" rel="noopener">LinkedIn →</a>
    <a href="https://github.com/garahan" class="hp-contact-btn hp-contact-btn--ghost" target="_blank" rel="noopener">GitHub →</a>
  </div>
</section>

<!-- ═══════════════════════════ SCRIPTS ════════════════════════ -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script>
(function() {
  'use strict';

  // ─── GSAP REGISTER ────────────────────────────────────────────
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // ─── LOADER ───────────────────────────────────────────────────
  var loader = document.getElementById('hp-loader');
  function hideLoader() {
    if (!loader) return;
    setTimeout(function() {
      loader.classList.add('out');
      setTimeout(function() { loader.style.display = 'none'; }, 650);
      initPage();
    }, 1600);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideLoader);
  } else {
    hideLoader();
  }

  // ─── PARTICLE SYSTEM ──────────────────────────────────────────
  function initParticles() {
    var canvas = document.getElementById('hp-canvas');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var W, H, particles = [], mouse = { x: -9999, y: -9999 };
    var PARTICLE_COUNT = 55, CONNECT_DIST = 120, MOUSE_DIST = 140;

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    window.addEventListener('mousemove', function(e) {
      mouse.x = e.clientX; mouse.y = e.clientY;
    });

    function Particle() {
      this.reset(true);
    }
    Particle.prototype.reset = function(init) {
      this.x  = Math.random() * W;
      this.y  = init ? Math.random() * H : (Math.random() > .5 ? -10 : H + 10);
      this.vx = (Math.random() - .5) * .35;
      this.vy = (Math.random() - .5) * .35;
      this.r  = Math.random() * 1.8 + .6;
      this.a  = Math.random() * .5 + .2;
    };
    Particle.prototype.update = function() {
      this.x += this.vx; this.y += this.vy;
      var dx = this.x - mouse.x, dy = this.y - mouse.y;
      var dist = Math.sqrt(dx*dx + dy*dy);
      if (dist < MOUSE_DIST) {
        var force = (MOUSE_DIST - dist) / MOUSE_DIST * .015;
        this.vx += dx / dist * force;
        this.vy += dy / dist * force;
      }
      this.vx *= .995; this.vy *= .995;
      if (this.x < -20 || this.x > W+20 || this.y < -20 || this.y > H+20) this.reset(false);
    };

    for (var i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < particles.length; i++) {
        particles[i].update();
        var p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(212,160,23,' + p.a + ')';
        ctx.fill();
        for (var j = i+1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x-q.x, dy = p.y-q.y;
          var d = Math.sqrt(dx*dx+dy*dy);
          if (d < CONNECT_DIST) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(212,160,23,' + ((1 - d/CONNECT_DIST) * .12) + ')';
            ctx.lineWidth = .6;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }
  initParticles();

  // ─── CUSTOM CURSOR ────────────────────────────────────────────
  function initCursor() {
    var dot  = document.getElementById('hp-cursor-dot');
    var ring = document.getElementById('hp-cursor-ring');
    if (!dot || !ring) return;
    var mx = 0, my = 0, rx = 0, ry = 0;

    document.addEventListener('mousemove', function(e) { mx = e.clientX; my = e.clientY; });

    (function loop() {
      rx += (mx - rx) * .12; ry += (my - ry) * .12;
      dot.style.left  = mx + 'px'; dot.style.top  = my + 'px';
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
      requestAnimationFrame(loop);
    })();

    var hoverEls = document.querySelectorAll('a, button, [data-magnetic], .hp-chip, .hp-card, .hp-post-card, .hp-btn');
    hoverEls.forEach(function(el) {
      el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
    });
    document.addEventListener('mouseleave', function() { dot.style.opacity='0'; ring.style.opacity='0'; });
    document.addEventListener('mouseenter', function() { dot.style.opacity='1'; ring.style.opacity='1'; });
  }

  // ─── SCROLL PROGRESS ──────────────────────────────────────────
  function initScrollProgress() {
    var bar = document.getElementById('hp-progress');
    if (!bar) return;
    function update() {
      var s = document.documentElement.scrollTop || document.body.scrollTop;
      var h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = (h > 0 ? (s/h*100) : 0) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
  }

  // ─── TYPED TEXT ───────────────────────────────────────────────
  function initTyped() {
    var el = document.getElementById('hp-typed');
    if (!el) return;
    var phrases = [
      'Policy Scientist & Econometrician.',
      'Technical Expert at Apple Japan.',
      'MEXT Scholar at Waseda University.',
      'Tokyo Marathon Finisher.',
      'Applied Chemistry Engineer.',
      'Multilingual Team Leader.'
    ];
    var pi = 0, ci = 0, deleting = false, pausing = false;
    function tick() {
      var phrase = phrases[pi];
      if (pausing) { pausing = false; setTimeout(tick, 1800); return; }
      if (!deleting) {
        el.textContent = phrase.slice(0, ++ci);
        if (ci === phrase.length) { deleting = true; pausing = true; setTimeout(tick, 80); return; }
        setTimeout(tick, 55);
      } else {
        el.textContent = phrase.slice(0, --ci);
        if (ci === 0) { deleting = false; pi = (pi+1) % phrases.length; setTimeout(tick, 400); return; }
        setTimeout(tick, 28);
      }
    }
    setTimeout(tick, 2000);
  }

  // ─── COUNTER ANIMATION ────────────────────────────────────────
  function initCounters() {
    var els = document.querySelectorAll('.count-val[data-target]');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var target = parseInt(el.dataset.target, 10);
        var start = 0, dur = 1400, startTime = null;
        function step(ts) {
          if (!startTime) startTime = ts;
          var progress = Math.min((ts - startTime) / dur, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target);
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target;
        }
        requestAnimationFrame(step);
        obs.unobserve(el);
      });
    }, { threshold: .5 });
    els.forEach(function(el) { obs.observe(el); });
  }

  // ─── SKILL BARS ───────────────────────────────────────────────
  function initSkillBars() {
    var fills = document.querySelectorAll('.tool-fill[data-w]');
    if (!fills.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        entry.target.style.width = entry.target.dataset.w;
        obs.unobserve(entry.target);
      });
    }, { threshold: .3 });
    fills.forEach(function(f) { obs.observe(f); });
  }

  // ─── STAT BARS ────────────────────────────────────────────────
  function initStatBars() {
    var fills = document.querySelectorAll('.stat-bar-fill');
    if (!fills.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (!entry.isIntersecting) return;
        var pct = getComputedStyle(entry.target).getPropertyValue('--pct').trim();
        entry.target.style.width = pct;
        obs.unobserve(entry.target);
      });
    }, { threshold: .3 });
    fills.forEach(function(f) { obs.observe(f); });
  }

  // ─── 3D CARD TILT ─────────────────────────────────────────────
  function initTilt() {
    document.querySelectorAll('.js-tilt').forEach(function(card) {
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left, y = e.clientY - rect.top;
        var cx = rect.width/2, cy = rect.height/2;
        var rx = (y - cy) / cy * -7;
        var ry = (x - cx) / cx * 7;
        card.style.transform = 'perspective(800px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-6px)';
        card.style.boxShadow = '0 20px 60px rgba(0,0,0,.5), 0 0 80px rgba(212,160,23,.06)';
      });
      card.addEventListener('mouseleave', function() {
        card.style.transform = '';
        card.style.boxShadow = '';
      });
    });
  }

  // ─── MAGNETIC BUTTONS ─────────────────────────────────────────
  function initMagnetic() {
    document.querySelectorAll('[data-magnetic]').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var rect = btn.getBoundingClientRect();
        var x = (e.clientX - rect.left - rect.width/2)  * .25;
        var y = (e.clientY - rect.top  - rect.height/2) * .25;
        btn.style.transform = 'translate(' + x + 'px,' + y + 'px) translateY(-3px)';
      });
      btn.addEventListener('mouseleave', function() { btn.style.transform = ''; });
    });
  }

  // ─── GSAP ANIMATIONS ──────────────────────────────────────────
  function initGSAP() {
    if (typeof gsap === 'undefined') return;

    // Hero sequence
    var tl = gsap.timeline({ delay: 1.7 });
    tl.to('.hp-eyebrow', { opacity:1, y:0, duration:.6, ease:'power3.out' }, 0)
      .from('.hp-name__first', { opacity:0, y:40, duration:.7, ease:'power3.out' }, .1)
      .from('.hp-name__last',  { opacity:0, y:40, duration:.7, ease:'power3.out' }, .22)
      .to('.hp-typed-wrap', { opacity:1, y:0, duration:.6, ease:'power3.out' }, .4)
      .to('.hp-chips',     { opacity:1, y:0, duration:.6, ease:'power3.out' }, .52)
      .to('.hp-cta',       { opacity:1, y:0, duration:.6, ease:'power3.out' }, .62)
      .to('.hp-scroll-hint',{ opacity:1, y:0, duration:.5, ease:'power3.out' }, .8);

    // Stats
    gsap.fromTo('.hp-stat', { opacity:0, y:30 }, {
      opacity:1, y:0, duration:.6, stagger:.08, ease:'power3.out',
      scrollTrigger: { trigger:'.hp-stats', start:'top 80%' }
    });

    // About section
    gsap.from('.hp-about__left', { opacity:0, x:-40, duration:.8, ease:'power3.out',
      scrollTrigger: { trigger:'.hp-about', start:'top 78%' }
    });
    gsap.from('.hp-about__right', { opacity:0, x:40, duration:.8, delay:.15, ease:'power3.out',
      scrollTrigger: { trigger:'.hp-about', start:'top 78%' }
    });

    // Cards
    gsap.fromTo('.hp-card', { opacity:0, y:50, scale:.97 }, {
      opacity:1, y:0, scale:1, duration:.7, stagger:.12, ease:'back.out(1.4)',
      scrollTrigger: { trigger:'.hp-pillars__grid', start:'top 80%' }
    });

    // Timeline items
    gsap.fromTo('.hp-tl-item', { opacity:0, x:-30 }, {
      opacity:1, x:0, duration:.65, stagger:.15, ease:'power3.out',
      scrollTrigger: { trigger:'.hp-timeline', start:'top 78%',
        onEnter: function() {
          var progress = document.getElementById('tl-progress');
          if (progress) { progress.style.height = '100%'; }
        }
      }
    });

    // Post cards
    gsap.fromTo('.hp-post-card', { opacity:0, y:30 }, {
      opacity:1, y:0, duration:.6, stagger:.1, ease:'power3.out',
      scrollTrigger: { trigger:'.hp-post-grid', start:'top 80%' }
    });

    // Contact CTA
    gsap.fromTo('.hp-contact', { opacity:0, y:40, scale:.98 }, {
      opacity:1, y:0, scale:1, duration:.8, ease:'back.out(1.2)',
      scrollTrigger: { trigger:'.hp-contact', start:'top 82%' }
    });
  }

  // ─── INIT ALL ─────────────────────────────────────────────────
  function initPage() {
    initCursor();
    initScrollProgress();
    initTyped();
    initCounters();
    initSkillBars();
    initStatBars();
    initTilt();
    initMagnetic();
    initGSAP();

    // Make nav links use custom cursor
    document.querySelectorAll('a, button').forEach(function(el) {
      el.addEventListener('mouseenter', function() { document.body.classList.add('cursor-hover'); });
      el.addEventListener('mouseleave', function() { document.body.classList.remove('cursor-hover'); });
    });
  }

})();
</script>
