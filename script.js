// --- UniHub JavaScript (v12 - Улучшенный User Journey, UI-полировка) ---


// --- Константы и Переменные ---
const HOLLAND_TYPES = { REALISTIC: 'realistic', INVESTIGATIVE: 'investigative', ARTISTIC: 'artistic', SOCIAL: 'social', ENTERPRISING: 'enterprising', CONVENTIONAL: 'conventional' };
const TYPE_DESCRIPTIONS = {
    [HOLLAND_TYPES.REALISTIC]: { name: "Реалистичный", description: "Вам нравится работать руками, с инструментами, техникой, животными или растениями. Вы цените практичность и конкретные результаты.", explanation: "Это указывает на склонность к инженерным, техническим, природным или ремесленным областям." },
    [HOLLAND_TYPES.INVESTIGATIVE]: { name: "Исследовательский", description: "Вас привлекает анализ информации, решение сложных задач, научные исследования. Вы любознательны и любите разбираться в сути вещей.", explanation: "Это говорит об интересе к научной, аналитической, медицинской или IT-деятельности, где важен поиск знаний." },
    [HOLLAND_TYPES.ARTISTIC]: { name: "Артистический", description: "Вам нравится творческое самовыражение через искусство, музыку, дизайн, литературу. Вы цените оригинальность и эстетику.", explanation: "Это указывает на ваш творческий потенциал и интерес к сферам дизайна, искусства, медиа и гуманитарных наук." },
    [HOLLAND_TYPES.SOCIAL]: { name: "Социальный", description: "Вы любите работать с людьми, помогать, обучать, консультировать. Вам важны общение и взаимопонимание.", explanation: "Это говорит о вашей ориентации на помощь людям, что важно в педагогике, медицине, психологии и социальной работе." },
    [HOLLAND_TYPES.ENTERPRISING]: { name: "Предприимчивый", description: "Вас привлекает возможность руководить, убеждать, организовывать проекты, влиять на людей. Вы амбициозны и инициативны.", explanation: "Это указывает на лидерские качества и интерес к бизнесу, управлению, продажам, юриспруденции и политике." },
    [HOLLAND_TYPES.CONVENTIONAL]: { name: "Конвенциональный", description: "Вам нравится работать с информацией, данными, документами, следовать инструкциям. Вы цените порядок, точность и системность.", explanation: "Это говорит о вашей склонности к работе, требующей внимательности и организованности, например, в финансах, администрировании, IT (данные)." }
};
const UNI_TYPE_ICONS = { science: 'flask-conical', tech: 'cpu', engineering: 'wrench', international: 'globe-2', economics: 'trending-up', medical: 'stethoscope', management: 'users', art: 'palette', law: 'scale', humanities: 'book-open', education: 'graduation-cap', social: 'heart-handshake', agriculture: 'tractor', architecture: 'landmark', finance: 'banknote', default: 'building-2', transport: 'truck', communications: 'wifi', pedagogy: 'book-user', psychology: 'brain', food: 'chef-hat', chemical: 'flask-conical', geodesy: 'map-pin', music: 'music', cinema: 'film', literature: 'book-text', aviation: 'plane', civil_engineering: 'building' };


