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
${contactModal()}
${designConfigurator()}
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
        <button class="btn btn-outline open-modal-btn" data-type="contact">Contact Us</button>
        <button class="btn btn-brand open-modal-btn" data-type="demo">Get a Demo</button>
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
          <span class="pill-badge">SaaS Update</span>
          Self-serve AI infrastructure for MSMEs
        </div>
        <h1>Launch your AI Agent<br/>for your <span class="typed-text" id="typed-text">restaurant</span><span class="typed-cursor" id="typed-cursor"></span><br/>in 5 minutes.</h1>
        <p class="hero-desc">No coding, no agencies, no waiting. Build and deploy a fully autonomous AI agent that handles your customer service, bookings, and sales — directly from your dashboard.</p>
        <div class="hero-actions">
          <button class="btn btn-brand open-modal-btn" data-type="demo">
            Start Building Free
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <a href="#process" class="btn btn-outline">See How It Works</a>
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
            <div class="hv-sidebar-item active"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Order Flow</div>
            <div class="hv-sidebar-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> AI Engine</div>
            <div class="hv-sidebar-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg> Payments</div>
            <div class="hv-sidebar-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M18 16V8"/><path d="M12 16V4"/><path d="M6 16v-6"/></svg> Reports</div>
            <div class="hv-sidebar-item"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Config</div>
          </div>
          <div class="hv-canvas">
            <div class="hv-node"><span class="n-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/></svg></span><span class="n-label">QR Scan</span><span class="n-sub">trigger</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="14" height="18" rx="2" ry="2"></rect><line x1="7" y1="8" x2="13" y2="8"></line><line x1="7" y1="12" x2="13" y2="12"></line><line x1="7" y1="16" x2="10" y2="16"></line><circle cx="17" cy="17" r="6" fill="var(--bg-dark)"></circle><text x="17" y="19" font-size="7" font-family="sans-serif" font-weight="700" text-anchor="middle" stroke="none" fill="currentColor">AI</text></svg></span><span class="n-label">Show Menu + AI Picks</span><span class="n-sub">ai-rec</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><path d="M6 15h4"></path></svg></span><span class="n-label">Cart & Payment</span><span class="n-sub">stripe</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="4" width="15" height="12" rx="2"></rect><path d="M11 20h7"></path><path d="M14.5 16v4"></path><path d="M10 10H1"></path><path d="M7 7l3 3-3 3"></path></svg></span><span class="n-label">Send to Kitchen Display</span><span class="n-sub">action</span></div>
            <div class="hv-connector"></div>
            <div class="hv-node"><span class="n-icon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M9 11l2 2 4-4"></path></svg></span><span class="n-label">Notify Customer</span><span class="n-sub">sms</span></div>
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
          <span class="b-emoji"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"></path><rect width="16" height="12" x="4" y="8" rx="2"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg></span>
          <h3>AI That Understands Your Business</h3>
          <p>We don't just slap a chatbot on your website. We study your operations, map every process, and build AI workflows that actually solve real problems — ordering, scheduling, triaging, reporting.</p>
          <span class="b-tag">Core</span>
        </div>
        <div class="bento-card reveal reveal-d2">
          <span class="b-emoji"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg></span>
          <h3>Live in 2 Weeks</h3>
          <p>From first conversation to fully deployed workflow in your business — typically under 14 days.</p>
          <span class="b-tag">Speed</span>
        </div>
        <div class="bento-card reveal reveal-d1">
          <span class="b-emoji"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></span>
          <h3>Plugs Into Everything</h3>
          <p>POS systems, payment gateways, WhatsApp, email, SMS, CRMs — we integrate with your existing stack.</p>
          <span class="b-tag">Integrations</span>
        </div>
        <div class="bento-card reveal reveal-d2">
          <span class="b-emoji"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="4" height="16" x="6" y="4" rx="1"></rect><rect width="4" height="8" x="14" y="12" rx="1"></rect><path d="M2 20h20"></path></svg></span>
          <h3>Real-Time Dashboard</h3>
          <p>See orders, appointments, tickets, and performance in one beautiful dashboard. Updated live.</p>
          <span class="b-tag">Analytics</span>
        </div>
        <div class="bento-card reveal reveal-d3">
          <span class="b-emoji"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>
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
    { n: '1', title: 'Create & Connect', desc: 'Sign up and connect your existing channels — WhatsApp, Instagram, or your PBX phone line with a single click.' },
    { n: '2', title: 'Upload Knowledge', desc: 'Upload your menus, pricing PDFs, FAQs, or past email responses. The AI instantly trains itself on your specific business rules.' },
    { n: '3', title: 'Configure Actions', desc: 'Link your backend tools. Tell the AI when to trigger a payment link, when to check your calendar, or when to notify your kitchen.' },
    { n: '4', title: 'Go Live & Automate', desc: 'Toggle the switch to Live. Watch your custom dashboard as the AI handles hundreds of customer conversations and tasks simultaneously.' },
  ];
  return `
  <section class="timeline-section" id="process">
    <div class="container">
      <div class="section-header reveal">
        <p class="section-label">Deploy in Minutes</p>
        <h2 class="section-title">Zero code. Zero delays.<br/>You are in full control.</h2>
        <p class="section-desc">We replaced the traditional 4-week agency build with a 5-minute self-serve platform.</p>
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
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>', title: 'Restaurants & Cafés',
      problem: 'Hiring servers is expensive, orders get mixed up, customers wait too long.',
      solution: 'Customers scan a QR code → browse the AI-powered menu → get personalized recommendations → order and pay from their phone. Orders go straight to the kitchen.',
      result: '40% less staff cost · Zero order errors · 3x faster service',
      steps: ['Customer scans QR at table', 'AI shows menu + suggests dishes', 'Customer orders & pays on phone', 'Order appears on kitchen display', 'Customer gets notified when ready']
    },
    clinic: {
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>', title: 'Clinics & Hospitals',
      problem: 'Receptionists are bottlenecks. Patients wait, appointments get messy, phone lines are always busy.',
      solution: 'AI receptionist handles check-in, appointment scheduling, insurance verification, and basic triage — 24/7 via phone, WhatsApp, or kiosk.',
      result: 'No receptionist needed · Patients served in seconds · 24/7 availability',
      steps: ['Patient messages or calls', 'AI verifies identity & insurance', 'Schedules or checks in instantly', 'Sends confirmation + reminders', 'Alerts doctor when patient arrives']
    },
    salon: {
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>', title: 'Salons & Spas',
      problem: 'Missed calls mean lost bookings. Double bookings cause chaos. No-shows waste everyone\'s time.',
      solution: 'AI booking assistant handles 24/7 appointment scheduling, automated reminders, smart waitlist management, and suggests services based on history.',
      result: '90% fewer no-shows · 24/7 online bookings · Zero scheduling conflicts',
      steps: ['Client books via chat or link', 'AI finds perfect time slot', 'Sends confirmation instantly', 'Reminder 24h + 1h before', 'Auto-fills cancelled slots from waitlist']
    },
    hotel: {
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect x="4" y="2" width="16" height="20" rx="2"></rect></svg>', title: 'Hotels & Resorts',
      problem: 'Front desk is overwhelmed. Room service is slow. Guests can\'t get quick answers about amenities.',
      solution: 'AI concierge on the guest\'s phone — handles check-in, room service, local recommendations, housekeeping requests, and checkout. No app download needed.',
      result: 'Premium guest experience · 50% less front-desk load · Higher reviews',
      steps: ['Guest receives link at booking', 'Self check-in on arrival', 'Order room service via chat', 'Request housekeeping instantly', 'Express checkout + feedback']
    },
    retail: {
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>', title: 'Retail Stores',
      problem: 'Long checkout queues drive customers away. Staff can\'t answer every product question. Inventory tracking is manual.',
      solution: 'AI-powered self-checkout, product Q&A via QR codes, real-time inventory alerts, and smart reorder suggestions.',
      result: 'Faster checkout · Smarter inventory · Happier customers',
      steps: ['Customer scans product QR', 'Gets AI-powered product info', 'Adds to digital cart', 'Self-checkout & pay', 'Inventory auto-updates']
    },
    office: {
      emoji: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline;vertical-align:middle;margin-right:4px;"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>', title: 'Offices & Co-Working',
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
            <div class="cd-problem"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;color:var(--red)"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg> <span>${c.problem}</span></div>
            <div class="cd-solution"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;color:var(--amber)"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg> <span>${c.solution}</span></div>
            <div class="cd-result"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:2px;color:var(--green)"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> <span>${c.result}</span></div>
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
      <h2>Ready to launch your AI Agent?</h2>
      <p class="cta-desc">Join thousands of businesses automating their operations. Build your custom AI agent today directly from our platform.</p>
      <div class="cta-actions">
        <button class="btn btn-brand open-modal-btn" data-type="demo">
          Start Building For Free
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button class="btn btn-outline open-modal-btn" data-type="contact">Talk to Sales</button>
      </div>
      <p class="cta-email">Enterprise? Email us at <a href="mailto:support@a2zflow.in">support@a2zflow.in</a></p>
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
            <li><button class="open-modal-btn" data-type="contact" style="padding:0;font-size:inherit;color:inherit;font-weight:inherit;">Contact Form</button></li>
            <li><a href="mailto:support@a2zflow.in">support@a2zflow.in</a></li>
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

function contactModal() {
  return `
  <div class="modal-overlay" id="contact-modal">
    <div class="modal-box">
      <div class="modal-header">
        <h3 id="modal-title">Get in Touch</h3>
        <button class="modal-close" id="modal-close" aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="modal-body">
        <p class="form-desc">Fill out the form below and our team will get back to you within 24 hours.</p>
        <form id="contact-form">
          <input type="hidden" id="form-type" name="type" value="contact">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Full Name *</label>
              <input type="text" id="name" name="name" required placeholder="John Doe">
            </div>
            <div class="form-group">
              <label for="email">Work Email *</label>
              <input type="email" id="email" name="email" required placeholder="john@company.com">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Company Name">
            </div>
            <div class="form-group">
              <label for="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="+91 90000 00000">
            </div>
          </div>
          <div class="form-group">
            <label for="message">How can we help? *</label>
            <textarea id="message" name="message" required placeholder="Tell us about the processes you want to automate..."></textarea>
          </div>
          <button type="submit" class="form-submit" id="submit-btn">
            <span class="btn-text">Submit Request</span>
            <div class="spinner"></div>
          </button>
          <div class="form-status" id="form-status"></div>
        </form>
      </div>
    </div>
  </div>`;
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
  initContactModal();
  initDesignConfigurator();
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

function initContactModal() {
  const modal = document.getElementById('contact-modal');
  const closeBtn = document.getElementById('modal-close');
  const form = document.getElementById('contact-form');
  const formType = document.getElementById('form-type');
  const modalTitle = document.getElementById('modal-title');
  const statusEl = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!modal) return;

  // Open modal
  document.querySelectorAll('.open-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.dataset.type || 'contact';
      formType.value = type;
      modalTitle.textContent = type === 'demo' ? 'Request a Demo' : 'Get in Touch';
      modal.classList.add('open');
      statusEl.style.display = 'none';
      statusEl.className = 'form-status';
    });
  });

  // Close modal
  const closeModal = () => modal.classList.remove('open');
  closeBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Form submit
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.classList.add('loading');
    statusEl.style.display = 'none';
    statusEl.className = 'form-status';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();

      if (res.ok && result.success) {
        statusEl.textContent = result.message;
        statusEl.classList.add('success');
        form.reset();
        setTimeout(closeModal, 3000);
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (err) {
      statusEl.textContent = err.message || 'Network error. Make sure the backend server is running.';
      statusEl.classList.add('error');
    } finally {
      submitBtn.disabled = false;
      submitBtn.classList.remove('loading');
      statusEl.style.display = 'block';
    }
  });
}

function designConfigurator() {
  return `
  <div class="design-config-panel" id="design-config-panel">
    <div class="dc-header">
      <h4>UI Configurator</h4>
      <p>Test Themes & Fonts Live</p>
    </div>
    <div class="dc-body">
      <div class="dc-group">
        <label>Theme</label>
        <button class="dc-btn active" data-theme="theme-default">Default (Dark)</button>
        <button class="dc-btn" data-theme="theme-light">SaaS Light</button>
        <button class="dc-btn" data-theme="theme-b2b">Enterprise Clean</button>
      </div>
      <div class="dc-group">
        <label>Typography</label>
        <button class="dc-btn active" data-font="font-inter">Inter</button>
        <button class="dc-btn" data-font="font-outfit">Outfit</button>
        <button class="dc-btn" data-font="font-serif">Playfair (Serif)</button>
      </div>
      <div class="dc-group">
        <label>Primary Brand Color</label>
        <div class="color-swatches">
          <span class="swatch active" data-color="#ff8a00" style="background:#ff8a00"></span>
          <span class="swatch" data-color="#3b82f6" style="background:#3b82f6"></span>
          <span class="swatch" data-color="#10b981" style="background:#10b981"></span>
          <span class="swatch" data-color="#6366f1" style="background:#6366f1"></span>
          <span class="swatch" data-color="#e11d48" style="background:#e11d48"></span>
          <span class="swatch" data-color="#f59e0b" style="background:#f59e0b"></span>
        </div>
      </div>
    </div>
    <button class="dc-toggle" id="dc-toggle" aria-label="Toggle Design Configurator">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    </button>
  </div>`;
}

function initDesignConfigurator() {
  const panel = document.getElementById('design-config-panel');
  if (!panel) return;
  const toggleBtn = document.getElementById('dc-toggle');
  
  toggleBtn.addEventListener('click', () => {
    panel.classList.toggle('open');
  });

  const themeBtns = panel.querySelectorAll('[data-theme]');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      themeBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = \`\${btn.dataset.theme} \${document.body.className.replace(/theme-[a-zA-Z0-9-]+/g, '').trim()}\`.trim();
    });
  });

  const fontBtns = panel.querySelectorAll('[data-font]');
  fontBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      fontBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      document.body.className = \`\${btn.dataset.font} \${document.body.className.replace(/font-[a-zA-Z0-9-]+/g, '').trim()}\`.trim();
    });
  });

  const swatches = panel.querySelectorAll('.swatch');
  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      swatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      document.documentElement.style.setProperty('--brand', swatch.dataset.color);
      document.documentElement.style.setProperty('--brand-glow', swatch.dataset.color + '55'); // Add alpha
    });
  });
}
