import './style.css';

const app = document.querySelector('#app');

app.innerHTML = `
${navbar()}
${hero()}
${marquee()}
${bento()}
${timeline()}
${cases()}
${statsBar()}
${faq()}
${ctaSection()}
${footer()}
`;

init();

// ============================================================
//  COMPONENTS
// ============================================================

function navbar() {
  return `
  <nav class="navbar">
    <div class="container">
      <a href="#" class="nav-logo"><img src="/logo.png" alt="A2Z Flow"/>A2Z Flow<span class="brand-dot">.</span></a>
      <ul class="nav-links" id="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
      <div class="nav-right">
        <a href="mailto:support@a2zflow.in" class="btn btn-outline">Contact Us</a>
        <a href="#cta" class="btn btn-brand">Get a Demo</a>
      </div>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </nav>`;
}

function hero() {
  return `
  <section class="hero">
    <div class="hero-grid"></div>
    <div class="container">
      <div class="hero-content">
        <div class="hero-pill">
          <span class="pill-badge">NEW</span>
          AI-powered workflows for real businesses
        </div>
        <h1>We automate your<br/><span class="typed-text" id="typed-text">restaurant</span><span class="typed-cursor" id="typed-cursor"></span><br/>with AI workflows.</h1>
        <p class="hero-desc">A2Z Flow builds and deploys custom AI systems that take over manual tasks — ordering, scheduling, customer support, and more. Your business runs smarter.</p>
        <div class="hero-actions">
          <a href="#cta" class="btn btn-brand">
            Get Started
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#use-cases" class="btn btn-outline">See Use Cases</a>
        </div>
      </div>

      <div class="hero-visual reveal">
        <div class="hero-visual-header">
          <span class="dot" style="background:#ff5f57"></span>
          <span class="dot" style="background:#ffbd2e"></span>
          <span class="dot" style="background:#28c840"></span>
          <div class="tab-bar">
            <span class="tab-item active">Workflow</span>
            <span class="tab-item">Analytics</span>
            <span class="tab-item">Settings</span>
          </div>
        </div>
        <div class="hero-visual-body">
          <div class="hv-sidebar">
            <div class="hv-sidebar-item active">📋 Order Flow</div>
            <div class="hv-sidebar-item">🧠 AI Engine</div>
            <div class="hv-sidebar-item">💳 Payments</div>
            <div class="hv-sidebar-item">📊 Reports</div>
            <div class="hv-sidebar-item">⚙️ Config</div>
          </div>
          <div class="hv-canvas">
            <div class="hv-node"><span class="n-icon">📱</span><span class="n-label">QR Scan</span><span class="n-sub">trigger</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon">🍕</span><span class="n-label">Show Menu + AI Picks</span><span class="n-sub">ai-rec</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon">🛒</span><span class="n-label">Cart & Payment</span><span class="n-sub">stripe</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon">👨‍🍳</span><span class="n-label">Send to Kitchen Display</span><span class="n-sub">action</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon">✅</span><span class="n-label">Notify Customer — Ready!</span><span class="n-sub">sms</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function marquee() {
  const items = ['Restaurants', 'Clinics', 'Hotels', 'Salons', 'Retail', 'Offices', 'Gyms', 'Hospitals', 'Cafés', 'Co-Working'];
  const doubled = [...items, ...items];
  return `
  <section class="marquee-section">
    <p class="marquee-label">Built for businesses across industries</p>
    <div class="marquee-track">${doubled.map(i => `<span class="marquee-item">${i}</span>`).join('')}</div>
  </section>`;
}

function bento() {
  return `
  <section class="bento-section" id="features">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-label">Features</p>
        <h2 class="section-title">Everything your business needs.<br/>Nothing it doesn't.</h2>
        <p class="section-desc">We build exactly what you need — no bloat, no learning curve, no DIY headaches.</p>
      </div>
      <div class="bento-grid">
        <div class="bento-card span-2 reveal reveal-d1">
          <span class="b-emoji">🤖</span>
          <h3>AI That Understands Your Business</h3>
          <p>We don't just slap a chatbot on your website. We study your operations, map every process, and build AI workflows that actually solve real problems — ordering, scheduling, triaging, reporting.</p>
          <span class="b-tag">Core</span>
        </div>
        <div class="bento-card reveal reveal-d2">
          <span class="b-emoji">⚡</span>
          <h3>Live in 2 Weeks</h3>
          <p>From first conversation to fully deployed workflow in your business — typically under 14 days.</p>
          <span class="b-tag">Speed</span>
        </div>
        <div class="bento-card reveal reveal-d1">
          <span class="b-emoji">🔗</span>
          <h3>Plugs Into Everything</h3>
          <p>POS systems, payment gateways, WhatsApp, email, SMS, CRMs — we integrate with your existing stack.</p>
          <span class="b-tag">Integrations</span>
        </div>
        <div class="bento-card reveal reveal-d2">
          <span class="b-emoji">📊</span>
          <h3>Real-Time Dashboard</h3>
          <p>See orders, appointments, tickets, and performance in one beautiful dashboard. Updated live.</p>
          <span class="b-tag">Analytics</span>
        </div>
        <div class="bento-card reveal reveal-d3">
          <span class="b-emoji">🔒</span>
          <h3>Secure by Default</h3>
          <p>End-to-end encryption, data privacy compliance, and regular security audits. Your data stays yours.</p>
          <span class="b-tag">Security</span>
        </div>
      </div>
    </div>
  </section>`;
}

function timeline() {
  const steps = [
    { n: '1', title: 'Discovery Call', desc: 'We hop on a call, understand your business, identify the manual tasks draining your time and money, and map out the ideal AI workflow.' },
    { n: '2', title: 'Design & Build', desc: 'Our team designs the user interface, builds the AI logic, sets up integrations with your tools (POS, payments, CRM), and configures everything.' },
    { n: '3', title: 'Test & Deploy', desc: 'We test rigorously in your environment, train your team on the new system, and go live. Typical timeline: 2 weeks from start to live.' },
    { n: '4', title: 'Maintain & Improve', desc: 'We monitor performance 24/7, fix issues instantly, and continuously improve the AI based on real usage data. You just enjoy the results.' },
  ];
  return `
  <section class="timeline-section" id="process">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-label">Our Process</p>
        <h2 class="section-title">From idea to live workflow<br/>in four simple steps.</h2>
        <p class="section-desc">We handle everything. You focus on your business.</p>
      </div>
      <div class="timeline reveal">
        ${steps.map(s => `
        <div class="tl-item">
          <div class="tl-dot">${s.n}</div>
          <div class="tl-content">
            <h3>${s.title}</h3>
            <p>${s.desc}</p>
          </div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function cases() {
  const data = {
    restaurant: {
      emoji: '🍽️', title: 'Restaurants & Cafés',
      problem: 'Hiring servers is expensive, orders get mixed up, customers wait too long.',
      solution: 'Customers scan a QR code → browse the AI-powered menu → get personalized recommendations → order and pay from their phone. Orders go straight to the kitchen.',
      result: '40% less staff cost · Zero order errors · 3x faster service',
      steps: ['Customer scans QR at table', 'AI shows menu + suggests dishes', 'Customer orders & pays on phone', 'Order appears on kitchen display', 'Customer gets notified when ready']
    },
    clinic: {
      emoji: '🏥', title: 'Clinics & Hospitals',
      problem: 'Receptionists are bottlenecks. Patients wait, appointments get messy, phone lines are always busy.',
      solution: 'AI receptionist handles check-in, appointment scheduling, insurance verification, and basic triage — 24/7 via phone, WhatsApp, or kiosk.',
      result: 'No receptionist needed · Patients served in seconds · 24/7 availability',
      steps: ['Patient messages or calls', 'AI verifies identity & insurance', 'Schedules or checks in instantly', 'Sends confirmation + reminders', 'Alerts doctor when patient arrives']
    },
    salon: {
      emoji: '💇', title: 'Salons & Spas',
      problem: 'Missed calls mean lost bookings. Double bookings cause chaos. No-shows waste everyone\'s time.',
      solution: 'AI booking assistant handles 24/7 appointment scheduling, automated reminders, smart waitlist management, and suggests services based on history.',
      result: '90% fewer no-shows · 24/7 online bookings · Zero scheduling conflicts',
      steps: ['Client books via chat or link', 'AI finds perfect time slot', 'Sends confirmation instantly', 'Reminder 24h + 1h before', 'Auto-fills cancelled slots from waitlist']
    },
    hotel: {
      emoji: '🏨', title: 'Hotels & Resorts',
      problem: 'Front desk is overwhelmed. Room service is slow. Guests can\'t get quick answers about amenities.',
      solution: 'AI concierge on the guest\'s phone — handles check-in, room service, local recommendations, housekeeping requests, and checkout. No app download needed.',
      result: 'Premium guest experience · 50% less front-desk load · Higher reviews',
      steps: ['Guest receives link at booking', 'Self check-in on arrival', 'Order room service via chat', 'Request housekeeping instantly', 'Express checkout + feedback']
    },
    retail: {
      emoji: '🛒', title: 'Retail Stores',
      problem: 'Long checkout queues drive customers away. Staff can\'t answer every product question. Inventory tracking is manual.',
      solution: 'AI-powered self-checkout, product Q&A via QR codes, real-time inventory alerts, and smart reorder suggestions.',
      result: 'Faster checkout · Smarter inventory · Happier customers',
      steps: ['Customer scans product QR', 'Gets AI-powered product info', 'Adds to digital cart', 'Self-checkout & pay', 'Inventory auto-updates']
    },
    office: {
      emoji: '🏢', title: 'Offices & Co-Working',
      problem: 'Visitor management is a mess. Meeting rooms are always double-booked. IT gets flooded with basic questions.',
      solution: 'AI handles visitor registration, meeting room scheduling, common IT helpdesk queries, and facility requests — all automatically.',
      result: '60% less admin work · Smooth visitor flow · Instant IT support',
      steps: ['Visitor checks in via kiosk', 'AI registers & notifies host', 'Meeting rooms auto-managed', 'IT questions answered by AI', 'Maintenance requests routed']
    }
  };

  const tabKeys = Object.keys(data);

  return `
  <section class="cases-section" id="use-cases">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-label">Use Cases</p>
        <h2 class="section-title">See it in action.</h2>
        <p class="section-desc">Pick an industry. See exactly how A2Z Flow transforms the operation.</p>
      </div>
      <div class="cases-tabs reveal" id="cases-tabs">
        ${tabKeys.map((k, i) => `<button class="case-tab${i === 0 ? ' active' : ''}" data-case="${k}">${data[k].emoji} ${data[k].title.split(' ')[0]}</button>`).join('')}
      </div>
      ${tabKeys.map((k, i) => {
        const c = data[k];
        return `
        <div class="case-detail${i === 0 ? ' active' : ''}" data-case-panel="${k}">
          <div class="cd-text">
            <h3>${c.emoji} ${c.title}</h3>
            <div class="cd-problem">❌ <span>${c.problem}</span></div>
            <div class="cd-solution">💡 <span>${c.solution}</span></div>
            <div class="cd-result">✅ <span>${c.result}</span></div>
          </div>
          <div class="cd-visual">
            ${c.steps.map((s, j) => `<div class="cd-step"><span class="step-n">${j + 1}</span>${s}</div>`).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  </section>`;
}

function statsBar() {
  return `
  <section class="stats-section reveal">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-val" data-target="40" data-suffix="%">0</div><div class="stat-lbl">Avg Cost Reduction</div></div>
        <div class="stat-card"><div class="stat-val" data-target="14" data-suffix=" days">0</div><div class="stat-lbl">Average Setup Time</div></div>
        <div class="stat-card"><div class="stat-val" data-target="99.9" data-suffix="%">0</div><div class="stat-lbl">Uptime SLA</div></div>
        <div class="stat-card"><div class="stat-val" data-target="24" data-suffix="/7">0</div><div class="stat-lbl">Support Available</div></div>
      </div>
    </div>
  </section>`;
}

function faq() {
  const items = [
    { q: 'How much does it cost?', a: 'Every project is different. We offer a free discovery call to understand your needs and give you a clear, no-surprise quote. Most businesses see ROI within the first month of deployment.' },
    { q: 'Do I need any technical knowledge?', a: 'Absolutely not. We handle 100% of the technical work — design, development, integration, and deployment. You just tell us what problems you want solved, and we build the solution.' },
    { q: 'How long does setup take?', a: 'Typically 2 weeks from our first call to live deployment. Simple workflows can go live even sooner. We work fast and keep you updated throughout.' },
    { q: 'What if something breaks?', a: 'We provide 24/7 monitoring and support. If anything goes wrong, our team is on it immediately. We also do proactive maintenance to prevent issues before they happen.' },
    { q: 'Can I customize the workflow later?', a: 'Yes! Your workflow evolves with your business. Want to add a new feature, support a new channel, or change the flow? Just tell us, and we\'ll update it — usually within days.' },
    { q: 'Is my customer data safe?', a: 'Security is built into everything we do. All data is encrypted, access is controlled, and we follow industry best practices. We can also accommodate specific compliance requirements like HIPAA or GDPR.' },
  ];

  return `
  <section class="faq-section" id="faq">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-label">FAQ</p>
        <h2 class="section-title">Questions? We've got answers.</h2>
      </div>
      <div class="faq-list reveal">
        ${items.map((item, i) => `
        <div class="faq-item" id="faq-${i}">
          <button class="faq-q" data-faq="${i}">
            <span>${item.q}</span>
            <span class="faq-icon">+</span>
          </button>
          <div class="faq-a">${item.a}</div>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

function ctaSection() {
  return `
  <section class="cta-section" id="cta">
    <div class="container reveal">
      <h2>Ready to automate your business?</h2>
      <p class="cta-desc">Tell us what you want to automate. We'll show you exactly how it works and how much you'll save — for free, no strings attached.</p>
      <div class="cta-actions">
        <a href="mailto:support@a2zflow.in" class="btn btn-brand">
          Get in Touch
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="mailto:support@a2zflow.in?subject=Demo%20Request" class="btn btn-outline">Request a Demo</a>
      </div>
      <p class="cta-email">Or email us directly at <a href="mailto:support@a2zflow.in">support@a2zflow.in</a></p>
    </div>
  </section>`;
}

function footer() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="#" class="nav-logo"><img src="/logo.png" alt="A2Z Flow"/>A2Z Flow<span class="brand-dot">.</span></a>
          <p>We build AI-powered workflows that automate your business operations. Less manual work. Lower costs. Better experience for your customers.</p>
        </div>
        <div class="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Industries</h4>
          <ul>
            <li><a href="#use-cases">Restaurants</a></li>
            <li><a href="#use-cases">Clinics</a></li>
            <li><a href="#use-cases">Hotels</a></li>
            <li><a href="#use-cases">Retail</a></li>
            <li><a href="#use-cases">Salons</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:support@a2zflow.in">support@a2zflow.in</a></li>
            <li><a href="#">a2zflow.in</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 A2Z Flow. All rights reserved.</span>
        <span>Built with ❤️ in India</span>
      </div>
    </div>
  </footer>`;
}

// ============================================================
//  INTERACTIVITY
// ============================================================

function init() {
  initSmoothScroll();
  initMobileMenu();
  initScrollReveal();
  initTypingEffect();
  initCaseTabs();
  initFAQ();
  initStatCounters();
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu
      document.getElementById('nav-links')?.classList.remove('open');
    });
  });
}

function initMobileMenu() {
  const btn = document.getElementById('mobile-toggle');
  const nav = document.getElementById('nav-links');
  btn?.addEventListener('click', () => nav.classList.toggle('open'));
}

function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
}

function initTypingEffect() {
  const words = ['restaurant', 'clinic', 'salon', 'hotel', 'retail store', 'office'];
  const el = document.getElementById('typed-text');
  if (!el) return;

  let wordIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const word = words[wordIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === word.length) {
        setTimeout(() => { deleting = true; tick(); }, 2000);
        return;
      }
      setTimeout(tick, 80 + Math.random() * 40);
    } else {
      charIdx--;
      el.textContent = word.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 40);
    }
  }
  setTimeout(tick, 1500);
}

function initCaseTabs() {
  const tabs = document.querySelectorAll('.case-tab');
  const panels = document.querySelectorAll('.case-detail');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.case;
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`[data-case-panel="${target}"]`)?.classList.add('active');
    });
  });
}

function initFAQ() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
}

function initStatCounters() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.querySelectorAll('.stat-val').forEach(el => {
        if (el.dataset.done) return;
        el.dataset.done = '1';
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const dec = target % 1 !== 0;
        const dur = 2000;
        const t0 = performance.now();
        (function frame(now) {
          const p = Math.min((now - t0) / dur, 1);
          const v = (1 - Math.pow(1 - p, 3)) * target;
          el.textContent = (dec ? v.toFixed(1) : Math.round(v)) + suffix;
          if (p < 1) requestAnimationFrame(frame);
        })(t0);
      });
    });
  }, { threshold: 0.3 });

  const section = document.querySelector('.stats-section');
  if (section) obs.observe(section);
}
