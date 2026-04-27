/* ─── EAGLE ENVISION CHATBOT ────────────────────────────── */
(function () {

  /* ── KNOWLEDGE BASE ──────────────────────────────────── */
  const KB = [
    {
      match: ['price', 'cost', 'how much', 'pricing', 'rates', 'charge', 'fee', 'affordable', 'cheap'],
      reply: `Here's the breakdown:\n\n• <b>Personal Website</b> — $85 one-time\n• <b>Small Business Website</b> — $180 one-time\n• <b>Monthly Maintenance</b> — $15–$30/mo (optional)\n• <b>Add-ons</b> — extra pages, SEO pack, booking, and more\n\nAll builds include 100% code ownership — no platform fees ever.`,
      quick: ['What\'s included?', 'Tell me about add-ons', 'Get a quote']
    },
    {
      match: ['include', 'what do i get', "what's in", 'features', 'pages', 'sections'],
      reply: `Every build includes:\n\n• Custom HTML / CSS / JS (no templates)\n• Hero section + call-to-action\n• About & FAQ sections\n• Contact form → your inbox\n• Mobile responsive\n• Local SEO foundation\n• Deployed on Vercel Edge Network\n\nThe <b>Small Business plan ($180)</b> also adds up to 5 pages, brand identity, advanced SEO, and Google Business setup.`,
      quick: ['How long does it take?', 'What are add-ons?', 'Get a quote']
    },
    {
      match: ['addon', 'add-on', 'add on', 'extra', 'booking', 'legal', 'multilingual', 'seo pack', 'additional page'],
      reply: `Available power-ups:\n\n• <b>Extra Pages</b> — $50/page\n• <b>Legal Suite</b> (Privacy + Terms) — $75\n• <b>Multilingual</b> — $150/language\n• <b>Booking Integration</b> (Calendly/TidyCal) — $80\n• <b>Advanced Local SEO Pack</b> — $100\n\nNeed something custom? Just ask — logo design, animations, email setup, etc.`,
      quick: ['How long does it take?', 'Get a quote', 'How do I contact you?']
    },
    {
      match: ['how long', 'timeline', 'turnaround', 'when', 'delivery', 'fast', 'quickly', 'weeks'],
      reply: `Most sites are delivered in <b>2–4 weeks</b> from the time we kick off.\n\nYou work 1:1 directly with me (the founder) — no project managers, no middlemen. I'll keep you updated every step of the way.`,
      quick: ['What\'s the process?', 'Get a quote', 'How do I contact you?']
    },
    {
      match: ['process', 'how does it work', 'steps', 'start', 'begin', 'get started'],
      reply: `Here's how it works:\n\n<b>1. Discovery</b> — We chat about your business & goals (free, no pressure)\n<b>2. Quote & Plan</b> — I send a clear, itemized quote\n<b>3. Design & Build</b> — I build it in weeks, keeping you updated\n<b>4. Review & Launch</b> — You approve, we go live\n\nReady to kick things off?`,
      quick: ['Get a quote', 'How do I contact you?', 'How long does it take?']
    },
    {
      match: ['service', 'what do you do', 'what do you offer', 'what do you build', 'specialize'],
      reply: `Eagle Envision offers three core services:\n\n• <b>Custom Websites</b> — hand-coded, blazing fast\n• <b>Brand Identity</b> — logos, colors, visual systems\n• <b>Local SEO</b> — show up when DFW neighbors search\n• <b>Maintenance</b> — monthly updates & hosting managed\n\nAll built with pure HTML, CSS & JS — no frameworks, no bloat.`,
      quick: ['How much does it cost?', 'How long does it take?', 'Get a quote']
    },
    {
      match: ['seo', 'google', 'search', 'rank', 'local', 'found', 'discover'],
      reply: `Every site includes a <b>local SEO foundation</b> — meta tags, sitemaps, and structure that helps Google index you properly.\n\nFor deeper visibility, the <b>Advanced Local SEO Pack ($100)</b> adds schema markup, Google Business optimization, and Search Console submission. Perfect for dominating DFW local search.`,
      quick: ['What\'s the cost?', 'Get a quote', 'Tell me about services']
    },
    {
      match: ['maintenance', 'update', 'support', 'hosting', 'uptime', 'monthly'],
      reply: `Maintenance is <b>optional</b> — you own the code outright after launch.\n\nBut if you want peace of mind:\n• <b>Personal plan</b> — $15/mo\n• <b>Business plan</b> — $30/mo\n\nIncludes hosting (Vercel Edge), security monitoring, monthly content updates, and priority 24hr response. Cancel anytime.`,
      quick: ['Get a quote', 'How do I contact you?', 'What\'s included in the build?']
    },
    {
      match: ['contact', 'reach', 'email', 'phone', 'call', 'talk', 'message', 'get in touch'],
      reply: `You can reach Levi directly:\n\n📧 <a href="mailto:levi.eagle11@gmail.com" style="color:#93C5FD">levi.eagle11@gmail.com</a>\n📞 <a href="tel:3367083524" style="color:#93C5FD">(336) 708-3524</a>\n📍 Roanoke, Texas · DFW\n\nOr use the <a href="contact.html" style="color:#93C5FD">contact form</a> — I'll get back to you within 1 business day.`,
      quick: ['What are your prices?', 'How does it work?', 'Get a quote']
    },
    {
      match: ['quote', 'free quote', 'estimate', 'proposal'],
      reply: `Head over to the <a href="contact.html" style="color:#93C5FD">contact page</a> and fill out the form — it takes about 2 minutes.\n\nTell me about your business and what you need, and I'll get back to you within 1 business day with a clear plan and honest price. No pressure, no commitment.`,
      quick: ['What\'s your pricing?', 'How long does it take?', 'How do I contact you?']
    },
    {
      match: ['location', 'where', 'texas', 'roanoke', 'dfw', 'dallas', 'fort worth', 'remote'],
      reply: `Eagle Envision is based in <b>Roanoke, Texas</b> (DFW area).\n\nI work with local DFW businesses in person and serve clients <b>fully remote</b> across the US. Distance is never an issue — everything can be handled online.`,
      quick: ['Get a quote', 'How do I contact you?', 'What are your services?']
    },
    {
      match: ['framework', 'react', 'wordpress', 'wix', 'squarespace', 'next', 'template', 'builder'],
      reply: `None of those — and that\'s the point.\n\nEvery site is built with <b>pure HTML, CSS, and JavaScript</b>. No frameworks, no page builders, no npm, no terminal required.\n\nThe result? Sites that load faster, cost less to maintain, and that any developer can open and understand. You own the code — no platform lock-in ever.`,
      quick: ['How much does it cost?', 'Get a quote', 'What\'s included?']
    },
    {
      match: ['hi', 'hey', 'hello', 'howdy', 'sup', 'yo', 'greetings'],
      reply: `Hey! 👋 Welcome to Eagle Envision.\n\nI\'m here to answer questions about web design, pricing, services, or how to get started. What can I help you with?`,
      quick: ['What are your prices?', 'What do you build?', 'How does it work?']
    },
    {
      match: ['thanks', 'thank you', 'appreciate', 'helpful', 'great', 'awesome', 'perfect'],
      reply: `Happy to help! 🦅 Feel free to ask anything else, or jump over to the <a href="contact.html" style="color:#93C5FD">contact page</a> to get the ball rolling.`,
      quick: ['Get a quote', 'What are your services?', 'How do I contact you?']
    },
    {
      match: ['brand', 'logo', 'identity', 'color', 'design', 'visual'],
      reply: `Brand Identity is one of the core services here.\n\nThis covers logos, color systems, typography, and making sure every pixel on your site reflects <i>you</i> — so customers remember your name, not just your page.\n\nIt\'s included in the <b>Small Business plan ($180)</b>, or can be added à la carte. Need a logo from scratch? Just ask for a custom quote.`,
      quick: ['How much does it cost?', 'Get a quote', 'What\'s included?']
    }
  ];

  const FALLBACK = {
    reply: `Hmm, I\'m not sure about that one! For anything specific, you can reach Levi directly:\n\n📧 <a href="mailto:levi.eagle11@gmail.com" style="color:#93C5FD">levi.eagle11@gmail.com</a>\n📞 <a href="tel:3367083524" style="color:#93C5FD">(336) 708-3524</a>\n\nOr check out the <a href="contact.html" style="color:#93C5FD">contact page</a> to send a message.`,
    quick: ['What are your prices?', 'What do you build?', 'How do I contact you?']
  };

  function getResponse(input) {
    const lower = input.toLowerCase();
    for (const entry of KB) {
      if (entry.match.some(kw => lower.includes(kw))) return entry;
    }
    return FALLBACK;
  }

  /* ── STYLES ──────────────────────────────────────────── */
  const style = document.createElement('style');
  style.textContent = `
    #ee-chat-btn {
      position: fixed; bottom: 2rem; right: 2rem; z-index: 9990;
      width: 58px; height: 58px; border-radius: 50%;
      background: #2563EB; border: 1px solid rgba(59,130,246,.6);
      box-shadow: 0 0 28px rgba(37,99,235,.55), 0 4px 20px rgba(0,0,0,.4);
      cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform .25s, box-shadow .25s, background .2s;
      animation: ee-pulse 3s ease-in-out infinite;
    }
    #ee-chat-btn:hover { transform: scale(1.1); background: #3B82F6; box-shadow: 0 0 42px rgba(59,130,246,.7), 0 6px 24px rgba(0,0,0,.45); }
    #ee-chat-btn svg { width: 24px; height: 24px; stroke: #fff; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
    #ee-chat-btn .icon-close { display: none; }
    #ee-chat-btn.open .icon-chat { display: none; }
    #ee-chat-btn.open .icon-close { display: block; }
    @keyframes ee-pulse { 0%,100%{box-shadow:0 0 28px rgba(37,99,235,.55),0 4px 20px rgba(0,0,0,.4);} 50%{box-shadow:0 0 44px rgba(59,130,246,.8),0 4px 20px rgba(0,0,0,.4);} }

    #ee-chat-window {
      position: fixed; bottom: 5.5rem; right: 2rem; z-index: 9989;
      width: 360px; max-height: 540px;
      background: #0E0E18; border: 1px solid rgba(59,130,246,.25);
      border-radius: 20px;
      box-shadow: 0 28px 60px rgba(0,0,0,.65), 0 0 0 1px rgba(255,255,255,.04);
      display: flex; flex-direction: column; overflow: hidden;
      opacity: 0; transform: translateY(18px) scale(.96); pointer-events: none;
      transition: opacity .28s cubic-bezier(.22,1,.36,1), transform .28s cubic-bezier(.22,1,.36,1);
    }
    #ee-chat-window.visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: all; }

    #ee-chat-header {
      padding: 1.1rem 1.3rem;
      background: linear-gradient(135deg, rgba(26,68,204,.22), rgba(14,14,24,.8));
      border-bottom: 1px solid rgba(59,130,246,.15);
      display: flex; align-items: center; gap: .9rem; flex-shrink: 0;
    }
    .ee-avatar { width: 38px; height: 38px; border-radius: 50%; background: rgba(37,99,235,.2); border: 1px solid rgba(59,130,246,.35); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 12px rgba(59,130,246,.25); flex-shrink: 0; }
    .ee-avatar svg { width: 20px; height: 20px; stroke: #93C5FD; fill: none; stroke-width: 1.6; stroke-linecap: round; }
    .ee-header-name { font-family: 'Syne', sans-serif; font-size: .92rem; font-weight: 700; color: #EEF2FF; letter-spacing: .02em; }
    .ee-header-status { font-family: 'JetBrains Mono', monospace; font-size: .62rem; letter-spacing: .08em; color: rgba(238,242,255,.45); display: flex; align-items: center; gap: .4rem; margin-top: .15rem; }
    .ee-status-dot { width: 6px; height: 6px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 6px #22c55e; animation: ee-blink 2s ease-in-out infinite; }
    @keyframes ee-blink { 0%,100%{opacity:1;} 50%{opacity:.4;} }

    #ee-messages { flex: 1; overflow-y: auto; padding: 1.1rem; display: flex; flex-direction: column; gap: .75rem; scrollbar-width: thin; scrollbar-color: rgba(59,130,246,.2) transparent; }
    #ee-messages::-webkit-scrollbar { width: 4px; }
    #ee-messages::-webkit-scrollbar-thumb { background: rgba(59,130,246,.25); border-radius: 4px; }

    .ee-msg { max-width: 88%; font-family: 'DM Sans', sans-serif; font-size: .86rem; line-height: 1.65; padding: .75rem 1rem; border-radius: 14px; animation: ee-in .22s ease forwards; }
    @keyframes ee-in { from{opacity:0;transform:translateY(8px);} to{opacity:1;transform:translateY(0);} }
    .ee-msg.bot { background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.07); color: rgba(238,242,255,.88); align-self: flex-start; border-bottom-left-radius: 4px; }
    .ee-msg.user { background: linear-gradient(135deg,#1d4ed8,#2563EB); border: 1px solid rgba(59,130,246,.4); color: #fff; align-self: flex-end; border-bottom-right-radius: 4px; box-shadow: 0 2px 12px rgba(37,99,235,.35); }
    .ee-msg.bot b { color: #93C5FD; font-weight: 600; }
    .ee-msg.bot a { color: #93C5FD; }

    .ee-typing { display: flex; align-items: center; gap: .35rem; padding: .75rem 1rem; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.07); border-radius: 14px; border-bottom-left-radius: 4px; align-self: flex-start; }
    .ee-typing span { width: 6px; height: 6px; border-radius: 50%; background: rgba(147,197,253,.5); animation: ee-bounce .9s ease-in-out infinite; }
    .ee-typing span:nth-child(2){animation-delay:.15s;} .ee-typing span:nth-child(3){animation-delay:.3s;}
    @keyframes ee-bounce { 0%,80%,100%{transform:translateY(0);} 40%{transform:translateY(-6px);background:#93C5FD;} }

    #ee-quick { padding: 0 1.1rem .85rem; display: flex; flex-wrap: wrap; gap: .45rem; flex-shrink: 0; }
    .ee-qr { font-family: 'JetBrains Mono', monospace; font-size: .68rem; letter-spacing: .04em; padding: .38rem .85rem; border-radius: 50px; cursor: pointer; background: rgba(37,99,235,.12); border: 1px solid rgba(59,130,246,.28); color: #93C5FD; transition: all .18s; white-space: nowrap; }
    .ee-qr:hover { background: rgba(37,99,235,.25); border-color: rgba(59,130,246,.55); transform: translateY(-1px); }

    #ee-input-row { padding: .85rem 1rem; border-top: 1px solid rgba(255,255,255,.06); display: flex; gap: .6rem; align-items: center; flex-shrink: 0; background: rgba(9,9,16,.6); }
    #ee-input { flex: 1; background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.09); border-radius: 50px; padding: .6rem 1rem; color: #EEF2FF; font-family: 'DM Sans', sans-serif; font-size: .85rem; outline: none; transition: border-color .2s, background .2s; }
    #ee-input::placeholder { color: rgba(238,242,255,.25); }
    #ee-input:focus { border-color: rgba(59,130,246,.45); background: rgba(59,130,246,.06); }
    #ee-send { width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0; background: #2563EB; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 14px rgba(37,99,235,.45); transition: background .2s, transform .15s; }
    #ee-send:hover { background: #3B82F6; transform: scale(1.08); }
    #ee-send svg { width: 16px; height: 16px; stroke: #fff; fill: none; stroke-width: 2; stroke-linecap: round; }

    @media (max-width:480px) { #ee-chat-window{width:calc(100vw - 2rem);right:1rem;bottom:5rem;} #ee-chat-btn{right:1rem;bottom:1rem;} }
  `;
  document.head.appendChild(style);

  /* ── HTML ────────────────────────────────────────────── */
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <button id="ee-chat-btn" aria-label="Chat with Eagle Envision">
      <svg class="icon-chat" viewBox="0 0 24 24"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
      <svg class="icon-close" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div id="ee-chat-window" role="dialog" aria-label="Eagle Envision Chat">
      <div id="ee-chat-header">
        <div class="ee-avatar">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div>
          <div class="ee-header-name">Eagle Envision</div>
          <div class="ee-header-status"><span class="ee-status-dot"></span> Online · Usually replies instantly</div>
        </div>
      </div>
      <div id="ee-messages"></div>
      <div id="ee-quick"></div>
      <div id="ee-input-row">
        <input id="ee-input" type="text" placeholder="Ask me anything…" autocomplete="off" />
        <button id="ee-send" aria-label="Send">
          <svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  `;
  document.body.appendChild(wrap);

  /* ── REFS ────────────────────────────────────────────── */
  const btn     = document.getElementById('ee-chat-btn');
  const win     = document.getElementById('ee-chat-window');
  const msgs    = document.getElementById('ee-messages');
  const quick   = document.getElementById('ee-quick');
  const input   = document.getElementById('ee-input');
  const sendBtn = document.getElementById('ee-send');
  let isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;
    btn.classList.toggle('open', isOpen);
    win.classList.toggle('visible', isOpen);
    if (isOpen) { input.focus(); scrollBottom(); }
  });

  function addMsg(html, from) {
    const div = document.createElement('div');
    div.className = 'ee-msg ' + from;
    div.innerHTML = html.replace(/\n/g, '<br>');
    msgs.appendChild(div);
    scrollBottom();
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'ee-typing'; t.id = 'ee-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    msgs.appendChild(t); scrollBottom();
  }
  function hideTyping() { const t = document.getElementById('ee-typing'); if (t) t.remove(); }

  function setQuick(replies) {
    quick.innerHTML = '';
    (replies || []).forEach(r => {
      const b = document.createElement('button');
      b.className = 'ee-qr'; b.textContent = r;
      b.addEventListener('click', () => handleSend(r));
      quick.appendChild(b);
    });
  }

  function handleSend(text) {
    const msg = (text || input.value).trim();
    if (!msg) return;
    input.value = ''; setQuick([]);
    addMsg(msg, 'user');
    showTyping();
    setTimeout(() => {
      hideTyping();
      const res = getResponse(msg);
      addMsg(res.reply, 'bot');
      setQuick(res.quick);
    }, 600 + Math.random() * 500);
  }

  sendBtn.addEventListener('click', () => handleSend());
  input.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

  function scrollBottom() { requestAnimationFrame(() => { msgs.scrollTop = msgs.scrollHeight; }); }

  setTimeout(() => {
    addMsg(`Hey there! 👋 I'm the Eagle Envision assistant.\n\nAsk me anything — pricing, services, timelines, or how to get started.`, 'bot');
    setQuick(['What are your prices?', 'What do you build?', 'How does it work?', 'Get a quote']);
  }, 800);

})();