// --- РАСШИРЕННАЯ БАЗА ДАННЫХ ПРОФЕССИЙ ---
const professions = [
    { name: "Адвокат", description: "Защищает права клиентов в суде. Составляет юридические документы.", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["юриспруденция", "право", "суд", "защита", "адвокатура"] },
    { name: "Агроном", description: "Разрабатывает технологии выращивания с/х культур. Контролирует качество урожая.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["сельское хозяйство", "растениеводство", "биология", "агрономия", "почвоведение"] },
    { name: "Актёр", description: "Играет роли в театре и кино. Перевоплощается в разных персонажей.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.SOCIAL], keywords: ["театр", "кино", "искусство", "сцена", "актерское мастерство"] },
    { name: "Аналитик данных", description: "Исследует большие объемы данных, строит модели, выявляет закономерности.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL], keywords: ["data science", "big data", "статистика", "программирование", "анализ", "машинное обучение", "python"] },
    { name: "Архитектор", description: "Проектирует здания и сооружения. Разрабатывает планировку и дизайн.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["архитектура", "строительство", "проектирование", "дизайн", "черчение", "градостроительство"] },
    { name: "Аудитор", description: "Проверяет финансовую отчетность компаний на достоверность и соответствие законам.", types: [HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.ENTERPRISING], keywords: ["аудит", "бухгалтерский учет", "финансы", "проверка", "отчетность", "экономика"] },
    { name: "Биоинженер", description: "Применяет инженерные принципы к биологическим системам, разрабатывает биотехнологии.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC], keywords: ["биология", "генная инженерия", "медицина", "технологии", "биотехнология", "биомедицина"] },
    { name: "Веб-разработчик", description: "Создает и поддерживает веб-сайты и веб-приложения.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.CONVENTIONAL], keywords: ["программирование", "html", "css", "javascript", "it", "веб", "frontend", "backend"] },
    { name: "Ветеринар", description: "Лечит животных, проводит профилактику заболеваний и консультирует владельцев.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["ветеринария", "животные", "медицина", "лечение"] },
    { name: "Врач", description: "Диагностирует и лечит заболевания. Проводит обследования и назначает лечение.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.REALISTIC], keywords: ["медицина", "здравоохранение", "лечение", "биология", "лечебное дело", "педиатрия", "стоматология"] },
    { name: "Генетик", description: "Изучает гены, наследственность и изменчивость организмов. Работает в медицине, сельском хозяйстве.", types: [HOLLAND_TYPES.INVESTIGATIVE], keywords: ["генетика", "биология", "днк", "наследственность", "медицина", "исследование"] },
    { name: "Геодезист", description: "Выполняет измерения на местности для создания карт и планов, сопровождает строительство.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["геодезия", "картография", "измерения", "строительство", "топография"] },
    { name: "Графический дизайнер", description: "Создает визуальные решения. Работает с графикой и макетами.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.REALISTIC], keywords: ["дизайн", "графика", "иллюстрация", "реклама", "photoshop", "illustrator", "визуальные коммуникации"] },
    { name: "DevOps инженер", description: "Автоматизирует процессы разработки, тестирования и развертывания ПО, объединяя разработку и операции.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL], keywords: ["devops", "ci/cd", "автоматизация", "облачные технологии", "it", "программирование"] },
    { name: "Журналист", description: "Собирает, обрабатывает и распространяет информацию через СМИ. Пишет статьи, репортажи.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING], keywords: ["журналистика", "сми", "медиа", "репортаж", "статья", "тексты"] },
    { name: "Инженер-программист", description: "Разрабатывает программное обеспечение, алгоритмы, тестирует код.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC], keywords: ["программирование", "разработка по", "it", "технологии", "кодинг", "java", "c++", "python"] },
    { name: "Инженер-строитель", description: "Проектирует, возводит и эксплуатирует здания и сооружения. Руководит строительными работами.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.ENTERPRISING], keywords: ["строительство", "инженер", "пгс", "проектирование", "здания"] },
    { name: "Инженер-электроник", description: "Разрабатывает, проектирует и обслуживает электронные устройства, схемы и системы.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC], keywords: ["электроника", "схемотехника", "микроэлектроника", "приборостроение", "радиотехника"] },
    { name: "Искусствовед", description: "Изучает историю и теорию изобразительного искусства, курирует выставки, пишет критические статьи.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["искусствоведение", "история искусств", "музей", "выставка", "критика", "арт-рынок"] },
    { name: "Историк", description: "Изучает прошлое человечества на основе источников. Работает в науке, образовании, архивах.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.ARTISTIC], keywords: ["история", "архив", "исследование", "археология", "прошлое"] },
    { name: "IT-специалист по связи", description: "Проектирует, настраивает и обслуживает телекоммуникационные системы и сети.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["связь", "телекоммуникации", "сети", "it", "информационные технологии"] },
    { name: "Литературный работник", description: "Создает художественные, публицистические или научные тексты, анализирует литературу.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["литература", "писательство", "поэзия", "критика", "филология", "журналистика", "редактор"] },
    { name: "Логист", description: "Организует и управляет потоками товаров, информации и финансов от производителя к потребителю.", types: [HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.ENTERPRISING], keywords: ["логистика", "транспорт", "склад", "цепи поставок", "менеджмент"] },
    { name: "Маркетолог", description: "Исследует рынок, продвигает товары и услуги.", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["маркетинг", "реклама", "продажи", "анализ рынка", "pr", "smm"] },
    { name: "Менеджер проектов", description: "Планирует, организует и контролирует выполнение проектов.", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.SOCIAL], keywords: ["управление проектами", "менеджмент", "организация", "планирование", "бизнес"] },
    { name: "Музыкант", description: "Создает или исполняет музыкальные произведения, руководит музыкальными коллективами.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.SOCIAL], keywords: ["музыка", "исполнительство", "композиция", "дирижирование", "искусство"] },
    { name: "Переводчик", description: "Переводит тексты и речь. Работает с разными языками.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.CONVENTIONAL], keywords: ["лингвистика", "иностранные языки", "филология", "перевод"] },
    { name: "Пищевой технолог", description: "Разрабатывает рецептуры и технологии производства пищевых продуктов.", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["пищевая промышленность", "технология", "продукты питания", "качество"] },
    { name: "PR-специалист", description: "Формирует и поддерживает положительный имидж компании, бренда или персоны.", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ARTISTIC], keywords: ["pr", "связи с общественностью", "реклама", "имидж", "медиа", "коммуникации"] },
    { name: "Психолог", description: "Помогает людям справляться с эмоциями. Проводит консультации и терапию.", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["психология", "консультирование", "социальная работа", "терапия", "клиническая психология"] },
    { name: "Режиссер кино и телевидения", description: "Руководит творческим процессом создания фильмов, телепередач, клипов.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.ENTERPRISING], keywords: ["кино", "телевидение", "режиссура", "искусство", "съемки", "сценарий"] },
    { name: "Системный аналитик", description: "Анализирует бизнес-процессы и проектирует информационные системы для их автоматизации.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL], keywords: ["системный анализ", "it", "бизнес-анализ", "требования", "проектирование ис"] },
    { name: "Специалист по кибербезопасности", description: "Защищает компьютерные системы и сети от кибератак, анализирует уязвимости.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL], keywords: ["кибербезопасность", "информационная безопасность", "сети", "защита данных", "it"] },
    { name: "Учитель", description: "Преподает предметы в школе. Помогает ученикам усваивать знания.", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ARTISTIC], keywords: ["педагогика", "образование", "обучение", "преподавание"] },
    { name: "UX/UI дизайнер", description: "Проектирует пользовательские интерфейсы, делая их удобными, понятными и привлекательными.", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.SOCIAL], keywords: ["ux", "ui", "дизайн", "интерфейс", "проектирование", "юзабилити", "it"] },
    { name: "Фармацевт", description: "Работает в аптеке, консультирует по лекарственным препаратам, отпускает лекарства.", types: [HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.INVESTIGATIVE], keywords: ["фармация", "лекарства", "аптека", "химия", "медицина"] },
    { name: "Финансовый аналитик", description: "Анализирует финансовые рынки, инвестиции, составляет прогнозы.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.CONVENTIONAL], keywords: ["финансы", "экономика", "инвестиции", "анализ", "банкинг"] },
    { name: "Химик-технолог", description: "Разрабатывает и внедряет химические процессы в производство.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC], keywords: ["химия", "технология", "производство", "лаборатория", "химическая технология"] },
    { name: "HR-менеджер", description: "Управляет персоналом компании: нанимает, адаптирует, обучает и мотивирует сотрудников.", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING], keywords: ["hr", "управление персоналом", "рекрутинг", "кадры", "менеджмент"] },
    { name: "Эколог", description: "Изучает взаимодействие живых организмов и среды, решает проблемы охраны окружающей среды.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.SOCIAL], keywords: ["экология", "охрана природы", "биология", "география", "техносферная безопасность"] },
    { name: "Экономист", description: "Анализирует экономические процессы. Прогнозирует развитие рынка и бюджета.", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.CONVENTIONAL], keywords: ["экономика", "финансы", "анализ", "статистика", "бухгалтерский учет"] }
];


// --- РАСШИРЕННАЯ И АКТУАЛИЗИРОВАННАЯ БАЗА ВУЗОВ МОСКВЫ ---
const universities = [
    { name: "Московский государственный университет им. М.В. Ломоносова (МГУ)", type: "science", imageUrl: "https://placehold.co/300x160/0a4a8e/FFFFFF?text=МГУ&font=inter", programs: ["Естественные науки", "Математика", "Физика", "Химия", "Биология", "Геология", "Экономика", "IT", "Юриспруденция", "Филология", "История", "Психология", "Журналистика", "Экология"], info: "Старейший и крупнейший классический университет России.", avgScore: 92, budgetPlaces: 3952, employmentRate: 90, reputation: 10, programKeywords: ["математик", "физик", "химик", "биолог", "геолог", "эколог", "экономист", "программист", "юрист", "адвокат", "филолог", "лингвист", "переводчик", "историк", "психолог", "социолог", "аналитик данных", "журналист", "политолог", "астроном", "фундаментальная информатика", "прикладная математика", "международные отношения", "государственное управление", "биотехнология", "биоинженер", "генетик", "искусствовед", "почвоведение"] },
    { name: "Московский государственный технический университет им. Н.Э. Баумана (МГТУ)", type: "tech", imageUrl: "https://placehold.co/300x160/3b82f6/FFFFFF?text=МГТУ&font=inter", programs: ["Инженерия", "Машиностроение", "Робототехника", "Информационные технологии", "Аэрокосмос", "Материаловедение", "Энергетика", "Биомедицинская техника"], info: "Ведущий технический университет России.", avgScore: 88, budgetPlaces: 2500, employmentRate: 92, reputation: 9.5, programKeywords: ["инженер", "программист", "веб-разработчик", "инженер-программист", "робототехник", "материаловед", "энергетик", "конструктор", "биоинженер", "информационная безопасность", "оптотехника", "приборостроение", "лазерная техника", "инженер-электроник", "devops", "системный аналитик"] },
    { name: "Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)", type: "economics", imageUrl: "https://placehold.co/300x160/22c55e/FFFFFF?text=НИУ+ВШЭ&font=inter", programs: ["Экономика", "Бизнес-информатика", "Дизайн", "Медиакоммуникации", "Право", "Психология", "Программная инженерия", "Логистика", "Реклама и PR"], info: "Ведущий университет в социально-экономических науках.", avgScore: 93, budgetPlaces: 3500, employmentRate: 93, reputation: 9.6, programKeywords: ["экономист", "финансовый аналитик", "аналитик данных", "социолог", "программист", "веб-разработчик", "графический дизайнер", "ux/ui дизайнер", "журналист", "юрист", "психолог", "менеджер проектов", "маркетолог", "pr-специалист", "логист", "бизнес-аналитик", "системный аналитик", "hr-менеджер", "искусствовед"] },
    { name: "Московский физико-технический институт (МФТИ)", type: "tech", imageUrl: "https://placehold.co/300x160/a855f7/FFFFFF?text=МФТИ&font=inter", programs: ["Прикладная математика и физика", "Информатика", "Аэрокосмические технологии", "Биофизика", "Системный анализ"], info: "Элитный технический вуз, известный сильной подготовкой в области физики и математики.", avgScore: 96, budgetPlaces: 900, employmentRate: 95, reputation: 9.9, programKeywords: ["физик", "математик", "программист", "инженер-программист", "аналитик данных", "биоинженер", "аэрокосмос", "системный аналитик", "исследователь", "data science", "биофизика", "прикладная информатика", "devops", "специалист по кибербезопасности"] },
    { name: "Национальный исследовательский ядерный университет «МИФИ»", type: "tech", imageUrl: "https://placehold.co/300x160/f97316/FFFFFF?text=МИФИ&font=inter", programs: ["Ядерная физика", "Информационная безопасность", "Прикладная математика", "Автоматика и электроника"], info: "Ведущий университет в области ядерных технологий и IT.", avgScore: 90, budgetPlaces: 1200, employmentRate: 94, reputation: 9.3, programKeywords: ["физик-ядерщик", "программист", "инженер-программист", "специалист по кибербезопасности", "математик", "инженер-электроник", "автоматизация", "кибернетика", "системный аналитик"] },
    { name: "Московский государственный институт международных отношений (МГИМО)", type: "international", imageUrl: "https://placehold.co/300x160/ef4444/FFFFFF?text=МГИМО&font=inter", programs: ["Международные отношения", "Мировая экономика", "Международное право", "Журналистика", "Экология и природопользование"], info: "Ведущий вуз по подготовке дипломатов и специалистов-международников.", avgScore: 95, budgetPlaces: 1200, employmentRate: 95, reputation: 9.8, programKeywords: ["дипломат", "международник", "юрист-международник", "политолог", "экономист-международник", "журналист-международник", "переводчик", "регионовед", "эколог", "pr-специалист"] },
    { name: "Первый Московский государственный медицинский университет им. И.М. Сеченова", type: "medical", imageUrl: "https://placehold.co/300x160/64748b/FFFFFF?text=Сеченовский&font=inter", programs: ["Лечебное дело", "Стоматология", "Фармация", "Педиатрия", "Клиническая психология", "Биоинженерия", "Генетика"], info: "Старейший медицинский вуз России.", avgScore: 90, budgetPlaces: 1800, employmentRate: 94, reputation: 9.4, programKeywords: ["врач", "стоматолог", "фармацевт", "педиатр", "эпидемиолог", "клинический психолог", "биоинженер", "биоинформатик", "медицина", "генетик"] },
    { name: "Российский национальный исследовательский медицинский университет имени Н.И. Пирогова (РНИМУ)", type: "medical", imageUrl: "https://placehold.co/300x160/10b981/FFFFFF?text=РНИМУ&font=inter", programs: ["Лечебное дело", "Педиатрия", "Медицинская биофизика", "Стоматология", "Фармация", "Психология", "Медицинская кибернетика"], info: "Один из ведущих медицинских исследовательских университетов.", avgScore: 89, budgetPlaces: 1700, employmentRate: 93, reputation: 9.3, programKeywords: ["врач", "педиатр", "биофизик", "стоматолог", "фармацевт", "психолог", "медицинский кибернетик", "генетик", "медицина", "клиническая психология"] },
    { name: "Финансовый университет при Правительстве Российской Федерации", type: "finance", imageUrl: "https://placehold.co/300x160/8b5cf6/FFFFFF?text=Финуниверситет&font=inter", programs: ["Финансы и кредит", "Экономика", "Менеджмент", "Бизнес-информатика", "Юриспруденция (финансовое право)"], info: "Ведущий вуз в области финансового и экономического образования.", avgScore: 90, budgetPlaces: 1800, employmentRate: 92, reputation: 9.4, programKeywords: ["финансист", "экономист", "финансовый аналитик", "менеджер", "государственный служащий", "бизнес-информатик", "юрист", "аудитор", "банковское дело", "страхование", "hr-менеджер"] },
    { name: "Российская академия народного хозяйства и государственной службы (РАНХиГС)", type: "management", imageUrl: "https://placehold.co/300x160/ec4899/FFFFFF?text=РАНХиГС&font=inter", programs: ["Государственное управление", "Менеджмент", "Экономика", "Юриспруденция", "Психология", "Реклама и связи с общественностью", "Управление персоналом"], info: "Крупнейший университет, готовящий управленческие кадры.", avgScore: 87, budgetPlaces: 2200, employmentRate: 91, reputation: 9.0, programKeywords: ["менеджер проектов", "государственный служащий", "экономист", "юрист", "политолог", "психолог", "маркетолог", "pr-специалист", "hr-менеджер", "социолог", "управление персоналом", "реклама", "логист"] },
    { name: "Российский экономический университет имени Г.В. Плеханова (РЭУ)", type: "economics", programs: ["Экономика", "Менеджмент", "Торговое дело", "Товароведение", "Гостиничное дело", "Экономическая безопасность", "Реклама и связи с общественностью"], info: "Один из старейших и наиболее авторитетных экономических вузов страны.", avgScore: 89, budgetPlaces: 1100, employmentRate: 91, reputation: 9.2, programKeywords: ["экономист", "менеджер", "финансовый аналитик", "маркетолог", "pr-специалист", "логист", "аудитор", "торговое дело", "реклама"] },
    { name: "Московский государственный лингвистический университет (МГЛУ)", type: "humanities", imageUrl: "https://placehold.co/300x160/f59e0b/FFFFFF?text=МГЛУ&font=inter", programs: ["Лингвистика", "Перевод", "Международные отношения", "Журналистика", "Реклама и PR"], info: "Ведущий лингвистический вуз России, известный как 'ИнЯз'.", avgScore: 88, budgetPlaces: 700, employmentRate: 89, reputation: 9.1, programKeywords: ["переводчик", "лингвист", "филолог", "журналист", "pr-специалист", "преподаватель иностранных языков", "международные отношения", "регионоведение"] },
    { name: "Национальный исследовательский технологический университет «МИСиС»", type: "tech", imageUrl: "https://placehold.co/300x160/06b6d4/FFFFFF?text=МИСиС&font=inter", programs: ["Материаловедение", "Металлургия", "Наноматериалы", "Информационные технологии", "Лингвистика"], info: "Ведущий технологический университет, специализирующийся на материаловедении и IT.", avgScore: 86, budgetPlaces: 2000, employmentRate: 90, reputation: 8.9, programKeywords: ["инженер-металлург", "материаловед", "нанотехнолог", "программист", "горный инженер", "информационные системы", "металлургия", "лингвист", "переводчик"] },
    { name: "Российский химико-технологический университет имени Д. И. Менделеева (РХТУ)", type: "chemical", imageUrl: "https://placehold.co/300x160/16a34a/FFFFFF?text=РХТУ&font=inter", programs: ["Химическая технология", "Биотехнология", "Техносферная безопасность", "Материаловедение"], info: "Ведущий химико-технологический вуз России.", avgScore: 80, budgetPlaces: 1500, employmentRate: 88, reputation: 8.7, programKeywords: ["химик", "химик-технолог", "биотехнолог", "эколог", "материаловед", "инженер-химик", "фармацевтическая химия", "фармацевт"] },
    { name: "Московский государственный университет пищевых производств (МГУПП)", type: "food", imageUrl: "https://placehold.co/300x160/ca8a04/FFFFFF?text=МГУПП&font=inter", programs: ["Технология продуктов питания", "Пищевая биотехнология", "Ветеринарно-санитарная экспертиза", "Ветеринария"], info: "Специализированный вуз в области пищевых технологий и ветеринарии.", avgScore: 75, budgetPlaces: 800, employmentRate: 85, reputation: 8.2, programKeywords: ["пищевой технолог", "биотехнолог", "ветеринар", "инженер пищевой промышленности", "контроль качества продукции"] },
    { name: "Московский государственный психолого-педагогический университет (МГППУ)", type: "pedagogy", imageUrl: "https://placehold.co/300x160/7c3aed/FFFFFF?text=МГППУ&font=inter", programs: ["Психология", "Клиническая психология", "Специальное (дефектологическое) образование", "Социальная работа"], info: "Ведущий вуз в области психолого-педагогического образования.", avgScore: 82, budgetPlaces: 950, employmentRate: 87, reputation: 8.8, programKeywords: ["психолог", "клинический психолог", "педагог-психолог", "дефектолог", "логопед", "социальный работник", "специальная психология"] },
    { name: "Литературный институт имени А.М. Горького", type: "literature", imageUrl: "https://placehold.co/300x160/db2777/FFFFFF?text=ЛитИнститут&font=inter", programs: ["Литературное творчество", "Литературный перевод", "Литературная критика"], info: "Уникальный вуз, готовящий писателей, поэтов, переводчиков и критиков.", avgScore: 85, budgetPlaces: 100, employmentRate: 75, reputation: 9.0, programKeywords: ["писатель", "поэт", "драматург", "переводчик", "литературный критик", "редактор", "филология", "литературный работник"] },
    { name: "Российская академия музыки имени Гнесиных", type: "music", imageUrl: "https://placehold.co/300x160/0891b2/FFFFFF?text=Гнесинка&font=inter", programs: ["Инструментальное исполнительство", "Вокальное искусство", "Дирижирование", "Композиция", "Музыковедение"], info: "Одно из ведущих музыкальных высших учебных заведений мира.", avgScore: 90, budgetPlaces: 150, employmentRate: 85, reputation: 9.5, programKeywords: ["музыкант", "исполнитель", "вокалист", "дирижер", "композитор", "музыковед", "звукорежиссер", "искусство"] },
    { name: "Всероссийский государственный институт кинематографии имени С.А. Герасимова (ВГИК)", type: "cinema", imageUrl: "https://placehold.co/300x160/4d7c0f/FFFFFF?text=ВГИК&font=inter", programs: ["Режиссура кино и ТВ", "Кинооператорство", "Драматургия", "Продюсерство", "Анимация и графика"], info: "Старейшая в мире киношкола.", avgScore: 88, budgetPlaces: 200, employmentRate: 80, reputation: 9.4, programKeywords: ["режиссер", "оператор", "сценарист", "продюсер", "аниматор", "звукорежиссер", "киновед", "кино", "телевидение", "искусство", "актёр"] },
    { name: "Московский государственный университет геодезии и картографии (МИИГАиК)", type: "geodesy", imageUrl: "https://placehold.co/300x160/7f1d1d/FFFFFF?text=МИИГАиК&font=inter", programs: ["Геодезия и дистанционное зондирование", "Картография и геоинформатика", "Землеустройство и кадастры"], info: "Ведущий вуз России в области геодезии, картографии и землеустройства.", avgScore: 78, budgetPlaces: 500, employmentRate: 86, reputation: 8.5, programKeywords: ["геодезист", "картограф", "землеустроитель", "кадастровый инженер", "геоинформатика", "дистанционное зондирование"] },
    { name: "Московский технический университет связи и информатики (МТУСИ)", type: "communications", imageUrl: "https://placehold.co/300x160/0e7490/FFFFFF?text=МТУСИ&font=inter", programs: ["Инфокоммуникационные технологии", "Информатика", "Информационная безопасность", "Радиотехника"], info: "Крупнейший учебный и научный центр в области телекоммуникаций, IT и радиотехники.", avgScore: 83, budgetPlaces: 1200, employmentRate: 89, reputation: 8.6, programKeywords: ["it-специалист по связи", "инженер связи", "программист", "специалист по кибербезопасности", "радиотехник", "сетевой инженер", "телекоммуникации", "devops"] },
    { name: "Российский государственный гуманитарный университет (РГГУ)", type: "humanities", programs: ["История", "Филология", "Лингвистика", "Документоведение и архивоведение", "Музеология", "Искусствоведение", "Журналистика"], info: "Один из ведущих центров гуманитарного образования в России.", avgScore: 87, budgetPlaces: 900, employmentRate: 85, reputation: 8.9, programKeywords: ["историк", "архивист", "филолог", "лингвист", "переводчик", "искусствовед", "музейный работник", "журналист", "редактор", "литературный работник"] },
    { name: "Российский государственный аграрный университет - МСХА имени К.А. Тимирязева", type: "agriculture", programs: ["Агрономия", "Зоотехния", "Ветеринария", "Садоводство", "Ландшафтная архитектура", "Почвоведение", "Агроинженерия"], info: "Ведущий аграрный вуз России с богатой историей.", avgScore: 72, budgetPlaces: 1800, employmentRate: 83, reputation: 8.4, programKeywords: ["агроном", "зоотехник", "ветеринар", "ландшафтный архитектор", "почвовед", "агроинженер", "сельское хозяйство", "эколог"] },
    { name: "Московский авиационный институт (МАИ)", type: "aviation", programs: ["Авиастроение", "Двигатели летательных аппаратов", "Системы управления, информатика и электроэнергетика", "Ракетные комплексы и космонавтика", "IT-системы в авиации"], info: "Ведущий российский университет в области авиационных и космических технологий.", avgScore: 84, budgetPlaces: 2300, employmentRate: 92, reputation: 9.0, programKeywords: ["авиастроение", "инженер-конструктор", "инженер-программист", "системы управления", "ракетостроение", "it", "двигателист", "аэрокосмос"] },
    { name: "Московский архитектурный институт (МАРХИ)", type: "architecture", programs: ["Архитектура", "Градостроительство", "Дизайн архитектурной среды", "Реставрация и реконструкция"], info: "Ведущая архитектурная школа России.", avgScore: 89, budgetPlaces: 250, employmentRate: 88, reputation: 9.3, programKeywords: ["архитектор", "градостроитель", "дизайнер среды", "реставратор", "проектирование", "дизайн"] },
    { name: "Российский университет дружбы народов (РУДН)", type: "international", programs: ["Лечебное дело", "Юриспруденция", "Экономика", "Лингвистика", "Международные отношения", "Аграрные технологии", "Инженерное дело"], info: "Уникальный многопрофильный университет, известный международной средой.", avgScore: 85, budgetPlaces: 1500, employmentRate: 89, reputation: 9.1, programKeywords: ["врач", "юрист", "экономист", "лингвист", "переводчик", "международник", "агроном", "инженер", "эколог", "журналист"] },
    { name: "Московский государственный строительный университет (МГСУ)", type: "civil_engineering", programs: ["Строительство уникальных зданий и сооружений", "Промышленное и гражданское строительство (ПГС)", "Информационные системы и технологии в строительстве", "Архитектура"], info: "Ведущий университет России в области строительства и архитектуры.", avgScore: 81, budgetPlaces: 2100, employmentRate: 90, reputation: 8.8, programKeywords: ["инженер-строитель", "пгс", "архитектор", "проектировщик", "строительство", "инженер", "информационные системы", "геодезист"] },
    { name: "Московский педагогический государственный университет (МПГУ)", type: "pedagogy", programs: ["Педагогическое образование (разные профили)", "Психология", "Дефектология", "Лингвистика", "История"], info: "Один из старейших и крупнейших педагогических вузов страны.", avgScore: 80, budgetPlaces: 2500, employmentRate: 86, reputation: 8.5, programKeywords: ["учитель", "педагог", "психолог", "дефектолог", "логопед", "лингвист", "историк", "преподавание"] },
    { name: "Московская государственная консерватория имени П.И. Чайковского", type: "music", programs: ["Инструментальное исполнительство", "Вокальное искусство", "Композиция", "Дирижирование", "Музыковедение"], info: "Всемирно известный музыкальный вуз, один из главных центров музыкальной культуры.", avgScore: 92, budgetPlaces: 120, employmentRate: 87, reputation: 9.7, programKeywords: ["музыкант", "композитор", "дирижер", "вокалист", "исполнитель", "музыковед", "искусство"] },
    { name: "Академия акварели и изящных искусств Сергея Андрияки", type: "art", programs: ["Живопись и изящные искусства", "Графика", "Художественная роспись"], info: "Уникальное учебное заведение, специализирующееся на классической многослойной акварельной живописи.", avgScore: 85, budgetPlaces: 50, employmentRate: 80, reputation: 8.8, programKeywords: ["художник", "живописец", "график", "искусство", "акварель", "иллюстратор"] },
];


// --- Данные для теста (без изменений) ---
const testQuestions = [
    { question: "1. Какая деятельность доставляет вам больше удовольствия?", options: [ { text: "Чинить или собирать механизмы, работать с инструментами", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Читать научные статьи, проводить исследования, анализировать данные", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Придумывать новые идеи, рисовать, сочинять музыку, писать тексты", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Помогать людям, обучать, консультировать, работать в команде", types: [HOLLAND_TYPES.SOCIAL] } ] },
    { question: "2. Представьте, что вы работаете над проектом. Какая роль вам ближе?", options: [ { text: "Исполнитель, отвечающий за практическую реализацию", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Аналитик, ищущий оптимальное решение на основе данных", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL] }, { text: "Лидер, мотивирующий команду и организующий процесс", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.SOCIAL] }, { text: "Генератор идей, отвечающий за креативную составляющую", types: [HOLLAND_TYPES.ARTISTIC, HOLLAND_TYPES.ENTERPRISING] } ] },
    { question: "3. Какая рабочая среда кажется вам наиболее комфортной?", options: [ { text: "Мастерская, лаборатория, природа, стройплощадка", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Библиотека, научный центр, исследовательский отдел", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Офис с людьми, школа, больница, общественная организация", types: [HOLLAND_TYPES.SOCIAL] }, { text: "Структурированный офис, архив, банк, бухгалтерия", types: [HOLLAND_TYPES.CONVENTIONAL] } ] },
    { question: "4. Что для вас важнее в работе?", options: [ { text: "Возможность создавать что-то новое, оригинальное, необычное", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Возможность помогать людям, быть полезным обществу", types: [HOLLAND_TYPES.SOCIAL] }, { text: "Возможность влиять на события, руководить, достигать успеха", types: [HOLLAND_TYPES.ENTERPRISING] }, { text: "Стабильность, четкие правила, порядок и предсказуемость", types: [HOLLAND_TYPES.CONVENTIONAL] } ] },
    { question: "5. Выберите тип задач, который вам интереснее решать:", options: [ { text: "Практические задачи, требующие применения физической силы или ловкости", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Интеллектуальные задачи, требующие анализа и логического мышления", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Задачи, связанные с организацией, планированием и управлением", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.CONVENTIONAL] }, { text: "Задачи, требующие воображения, интуиции и творческого подхода", types: [HOLLAND_TYPES.ARTISTIC] } ] },
    { question: "6. Как вы предпочитаете получать информацию?", options: [ { text: "Через практический опыт, пробуя и делая", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Изучая теории, факты, читая специальную литературу", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Общаясь с экспертами, участвуя в дискуссиях", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING] }, { text: "Через схемы, таблицы, графики, инструкции", types: [HOLLAND_TYPES.CONVENTIONAL] } ] },
    { question: "7. Какое утверждение лучше всего вас описывает?", options: [ { text: "Я практичный и предпочитаю конкретные действия", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Я любознательный и люблю анализировать", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Я эмоциональный и ценю самовыражение", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Я общительный и ориентирован на помощь другим", types: [HOLLAND_TYPES.SOCIAL] } ] },
    { question: "8. Какое утверждение также хорошо вас описывает?", options: [ { text: "Я амбициозный и люблю руководить", types: [HOLLAND_TYPES.ENTERPRISING] }, { text: "Я аккуратный и предпочитаю порядок", types: [HOLLAND_TYPES.CONVENTIONAL] }, { text: "Я независимый и предпочитаю работать в одиночку", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.ARTISTIC] }, { text: "Я командный игрок и ценю сотрудничество", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING] } ] },
    { question: "9. Выберите занятие, которое вам кажется наиболее привлекательным:", options: [ { text: "Проектирование и создание технических устройств", types: [HOLLAND_TYPES.REALISTIC, HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Написание книги или создание музыкального произведения", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Организация благотворительного мероприятия", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING] }, { text: "Разработка финансовой стратегии компании", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.CONVENTIONAL] } ] },
    { question: "10. Как вы относитесь к риску?", options: [ { text: "Предпочитаю избегать риска, ценю надежность", types: [HOLLAND_TYPES.CONVENTIONAL, HOLLAND_TYPES.REALISTIC] }, { text: "Готов(а) к обдуманному риску ради значимого результата", types: [HOLLAND_TYPES.ENTERPRISING, HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Риск интересен, если он связан с творчеством или новыми идеями", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Готов(а) рисковать, чтобы помочь другим или отстоять принципы", types: [HOLLAND_TYPES.SOCIAL] } ] },
    { question: "11. Что вам важнее в информации?", options: [ { text: "Практическая применимость, возможность использовать в деле", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Точность, объективность, логическая стройность", types: [HOLLAND_TYPES.INVESTIGATIVE] }, { text: "Эмоциональная насыщенность, образность, оригинальность", types: [HOLLAND_TYPES.ARTISTIC] }, { text: "Понятность для других, возможность легко объяснить", types: [HOLLAND_TYPES.SOCIAL] } ] },
    { question: "12. Выберите, что вам ближе:", options: [ { text: "Работа с конкретными объектами (вещи, техника, природа)", types: [HOLLAND_TYPES.REALISTIC] }, { text: "Работа с абстрактными идеями и символами (наука, данные)", types: [HOLLAND_TYPES.INVESTIGATIVE, HOLLAND_TYPES.CONVENTIONAL] }, { text: "Работа с людьми (общение, обучение, управление)", types: [HOLLAND_TYPES.SOCIAL, HOLLAND_TYPES.ENTERPRISING] }, { text: "Работа с художественными образами (искусство, дизайн)", types: [HOLLAND_TYPES.ARTISTIC] } ] }
];


// --- DOM Элементы ---
let currentUniForModal = null; let lastTestResultTypes = []; let currentProfessionFilterTypes = [];
let processedUniversities = []; const PROFESSIONS_PAGE_SIZE = 12; let professionsVisibleCount = PROFESSIONS_PAGE_SIZE;
let currentFilteredProfessions = []; let selectedForComparison = [];
let currentProfessionForAI = null; 
let aiGeneratedRequiredSkills = ""; 
let identifiedSkillGaps = ""; 


const themeSwitchBtn = document.querySelector('.theme-switch'); const profileBtn = document.getElementById('profile-btn');
const startTestBtn = document.getElementById('start-test-btn'); const testStartDiv = document.getElementById('test-start');
const careerTestForm = document.getElementById('career-test'); const questionsContainer = document.getElementById('questions-container');
const resultsSection = document.getElementById('results'); const resultTextDiv = document.getElementById('result-text');
const resultTypesDiv = document.getElementById('result-types'); const resultExplanationDiv = document.getElementById('result-explanation');
const topMatchingProfessionsDiv = document.getElementById('top-matching-professions');
const showMatchingProfessionsBtn = document.getElementById('show-matching-professions-btn');
const saveResultBtn = document.getElementById('save-result-btn');
const aiCareerAdviceBtn = document.getElementById('ai-career-advice-btn');
const professionSearchInput = document.getElementById('profession-search'); const professionsListDiv = document.getElementById('professions-list');
const resetProfessionFilterBtn = document.getElementById('reset-profession-filter-btn');
const showMoreProfessionsContainer = document.getElementById('show-more-professions-container');
const showMoreProfessionsBtn = document.getElementById('show-more-professions-btn');
const uniFilterSelect = document.getElementById('uni-filter'); const uniSortSelect = document.getElementById('uni-sort');
const resetUniFilterBtn = document.getElementById('reset-uni-filter-btn'); const compareUnisBtn = document.getElementById('compare-unis-btn');
const compareCountSpan = document.getElementById('compare-count'); const allUnisListDiv = document.getElementById('all-unis-list');
const uniModal = document.getElementById('uni-modal'); const profileModal = document.getElementById('profile-modal');
const compareModal = document.getElementById('compare-modal');
const aiProfessionDetailsModal = document.getElementById('ai-profession-details-modal');
const aiProfessionModalTitle = document.getElementById('ai-profession-modal-title');
const aiProfessionDetailsContent = document.getElementById('ai-profession-details-content');
const aiCareerAdviceModal = document.getElementById('ai-career-advice-modal');
const aiCareerAdviceModalTitle = document.getElementById('ai-career-advice-modal-title');
const aiCareerAdviceContent = document.getElementById('ai-career-advice-content');
const compareTableContainer = document.getElementById('compare-table-container'); const closeModalBtns = document.querySelectorAll('.modal .close');
const uniModalTitle = document.getElementById('uni-modal-title'); const uniModalImage = document.getElementById('uni-modal-image');
const uniModalPrograms = document.getElementById('uni-programs'); const uniModalInfo = document.getElementById('uni-info');
const uniModalBudget = document.getElementById('uni-budget'); const uniModalAvgScore = document.getElementById('uni-avg-score');
const uniModalEmployment = document.getElementById('uni-employment'); const uniModalReputation = document.getElementById('uni-reputation');
const uniModalCompositeScore = document.getElementById('uni-composite-score-modal'); const modalProfessionsList = document.getElementById('modal-professions-list');
const addToFavoritesBtn = document.getElementById('add-to-favorites-btn'); const savedResultsDiv = document.getElementById('saved-results');
const favoritesDiv = document.getElementById('favorites'); const clearProfileBtn = document.getElementById('clear-profile-btn');
const currentYearSpan = document.getElementById('current-year'); const toastElement = document.getElementById('toast');


// AI specific elements
const aiProsConsContainer = document.getElementById('ai-pros-cons-container');
const generateProsConsBtn = document.getElementById('generate-pros-cons-btn');
const aiProsConsResult = document.getElementById('ai-pros-cons-result');
const aiInterviewQuestionsContainer = document.getElementById('ai-interview-questions-container');
const generateInterviewQuestionsBtn = document.getElementById('generate-interview-questions-btn');
const aiInterviewQuestionsResult = document.getElementById('ai-interview-questions-result');
const aiDayInLifeContainer = document.getElementById('ai-day-in-life-container');
const generateDayInLifeBtn = document.getElementById('generate-day-in-life-btn');
const aiDayInLifeResult = document.getElementById('ai-day-in-life-result');
const aiUniProgramRecommenderContainer = document.getElementById('ai-uni-program-recommender-container');
const generateUniProgramsBtn = document.getElementById('generate-uni-programs-btn');
const aiUniProgramsResult = document.getElementById('ai-uni-programs-result');
const aiSkillGapAnalyzerContainer = document.getElementById('ai-skill-gap-analyzer-container');
const initiateSkillAnalysisBtn = document.getElementById('initiate-skill-analysis-btn');
const skillInputArea = document.getElementById('skill-input-area');
const userSkillsInput = document.getElementById('user-skills-input');
const submitSkillsForAnalysisBtn = document.getElementById('submit-skills-for-analysis-btn');
const aiSkillGapResult = document.getElementById('ai-skill-gap-result');
const aiStudyPlanContainer = document.getElementById('ai-study-plan-container');
const generateStudyPlanBtn = document.getElementById('generate-study-plan-btn');
const aiStudyPlanResult = document.getElementById('ai-study-plan-result');
const aiCoverLetterSnippetContainer = document.getElementById('ai-cover-letter-snippet-container');
const generateCoverLetterBtn = document.getElementById('generate-cover-letter-btn');
const aiCoverLetterResult = document.getElementById('ai-cover-letter-result');


// --- Utility Functions ---
function initLucideIcons() { try { if (window.lucide) { lucide.createIcons(); } else { console.warn("Lucide library not found."); } } catch (error) { console.error("Error initializing Lucide icons:", error); } }
function initTheme() { const savedTheme = localStorage.getItem('unihubTheme') || 'light'; document.body.className = savedTheme; const iconName = savedTheme === 'dark' ? 'sun' : 'moon'; themeSwitchBtn.innerHTML = `<i class="icon icon-only" data-lucide="${iconName}"></i>`; themeSwitchBtn.title = savedTheme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'; initLucideIcons(); }
function toggleTheme() { const isDark = document.body.classList.toggle('dark'); const newTheme = isDark ? 'dark' : 'light'; localStorage.setItem('unihubTheme', newTheme); const iconName = newTheme === 'dark' ? 'sun' : 'moon'; themeSwitchBtn.innerHTML = `<i class="icon icon-only" data-lucide="${iconName}"></i>`; themeSwitchBtn.title = newTheme === 'dark' ? 'Переключить на светлую тему' : 'Переключить на темную тему'; initLucideIcons(); }
function showToast(message, duration = 3000) { toastElement.textContent = message; toastElement.classList.add('show'); setTimeout(() => { toastElement.classList.remove('show'); }, duration); }
function highlightText(text, term) { if (!term || !text) return text; const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); const regex = new RegExp(`(${escapedTerm})`, 'gi'); return text.replace(regex, '<mark>$1</mark>'); }
function createTypeTagHTML(type) { const typeInfo = TYPE_DESCRIPTIONS[type] || { name: type }; const colorVar = `--${type}-color`; return `<span class="type-tag" style="background-color: var(${colorVar});" title="${typeInfo.description}">${typeInfo.name}</span>`; }
function calculateCompositeScore(uni) { const weights = { avgScore: 0.35, reputation: 0.30, employmentRate: 0.20, budgetPlaces: 0.15 }; const maxAvgScore = 100, minAvgScore = 60, maxBudgetPlaces = 4000, maxReputation = 10, maxEmploymentRate = 100; const normalizedScore = Math.max(0, ((uni.avgScore || minAvgScore) - minAvgScore)) / (maxAvgScore - minAvgScore); const normalizedReputation = (uni.reputation || 1) / maxReputation; const normalizedEmployment = (uni.employmentRate || 50) / maxEmploymentRate; const normalizedBudget = Math.log1p(uni.budgetPlaces || 0) / Math.log1p(maxBudgetPlaces); const compositeScore = ((normalizedScore * weights.avgScore) + (normalizedReputation * weights.reputation) + (normalizedEmployment * weights.employmentRate) + (normalizedBudget * weights.budgetPlaces)) * 100; return Math.max(0, Math.min(100, Math.round(compositeScore))); }
function processUniversityData() { processedUniversities = universities.map(uni => { const initials = uni.name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 3); const placeholderImg = `https://placehold.co/300x160/0a4a8e/FFFFFF?text=${initials}&font=inter`; return { ...uni, compositeScore: calculateCompositeScore(uni), imagePlaceholder: placeholderImg, imageUrl: uni.imageUrl || placeholderImg }; }); }
function createUniCardHTML(uni) { const typeIcon = UNI_TYPE_ICONS[uni.type] || UNI_TYPE_ICONS.default; const isSelected = selectedForComparison.includes(uni.name); return ` <div class="uni-card" data-uni-name="${uni.name}"> <label class="compare-checkbox-label" title="Выбрать для сравнения"> <input type="checkbox" class="compare-checkbox" value="${uni.name}" ${isSelected ? 'checked' : ''}> </label> <div class="uni-type-icon" title="Тип: ${uni.type}"> <i class="icon icon-only icon-sm" data-lucide="${typeIcon}"></i> </div> <div class="uni-image" data-action="open-modal"> <img src="${uni.imageUrl}" alt="Фото ${uni.name}" loading="lazy" onerror="this.onerror=null; this.src='${uni.imagePlaceholder}'; console.warn('Failed to load image:', '${uni.imageUrl}')"> </div> <div class="uni-content" data-action="open-modal"> <h4>${uni.name}</h4> <p class="preview-info">${uni.info}</p> <div class="uni-meta"> <span class="uni-composite-score" title="Комплексный балл"><i class="icon icon-sm" data-lucide="trending-up"></i> <strong>${uni.compositeScore}</strong></span> <span class="uni-avg-score" title="Средний балл ЕГЭ"><i class="icon icon-sm" data-lucide="award"></i> <strong>${uni.avgScore || 'н/д'}</strong></span> </div> </div> </div> `; }
function populateUniFilterOptions() { const uniqueTypes = [...new Set(universities.map(uni => uni.type))].sort((a,b) => a.localeCompare(b, 'ru')); uniFilterSelect.innerHTML = '<option value="all">Все направления</option>'; const typeNames = { tech: 'Технические', science: 'Научные', engineering: 'Инженерные', international: 'Международные', economics: 'Экономика', medical: 'Медицина', management: 'Управление', art: 'Искусство', law: 'Юриспруденция', humanities: 'Гуманитарные', education: 'Образование', social: 'Социальные', agriculture: 'Аграрные', architecture: 'Архитектура', finance: 'Финансы', transport: 'Транспортные', communications: 'Связь и IT', pedagogy: 'Педагогические', psychology: 'Психологические', food: 'Пищевые', chemical: 'Химические', geodesy: 'Геодезия и картография', music: 'Музыкальные', cinema: 'Кино и ТВ', literature: 'Литературные', aviation: 'Авиация и космос', civil_engineering: 'Строительство' }; uniqueTypes.forEach(type => { let displayName = typeNames[type] || (type.charAt(0).toUpperCase() + type.slice(1)); const option = document.createElement('option'); option.value = type; option.textContent = displayName; uniFilterSelect.appendChild(option); }); }
function renderUniversities(unisToRender = processedUniversities) { 
    const sortBy = uniSortSelect.value;
    let sortedUnis = [...unisToRender]; 
    sortedUnis.sort((a, b) => {
        switch (sortBy) {
            case 'avgScore': return (b.avgScore || 0) - (a.avgScore || 0);
            case 'budgetPlaces': return (b.budgetPlaces || 0) - (a.budgetPlaces || 0);
            case 'reputation': return (b.reputation || 0) - (a.reputation || 0);
            case 'name': return a.name.localeCompare(b.name, 'ru');
            default: return b.compositeScore - a.compositeScore;
        }
    });
    allUnisListDiv.innerHTML = sortedUnis.length > 0 ? sortedUnis.map(createUniCardHTML).join('') : '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted-color);">ВУЗы не найдены по вашему запросу.</p>';
    updateCompareButtonState();
    initLucideIcons();
}
// --- ИЗМЕНЕНО: Улучшенная логика для кнопки сброса ---
function applyUniversityFiltersAndSort() {
    const filterValue = uniFilterSelect.value;
    let filteredUnis = (filterValue === 'all') ? [...processedUniversities] : processedUniversities.filter(uni => uni.type === filterValue);
    renderUniversities(filteredUnis);
    resetUniFilterBtn.classList.toggle('hidden', filterValue === 'all'); // Показываем кнопку, если фильтр активен
}
function resetUniversityFilters() { uniFilterSelect.value = 'all'; uniSortSelect.value = 'compositeScore'; selectedForComparison = []; renderUniversities(processedUniversities); showToast("Фильтры и сортировка вузов сброшены."); resetUniFilterBtn.classList.add('hidden'); }
function updateCompareButtonState() { const count = selectedForComparison.length; compareCountSpan.textContent = count; compareUnisBtn.disabled = !(count >= 2 && count <= 3); compareUnisBtn.classList.toggle('hidden', count === 0); }
function handleCompareSelection(event) { const checkbox = event.target; const uniName = checkbox.value; if (checkbox.checked) { if (selectedForComparison.length < 3) { selectedForComparison.push(uniName); } else { checkbox.checked = false; showToast("Можно выбрать не более 3 вузов для сравнения."); } } else { selectedForComparison = selectedForComparison.filter(name => name !== uniName); } updateCompareButtonState(); }
function showCompareModal() { if (selectedForComparison.length < 2 || selectedForComparison.length > 3) { showToast("Выберите 2 или 3 вуза для сравнения."); return; } const unisToCompare = processedUniversities.filter(uni => selectedForComparison.includes(uni.name)); let tableHTML = '<table><thead><tr><th>Параметр</th>'; unisToCompare.forEach(uni => { tableHTML += `<th>${uni.name}</th>`; }); tableHTML += '</tr></thead><tbody>'; const params = [ { key: 'compositeScore', name: 'Компл. балл' }, { key: 'avgScore', name: 'Ср. балл ЕГЭ' }, { key: 'budgetPlaces', name: 'Бюдж. места' }, { key: 'employmentRate', name: 'Трудоустр. (%)' }, { key: 'reputation', name: 'Репутация (/10)' }, { key: 'programs', name: 'Направления' } ]; params.forEach(param => { tableHTML += `<tr><td><strong>${param.name}</strong></td>`; unisToCompare.forEach(uni => { let value = uni[param.key] || 'н/д'; if (param.key === 'programs') { value = `<ul>${(uni.programs || []).map(p => `<li>${p}</li>`).join('')}</ul>`; } else if (param.key === 'employmentRate') { value = `${value}%`; } tableHTML += `<td>${value}</td>`; }); tableHTML += '</tr>'; }); tableHTML += '</tbody></table>'; compareTableContainer.innerHTML = tableHTML; compareModal.style.display = 'block'; initLucideIcons(); }
function openUniModal(uniName) { currentUniForModal = processedUniversities.find(u => u.name === uniName); if (currentUniForModal) { uniModalTitle.textContent = currentUniForModal.name; uniModalImage.src = currentUniForModal.imageUrl; uniModalImage.alt = `Фото ${currentUniForModal.name}`; uniModalImage.onerror = () => { uniModalImage.src = currentUniForModal.imagePlaceholder; console.warn('Failed to load image in modal:', currentUniForModal.imageUrl); }; uniModalPrograms.textContent = currentUniForModal.programs.join(', '); uniModalInfo.textContent = currentUniForModal.info; uniModalBudget.textContent = currentUniForModal.budgetPlaces || 'н/д'; uniModalAvgScore.textContent = currentUniForModal.avgScore || 'н/д'; uniModalEmployment.textContent = currentUniForModal.employmentRate || 'н/д'; uniModalReputation.textContent = currentUniForModal.reputation || 'н/д'; uniModalCompositeScore.textContent = currentUniForModal.compositeScore; updateFavoriteButtonText(); displayMatchingProfessionsInModal(currentUniForModal); uniModal.style.display = 'block'; initLucideIcons(); } }
function displayMatchingProfessionsInModal(uni) { const keywords = uni.programKeywords || []; modalProfessionsList.innerHTML = '<li class="no-professions">Загрузка...</li>'; if (keywords.length === 0) { modalProfessionsList.innerHTML = '<li class="no-professions">Ключевые слова не заданы.</li>'; return; } setTimeout(() => { const matchingProfessions = professions.filter(prof => { const profKeywords = new Set(prof.keywords.map(k => k.toLowerCase())); const uniKeywords = new Set(keywords.map(k => k.toLowerCase())); return [...profKeywords].some(pk => uniKeywords.has(pk)); }); if (matchingProfessions.length > 0) { modalProfessionsList.innerHTML = matchingProfessions .map(prof => `<li>${prof.name}</li>`) .join(''); } else { modalProfessionsList.innerHTML = '<li class="no-professions">Подходящих профессий не найдено.</li>'; } }, 10); }
function closeModals() { document.querySelectorAll('.modal').forEach(modal => { modal.style.display = 'none'; }); }
function renderTestQuestions() { questionsContainer.innerHTML = testQuestions.map((q, index) => { const questionName = `q${index + 1}`; return ` <div class="question"> <p>${q.question}</p> <div class="options"> <fieldset> <legend>Ответы ${index + 1}</legend> ${q.options.map((option, optionIndex) => `<label><input type="radio" name="${questionName}" value="${optionIndex}" required> ${option.text}</label>`).join('')} </fieldset> </div> </div>`; }).join(''); }
function handleTestSubmit(e) { e.preventDefault(); const formData = new FormData(e.target); const scores = Object.fromEntries(Object.values(HOLLAND_TYPES).map(type => [type, 0])); let answeredQuestions = 0; for (let i = 0; i < testQuestions.length; i++) { const questionName = `q${i + 1}`; const selectedOptionIndex = formData.get(questionName); if (selectedOptionIndex !== null) { answeredQuestions++; const selectedOption = testQuestions[i].options[parseInt(selectedOptionIndex)]; selectedOption.types.forEach(type => { if (scores.hasOwnProperty(type)) { scores[type]++; } }); } } if (answeredQuestions < testQuestions.length) { showToast("Пожалуйста, ответьте на все вопросы теста."); return; } const sortedScores = Object.entries(scores).sort(([,a], [,b]) => b - a); lastTestResultTypes = []; if (sortedScores[0][1] > 0) { lastTestResultTypes.push(sortedScores[0][0]); const topScore = sortedScores[0][1]; for (let i = 1; i < sortedScores.length; i++) { if (sortedScores[i][1] === topScore) { lastTestResultTypes.push(sortedScores[i][0]); } else { break; } } if (lastTestResultTypes.length < 3 && sortedScores.length > lastTestResultTypes.length) { const nextBestScore = sortedScores[lastTestResultTypes.length][1]; if (nextBestScore > 0) { for (let i = lastTestResultTypes.length; i < sortedScores.length; i++) { if (sortedScores[i][1] === nextBestScore) { lastTestResultTypes.push(sortedScores[i][0]); } else { break; } } } } } lastTestResultTypes = lastTestResultTypes.slice(0, 3); showResults(lastTestResultTypes); resultsSection.scrollIntoView({ behavior: 'smooth' }); }

// --- НОВОЕ: Полностью переработанная функция отображения результатов ---
function showResults(resultTypes) {
    document.getElementById('test').classList.add('hidden');
    resultsSection.classList.remove('hidden');

    const typeNames = resultTypes.map(type => TYPE_DESCRIPTIONS[type]?.name || type).join(' / ');
    const descriptions = resultTypes.map(type => TYPE_DESCRIPTIONS[type]?.description || '').join(' ');
    const explanation = resultTypes.map(type => TYPE_DESCRIPTIONS[type]?.explanation || '').join(' ');
    
    resultTextDiv.innerHTML = `<h3>Ваши ведущие типы: ${typeNames}</h3> <p>${descriptions}</p>`;
    resultExplanationDiv.innerHTML = `<p>${explanation}</p>`;
    resultTypesDiv.innerHTML = resultTypes.map(createTypeTagHTML).join('');

    // Находим профессии, где совпадают ВСЕ типы из результатов
    const matchingProfessions = professions
        .filter(prof => resultTypes.every(filterType => prof.types.includes(filterType)))
        .sort((a, b) => b.types.length - a.types.length) // Сортируем для релевантности
        .slice(0, 5); // Показываем до 5 самых релевантных

    const resultsProfessionsList = topMatchingProfessionsDiv.querySelector('ul');
    resultsProfessionsList.innerHTML = ''; // Очищаем старый список
    // Меняем класс, чтобы карточки отображались в гриде
    resultsProfessionsList.className = 'professions-grid'; 

    if (matchingProfessions.length > 0) {
        topMatchingProfessionsDiv.classList.remove('hidden');
        topMatchingProfessionsDiv.querySelector('h4').textContent = 'Наиболее подходящие профессии:';
        resultsProfessionsList.innerHTML = matchingProfessions.map(prof => createProfessionCardHTML(prof)).join('');
    } else {
        topMatchingProfessionsDiv.classList.remove('hidden');
        topMatchingProfessionsDiv.querySelector('h4').textContent = 'Подходящие профессии не найдены';
        resultsProfessionsList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted-color);">Точных совпадений по всем типам не найдено. Нажмите "Показать все подходящие профессии", чтобы увидеть более широкий список (совпадение по 1-2 типам).</p>';
        resultsProfessionsList.className = ''; // Возвращаем обычный вид для сообщения
    }
    
    initLucideIcons();
}

function saveResult() { if (lastTestResultTypes.length > 0) { const resultToSave = { types: lastTestResultTypes, date: new Date().toLocaleDateString('ru-RU') }; let saved = JSON.parse(localStorage.getItem('unihubTestResultsV2') || '[]'); saved.unshift(resultToSave); saved = saved.slice(0, 5); localStorage.setItem('unihubTestResultsV2', JSON.stringify(saved)); showToast("Результат теста сохранен в профиле!"); loadProfileData(); } else { showToast("Сначала пройдите тест."); } }
function createProfessionCardHTML(prof, searchTerm = '') { const typeTagsHTML = prof.types.map(createTypeTagHTML).join(''); const highlightedName = highlightText(prof.name, searchTerm); const highlightedDesc = highlightText(prof.description, searchTerm); return ` <div class="profession-card" data-profession-name-raw="${prof.name}" data-profession-desc-raw="${prof.description}"> <h4>${highlightedName}</h4> <p>${highlightedDesc}</p> <div class="profession-types">${typeTagsHTML}</div> <div class="profession-card-actions"> <button type="button" class="show-unis-for-profession-btn" data-profession-name="${prof.name}"> <i class="icon" data-lucide="graduation-cap"></i>Показать ВУЗы </button> <button type="button" class="ai-profession-details-btn" data-profession-name="${prof.name}" data-profession-description="${prof.description}"> <i class="icon" data-lucide="sparkles"></i>✨ Узнать больше с ИИ </button> </div> </div> `; }
function renderProfessions(profsToRender = professions, filterTypes = []) { currentProfessionFilterTypes = filterTypes; let filteredByTypes = profsToRender; if (filterTypes.length > 0) { filteredByTypes = profsToRender.filter(prof => { return filterTypes.some(filterType => prof.types.includes(filterType)); }); } const searchTerm = professionSearchInput.value.toLowerCase().trim(); currentFilteredProfessions = filteredByTypes; if (searchTerm) { currentFilteredProfessions = filteredByTypes.filter(p => p.name.toLowerCase().includes(searchTerm) || p.description.toLowerCase().includes(searchTerm) || p.types.some(type => (TYPE_DESCRIPTIONS[type]?.name.toLowerCase() || '').includes(searchTerm)) ); } const professionsToDisplay = currentFilteredProfessions.slice(0, professionsVisibleCount); professionsListDiv.innerHTML = professionsToDisplay.length > 0 ? professionsToDisplay.map(prof => createProfessionCardHTML(prof, searchTerm)).join('') : '<p style="grid-column: 1 / -1; text-align: center; color: var(--text-muted-color);">Профессии не найдены.</p>'; showMoreProfessionsContainer.classList.toggle('hidden', currentFilteredProfessions.length <= professionsVisibleCount); resetProfessionFilterBtn.classList.toggle('hidden', !searchTerm && filterTypes.length === 0); initLucideIcons(); }
function showMoreProfessions() { professionsVisibleCount += PROFESSIONS_PAGE_SIZE; renderProfessions(professions, currentProfessionFilterTypes); }
function filterProfessions() { professionsVisibleCount = PROFESSIONS_PAGE_SIZE; renderProfessions(professions, currentProfessionFilterTypes); }
function resetProfessionFilter() { currentProfessionFilterTypes = []; professionSearchInput.value = ''; professionsVisibleCount = PROFESSIONS_PAGE_SIZE; renderProfessions(); }

// --- УЛУЧШЕННАЯ ФУНКЦИЯ ФИЛЬТРАЦИИ ВУЗОВ ПО ПРОФЕССИИ ---
function filterUniversitiesByProfession(professionName) {
    const profession = professions.find(p => p.name === professionName);
    if (!profession) {
        showToast(`Профессия "${professionName}" не найдена.`);
        renderUniversities(processedUniversities);
        return;
    }

    showToast(`Поиск ВУЗов для: ${professionName}`);
    const professionKeywords = new Set((profession.keywords || [profession.name]).map(k => k.toLowerCase()));

    const matchingUnis = processedUniversities.filter(uni => {
        if (!uni.programKeywords || uni.programKeywords.length === 0) return false;
        
        const uniProgramKeywords = new Set(uni.programKeywords.map(uk => uk.toLowerCase()));

        if (uniProgramKeywords.has(profession.name.toLowerCase())) return true;
        for (const profKeyword of professionKeywords) {
            if (uniProgramKeywords.has(profKeyword)) return true;
        }
        for (const profKeyword of professionKeywords) {
            for (const uniKeyword of uniProgramKeywords) {
                if (uniKeyword.includes(profKeyword) || profKeyword.includes(uniKeyword)) return true;
            }
        }
        return false;
    });

    uniFilterSelect.value = 'all';
    renderUniversities(matchingUnis.length > 0 ? matchingUnis : []);
    resetUniFilterBtn.classList.remove('hidden'); // Показываем кнопку сброса

    const universitiesSection = document.getElementById('universities');
    if (universitiesSection) {
        universitiesSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function sanitizeHTML(str) { 
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
function simpleMarkdownToHtml(markdownText) {
    if (!markdownText) return '';
    let html = sanitizeHTML(markdownText); 
    html = html.replace(/^## (.*?)$/gm, '<h5>$1</h5>');
    html = html.replace(/^# (.*?)$/gm, '<h4>$1</h4>'); 
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
               .replace(/__(.*?)__/g, '<strong>$1</strong>');
    html = html.replace(/(?<!\*)\*(?!\s|\*)(.*?)(?<!\s)\*(?!\*)/g, '<em>$1</em>')
               .replace(/(?<!_)_{1}(?!_)(.*?)(?<!_)_{1}(?!_)/g, '<em>$1</em>');
    html = html.replace(/^[\*\-\+] +(.*?)$/gm, '<li>$1</li>');
    html = html.replace(/^\d+\. +(.*?)$/gm, '<li>$1</li>'); 
    html = html.replace(/^(<li>.*<\/li>\s*)+/gm, (match) => `<ul>${match.trim()}</ul>`);
    html = html.split(/\n\s*\n/).map(paragraph => {
        if (paragraph.startsWith('<ul>') || paragraph.startsWith('<h5>') || paragraph.startsWith('<h4>')) {
            return paragraph; 
        }
        return paragraph.trim() ? `<p>${paragraph.replace(/\n/g, '<br>')}</p>` : '';
    }).join('');
    html = html.replace(/<br\s*\/?>\s*<br\s*\/?>/gi, '<br>');
    html = html.replace(/<li><br\s*\/?>/gi, '<li>').replace(/<br\s*\/?>\s*<\/li>/gi, '</li>');
    html = html.replace(/<\/ul><br\s*\/?>/gi, '</ul>').replace(/<br\s*\/?><ul>/gi, '<ul>');
    return html;
}
async function callGeminiApi(promptText, targetElement) {
    const loadingHTML = `<div class="loading-indicator"><i class="icon" data-lucide="loader-2" style="animation: spin 1s linear infinite;"></i><p>Загрузка данных от ИИ...</p></div>`;
    if (targetElement) {
        targetElement.innerHTML = loadingHTML;
        initLucideIcons(); 
    }
    const apiKeyForFrontendOnly = ""; 
    const actualGeminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKeyForFrontendOnly}`;
    const payload = { contents: [{ role: "user", parts: [{ text: promptText }] }] };
    try {
        const response = await fetch(actualGeminiApiUrl, { 
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const errorBody = await response.json().catch(() => response.text()); 
            throw new Error(`Ошибка API Gemini: ${response.status}. ${errorBody?.error?.message || 'Неизвестная ошибка'}`);
        }
        const result = await response.json();
        if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
            return result.candidates[0].content.parts[0].text;
        } else {
            let errorMessage = "Не удалось получить ответ от ИИ или ответ пуст.";
            if (result.promptFeedback?.blockReason) {
                errorMessage = `Запрос к ИИ был заблокирован: ${result.promptFeedback.blockReason}.`;
            }
            throw new Error(errorMessage);
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (targetElement) {
            targetElement.innerHTML = `<p style="color: var(--realistic-color);">Ошибка при запросе к ИИ: ${error.message}</p>`;
        }
        showToast(`Ошибка при запросе к ИИ: ${error.message.substring(0,100)}...`, 5000);
        throw error; 
    }
}
async function showAIProfessionDetails(professionName, professionDescription) {
    currentProfessionForAI = { name: professionName, description: professionDescription }; 
    aiProfessionModalTitle.innerHTML = `<i class="icon" data-lucide="brain"></i> Подробности о профессии "${sanitizeHTML(professionName)}" с ИИ`;
    aiProfessionDetailsContent.innerHTML = ''; 
    aiProsConsResult.innerHTML = '';
    aiInterviewQuestionsResult.innerHTML = ''; 
    aiDayInLifeResult.innerHTML = '';
    aiUniProgramsResult.innerHTML = '';
    aiSkillGapResult.innerHTML = '';
    userSkillsInput.value = '';
    aiStudyPlanResult.innerHTML = '';
    aiCoverLetterResult.innerHTML = '';
    aiProsConsContainer.classList.add('hidden');
    aiInterviewQuestionsContainer.classList.add('hidden');
    aiDayInLifeContainer.classList.add('hidden');
    aiUniProgramRecommenderContainer.classList.add('hidden');
    aiSkillGapAnalyzerContainer.classList.add('hidden');
    skillInputArea.classList.add('hidden');
    aiStudyPlanContainer.classList.add('hidden');
    aiCoverLetterSnippetContainer.classList.add('hidden');
    generateProsConsBtn.disabled = true;
    generateInterviewQuestionsBtn.disabled = true; 
    generateDayInLifeBtn.disabled = true;
    generateUniProgramsBtn.disabled = true;
    initiateSkillAnalysisBtn.disabled = true;
    submitSkillsForAnalysisBtn.disabled = true;
    generateStudyPlanBtn.disabled = true;
    generateCoverLetterBtn.disabled = true;
    aiProfessionDetailsModal.style.display = 'block';
    initLucideIcons();
    const prompt = `Расскажи подробно о профессии "${professionName}". Если есть информация об обязанностях: "${professionDescription}", учти её. Используй Markdown для форматирования. Заголовки секций делай с помощью '## Название секции'. Списки элементов делай с помощью '* Элемент списка'. Для выделения ключевых моментов используй '**жирный текст**'. Опиши: ## Краткое описание и суть профессии ## Основные обязанности ## Перспективы карьерного роста и востребованность ## Необходимые ключевые навыки * Hard Skills: (список) * Soft Skills: (список) ## Плюсы профессии (краткий список из 3-5 пунктов) ## Минусы профессии (краткий список из 3-5 пунктов) ## Примерный диапазон заработной платы в России (если есть данные) ## Уровень образования и типичные направления подготовки. Ответ должен быть на русском языке, структурированным и легко читаемым. Важно: в секции "Необходимые ключевые навыки" четко перечисли навыки под заголовками "Hard Skills:" и "Soft Skills:". В секциях "Плюсы профессии" и "Минусы профессии" дай краткий список, а не развернутый анализ на этом этапе.`;
    try {
        const aiResponse = await callGeminiApi(prompt, aiProfessionDetailsContent);
        const htmlResponse = simpleMarkdownToHtml(aiResponse);
        aiProfessionDetailsContent.innerHTML = htmlResponse;
        const skillsSectionMatch = htmlResponse.match(/<h5>Необходимые ключевые навыки<\/h5>(.*?)<h5>/s);
        if (skillsSectionMatch && skillsSectionMatch[1]) {
            aiGeneratedRequiredSkills = skillsSectionMatch[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        } else {
            aiGeneratedRequiredSkills = "Информация о требуемых навыках не была найдена в описании.";
        }
        aiProsConsContainer.classList.remove('hidden');
        generateProsConsBtn.disabled = false;
        aiInterviewQuestionsContainer.classList.remove('hidden');
        generateInterviewQuestionsBtn.disabled = false;
        aiDayInLifeContainer.classList.remove('hidden');
        generateDayInLifeBtn.disabled = false;
        aiUniProgramRecommenderContainer.classList.remove('hidden');
        generateUniProgramsBtn.disabled = false;
        aiSkillGapAnalyzerContainer.classList.remove('hidden');
        initiateSkillAnalysisBtn.disabled = false;
        aiCoverLetterSnippetContainer.classList.remove('hidden');
        generateCoverLetterBtn.disabled = false;
        showToast("Информация от ИИ загружена!", 2000);
    } catch (error) {
        showToast("Не удалось загрузить детали профессии от ИИ.", 3000);
    } finally {
        initLucideIcons(); 
    }
}
generateProsConsBtn.addEventListener('click', async () => { if (!currentProfessionForAI) return; aiProsConsResult.innerHTML = ''; generateProsConsBtn.disabled = true; const prompt = `Предоставь углубленный анализ плюсов и минусов профессии "${currentProfessionForAI.name}". Учитывай описание: "${currentProfessionForAI.description}". Используй Markdown: ## для заголовков "Основные плюсы" и "Основные минусы", и * для каждого пункта списка. Для каждого плюса и минуса дай развернутое объяснение (2-3 предложения), а не просто список. Рассмотри такие аспекты, как условия труда, карьерные перспективы, уровень стресса, востребованность, возможность самореализации, социальная значимость, типичные сложности, баланс работы и личной жизни. Ответ должен быть на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiProsConsResult); aiProsConsResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Анализ плюсов и минусов загружен!", 2000); } catch (error) { showToast("Не удалось загрузить анализ плюсов и минусов.", 3000); } finally { generateProsConsBtn.disabled = false; initLucideIcons(); } });
generateInterviewQuestionsBtn.addEventListener('click', async () => { if (!currentProfessionForAI) return; aiInterviewQuestionsResult.innerHTML = ''; generateInterviewQuestionsBtn.disabled = true; const prompt = `Для профессии "${currentProfessionForAI.name}" (описание: "${currentProfessionForAI.description}") подготовь список вопросов для собеседования. Используй Markdown: ## для заголовков "Общие вопросы:" и "Специализированные вопросы:", и * для каждого вопроса в списке. Включи: ## Общие вопросы * (3-4 общих вопроса: мотивация, сильные/слабые стороны, командная работа) ## Специализированные вопросы * (4-5 вопросов, специфичных для роли, проверяющих знания и навыки). Ответы не нужны, только вопросы.`; try { const aiResponse = await callGeminiApi(prompt, aiInterviewQuestionsResult); aiInterviewQuestionsResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Вопросы для собеседования сгенерированы!", 2000); } catch (error) { showToast("Не удалось сгенерировать вопросы для собеседования.", 3000); } finally { generateInterviewQuestionsBtn.disabled = false; initLucideIcons(); } });
generateDayInLifeBtn.addEventListener('click', async () => { if (!currentProfessionForAI) return; aiDayInLifeResult.innerHTML = ''; generateDayInLifeBtn.disabled = true; const prompt = `Опиши типичный рабочий день для профессии "${currentProfessionForAI.name}". Используй Markdown для форматирования (## для подзаголовков, * для списков, **жирный** для акцентов). Расскажи о возможных задачах, с кем приходится взаимодействовать, какие инструменты используются. Сделай описание живым и интересным, как будто это рассказ от первого лица или наблюдение. Учитывай описание профессии: "${currentProfessionForAI.description}". Ответ должен быть на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiDayInLifeResult); aiDayInLifeResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Описание 'Дня из жизни' загружено!", 2000); } catch (error) { showToast("Не удалось сгенерировать описание 'Дня из жизни'.", 3000); } finally { generateDayInLifeBtn.disabled = false; initLucideIcons(); } });
generateUniProgramsBtn.addEventListener('click', async () => { if (!currentProfessionForAI) return; aiUniProgramsResult.innerHTML = ''; generateUniProgramsBtn.disabled = true; const prompt = `Пользователь интересуется профессией "${currentProfessionForAI.name}". Какие образовательные программы в ВУЗах Москвы наиболее подходят для этой профессии? Используй Markdown: ## для заголовка "Рекомендуемые программы ВУЗов:", * для каждого пункта списка. Приведи 3-5 конкретных названий программ и кратко объясни, почему каждая из них подходит. Если можешь, укажи, в каких типах ВУЗов (например, технический, гуманитарный, медицинский) такие программы чаще всего встречаются. Учитывай, что пользователь ищет ВУЗы в Москве. Ответ должен быть на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiUniProgramsResult); aiUniProgramsResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Рекомендации по программам ВУЗов загружены!", 2000); } catch (error) { showToast("Не удалось загрузить рекомендации по программам ВУЗов.", 3000); } finally { generateUniProgramsBtn.disabled = false; initLucideIcons(); } });
initiateSkillAnalysisBtn.addEventListener('click', () => { skillInputArea.classList.remove('hidden'); userSkillsInput.focus(); submitSkillsForAnalysisBtn.disabled = false; aiSkillGapResult.innerHTML = ''; aiStudyPlanContainer.classList.add('hidden'); generateStudyPlanBtn.disabled = true; aiStudyPlanResult.innerHTML = ''; });
submitSkillsForAnalysisBtn.addEventListener('click', async () => { if (!currentProfessionForAI || !aiGeneratedRequiredSkills) { showToast("Сначала загрузите детали профессии.", 3000); return; } const userSkills = userSkillsInput.value.trim(); if (!userSkills) { showToast("Пожалуйста, введите ваши навыки.", 3000); userSkillsInput.focus(); return; } submitSkillsForAnalysisBtn.disabled = true; aiSkillGapResult.innerHTML = ''; identifiedSkillGaps = ""; const prompt = `Для профессии '${currentProfessionForAI.name}' (описание: '${currentProfessionForAI.description}') ИИ ранее предоставил следующий список требуемых навыков: '${aiGeneratedRequiredSkills}'. Пользователь указал, что обладает следующими навыками: '${userSkills}'. Проанализируй, каких ключевых навыков (из списка требуемых) не хватает пользователю. Представь ответ в Markdown, используя ## для заголовков и * для списков: ## Анализ нехватки навыков * **Недостающие Hard Skills:** (список, если есть, или "Не выявлено") * **Недостающие Soft Skills:** (список, если есть, или "Не выявлено"). Если все требуемые навыки у пользователя есть, напиши: "## Поздравляем!\nНа основе предоставленной информации, у вас есть все ключевые навыки для этой профессии. Продолжайте их развивать и углублять!". Ответ дай на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiSkillGapResult); const htmlResponse = simpleMarkdownToHtml(aiResponse); aiSkillGapResult.innerHTML = htmlResponse; const missingSkillsMatch = htmlResponse.match(/<h5>Анализ нехватки навыков<\/h5>(.*)/s); if (missingSkillsMatch && missingSkillsMatch[1] && !htmlResponse.includes("Поздравляем!")) { let relevantTextForGaps = missingSkillsMatch[1]; const nextH5Index = relevantTextForGaps.indexOf("<h5>"); if (nextH5Index !== -1) { relevantTextForGaps = relevantTextForGaps.substring(0, nextH5Index); } identifiedSkillGaps = relevantTextForGaps.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); const hasMissingHard = identifiedSkillGaps.includes("Недостающие Hard Skills:") && !identifiedSkillGaps.match(/Недостающие Hard Skills:\s*Не выявлено/i); const hasMissingSoft = identifiedSkillGaps.includes("Недостающие Soft Skills:") && !identifiedSkillGaps.match(/Недостающие Soft Skills:\s*Не выявлено/i); if (hasMissingHard || hasMissingSoft) { aiStudyPlanContainer.classList.remove('hidden'); generateStudyPlanBtn.disabled = false; } else { aiStudyPlanContainer.classList.add('hidden'); generateStudyPlanBtn.disabled = true; } } else { aiStudyPlanContainer.classList.add('hidden'); generateStudyPlanBtn.disabled = true; } showToast("Анализ навыков загружен!", 2000); } catch (error) { showToast("Не удалось провести анализ навыков.", 3000); aiStudyPlanContainer.classList.add('hidden'); generateStudyPlanBtn.disabled = true; } finally { submitSkillsForAnalysisBtn.disabled = false; initLucideIcons(); } });
generateStudyPlanBtn.addEventListener('click', async () => { if (!currentProfessionForAI) { showToast("Информация о профессии не загружена.", 3000); return; } if (!identifiedSkillGaps || (identifiedSkillGaps.toLowerCase().includes("недостающие hard skills: не выявлено") && identifiedSkillGaps.toLowerCase().includes("недостающие soft skills: не выявлено")) ) { showToast("Сначала проведите анализ навыков или не найдено значимых пробелов для составления плана.", 4000); aiStudyPlanResult.innerHTML = "<p>Недостающие навыки не были четко определены для генерации плана.</p>"; generateStudyPlanBtn.disabled = true; return; } generateStudyPlanBtn.disabled = true; aiStudyPlanResult.innerHTML = ''; const prompt = `Для профессии '${currentProfessionForAI.name}', пользователь проанализировал свои навыки. Результат анализа показал следующие пробелы в навыках (или комментарии об их отсутствии): "${identifiedSkillGaps}". Пожалуйста, предоставь краткие и практические советы по изучению или развитию 1-2 КЛЮЧЕВЫХ недостающих навыков из этого анализа. Сосредоточься на самых важных. Если анализ говорит "Не выявлено" для Hard или Soft skills, не нужно давать советы по этой категории. Для каждого предложенного к изучению навыка: * Укажи название навыка. * Предложи 1-2 конкретных действия или ресурса для его освоения (например, "пройти онлайн-курс по [теме]", "прочитать книгу [автор, название]", "поучаствовать в проекте, где требуется [навык]", "практиковаться в [действии]"). Используй Markdown: ## для общего заголовка "Советы по изучению недостающих навыков", * для каждого навыка и подпункты для рекомендаций. Ответ дай на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiStudyPlanResult); aiStudyPlanResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Советы по изучению навыков загружены!", 2000); } catch (error) { showToast("Не удалось сгенерировать советы по изучению.", 3000); } finally { generateStudyPlanBtn.disabled = false; initLucideIcons(); } });
generateCoverLetterBtn.addEventListener('click', async () => { if (!currentProfessionForAI) return; aiCoverLetterResult.innerHTML = ''; generateCoverLetterBtn.disabled = true; const prompt = `Сгенерируй 2-3 абзаца для сопроводительного письма на позицию "${currentProfessionForAI.name}". В этих абзацах кратко и убедительно опиши, почему кандидат, стремящийся к этой профессии, может быть ценным сотрудником, и какие его качества и стремления соответствуют данной роли. Используй описание профессии: "${currentProfessionForAI.description}". Сделай текст вдохновляющим и профессиональным. Используй Markdown для абзацев (просто текст, разделенный пустыми строками). Ответ дай на русском языке.`; try { const aiResponse = await callGeminiApi(prompt, aiCoverLetterResult); aiCoverLetterResult.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Фрагменты сопроводительного письма сгенерированы!", 2000); } catch (error) { showToast("Не удалось сгенерировать фрагменты письма.", 3000); } finally { generateCoverLetterBtn.disabled = false; initLucideIcons(); } });
aiCareerAdviceBtn.addEventListener('click', async () => { if (!lastTestResultTypes || lastTestResultTypes.length === 0) { showToast("Сначала пройдите тест и получите результаты.", 3000); return; } const userTypesString = lastTestResultTypes.map(type => TYPE_DESCRIPTIONS[type]?.name || type).join(', '); aiCareerAdviceModalTitle.innerHTML = `<i class="icon" data-lucide="user-check"></i> Совет от ИИ для типов: ${userTypesString}`; aiCareerAdviceModal.style.display = 'block'; initLucideIcons(); const prompt = `Пользователь прошел тест на профориентацию. Его ведущие типы личности по Холланду: ${userTypesString}. Предоставь развернутый карьерный совет на русском языке. Используй Markdown: ## для заголовков секций, * для элементов списка, **жирный текст** для выделения. Включи: ## Общая характеристика и сильные стороны ## Рекомендуемые направления деятельности (3-5 профессий/сфер с кратким обоснованием) ## Советы по образованию (программы, курсы для этих профессий) ## Ключевые навыки для развития (hard и soft skills) ## Советы по дальнейшим шагам (изучение профессий, поиск ментора) ## Возможные вызовы и как их преодолеть (1-2 примера) ## Вдохновляющее напутствие. Структурируй ответ четко. Будь позитивным и вдохновляющим.`; try { const aiResponse = await callGeminiApi(prompt, aiCareerAdviceContent); aiCareerAdviceContent.innerHTML = simpleMarkdownToHtml(aiResponse); showToast("Советы по карьере от ИИ загружены!", 2000); } catch (error) { showToast("Не удалось загрузить совет по карьере от ИИ.", 3000); } finally { initLucideIcons(); } });

function toggleFavorite() { if (!currentUniForModal) return; const uniName = currentUniForModal.name; let favorites = JSON.parse(localStorage.getItem('unihubFavorites') || '[]'); const index = favorites.indexOf(uniName); if (index > -1) { favorites.splice(index, 1); showToast(`${uniName} удален из избранного.`); } else { favorites.push(uniName); showToast(`${uniName} добавлен в избранное!`); } localStorage.setItem('unihubFavorites', JSON.stringify(favorites)); updateFavoriteButtonText(); loadProfileData(); }
function updateFavoriteButtonText() { if (!currentUniForModal) return; const favorites = JSON.parse(localStorage.getItem('unihubFavorites') || '[]'); const heartIcon = '<i class="icon" data-lucide="heart"></i>'; const brokenHeartIcon = '<i class="icon" data-lucide="heart-off"></i>'; if (favorites.includes(currentUniForModal.name)) { addToFavoritesBtn.innerHTML = `${brokenHeartIcon} Убрать из избранного`; addToFavoritesBtn.style.backgroundColor = '#aaa'; } else { addToFavoritesBtn.innerHTML = `${heartIcon} В избранное`; addToFavoritesBtn.style.backgroundColor = 'var(--accent-color)'; } initLucideIcons(); }
function loadProfileData() { const savedTestResults = JSON.parse(localStorage.getItem('unihubTestResultsV2') || '[]'); if (savedTestResults.length > 0) { savedResultsDiv.innerHTML = savedTestResults.map((res, index) => { const typeNames = res.types.map(type => `<strong>${TYPE_DESCRIPTIONS[type]?.name || type}</strong>`).join(', '); return `<div><span>${res.date}: ${typeNames}</span><button type="button" title="Удалить результат" onclick="removeTestResult(${index})"><i class="icon icon-only" data-lucide="trash-2"></i></button></div>`; }).join(''); } else { savedResultsDiv.innerHTML = '<p>Вы еще не сохраняли результаты теста.</p>'; } const favoriteUnis = JSON.parse(localStorage.getItem('unihubFavorites') || '[]'); if (favoriteUnis.length > 0) { favoritesDiv.innerHTML = favoriteUnis.map((uniName, index) => `<div><span><strong>${uniName}</strong></span><button type="button" title="Удалить из избранного" onclick="removeFavorite(${index})"><i class="icon icon-only" data-lucide="trash-2"></i></button></div>`).join(''); } else { favoritesDiv.innerHTML = '<p>Вы еще не добавляли ВУЗы в избранное.</p>'; } initLucideIcons(); }
window.removeTestResult = function(index) { let saved = JSON.parse(localStorage.getItem('unihubTestResultsV2') || '[]'); if (index >= 0 && index < saved.length) { saved.splice(index, 1); localStorage.setItem('unihubTestResultsV2', JSON.stringify(saved)); loadProfileData(); showToast("Результат теста удален."); } }
window.removeFavorite = function(index) { let favorites = JSON.parse(localStorage.getItem('unihubFavorites') || '[]'); if (index >= 0 && index < favorites.length) { const removedUniName = favorites.splice(index, 1)[0]; localStorage.setItem('unihubFavorites', JSON.stringify(favorites)); loadProfileData(); showToast(`${removedUniName} удален из избранного.`); if (uniModal.style.display === 'block' && currentUniForModal?.name === removedUniName) { updateFavoriteButtonText(); } } }
function clearProfileData() { const confirmationModalHTML = ` <div id="custom-confirm-modal" class="modal" style="display: block;"> <div class="modal-content" style="max-width: 400px;"> <h3>Подтверждение</h3> <p>Вы уверены, что хотите очистить все сохраненные результаты и избранное? Это действие необратимо.</p> <div style="text-align: right; margin-top: 1.5rem;"> <button type="button" id="confirm-clear-yes" style="margin-right: 0.5rem;">Да, очистить</button> <button type="button" id="confirm-clear-no" style="background-color: var(--text-muted-color); color: var(--card-bg);">Отмена</button> </div> </div> </div> `; document.body.insertAdjacentHTML('beforeend', confirmationModalHTML); initLucideIcons(); const customModal = document.getElementById('custom-confirm-modal'); document.getElementById('confirm-clear-yes').addEventListener('click', () => { localStorage.removeItem('unihubTestResultsV2'); localStorage.removeItem('unihubFavorites'); loadProfileData(); showToast("Данные профиля очищены."); customModal.remove(); }); document.getElementById('confirm-clear-no').addEventListener('click', () => { customModal.remove(); }); }


// --- НОВОЕ: Единый обработчик для интерактивных карточек ---
function handleProfessionCardClick(event) {
    const professionCard = event.target.closest('.profession-card');
    if (!professionCard) return;

    const professionName = professionCard.dataset.professionNameRaw;
    const professionDesc = professionCard.dataset.professionDescRaw;

    if (event.target.closest('.show-unis-for-profession-btn')) {
        if (professionName) filterUniversitiesByProfession(professionName);
    } else if (event.target.closest('.ai-profession-details-btn')) {
        if (professionName && professionDesc) {
            showAIProfessionDetails(professionName, professionDesc);
        }
    }
}


function setupEventListeners() {
    themeSwitchBtn.addEventListener('click', toggleTheme);
    profileBtn.addEventListener('click', () => { loadProfileData(); profileModal.style.display = 'block'; initLucideIcons();});
    closeModalBtns.forEach(btn => btn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) modal.style.display = 'none';
    }));
    window.addEventListener('click', (event) => { if (event.target.classList.contains('modal') && !event.target.id.includes('custom-confirm-modal')) { closeModals(); } });
    startTestBtn.addEventListener('click', () => { document.getElementById('test-start').classList.add('hidden'); careerTestForm.classList.remove('hidden'); resultsSection.classList.add('hidden'); renderTestQuestions(); initLucideIcons(); });
    careerTestForm.addEventListener('submit', handleTestSubmit);
    saveResultBtn.addEventListener('click', saveResult);
    showMatchingProfessionsBtn.addEventListener('click', () => { if (lastTestResultTypes.length > 0) { currentProfessionFilterTypes = lastTestResultTypes; professionsVisibleCount = PROFESSIONS_PAGE_SIZE; renderProfessions(professions, lastTestResultTypes); document.getElementById('professions').scrollIntoView({ behavior: 'smooth' }); } else { showToast("Сначала пройдите тест."); } });
    professionSearchInput.addEventListener('input', filterProfessions);
    resetProfessionFilterBtn.addEventListener('click', resetProfessionFilter);
    showMoreProfessionsBtn.addEventListener('click', showMoreProfessions);
    uniFilterSelect.addEventListener('change', applyUniversityFiltersAndSort);
    uniSortSelect.addEventListener('change', applyUniversityFiltersAndSort);
    resetUniFilterBtn.addEventListener('click', resetUniversityFilters);
    compareUnisBtn.addEventListener('click', showCompareModal);
    allUnisListDiv.addEventListener('click', (event) => { const card = event.target.closest('.uni-card'); if (!card) return; const uniName = card.dataset.uniName; if (!uniName) return; if (event.target.closest('.compare-checkbox-label')) { /* handled by change event */ } else if (event.target.closest('[data-action="open-modal"]')) { openUniModal(uniName); } });
    allUnisListDiv.addEventListener('change', (event) => { if (event.target.classList.contains('compare-checkbox')) { handleCompareSelection(event); } });
    
    // --- ИЗМЕНЕНО: Используем единый обработчик для всех карточек профессий ---
    professionsListDiv.addEventListener('click', handleProfessionCardClick);
    resultsSection.addEventListener('click', handleProfessionCardClick);

    addToFavoritesBtn.addEventListener('click', toggleFavorite);
    clearProfileBtn.addEventListener('click', clearProfileData);
    document.querySelectorAll('header nav a, .logo-container').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href')?.substring(1);
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerOffset = document.querySelector('header')?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
            } else if (this.classList.contains('logo-container')) {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}


document.addEventListener('DOMContentLoaded', () => { 
    initTheme(); 
    processUniversityData(); 
    populateUniFilterOptions(); 
    renderUniversities(processedUniversities); 
    renderProfessions(); 
    setupEventListeners(); 
    currentYearSpan.textContent = new Date().getFullYear(); 
    initLucideIcons(); 
});