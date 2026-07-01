document.addEventListener('DOMContentLoaded', () => {

  // ── Navigation ────────────────────────────────────────────────────────────
  const menuToggle   = document.getElementById('menu-toggle');
  const mobileNav    = document.getElementById('mobile-nav');
  const mobileDropdownToggle = document.getElementById('mobile-dropdown-toggle');
  const mobileDropdownMenu   = document.getElementById('mobile-dropdown-menu');
  const header = document.getElementById('header');

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.classList.toggle('open');
    mobileNav.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileDropdownToggle.addEventListener('click', () => {
    mobileDropdownMenu.classList.toggle('open');
    const chevron = mobileDropdownToggle.querySelector('.chevron-icon');
    if (chevron) chevron.style.transform = mobileDropdownMenu.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
  });

  document.querySelectorAll('.mobile-nav-link, .mobile-dropdown-item').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background      = 'rgba(10, 11, 16, 0.75)';
      header.style.backdropFilter  = 'blur(20px)';
      header.style.webkitBackdropFilter = 'blur(20px)';
      header.style.padding         = '18px 0';
      header.style.boxShadow       = '0 1px 0 rgba(255,255,255,0.06)';
    } else {
      header.style.background      = 'transparent';
      header.style.backdropFilter  = 'none';
      header.style.webkitBackdropFilter = 'none';
      header.style.padding         = '28px 0';
      header.style.boxShadow       = 'none';
    }
  });

  // ── Translations ──────────────────────────────────────────────────────────
  const translations = {
    en: {
      'page.title'       : 'Stayli — World-Class Websites for Real Estate Agencies',
      'nav.home'         : 'Home',
      'nav.portfolio'    : 'Portfolio',
      'nav.services'     : 'Services',
      'nav.process'      : 'Process',
      'nav.contact'      : 'Contact',
      'nav.features'     : 'Features',
      'nav.feat.idx'     : 'Listing Pages',
      'nav.feat.maps'    : 'Smart Search',
      'nav.feat.crm'     : 'Inquiry Forms',
      'nav.feat.seo'     : 'SEO Optimization',
      'nav.cta'          : 'Get started',
      'hero.title'       : 'World-class websites for<br>real estate agencies',
      'hero.subtitle'    : 'We craft high-end, bespoke digital experiences for premium property brands.<br>Attract luxury listings and convert buyers with award-winning design.',
      'hero.search_btn'  : 'Search',
      'feat.tag'         : 'Our Expertise',
      'feat.title'       : 'Designed to win premium listings',
      'feat.subtitle'    : 'We equip your agency with high-performance features that outpace the competition and convert every visitor into an inquiry.',
      'feat.card1.title' : 'Design Unlike Any Other Agency',
      'feat.card1.desc'  : 'Your website looks nothing like any other real estate agency site. Clients feel the difference the moment they arrive — a distinctive visual identity that signals premium quality before a single word is read.',
      'feat.card1.link'  : 'See Our Work',
      'feat.card2.title' : 'Smart Search & Filters',
      'feat.card2.desc'  : 'Advanced property search built for the local market — filter by neighborhood, property type, size, and price range, with instant results and no page reloads.',
      'feat.card2.link'  : 'Explore Smart Search',
      'feat.card3.title' : 'Lead Capture & Inquiry Flows',
      'feat.card3.desc'  : 'High-converting inquiry forms with WhatsApp and Viber integration — every lead lands in one clean, organised inbox, ready to act on.',
      'feat.card3.link'  : 'Explore Lead Tools',
      'trust.label'      : 'Agencies that chose Stayli',
      'trust.stat1'      : 'Agencies launched',
      'trust.stat2'      : 'Avg. inquiry increase',
      'trust.stat3'      : 'Client retention rate',
      'port.tag'         : 'Selected Work',
      'port.title'       : 'Websites that close listings',
      'port.subtitle'    : "A glimpse at the bespoke platforms we've engineered for premium agencies — drag to explore.",
      'port.card1.tag'   : 'Architectural Masterpieces',
      'port.card1.desc'  : 'Modern architectural estate platform with a bold design structure.',
      'port.card2.tag'   : 'Futuristic Real Estate',
      'port.card2.desc'  : 'Futuristic organic architecture presentation with interactive elements.',
      'port.card3.tag'   : 'Sustainable Living',
      'port.card3.desc'  : 'Minimalist listings site focusing on ecological and smart home designs.',
      'port.card4.tag'   : 'Premium Listings',
      'port.card4.desc'  : 'Luxury property listings database with integrated search filters.',
      'port.card5.tag'   : 'Waterfront Properties',
      'port.card5.desc'  : 'Coastal estates and seaside residence portfolio with high-converting layouts.',
      'proc.tag'         : 'How We Work',
      'proc.title'       : 'From your intake form to a live site in 2 weeks',
      'proc.subtitle'    : 'A streamlined, transparent process built for busy agency owners — no guesswork, no surprises.',
      'proc.step1.title' : 'Tell Us About Your Agency',
      'proc.step1.desc'  : 'Fill in our short intake form: describe your agency\'s style, the types of properties you focus on, your target clients, and your goals. We review everything in detail before reaching out.',
      'proc.step2.title' : 'Bespoke Design',
      'proc.step2.desc'  : 'We craft a unique visual concept around your brand identity — never a template — and walk you through every detail for feedback and refinement.',
      'proc.step3.title' : 'Build & Refine',
      'proc.step3.desc'  : 'We develop the full platform: listing pages, smart search, inquiry flows, and complete SEO setup — then fine-tune every detail until it\'s perfect.',
      'proc.step4.title' : 'Launch & Support',
      'proc.step4.desc'  : 'Your site goes live after thorough QA testing. We stay on as your dedicated technical partner for everything that follows.',
      'testi.tag'        : 'Client Stories',
      'testi.title'      : 'Agencies that made the switch',
      'testi.subtitle'   : 'What real estate professionals say after working with us.',
      'testi.q1'         : '"Our old website looked exactly like every other agency site. Since launching with Stayli, clients specifically mention the website as the reason they called us first."',
      'testi.q2'         : '"Two weeks, constant communication, and the result exceeded everything I imagined. The process alone made it worth choosing Stayli over anyone else."',
      'testi.q3'         : '"Inquiry volume doubled in the first month. I didn\'t expect the design to have such a direct impact on business — but it did, and it keeps doing it."',
      'serv.tag'         : "What's Included",
      'serv.title'       : 'Everything your agency needs',
      'serv.subtitle'    : 'One complete package — no plugins to juggle, no surprise extras.',
      'serv.cta'         : 'Start the conversation',
      'serv.i1.title'    : 'Custom Visual Design',
      'serv.i1.desc'     : 'A unique concept built around your brand — never a template.',
      'serv.i2.title'    : 'Property Listing System',
      'serv.i2.desc'     : 'Search, smart filters, and a dedicated page for every listing.',
      'serv.i3.title'    : 'Inquiry & Lead Tools',
      'serv.i3.desc'     : 'WhatsApp and Viber integration, clean inquiry dashboard.',
      'serv.i4.title'    : 'Full SEO Setup',
      'serv.i4.desc'     : 'Technical SEO, structured data, and meta tags built in from day one.',
      'serv.i5.title'    : 'Mobile Optimised',
      'serv.i5.desc'     : 'Pixel-perfect on every device — desktop, tablet, and phone.',
      'serv.i6.title'    : 'Ongoing Support',
      'serv.i6.desc'     : 'We stay on as your technical partner after launch — not a handoff.',
      'cta.tag'          : 'Get Started',
      'cta.title'        : 'Ready to stand out?',
      'cta.subtitle'     : 'Tell us about your agency and we\'ll show you what a site built around your brand looks like.',
      'cta.btn'          : 'Start the conversation',
      'cta.note'         : 'No commitment. We\'ll send you a short questionnaire and take it from there.',
      'foot.tagline'     : 'World-class websites for real estate agencies.',
      'foot.copy'        : '© 2025 Stayli. All rights reserved.',
      'foot.made'        : 'Built with intention, not a template.',
    },
    bg: {
      'page.title'       : 'Stayli — Премиум Уебсайтове за Агенции за Недвижими Имоти',
      'nav.home'         : 'Начало',
      'nav.portfolio'    : 'Портфолио',
      'nav.services'     : 'Услуги',
      'nav.process'      : 'Процес',
      'nav.contact'      : 'Контакт',
      'nav.features'     : 'Функции',
      'nav.feat.idx'     : 'Каталог с имоти',
      'nav.feat.maps'    : 'Интелигентно търсене',
      'nav.feat.crm'     : 'Запитвания и CRM',
      'nav.feat.seo'     : 'SEO Оптимизация',
      'nav.cta'          : 'Консултирайте се с нас',
      'hero.title'       : 'Премиум уебсайтове за имотни агенции',
      'hero.subtitle'    : 'Изграждаме персонализирани дигитални платформи за водещи имотни брандове.<br>Привличайте луксозни клиенти и правете повече сделки с дизайн, който спира погледа.',
      'hero.search_btn'  : 'Търси',
      'feat.tag'         : 'Какво правим',
      'feat.title'       : 'Дизайн, създаден за спечелване на ексклузивни мандати',
      'feat.subtitle'    : 'Предоставяме на Вашата агенция технологични предимства, които Ви отличават на пазара и превръщат посетителите в реални клиенти.',
      'feat.card1.title' : 'Индивидуален дизайн без аналог',
      'feat.card1.desc'  : 'Вашият уебсайт няма да прилича на нито един масов шаблон. Създаваме уникален визуален език, който подчертава престижа на Вашия бранд още от първата секунда.',
      'feat.card1.link'  : 'Разгледайте портфолиото',
      'feat.card2.title' : 'Бързо филтриране и интуитивно търсене',
      'feat.card2.desc'  : 'Модерно търсене, адаптирано към изискванията на купувачите – мигновено филтриране по район, вид имот, квадратура и бюджет без досадно презареждане.',
      'feat.card2.link'  : 'Вижте как работи',
      'feat.card3.title' : 'Ефективно улавяне на запитвания',
      'feat.card3.desc'  : 'Висококонвертиращи форми с директна интеграция на WhatsApp и Viber. Всички запитвания се събират на едно място за максимално бърза реакция от Вашите брокери.',
      'feat.card3.link'  : 'Научете повече',
      'trust.label'      : 'Водещи агенции, които ни се довериха',
      'trust.stat1'      : 'Успешно стартирани проекти',
      'trust.stat2'      : 'Среден ръст на запитванията',
      'trust.stat3'      : 'Дългосрочно партньорство',
      'port.tag'         : 'Избрани Проекти',
      'port.title'       : 'Уебсайтове, които правят сделки',
      'port.subtitle'    : 'Поглед към персонализираните платформи, изградени за водещи агенции — плъзни и разгледай.',
      'port.card1.tag'   : 'Архитектурни шедьоври',
      'port.card1.desc'  : 'Дизайнерска платформа за архитектурни имоти с бруталистичен дизайн.',
      'port.card2.tag'   : 'Футуристични имоти',
      'port.card2.desc'  : 'Пленяващо представяне на концепции за ултра-луксозна органична архитектура.',
      'port.card3.tag'   : 'Екологични жилища',
      'port.card3.desc'  : 'Минималистичен и функционален портал за устойчиви луксозни къщи с умни системи.',
      'port.card4.tag'   : 'Премиум листинги',
      'port.card4.desc'  : 'Модерен каталог с богата база данни от луксозни вили и имения от висок клас.',
      'port.card5.tag'   : 'Крайбрежни имоти',
      'port.card5.desc'  : 'Специализирана листинг платформа за крайбрежни имения и ваканционни резиденции.',
      'proc.tag'         : 'Нашият подход',
      'proc.title'       : 'От първия разговор до готов сайт за 2 седмици',
      'proc.subtitle'    : 'Секвениран и оптимизиран процес, създаден за натоварени бизнес собственици – без усложнения, без закъснения.',
      'proc.step1.title' : '1. Стратегически анализ',
      'proc.step1.desc'  : 'Анализираме визията на Вашия бранд, сегмента на имотите и Вашата целева аудитория чрез кратък въпросник, за да определим ясната посока.',
      'proc.step2.title' : '2. Индивидуален дизайн',
      'proc.step2.desc'  : 'Проектираме авторска концепция, съобразена изцяло с идентичността на Вашата агенция, и я обсъждаме стъпка по стъпка.',
      'proc.step3.title' : '3. Разработка и интеграция',
      'proc.step3.desc'  : 'Изграждаме платформата, интегрираме имотните каталози, филтри, CRM системи и извършваме професионално SEO планиране.',
      'proc.step4.title' : '4. Лонч и поддръжка',
      'proc.step4.desc'  : 'Стартираме Вашия уебсайт след подробни тестове и оставаме Ваш постоянен технологичен партньор за поддръжка и развитие.',
      'testi.tag'        : 'Отзиви',
      'testi.title'      : 'Какво казват партньорите ни',
      'testi.subtitle'   : 'Мнения на професионалисти след съвместната ни работа.',
      'testi.q1'         : '„Предишният ни сайт изглеждаше като на всяка друга агенция. С новата платформа Stayli клиентите започнаха изрично да споменават уебсайта като ключов фактор за доверието им към нас.“',
      'testi.q2'         : '„Две седмици, пълна прозрачност в комуникацията и резултат, който надмина очакванията ни. Процесът на Stayli е бърз и изключително професионален.“',
      'testi.q3'         : '„Запитванията за имоти нараснаха двойно още през първия месец. Инвестицията в индивидуален дизайн се възвърна изключително бързо.“',
      'serv.tag'         : 'Какво включва услугата',
      'serv.title'       : 'Всичко необходимо за Вашата агенция',
      'serv.subtitle'    : 'Цялостен дигитален пакет от край до край – без нужда от външни плъгини и без скрити разходи.',
      'serv.cta'         : 'Свържете се с нас',
      'serv.i1.title'    : 'Индивидуален визуален дизайн',
      'serv.i1.desc'     : 'Уникален интерфейс, разработен специално за Вашия бранд – без използване на готови шаблони.',
      'serv.i2.title'    : 'Управление на каталога от имоти',
      'serv.i2.desc'     : 'Бързо търсене, интерактивни филтри и детайлни, представителни продуктови страници за всеки имот.',
      'serv.i3.title'    : 'Оптимизация на запитванията',
      'serv.i3.desc'     : 'Интегрирани канали за връзка през WhatsApp и Viber, директно свързани с Вашата CRM система.',
      'serv.i4.title'    : 'Цялостна техническа SEO оптимизация',
      'serv.i4.desc'     : 'Структуриран и чист код, подготвен за отлично класиране в търсачката на Google от първия ден.',
      'serv.i5.title'    : 'Пълна мобилна съвместимост',
      'serv.i5.desc'     : 'Безпрепятствена работа и перфектна визуализация на десктоп, таблети и смартфони.',
      'serv.i6.title'    : 'Професионална поддръжка',
      'serv.i6.desc'     : 'Оставаме до Вас като технически съветник и партньор за последващи актуализации и сигурност.',
      'cta.tag'          : 'Следваща стъпка',
      'cta.title'        : 'Готови ли сте да се отличите на пазара?',
      'cta.subtitle'     : 'Споделете Вашата бизнес визия и ние ще Ви предложим концепция за уебсайт, която отговаря на амбициите Ви.',
      'cta.btn'          : 'Заявете безплатна консултация',
      'cta.note'         : 'Без никакво обвързване. Изпращаме Ви кратък въпросник и започваме оттам.',
      'foot.tagline'     : 'Дигитални платформи от най-висок клас за агенции за недвижими имоти.',
      'foot.copy'        : '© 2025 Stayli. Всички права запазени.',
      'foot.made'        : 'Разработено с фокус върху марката, без готови шаблони.',
    }
  };

  // Keys whose values contain HTML (use innerHTML, not textContent)
  const htmlKeys = new Set(['hero.title', 'hero.subtitle']);

  // ── Search typing animation ────────────────────────────────────────────────
  const searchPhrases = {
    en: [
      'Premium websites for real estate agencies...',
      'Immersive listing pages that convert buyers...',
      'Smart property search for the local market...',
      'WhatsApp & Viber inquiry flows that close deals...',
      'SEO optimization to outrank every competitor...'
    ],
    bg: [
      'Дигитални платформи от световна класа за имотни агенции...',
      'Индивидуални продуктови страници, които печелят доверие...',
      'Интелигентно филтриране по локация, тип и бюджет...',
      'Оптимизирани канали за връзка през WhatsApp и Viber...',
      'Професионално SEO за водещи позиции в Google...'
    ]
  };

  let phraseIndex = 0, charIndex = 0, isDeleting = false, typeTimer = null;
  const searchInput = document.getElementById('search-input');

  function runTypeEffect() {
    const lang    = currentLang;
    const phrases = searchPhrases[lang] || searchPhrases.en;
    const phrase  = phrases[phraseIndex % phrases.length];

    if (isDeleting) {
      searchInput.placeholder = phrase.substring(0, --charIndex);
    } else {
      searchInput.placeholder = phrase.substring(0, ++charIndex);
    }

    let speed = isDeleting ? 28 : 58;
    if (!isDeleting && charIndex === phrase.length) { speed = 2200; isDeleting = true; }
    else if (isDeleting && charIndex === 0)         { isDeleting = false; phraseIndex++; speed = 380; }

    typeTimer = setTimeout(runTypeEffect, speed);
  }

  function restartTypeEffect() {
    clearTimeout(typeTimer);
    charIndex = 0; isDeleting = false; phraseIndex = 0;
    if (searchInput) searchInput.placeholder = '';
    runTypeEffect();
  }

  // ── Apply translations ────────────────────────────────────────────────────
  let currentLang = localStorage.getItem('stayli-lang') || 'en';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('stayli-lang', lang);
    document.documentElement.lang = lang;

    // Switch heading font: Manrope has full Cyrillic; Outfit is Latin-only
    document.documentElement.style.setProperty(
      '--font-primary',
      lang === 'bg' ? "'Manrope', sans-serif" : "'Outfit', sans-serif"
    );

    const t = translations[lang];
    if (!t) return;

    document.title = t['page.title'] || document.title;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (t[key] === undefined) return;
      htmlKeys.has(key) ? (el.innerHTML = t[key]) : (el.textContent = t[key]);
    });

    const langLabel = document.getElementById('lang-current');
    if (langLabel) langLabel.textContent = lang.toUpperCase();

    restartTypeEffect();
  }

  // ── Language toggle button ────────────────────────────────────────────────
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'bg' : 'en');
    });
  }

  // Apply saved / default language on load
  setLanguage(currentLang);

  // ── Feature card glow on hover ────────────────────────────────────────────
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--x', `${e.clientX - r.left}px`);
      card.style.setProperty('--y', `${e.clientY - r.top}px`);
    });
  });

  // ── Trust stats count-up ─────────────────────────────────────────────────
  const statEls = document.querySelectorAll('.trust-stat-number');
  if (statEls.length) {
    const countUp = el => {
      const target = +el.dataset.count;
      const t0 = performance.now();
      const step = now => {
        const p = Math.min((now - t0) / 1400, 1);
        el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(e => { if (e.isIntersecting) { countUp(e.target); obs.unobserve(e.target); } });
    }, { threshold: 0.4 });
    statEls.forEach(el => io.observe(el));
  }

  // ── Portfolio carousel ────────────────────────────────────────────────────
  const track    = document.getElementById('portfolio-track');
  const prevBtn  = document.getElementById('portfolio-prev');
  const nextBtn  = document.getElementById('portfolio-next');
  const progBar  = document.getElementById('portfolio-progress-bar');

  if (track) {
    const updateProg = () => {
      const max   = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      const min   = 100 / track.children.length;
      progBar.style.width = `${min + ratio * (100 - min)}%`;
    };

    const scrollCard = dir => {
      const card = track.querySelector('.portfolio-card');
      if (card) track.scrollBy({ left: dir * (card.offsetWidth + 28), behavior: 'smooth' });
    };

    prevBtn?.addEventListener('click', () => scrollCard(-1));
    nextBtn?.addEventListener('click', () => scrollCard(1));
    track.addEventListener('scroll', updateProg, { passive: true });
    updateProg();

    let dragging = false, dragX = 0, scrollX = 0;
    track.addEventListener('mousedown', e => { dragging = true; dragX = e.pageX; scrollX = track.scrollLeft; track.classList.add('dragging'); });
    window.addEventListener('mouseup',  () => { dragging = false; track.classList.remove('dragging'); });
    window.addEventListener('mousemove', e => { if (!dragging) return; e.preventDefault(); track.scrollLeft = scrollX - (e.pageX - dragX); });
  }

  // ── Process line fill on scroll ───────────────────────────────────────────
  const lineFill = document.getElementById('process-line-fill');
  const procSec  = document.getElementById('process-section');
  if (lineFill && procSec) {
    new IntersectionObserver((entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const mobile = window.matchMedia('(max-width: 992px)').matches;
          lineFill.style[mobile ? 'height' : 'width'] = '100%';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 }).observe(procSec);
  }

});
