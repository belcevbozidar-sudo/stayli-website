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
      'port.card1.tag'   : 'Luxury Listings',
      'port.card1.desc'  : 'Coastal luxury listings platform with custom interactive map search.',
      'port.card2.tag'   : 'Boutique Agency',
      'port.card2.desc'  : 'Minimalist brand site built around a fast, filterable listings grid.',
      'port.card3.tag'   : 'Commercial Real Estate',
      'port.card3.desc'  : 'Enterprise commercial portfolio with investor-grade data rooms.',
      'port.card4.tag'   : 'New Developments',
      'port.card4.desc'  : 'Pre-launch microsite with reservation funnel for a new development.',
      'proc.tag'         : 'How We Work',
      'proc.title'       : 'From your intake form to a live site in 4 weeks',
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
      'testi.q2'         : '"Four weeks, constant communication, and the result exceeded everything I imagined. The process alone made it worth choosing Stayli over anyone else."',
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
      'nav.feat.idx'     : 'Имотни Странички',
      'nav.feat.maps'    : 'Умно Търсене',
      'nav.feat.crm'     : 'Форми за Запитвания',
      'nav.feat.seo'     : 'SEO Оптимизация',
      'nav.cta'          : 'Започни сега',
      'hero.title'       : 'Премиум уебсайтове за имотни агенции',
      'hero.subtitle'    : 'Изграждаме персонализирани дигитални платформи за водещи имотни брандове.<br>Привличайте луксозни клиенти и правете повече сделки с дизайн, който спира погледа.',
      'hero.search_btn'  : 'Търси',
      'feat.tag'         : 'Нашата Експертиза',
      'feat.title'       : 'Проектирани да затварят премиум сделки',
      'feat.subtitle'    : 'Оборудваме агенцията ви с мощни функции, изпреварващи конкуренцията и превръщащи всеки посетител в запитване.',
      'feat.card1.title' : 'Дизайн, Какъвто Никоя Друга Агенция Няма',
      'feat.card1.desc'  : 'Сайтът ти не прилича на нито един друг имотен сайт. Клиентите усещат разликата в момента, в който влязат — уникална визуална идентичност, която излъчва качество преди да е прочетена и дума.',
      'feat.card1.link'  : 'Виж Нашите Проекти',
      'feat.card2.title' : 'Умно Търсене и Филтриране',
      'feat.card2.desc'  : 'Разширено търсене, адаптирано за българския пазар — по квартал, вид имот, площ и цена, с мигновени резултати без презареждане на страницата.',
      'feat.card2.link'  : 'Разгледай Търсенето',
      'feat.card3.title' : 'Форми за Запитвания и Лийдове',
      'feat.card3.desc'  : 'Конвертиращи форми за контакт с интеграция за WhatsApp и Viber — всяко запитване попада в един ясен, организиран списък, готов за действие.',
      'feat.card3.link'  : 'Разгледай Лийд Инструментите',
      'trust.label'      : 'Агенции, работили с нас',
      'trust.stat1'      : 'Изградени агенции',
      'trust.stat2'      : 'Среден ръст на запитвания',
      'trust.stat3'      : 'Задържане на клиенти',
      'port.tag'         : 'Избрани Проекти',
      'port.title'       : 'Уебсайтове, които правят сделки',
      'port.subtitle'    : 'Поглед към персонализираните платформи, изградени за водещи агенции — плъзни и разгледай.',
      'port.card1.tag'   : 'Луксозни Листинги',
      'port.card1.desc'  : 'Луксозна крайбрежна платформа за обяви с персонализирано картографско търсене.',
      'port.card2.tag'   : 'Бутикова Агенция',
      'port.card2.desc'  : 'Минималистичен брандов сайт с бърза, филтрируема мрежа от имотни обяви.',
      'port.card3.tag'   : 'Търговски Имоти',
      'port.card3.desc'  : 'Корпоративно портфолио с инвеститорски data room и пълна документна база.',
      'port.card4.tag'   : 'Ново Строителство',
      'port.card4.desc'  : 'Пред-лонч микросайт с резервационна фуния за обект ново строителство.',
      'proc.tag'         : 'Как Работим',
      'proc.title'       : 'От въпросника до готов сайт за 4 седмици',
      'proc.subtitle'    : 'Опростен, прозрачен процес за заети собственици на агенции — без неизвестности, без изненади.',
      'proc.step1.title' : 'Разкажи ни за Агенцията Си',
      'proc.step1.desc'  : 'Попълни нашия кратък въпросник: стил на агенцията, вид имоти, целева аудитория и цели. Разглеждаме всичко внимателно — без стандартни разговори на прима виста.',
      'proc.step2.title' : 'Персонализиран Дизайн',
      'proc.step2.desc'  : 'Създаваме уникална визуална концепция около твоята идентичност — никога шаблон — и я представяме за преглед и корекции.',
      'proc.step3.title' : 'Разработка и Настройка',
      'proc.step3.desc'  : 'Изграждаме цялата платформа: имотни странички, умно търсене, форми за запитвания и пълна SEO настройка — после финозираме всеки детайл.',
      'proc.step4.title' : 'Старт и Поддръжка',
      'proc.step4.desc'  : 'Сайтът тръгва след пълна QA проверка. Оставаме твой технически партньор за всичко, което следва.',
      'testi.tag'        : 'Казват за нас',
      'testi.title'      : 'Агенции, преминали при нас',
      'testi.subtitle'   : 'Какво казват собствениците след сътрудничеството ни.',
      'testi.q1'         : '„Старият ни сайт изглеждаше като всеки друг имотен сайт. След като пуснахме новия, клиентите изрично споменават уебсайта като причина да са се обадили първи при нас."',
      'testi.q2'         : '„Четири седмици, постоянна комуникация и резултатът надмина всичко, което си представях. Процесът сам по себе си беше достатъчна причина да изберем Stayli."',
      'testi.q3'         : '„Запитванията се удвоиха в първия месец. Не очаквах дизайнът да има толкова пряко влияние върху бизнеса — но го имаше, и продължава да го има."',
      'serv.tag'         : 'Какво е включено',
      'serv.title'       : 'Всичко, от което агенцията ти има нужда',
      'serv.subtitle'    : 'Един пълен пакет — без допълнителни приставки, без скрити екстри.',
      'serv.cta'         : 'Започни разговора',
      'serv.i1.title'    : 'Персонализиран Дизайн',
      'serv.i1.desc'     : 'Уникална концепция, изградена около твоята идентичност — никога шаблон.',
      'serv.i2.title'    : 'Система за Обяви',
      'serv.i2.desc'     : 'Търсене, филтри и отделна страничка за всеки имот.',
      'serv.i3.title'    : 'Инструменти за Запитвания',
      'serv.i3.desc'     : 'WhatsApp и Viber интеграция, чист преглед на всяко запитване.',
      'serv.i4.title'    : 'Пълна SEO Настройка',
      'serv.i4.desc'     : 'Технически SEO, структурирани данни и мета тагове от самото начало.',
      'serv.i5.title'    : 'Оптимизиран за Мобилни',
      'serv.i5.desc'     : 'Перфектен на всяко устройство — компютър, таблет и телефон.',
      'serv.i6.title'    : 'Постоянна Поддръжка',
      'serv.i6.desc'     : 'Оставаме твой технически партньор след старта — не просто предаваме.',
      'cta.tag'          : 'Започни',
      'cta.title'        : 'Готов да се откроиш?',
      'cta.subtitle'     : 'Разкажи ни за агенцията си и ще ти покажем как изглежда сайт, изграден специално за теб.',
      'cta.btn'          : 'Започни разговора',
      'cta.note'         : 'Без ангажимент. Ще ти изпратим кратък въпросник и оттам продължаваме.',
      'foot.tagline'     : 'Премиум уебсайтове за агенции за недвижими имоти.',
      'foot.copy'        : '© 2025 Stayli. Всички права запазени.',
      'foot.made'        : 'Изграден с намерение, не от шаблон.',
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
      'Премиум уебсайтове за имотни агенции...',
      'Пленяващи имотни странички с виртуални обиколки...',
      'Умно търсене по квартал, вид и цена...',
      'WhatsApp и Viber интеграции за повече запитвания...',
      'SEO оптимизация, която изпреварва конкуренцията...'
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
