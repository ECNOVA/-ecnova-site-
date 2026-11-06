(() => {
  'use strict';
  const supported = ['en', 'ru', 'it'];
  const mint = 'FpCidwpKM2DP65eVyTkeqQ3R82w75foejx5wZV8dirQ2';
  const translations = {
    ru: {
      'community.telegram': 'ECNOVA в Telegram', 'community.timelayer': 'Каналы TimeLayer', 'footer.contacts': 'Контакты ECNOVA', 'footer.x': 'ECNOVA в X', 'footer.email.label': 'Написать ECNOVA', 'footer.email': 'Почта',
      'home.label': 'Главная EconovaChain', 'token.label': 'О токене ECNOVA', 'token.logo': 'Логотип токена ECNOVA', 'token.freeze.disabled': 'Отключена',
      skip: 'К содержанию', navigation: 'Основная навигация', language: 'Язык', ecosystem: 'Экосистема', community: 'Сообщество',
      'hero.eyebrow': 'Экосистема EconovaChain', 'hero.one': 'Люди. ИИ-агенты.', 'hero.two': 'Одна экосистема.',
      'hero.lead': 'Единая экосистема для людей и агентных систем: цифровые активы, проверяемые записи и обмен знаниями о рынке.',
      explore: 'Изучить экосистему', viewagents: 'Работа с ИИ-агентами', 'hero.token': 'ECNOVA · Токен экосистемы в сети Solana',
      'hero.alt': 'Стеклянные кошелёк, цифровая квитанция и символы общения, соединённые бирюзово-фиолетовой орбитой.',
      'products.eyebrow': 'Для людей и агентных систем', 'products.title': 'Три способа объединяться.',
      'products.intro': 'Кошелёк для цифровых активов и настройки агентов. Квитанции для записей. Сообщество для обсуждения рынков.', development: 'В разработке',
      'wallet.category': 'Активы и ИИ-агенты', 'wallet.copy': 'Мы разрабатываем ECNOVA Wallet для людей и агентных сценариев работы с цифровыми активами. В его основе — настройка агентов, ограничения их работы и подписание под контролем владельца.', 'wallet.tag': 'Ваши активы. Ваши агенты. Ваши правила.',
      'receipt.category': 'Проверяемые записи', 'receipt.copy': 'Сеть цифровых квитанций, которые можно хранить у себя и проверять независимо — в том числе офлайн.', 'receipt.more': 'Открыть сайт TimeLayer',
      'scalp.category': 'Обсуждение рынков', 'scalp.copy': 'Социальная сеть для трейдеров, которая объединяет анализ рынка и обмен знаниями.', 'scalp.tag': 'Рынки движутся. Идеи объединяют.',
      'receipt.title.one': 'Сохраните запись.', 'receipt.title.two': 'Проверьте независимо.',
      'receipt.detail': 'TimeLayer разрабатывается для проверяемых цифровых квитанций, в том числе записей о работе ИИ-агентов. Данные и подписи должны оставаться доступными для независимой проверки за пределами системы, которая их создала.',
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
      'direction.eyebrow': 'Агентные системы', 'direction.title': 'Агентные сценарии. Правила владельца.',
      'direction.copy': 'Выберите агента, определите границы его действий и сохраните запись о работе. Мы разрабатываем ECNOVA Wallet для настройки агентов и контролируемого подписания, а TimeLayer — для независимо проверяемых записей.',
      'community.eyebrow': 'Оставайтесь на связи', 'community.title': 'Давайте развивать экосистему вместе.', 'community.copy': 'Приглашаем пользователей, разработчиков и команды, создающие ИИ-агентов. Изучайте продукты, делитесь идеями и обсуждайте с нами совместную работу.',
      'community.follow': 'Читать ECNOVA в X', 'community.contact': 'Связаться', 'footer.token': 'Проверить токен', 'footer.top': 'Наверх ↑'
    },
    it: {
      'community.telegram': 'ECNOVA su Telegram', 'community.timelayer': 'Canali TimeLayer', 'footer.contacts': 'Contatti ECNOVA', 'footer.x': 'ECNOVA su X', 'footer.email.label': 'Scrivi a ECNOVA', 'footer.email': 'Email',
      'home.label': 'Pagina iniziale di EconovaChain', 'token.label': 'Scopri ECNOVA', 'token.logo': 'Logo del token ECNOVA', 'token.freeze.disabled': 'Disabilitato',
      skip: 'Vai al contenuto', navigation: 'Navigazione principale', language: 'Lingua', ecosystem: 'Ecosistema', community: 'Community',
      'hero.eyebrow': 'L’ecosistema EconovaChain', 'hero.one': 'Persone. Agenti IA.', 'hero.two': 'Un ecosistema.',
      'hero.lead': 'Un ecosistema per persone e sistemi di agenti IA: asset digitali, dati verificabili e conoscenze di mercato condivise.',
      explore: 'Scopri l’ecosistema', viewagents: 'Flussi degli agenti IA', 'hero.token': 'ECNOVA · Il token dell’ecosistema su Solana',
      'hero.alt': 'Un wallet, una ricevuta digitale e simboli di conversazione in vetro, collegati da un’orbita ciano e viola.',
      'products.eyebrow': 'Per persone e sistemi di agenti IA', 'products.title': 'Tre modi per connettersi.',
      'products.intro': 'Un wallet per asset digitali e configurazione degli agenti. Ricevute per i dati. Una community per discutere dei mercati.', development: 'In sviluppo',
      'wallet.category': 'Asset e agenti IA', 'wallet.copy': 'Stiamo sviluppando ECNOVA Wallet per le persone e i flussi di lavoro degli agenti IA con gli asset digitali. Il progetto combina configurazione degli agenti, limiti operativi e firma sotto il controllo del titolare.', 'wallet.tag': 'I tuoi asset. I tuoi agenti. Le tue regole.',
      'receipt.category': 'Dati verificabili', 'receipt.copy': 'Una rete di ricevute digitali da conservare e verificare in modo indipendente, anche offline.', 'receipt.more': 'Apri il sito TimeLayer',
      'scalp.category': 'Conversazioni sui mercati', 'scalp.copy': 'Un social network per trader che riunisce analisi di mercato e condivisione delle conoscenze.', 'scalp.tag': 'I mercati si muovono. Le idee si incontrano.',
      'receipt.title.one': 'Conserva il dato.', 'receipt.title.two': 'Verifica in autonomia.',
      'receipt.detail': 'TimeLayer è in sviluppo per ricevute digitali verificabili, comprese le registrazioni dei flussi di lavoro degli agenti IA. Dati e firme devono restare verificabili in modo indipendente, anche al di fuori del sistema che li ha prodotti.',
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
      'direction.eyebrow': 'Sistemi di agenti IA', 'direction.title': 'Flussi degli agenti. Regole del titolare.',
      'direction.copy': 'Scegli un agente, definisci l’ambito delle sue azioni e conserva una registrazione del suo lavoro. Stiamo sviluppando ECNOVA Wallet per configurare gli agenti e controllare la firma, e TimeLayer per registrazioni verificabili in modo indipendente.',
      'community.eyebrow': 'Continua la conversazione', 'community.title': 'Costruiamo insieme l’ecosistema.', 'community.copy': 'Utenti, sviluppatori e team che creano agenti IA sono i benvenuti. Esplora i prodotti, condividi un’idea o parla con noi di una collaborazione.',
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
    document.title = `EconovaChain · ${values['hero.one'] || 'People. AI agents.'} ${values['hero.two'] || 'One ecosystem.'}`;
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
