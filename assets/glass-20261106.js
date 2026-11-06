(() => {
  'use strict';
  const supported = ['en', 'ru', 'it'];
  const mint = 'FpCidwpKM2DP65eVyTkeqQ3R82w75foejx5wZV8dirQ2';
  const translations = {
    ru: {
      'community.telegram': 'ECNOVA в Telegram', 'community.timelayer': 'Каналы TimeLayer', 'footer.contacts': 'Контакты ECNOVA', 'footer.x': 'ECNOVA в X', 'footer.email.label': 'Написать ECNOVA', 'footer.email': 'Почта',
      'home.label': 'Главная EconovaChain', 'token.label': 'О токене ECNOVA', 'token.logo': 'Логотип токена ECNOVA', 'token.freeze.disabled': 'Отключена',
      skip: 'К содержанию', navigation: 'Основная навигация', language: 'Язык', ecosystem: 'Экосистема', community: 'Сообщество',
      'hero.eyebrow': 'Экосистема EconovaChain', 'hero.one': 'Три продукта.', 'hero.two': 'Одна экосистема.',
      'hero.lead': 'Инструменты для цифровых активов, проверяемых квитанций и обмена знаниями о рынке. Вместе в EconovaChain.',
      explore: 'Изучить экосистему', viewtoken: 'О токене ECNOVA', 'hero.token': 'ECNOVA · Токен экосистемы в сети Solana',
      'hero.alt': 'Стеклянные кошелёк, цифровая квитанция и символы общения, соединённые бирюзово-фиолетовой орбитой.',
      'products.eyebrow': 'Для повседневной цифровой жизни', 'products.title': 'Три способа объединяться.',
      'products.intro': 'Кошелёк для активов. Квитанции для записей. Пространство для обсуждения рынков.', development: 'В разработке',
      'wallet.category': 'Цифровые активы', 'wallet.copy': 'Кошелёк для работы с цифровыми активами, создаваемый как часть экосистемы EconovaChain.', 'wallet.tag': 'Ваши активы. Ваши решения.',
      'receipt.category': 'Проверяемые записи', 'receipt.copy': 'Сеть цифровых квитанций, которые можно хранить у себя и проверять независимо — в том числе офлайн.', 'receipt.more': 'Открыть сайт TimeLayer',
      'scalp.category': 'Обсуждение рынков', 'scalp.copy': 'Социальная сеть для трейдеров, которая объединяет анализ рынка и обмен знаниями.', 'scalp.tag': 'Рынки движутся. Идеи объединяют.',
      'receipt.title.one': 'Сохраните запись.', 'receipt.title.two': 'Проверьте независимо.',
      'receipt.detail': 'Цифровые записи должны оставаться проверяемыми за пределами системы, которая их создала. TimeLayer разрабатывается для переносимых квитанций, проверки целостности и подписей — в том числе для записей в процессах с ИИ-агентами.',
      'receipt.step1': 'Сохраните квитанцию', 'receipt.step1p': 'Полный комплект остаётся у вас вместе с записями.',
      'receipt.step2': 'Проверьте целостность', 'receipt.step2p': 'Проверяйте данные и подписи независимо, в том числе офлайн.', 'receipt.visit': 'Изучить TimeLayer',
      'receipt.boundary': 'Квитанция позволяет проверить данные и подписи. Сама по себе она не доказывает, что событие произошло в реальном мире.',
      'receipt.alt': 'TimeLayer: проверяемые цифровые квитанции. Сохраните запись. Проверьте независимо.', 'receipt.caption': 'Запись остаётся у вас.',
      'token.eyebrow': 'Токен экосистемы', 'token.intro': 'Токен экосистемы EconovaChain в сети Solana. Один токен. Один официальный адрес минта.',
      'token.explorer': 'Открыть в Solana Explorer', 'token.issuance': 'Первичный выпуск', 'token.minting': 'Допэмиссия', 'token.disabled': 'Отключена',
      'token.permanent': 'Право отозвано навсегда', 'token.freezing': 'Заморозка счетов', 'token.metadata': 'Метаданные', 'token.editable': 'Изменяемые', 'token.decimals': '9 знаков после запятой',
      'token.address': 'Официальный адрес минта', copy: 'Скопировать адрес',
      'token.authority': 'Полномочия допэмиссии и заморозки безвозвратно отозваны 4 ноября 2026 года. Право обновления метаданных сохраняется у владельца.',
      'token.metadata.link': 'Открыть метаданные',
      'token.note': 'Владение ECNOVA не даёт долю в компании или гарантированный доход. Доступность продуктов и поддерживаемое применение токена объявляются отдельно.',
      'direction.eyebrow': 'Куда мы движемся', 'direction.title': 'Развиваем полезные связи шаг за шагом.',
      'direction.copy': 'В центре нашей работы — кошелёк, проверяемые цифровые квитанции и сообщество трейдеров. Следите за развитием, изучайте идеи и помогайте определять следующие шаги.',
      'community.eyebrow': 'Оставайтесь на связи', 'community.title': 'Экосистема начинается с людей.', 'community.copy': 'Знакомьтесь с проектом, делитесь идеями и обсуждайте с нами совместную работу.',
      'community.follow': 'Читать ECNOVA в X', 'community.contact': 'Связаться', 'footer.token': 'Проверить токен', 'footer.top': 'Наверх ↑'
    },
    it: {
      'community.telegram': 'ECNOVA su Telegram', 'community.timelayer': 'Canali TimeLayer', 'footer.contacts': 'Contatti ECNOVA', 'footer.x': 'ECNOVA su X', 'footer.email.label': 'Scrivi a ECNOVA', 'footer.email': 'Email',
      'home.label': 'Pagina iniziale di EconovaChain', 'token.label': 'Scopri ECNOVA', 'token.logo': 'Logo del token ECNOVA', 'token.freeze.disabled': 'Disabilitato',
      skip: 'Vai al contenuto', navigation: 'Navigazione principale', language: 'Lingua', ecosystem: 'Ecosistema', community: 'Community',
      'hero.eyebrow': 'L’ecosistema EconovaChain', 'hero.one': 'Tre prodotti.', 'hero.two': 'Un ecosistema.',
      'hero.lead': 'Strumenti per asset digitali, ricevute verificabili e conoscenze di mercato condivise. Uniti da EconovaChain.',
      explore: 'Scopri l’ecosistema', viewtoken: 'Scopri ECNOVA', 'hero.token': 'ECNOVA · Il token dell’ecosistema su Solana',
      'hero.alt': 'Un wallet, una ricevuta digitale e simboli di conversazione in vetro, collegati da un’orbita ciano e viola.',
      'products.eyebrow': 'Per la vita digitale di ogni giorno', 'products.title': 'Tre modi per connettersi.',
      'products.intro': 'Un wallet per gli asset. Ricevute per i dati. Uno spazio per parlare dei mercati.', development: 'In sviluppo',
      'wallet.category': 'Asset digitali', 'wallet.copy': 'Un wallet per gestire gli asset digitali, progettato come parte dell’ecosistema EconovaChain.', 'wallet.tag': 'I tuoi asset. Le tue decisioni.',
      'receipt.category': 'Dati verificabili', 'receipt.copy': 'Una rete di ricevute digitali da conservare e verificare in modo indipendente, anche offline.', 'receipt.more': 'Apri il sito TimeLayer',
      'scalp.category': 'Conversazioni sui mercati', 'scalp.copy': 'Un social network per trader che riunisce analisi di mercato e condivisione delle conoscenze.', 'scalp.tag': 'I mercati si muovono. Le idee si incontrano.',
      'receipt.title.one': 'Conserva il dato.', 'receipt.title.two': 'Verifica in autonomia.',
      'receipt.detail': 'I dati digitali dovrebbero restare verificabili al di fuori del sistema che li ha creati. TimeLayer è in sviluppo per ricevute portabili, verifiche di integrità e firme, anche per i dati usati nei flussi di lavoro degli agenti IA.',
      'receipt.step1': 'Conserva la ricevuta', 'receipt.step1p': 'Mantieni il pacchetto completo insieme ai tuoi dati.',
      'receipt.step2': 'Verifica l’integrità', 'receipt.step2p': 'Verifica dati e firme in modo indipendente, anche offline.', 'receipt.visit': 'Esplora TimeLayer',
      'receipt.boundary': 'Una ricevuta permette di verificare dati e firme. Da sola non dimostra che un evento sia avvenuto nel mondo reale.',
      'receipt.alt': 'TimeLayer: ricevute digitali verificabili. Conserva il dato. Verifica in autonomia.', 'receipt.caption': 'Il dato resta con te.',
      'token.eyebrow': 'Il token dell’ecosistema', 'token.intro': 'Il token dell’ecosistema EconovaChain su Solana. Un’identità. Un indirizzo mint ufficiale.',
      'token.explorer': 'Apri Solana Explorer', 'token.issuance': 'Emissione iniziale', 'token.minting': 'Ulteriore emissione', 'token.disabled': 'Disabilitata',
      'token.permanent': 'Autorità revocata per sempre', 'token.freezing': 'Congelamento dei conti', 'token.metadata': 'Metadati', 'token.editable': 'Modificabili', 'token.decimals': '9 decimali',
      'token.address': 'Indirizzo mint ufficiale', copy: 'Copia indirizzo',
      'token.authority': 'Le autorità di emissione e congelamento sono state revocate definitivamente il 4 novembre 2026. Il titolare conserva l’autorità di aggiornamento dei metadati.',
      'token.metadata.link': 'Apri i metadati',
      'token.note': 'Possedere ECNOVA non conferisce quote societarie né un reddito garantito. La disponibilità dei prodotti e gli utilizzi supportati del token vengono annunciati separatamente.',
      'direction.eyebrow': 'La nostra direzione', 'direction.title': 'Una connessione utile alla volta.',
      'direction.copy': 'Ci concentriamo sul wallet, sulle ricevute digitali verificabili e su una community per trader. Segui i progressi, esplora le idee e contribuisci a definire i prossimi passi.',
      'community.eyebrow': 'Continua la conversazione', 'community.title': 'L’ecosistema inizia dalle persone.', 'community.copy': 'Scopri il progetto, condividi un’idea o parla con noi di una collaborazione.',
      'community.follow': 'Segui ECNOVA su X', 'community.contact': 'Contattaci', 'footer.token': 'Verifica il token', 'footer.top': 'Torna in alto ↑'
    }
  };
  const textNodes = [...document.querySelectorAll('[data-i18n]')].map(el => ({ el, key: el.dataset.i18n, en: el.textContent }));
  const ariaNodes = [...document.querySelectorAll('[data-i18n-aria]')].map(el => ({ el, key: el.dataset.i18nAria, en: el.getAttribute('aria-label') }));
  const altNodes = [...document.querySelectorAll('[data-i18n-alt]')].map(el => ({ el, key: el.dataset.i18nAlt, en: el.alt }));
  const feedback = {
    en: { copied: 'Official mint address copied.', failed: 'Copy unavailable. The address is selected; copy it manually.' },
    ru: { copied: 'Официальный адрес минта скопирован.', failed: 'Автокопирование недоступно. Адрес выделен — скопируйте его вручную.' },
    it: { copied: 'Indirizzo mint ufficiale copiato.', failed: 'Copia automatica non disponibile. L’indirizzo è selezionato: copialo manualmente.' }
  };
  let activeLanguage = 'en';
  function setLanguage(lang, remember = false) {
    activeLanguage = supported.includes(lang) ? lang : 'en';
    const values = translations[activeLanguage] || {};
    document.documentElement.lang = activeLanguage;
    textNodes.forEach(({ el, key, en }) => { el.textContent = values[key] || en; });
    ariaNodes.forEach(({ el, key, en }) => el.setAttribute('aria-label', values[key] || en));
    altNodes.forEach(({ el, key, en }) => { el.alt = values[key] || en; });
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === activeLanguage)));
    document.querySelectorAll('[data-network]').forEach(link => { link.href = activeLanguage === 'ru' ? 'https://timelayer-os.com/ru/' : 'https://timelayer-os.com/'; });
    document.title = `EconovaChain · ${values['hero.one'] || 'Three products.'} ${values['hero.two'] || 'One ecosystem.'}`;
    document.getElementById('copy-result').textContent = '';
    if (remember) {
      try { localStorage.setItem('ecnova_lang', activeLanguage); } catch { /* Language choice still works without storage. */ }
      const url = new URL(location.href);
      url.searchParams.set('lang', activeLanguage);
      try { history.replaceState(null, '', url); } catch { /* Direct file previews may not allow URL updates. */ }
    }
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang, true)));
  let initial = new URL(location.href).searchParams.get('lang');
  if (!supported.includes(initial)) { try { initial = localStorage.getItem('ecnova_lang'); } catch { initial = null; } }
  setLanguage(initial || 'en');
  document.getElementById('copy-mint').addEventListener('click', async () => {
    const output = document.getElementById('copy-result');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(mint);
      output.textContent = feedback[activeLanguage].copied;
    } catch {
      const input = document.getElementById('mint-address');
      input.focus();
      input.select();
      output.textContent = feedback[activeLanguage].failed;
    }
  });
})();
