// AG Core Aeration — Shared site shell

const AG = {
  brand: "AG Core Aeration",
  tagline: "Professional Lawn Renovation",
  phone: "0402 376 939",
  email: "agcoreaeration@gmail.com",
  social: { facebook: "https://www.facebook.com/profile.php?id=61562326494902", instagram: "https://www.instagram.com/ag_core_aeration/" }
};

function injectNav(activePage) {
  const pages = [
    { href: "index.html",   label: "Home"    },
    { href: "gallery.html", label: "Gallery" },
    { href: "contact.html", label: "Contact" },
  ];
  const links = pages.map(p => `<a href="${p.href}" class="nav-link ${p.label===activePage?'active':''}">${p.label}</a>`).join('');
  const gridIcon = `<svg width="18" height="18" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="4" r="2" fill="currentColor"/><circle cx="10" cy="4" r="2" fill="currentColor"/><circle cx="16" cy="4" r="2" fill="currentColor"/><circle cx="4" cy="10" r="2" fill="currentColor"/><circle cx="10" cy="10" r="2" fill="currentColor"/><circle cx="16" cy="10" r="2" fill="currentColor"/><circle cx="4" cy="16" r="2" fill="currentColor"/><circle cx="10" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="16" r="1.2" fill="currentColor" opacity="0.6"/></svg>`;

  document.getElementById('site-nav').innerHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-icon">
  <img src="images/AG_Core_Logo_Dots.PNG" alt="AG Core Logo" style="width:28px;height:28px">
</div>
          <img src="images/AG_Core_Logo_Tr-Text.PNG" alt="AG Core Aeration" style="height:32px;width:auto;display:block;">
        </a>
        <div class="nav-links">${links}</div>
        <div class="nav-right">
          <a href="contact.html" class="nav-cta">Get a Quote</a>
          <button class="nav-hamburger" id="hamburger" onclick="toggleMenu()">☰</button>
        </div>
      </div>
      <div class="nav-mobile" id="navMobile">
        ${links}
        <a href="contact.html" class="nav-cta-mobile">Get a Free Quote →</a>
      </div>
    </nav>`;
}

function toggleMenu() {
  document.getElementById('navMobile').classList.toggle('open');
  document.getElementById('hamburger').textContent = document.getElementById('navMobile').classList.contains('open') ? '✕' : '☰';
}

function injectFooter() {
  const gridIcon = `<svg width="14" height="14" viewBox="0 0 20 20" fill="none"><circle cx="4" cy="4" r="2" fill="currentColor"/><circle cx="10" cy="4" r="2" fill="currentColor"/><circle cx="16" cy="4" r="2" fill="currentColor"/><circle cx="4" cy="10" r="2" fill="currentColor"/><circle cx="10" cy="10" r="2" fill="currentColor"/><circle cx="16" cy="10" r="2" fill="currentColor"/><circle cx="4" cy="16" r="2" fill="currentColor"/><circle cx="10" cy="16" r="2" fill="currentColor"/><circle cx="16" cy="16" r="1.2" fill="currentColor" opacity="0.6"/></svg>`;
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="footer-logo" style="display:flex;align-items:center;gap:10px;"><img src="images/AG_Core_Logo_Dots.PNG" alt="AG Core Logo" style="width:28px;height:28px;display:block;"><img src="images/AG_Core_Logo_Tr-Text.PNG" alt="AG Core Aeration" style="height:28px;width:auto;display:block;"></div>
          <p class="footer-desc">Lawn aeration and renovation services. Helping local lawns breathe, recover and thrive.</p>
          <div class="footer-social">
            <a href="${AG.social.facebook}" class="social-btn" target="_blank" aria-label="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="#1E7B34" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
              Facebook
            </a>
            <a href="${AG.social.instagram}" class="social-btn" target="_blank" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="#1E7B34" stroke-width="2"/><circle cx="12" cy="12" r="4" stroke="#1E7B34" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1" fill="#1E7B34"/></svg>
              Instagram
            </a>
          </div>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Pages</div>
          <a href="index.html" class="footer-link">Home</a>
          <a href="gallery.html" class="footer-link">Gallery</a>
          <a href="contact.html" class="footer-link">Contact</a>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Services</div>
          <span class="footer-link">Core Aeration</span>
          <span class="footer-link">Lawn Scarification</span>
          <span class="footer-link">Overseeding</span>
          <span class="footer-link">Top Dressing</span>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Contact</div>
          <span class="footer-link">📞 ${AG.phone}</span>
          <span class="footer-link">✉️ ${AG.email}</span>
          <a href="contact.html" class="footer-cta-link">Book a Free Quote →</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 AG Core Aeration · All rights reserved</span>
        <span style="opacity:0.3">Powered by AI</span>
      </div>
    </footer>`;

  // Inject floating chat bot on every page
  injectChatBot();
}

// ── FAQ CHAT BOT — injected on every page ──
function injectChatBot() {
  // Don't double-inject on the standalone faq-bot page
  if (document.getElementById('ag-chat-bubble')) return;

  const BOT_FAQS = [
    { keywords: ["price","cost","charge","how much","quote","pricing","fee","expensive"], answer: "We offer **free, no-obligation quotes** for all services. Prices vary by lawn size and treatment — get in touch and we'll give you an exact quote, usually within 24 hours. 👍" },
    { keywords: ["aeration","aerating","core aeration","holes","spikes","plug","compacted"], answer: "**Core aeration** removes small plugs of compacted soil, letting air, water and nutrients reach deep into the root zone. It's the most impactful single treatment for most lawns — best done in autumn or spring. 🌿" },
    { keywords: ["scarify","thatch","moss","dethatch"], answer: "**Scarification** removes dead thatch and moss using specialist blades. It can look dramatic at first, but lawns bounce back within 4–6 weeks and come back much healthier. 🔄" },
    { keywords: ["overseed","seed","bare","patchy","thin","bald"], answer: "We can **overseed** after scarification or aeration to fill thin or bare patches with quality grass seed matched to your lawn. Germination typically takes 2–3 weeks. 🌱" },
    { keywords: ["area","cover","location","travel","near","local","postcode"], answer: "We cover the local area and surrounding towns. Drop us your postcode via the contact form and we'll confirm — most enquiries get a response within 24 hours. 📍" },
    { keywords: ["hours","open","available","time","weekend","saturday","sunday"], answer: "Hours are flexible and by appointment only. Contact us today to find a time that works for you. ⏰" },
    { keywords: ["insured","insurance","certified","qualified","experience","guarantee"], answer: "We're **fully insured** and owner-operated — you deal directly with the person doing the work. All our work comes with a satisfaction guarantee. ✅" },
    { keywords: ["book","appointment","schedule","visit","arrange","slot"], answer: "You can book via our **quote form** on this page, by calling **0402 376 939**, or emailing **agcoreaeration@gmail.com**. Spring is our busy period and does book up quick, book early to lock in your spot. 📅" },
    { keywords: ["when","best time","season","spring","autumn","summer","winter"], answer: "The **best times for aeration and scarification** are **autumn (March–May)** and **spring (September–November)** when grass is actively growing and can recover quickly. We're available year-round for assessments and treatments. 🗓️" },
    { keywords: ["payment","pay","cash","card","invoice","deposit"], answer: "We accept **bank transfer and cash**. We'll always give you a clear quote before any work starts — no surprises. 💳" },
	{ keywords: ["offer","services"], answer: "Our services include Core aeration, Scarifying / dethatching, Top dressing and overseeding. " },
  ];

  const SUGGESTED = ["What is core aeration?", "How much does it cost?", "Best time of year?", "Do you cover my area?", "How do I book?"];

  // Inject HTML
  const el = document.createElement('div');
  el.id = 'ag-chatbot-root';
  el.innerHTML = `
    <style>
      #ag-chat-bubble {
        position: fixed; bottom: 24px; right: 24px;
        width: 58px; height: 58px;
        background: #5A9E32; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        cursor: pointer; z-index: 9999;
        box-shadow: 0 6px 28px rgba(90,158,50,0.45), 0 2px 8px rgba(0,0,0,0.25);
        transition: transform 0.25s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s;
        border: none; outline: none;
      }
      #ag-chat-bubble:hover { transform: scale(1.08); box-shadow: 0 10px 36px rgba(90,158,50,0.55); }
      #ag-chat-bubble .ag-bub-icon { font-size: 24px; transition: transform 0.3s; }
      #ag-chat-bubble.open .ag-bub-icon { transform: rotate(90deg); }
      #ag-notif-dot {
        position: absolute; top: 2px; right: 2px;
        width: 15px; height: 15px; background: #2ECC71;
        border-radius: 50%; border: 2.5px solid #0D0D0D;
        display: none; animation: agPulse 2.5s infinite;
      }
      @keyframes agPulse { 0%{box-shadow:0 0 0 0 rgba(46,204,113,0.6)} 70%{box-shadow:0 0 0 8px rgba(46,204,113,0)} 100%{box-shadow:0 0 0 0 rgba(46,204,113,0)} }

      #ag-chat-win {
        position: fixed; bottom: 96px; right: 24px;
        width: 360px; max-height: 560px;
        background: #1C1C1C; border-radius: 18px;
        box-shadow: 0 20px 70px rgba(0,0,0,0.55), 0 4px 16px rgba(0,0,0,0.2);
        border: 1px solid #2A2A2A;
        display: flex; flex-direction: column; z-index: 9998; overflow: hidden;
        transform-origin: bottom right;
        transform: scale(0.82) translateY(14px); opacity: 0; pointer-events: none;
        transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), opacity 0.22s ease;
        font-family: 'Barlow', system-ui, sans-serif;
      }
      #ag-chat-win.open { transform: scale(1) translateY(0); opacity: 1; pointer-events: all; }

      .ag-ch-header {
        background: linear-gradient(135deg,#162510 0%,#0F1A08 100%);
        padding: 14px 16px; display: flex; align-items: center; gap: 10px;
        flex-shrink: 0; border-bottom: 1px solid #272727;
      }
      .ag-ch-av {
        width: 38px; height: 38px; background: #5A9E32;
        border-radius: 50%; display: flex; align-items: center; justify-content: center;
        font-size: 18px; flex-shrink: 0; position: relative;
      }
      .ag-ch-av-dot { position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #2ECC71; border-radius: 50%; border: 2px solid #162510; }
      .ag-ch-info { flex: 1; }
      .ag-ch-name { font-family: 'Barlow Condensed', system-ui, sans-serif; font-weight: 800; font-size: 0.95rem; color: #fff; text-transform: uppercase; letter-spacing: 0.04em; line-height: 1.2; }
      .ag-ch-status { font-size: 0.7rem; color: rgba(255,255,255,0.45); display: flex; align-items: center; gap: 5px; margin-top: 2px; }
      .ag-ch-sdot { width: 5px; height: 5px; background: #2ECC71; border-radius: 50%; }
      .ag-ch-close { width: 28px; height: 28px; background: rgba(255,255,255,0.08); border: none; border-radius: 7px; color: rgba(255,255,255,0.6); font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: background 0.2s; flex-shrink: 0; }
      .ag-ch-close:hover { background: rgba(255,255,255,0.15); color: #fff; }

      .ag-ch-msgs { flex: 1; overflow-y: auto; padding: 16px 12px; display: flex; flex-direction: column; gap: 10px; scroll-behavior: smooth; }
      .ag-ch-msgs::-webkit-scrollbar { width: 3px; }
      .ag-ch-msgs::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

      .ag-msg { display: flex; gap: 7px; align-items: flex-end; animation: agMsgIn 0.28s ease forwards; }
      @keyframes agMsgIn { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:translateY(0)} }
      .ag-msg.user { flex-direction: row-reverse; }
      .ag-msg-av { width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; background: rgba(90,158,50,0.18); }
      .ag-msg-bub { max-width: 82%; padding: 9px 13px; border-radius: 15px; border-bottom-left-radius: 3px; font-size: 0.84rem; line-height: 1.58; color: rgba(255,255,255,0.82); background: #262626; }
      .ag-msg.user .ag-msg-bub { background: #5A9E32; color: #fff; border-bottom-left-radius: 15px; border-bottom-right-radius: 3px; }
      .ag-msg-time { font-size: 0.6rem; color: rgba(255,255,255,0.22); margin-top: 3px; padding: 0 3px; }
      .ag-msg.user .ag-msg-time { text-align: right; }

      .ag-typing { display: flex; gap: 7px; align-items: flex-end; }
      .ag-typing-bub { background: #262626; border-radius: 15px; border-bottom-left-radius: 3px; padding: 11px 14px; display: flex; gap: 4px; align-items: center; }
      .ag-tdot { width: 5px; height: 5px; background: rgba(255,255,255,0.28); border-radius: 50%; animation: agTB 1.2s infinite; }
      .ag-tdot:nth-child(2){animation-delay:0.2s} .ag-tdot:nth-child(3){animation-delay:0.4s}
      @keyframes agTB { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-4px);background:rgba(90,158,50,0.7)} }

      .ag-ch-sugg { padding: 0 12px 8px; display: flex; flex-wrap: wrap; gap: 5px; flex-shrink: 0; }
      .ag-chip { background: none; border: 1.5px solid #2A2A2A; border-radius: 100px; padding: 5px 11px; font-size: 0.72rem; font-weight: 500; color: rgba(255,255,255,0.45); cursor: pointer; white-space: nowrap; transition: border-color 0.2s, color 0.2s; font-family: 'Barlow', system-ui, sans-serif; }
      .ag-chip:hover { border-color: #5A9E32; color: #72C040; }

      .ag-ch-input { border-top: 1px solid #272727; padding: 10px 12px; display: flex; gap: 8px; align-items: center; flex-shrink: 0; background: #1C1C1C; }
      .ag-input { flex: 1; background: #272727; border: 1.5px solid #333; border-radius: 100px; padding: 8px 15px; font-size: 0.84rem; color: #fff; outline: none; transition: border-color 0.2s; font-family: 'Barlow', system-ui, sans-serif; }
      .ag-input:focus { border-color: #5A9E32; }
      .ag-input::placeholder { color: rgba(255,255,255,0.2); }
      .ag-send { width: 34px; height: 34px; background: #5A9E32; border: none; border-radius: 50%; color: #fff; font-size: 13px; cursor: pointer; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: background 0.2s, transform 0.15s; }
      .ag-send:hover { background: #4A8A25; transform: scale(1.06); }
      .ag-send:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
      .ag-ch-foot { text-align: center; font-size: 0.6rem; color: rgba(255,255,255,0.14); padding: 4px 0 8px; flex-shrink: 0; letter-spacing: 0.06em; text-transform: uppercase; }

      @media (max-width: 480px) {
        #ag-chat-win { width: calc(100vw - 20px); right: 10px; bottom: 88px; max-height: 68vh; }
        #ag-chat-bubble { bottom: 18px; right: 18px; width: 54px; height: 54px; }
      }
    </style>

    <button id="ag-chat-bubble" onclick="agToggleChat()" aria-label="Chat with us">
      <span class="ag-bub-icon">💬</span>
      <div id="ag-notif-dot"></div>
    </button>

    <div id="ag-chat-win">
      <div class="ag-ch-header">
        <div class="ag-ch-av">🌿<div class="ag-ch-av-dot"></div></div>
        <div class="ag-ch-info">
          <div class="ag-ch-name">AG Core Aeration</div>
          <div class="ag-ch-status"><div class="ag-ch-sdot"></div>AI Assistant · Always here</div>
        </div>
        <button class="ag-ch-close" onclick="agToggleChat()">✕</button>
      </div>
      <div class="ag-ch-msgs" id="agMsgs"></div>
      <div class="ag-ch-sugg" id="agSugg"></div>
      <div class="ag-ch-input">
        <input class="ag-input" id="agInput" type="text" placeholder="Ask about our services..." onkeydown="if(event.key==='Enter')agSend()" />
        <button class="ag-send" id="agSendBtn" onclick="agSend()">➤</button>
      </div>
      <div class="ag-ch-foot">AG Core Aeration · Powered by AI</div>
    </div>
  `;
  document.body.appendChild(el);

  // ── State ──
  let agOpen = false, agTyping = false, agGreeted = false;
  let agHistory = [];

  window.agToggleChat = function() {
    agOpen = !agOpen;
    document.getElementById('ag-chat-bubble').classList.toggle('open', agOpen);
    document.getElementById('ag-chat-win').classList.toggle('open', agOpen);
    document.getElementById('ag-notif-dot').style.display = 'none';
    if (agOpen && !agGreeted) {
      agGreeted = true;
      setTimeout(() => {
        agAddBot("👋 Hi! I'm the **AG Core Aeration** assistant.\n\nAsk me anything about our services, pricing, or availability — or use the quick questions below.");
        agRenderSugg();
      }, 350);
    }
    if (agOpen) setTimeout(() => document.getElementById('agInput').focus(), 320);
  };

  function agRenderSugg() {
    const el = document.getElementById('agSugg');
    el.innerHTML = '';
    SUGGESTED.forEach(q => {
      const b = document.createElement('button');
      b.className = 'ag-chip'; b.textContent = q;
      b.onclick = () => { el.innerHTML = ''; agUserMsg(q); };
      el.appendChild(b);
    });
  }

  window.agSend = function() {
    const inp = document.getElementById('agInput');
    const t = inp.value.trim();
    if (!t || agTyping) return;
    inp.value = '';
    document.getElementById('agSugg').innerHTML = '';
    agUserMsg(t);
  };

  function agUserMsg(text) {
    agAddUser(text);
    agHistory.push({ role: 'user', content: text });
    agShowTyping();
    const lower = text.toLowerCase();
    const preset = BOT_FAQS.find(f => f.keywords.some(k => lower.includes(k)));
    if (preset) {
      setTimeout(() => { agHideTyping(); agAddBot(preset.answer); agHistory.push({ role:'assistant', content: preset.answer }); }, 600 + Math.random()*500);
    } else { agCallAI(text); }
  }

  async function agCallAI(msg) {
    const sys = "You are a friendly assistant for AG Core Aeration, a professional lawn aeration and care business. Services: Core Aeration, Scarification, Overseeding, Top Dressing, Free Assessments. Phone: " + AG.phone + ". Email: " + AG.email + ". Owner-operated, fully insured, local area. Keep replies SHORT (2-3 sentences). Use **bold** for key info and relevant emojis. Sound like a genuine lawn care expert. If they want a quote, direct them to the contact page or call " + AG.phone + ".";
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({ model:"claude-sonnet-4-20250514", max_tokens:250, system:sys, messages:agHistory })
      });
      const data = await res.json();
      const reply = data.content?.[0]?.text || "Sorry, I had a blip! Call us on **" + AG.phone + "** for the fastest help.";
      agHideTyping(); agAddBot(reply);
      agHistory.push({ role:'assistant', content:reply });
    } catch(e) {
      agHideTyping();
      agAddBot("Sorry, something went wrong on my end 😅 Give us a call on **" + AG.phone + "** and we'll help straight away.");
    }
  }

  function agAddUser(text) {
    const msgs = document.getElementById('agMsgs');
    const now = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const d = document.createElement('div'); d.className = 'ag-msg user';
    d.innerHTML = '<div><div class="ag-msg-bub">' + agEsc(text) + '</div><div class="ag-msg-time">' + now + '</div></div>';
    msgs.appendChild(d); agScroll();
  }

  function agAddBot(text) {
    const msgs = document.getElementById('agMsgs');
    const now = new Date().toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
    const d = document.createElement('div'); d.className = 'ag-msg bot';
    d.innerHTML = '<div class="ag-msg-av">🌿</div><div><div class="ag-msg-bub">' + agFmt(text) + '</div><div class="ag-msg-time">' + now + '</div></div>';
    msgs.appendChild(d); agScroll();
  }

  function agShowTyping() {
    agTyping = true; document.getElementById('agSendBtn').disabled = true;
    const msgs = document.getElementById('agMsgs');
    const d = document.createElement('div'); d.className = 'ag-typing'; d.id = 'agTypingInd';
    d.innerHTML = '<div class="ag-msg-av">🌿</div><div class="ag-typing-bub"><div class="ag-tdot"></div><div class="ag-tdot"></div><div class="ag-tdot"></div></div>';
    msgs.appendChild(d); agScroll();
  }

  function agHideTyping() {
    agTyping = false; document.getElementById('agSendBtn').disabled = false;
    const el = document.getElementById('agTypingInd'); if(el) el.remove();
  }

  function agScroll() { const m = document.getElementById('agMsgs'); m.scrollTop = m.scrollHeight; }
  function agEsc(t) { return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  function agFmt(t) { return agEsc(t).replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>'); }

  // Show notif dot after 2s if not already open
  setTimeout(() => { if (!agOpen) document.getElementById('ag-notif-dot').style.display = 'block'; }, 2000);
}

const SHARED_CSS = `
  :root {
    --bg: #0D0D0D;
    --bg2: #131313;
    --bg3: #F5F4F0;
    --card: #1C1C1C;
    --card-light: #EDF2E6;
    --border: #272727;
    --border-light: #D0DEC4;
    --accent: #1E7B34;
    --accent2: #196A2C;
    --accent3: #145924;
    --accent-light: #1E7B34;
    --accent-pale: rgba(30,123,52,0.1);
    --white: #FFFFFF;
    --dim: rgba(255,255,255,0.48);
    --dimmer: rgba(255,255,255,0.22);
    --font-head: 'Barlow Condensed', sans-serif;
    --font-body: 'Barlow', sans-serif;
    --radius: 12px;
    --max: 1100px;
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-body); background: var(--bg); color: var(--white); line-height: 1.6; overflow-x: hidden; }

  .accent { color: var(--accent-light); }
  .container { max-width: var(--max); margin: 0 auto; padding: 0 40px; }

  .tag {
    display: inline-flex; align-items: center; gap: 7px;
    background: rgba(30,123,52,0.1); border: 1px solid rgba(30,123,52,0.25);
    color: var(--accent-light); font-family: var(--font-head);
    font-size: 0.74rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
    padding: 5px 14px; border-radius: 100px;
  }
  .tag-dot { width: 5px; height: 5px; background: var(--accent-light); border-radius: 50%; animation: pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.3;transform:scale(0.6)} }

  .section-tag { margin-bottom: 18px; }
  .section-title { font-family: var(--font-head); font-size: clamp(2rem,4vw,3.2rem); font-weight: 900; text-transform: uppercase; line-height: 1.0; letter-spacing: 0.01em; margin-bottom: 14px; }
  .section-sub { font-size: 0.95rem; color: var(--dim); max-width: 520px; line-height: 1.75; margin-bottom: 44px; }

  .btn-primary {
    background: var(--accent); color: #fff; border: none; border-radius: 10px;
    padding: 14px 28px; font-family: var(--font-head); font-size: 1rem; font-weight: 800;
    letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
    transition: background 0.2s, transform 0.15s; text-decoration: none; display: inline-block;
  }
  .btn-primary:hover { background: var(--accent2); transform: translateY(-2px); }
  .btn-ghost {
    background: none; color: var(--dim); border: 1.5px solid var(--border); border-radius: 10px;
    padding: 13px 24px; font-family: var(--font-head); font-size: 0.95rem; font-weight: 700;
    letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer;
    transition: border-color 0.2s, color 0.2s; text-decoration: none; display: inline-block;
  }
  .btn-ghost:hover { border-color: var(--accent); color: var(--accent-light); }

  /* NAV */
  .site-nav { position: sticky; top: 0; z-index: 1000; border-bottom: 1px solid var(--border); background: rgba(13,13,13,0.96); backdrop-filter: blur(14px); }
  .nav-inner { max-width: var(--max); margin: 0 auto; padding: 0 40px; height: 64px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; font-family: var(--font-head); font-size: 1.05rem; font-weight: 900; letter-spacing: 0.08em; color: var(--white); white-space: nowrap; }
  .nav-logo em { font-style: normal; color: var(--accent-light); }
  .nav-logo-icon { width: 36px; height: 36px; background: rgba(13,13,13,0.96); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: #fff; }
  .nav-links { display: flex; gap: 2px; }
  .nav-link { padding: 7px 13px; border-radius: 7px; text-decoration: none; font-size: 0.87rem; font-weight: 500; color: var(--dim); transition: color 0.2s, background 0.2s; }
  .nav-link:hover { color: var(--white); background: rgba(255,255,255,0.05); }
  .nav-link.active { color: var(--accent-light); background: rgba(30,123,52,0.1); }
  .nav-right { display: flex; align-items: center; gap: 10px; }
  .nav-cta { background: var(--accent); color: #fff; border: none; border-radius: 8px; padding: 8px 18px; font-family: var(--font-head); font-size: 0.83rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; cursor: pointer; transition: background 0.2s; text-decoration: none; white-space: nowrap; }
  .nav-cta:hover { background: var(--accent2); }
  .nav-hamburger { display: none; background: none; border: 1px solid var(--border); border-radius: 8px; color: var(--white); font-size: 18px; width: 38px; height: 38px; cursor: pointer; align-items: center; justify-content: center; }
  .nav-mobile { display: none; flex-direction: column; gap: 2px; padding: 10px 20px 18px; border-top: 1px solid var(--border); background: rgba(13,13,13,0.99); }
  .nav-mobile.open { display: flex; }
  .nav-mobile .nav-link { font-size: 1rem; padding: 12px 14px; }
  .nav-cta-mobile { margin-top: 8px; background: var(--accent); color: #fff; border-radius: 10px; padding: 13px 20px; text-align: center; font-family: var(--font-head); font-size: 0.92rem; font-weight: 800; letter-spacing: 0.06em; text-transform: uppercase; text-decoration: none; }

  /* FOOTER */
  .site-footer { border-top: 1px solid var(--border); background: #0A0A0A; padding: 56px 0 0; }
  .footer-inner { max-width: var(--max); margin: 0 auto; padding: 0 40px 44px; display: grid; grid-template-columns: 2fr 1fr 1fr 1.4fr; gap: 44px; }
  .footer-logo { display: flex; align-items: center; gap: 10px; font-family: var(--font-head); font-size: 0.95rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; }
  .footer-desc { font-size: 0.83rem; color: var(--dim); line-height: 1.7; margin-bottom: 18px; max-width: 260px; }
  .footer-social { display: flex; flex-direction: column; gap: 8px; }
  .social-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--card); border: 1px solid var(--border); border-radius: 7px; padding: 9px 16px; color: rgba(255,255,255,0.6); font-family: var(--font-body); font-size: 0.85rem; font-weight: 500; text-decoration: none; transition: border-color 0.2s, background 0.2s, color 0.2s; width: fit-content; }
  .social-btn:hover { border-color: var(--accent); background: rgba(30,123,52,0.1); color: #fff; }
  .footer-col { display: flex; flex-direction: column; gap: 9px; }
  .footer-col-title { font-family: var(--font-head); font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--dimmer); margin-bottom: 3px; }
  .footer-link { font-size: 0.83rem; color: var(--dim); text-decoration: none; transition: color 0.2s; cursor: default; }
  a.footer-link { cursor: pointer; }
  a.footer-link:hover { color: var(--accent-light); }
  .footer-cta-link { margin-top: 6px; color: var(--accent-light); font-weight: 600; font-size: 0.83rem; text-decoration: none; }
  .footer-cta-link:hover { text-decoration: underline; }
  .footer-bottom { border-top: 1px solid var(--border); padding: 18px 40px; display: flex; justify-content: space-between; align-items: center; font-size: 0.73rem; color: var(--dimmer); }

  @media (max-width: 900px) {
    .container { padding: 0 20px; }
    .nav-inner { padding: 0 20px; }
    .nav-links { display: none; }
    .nav-hamburger { display: flex; }
    .footer-inner { grid-template-columns: 1fr 1fr; gap: 24px; padding: 0 20px 32px; }
    .footer-bottom { flex-direction: column; gap: 6px; text-align: center; padding: 14px 20px; }
  }
  @media (max-width: 540px) {
    .footer-inner { grid-template-columns: 1fr; }
  }
`;
