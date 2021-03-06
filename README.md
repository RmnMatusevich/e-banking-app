# ВВЕДЕНИЕ

Все компании, как государственные, так и коммерческие стараются переносить свой бизнес в онлайн сферу, а также вести учет при помощи программ. Это также и коснулось представителей банковских сфер. Никому уже не хочется стоять в очередях и тратить свое время, поэтому практически все банки оказывают online-услуги. Будь то простой перевод денег и заканчивая наиболее сложными процессами, требующий не только технического оснащения, но и юридического заключения договором между банком и клиентом.

Почему и как возникли автоматизированные online-системы взаимодействия между банком и клиентами? Банк, для повышения своей конкурентоспособности, придумал различные удобства для клиентов, в том числе и интернет-банкинг. Клиент банка, используя свой личный уникальный счет, может совершать различные транзакции и действия на своих устройствах, имеющих доступ к сети интернет. Благодаря расчетному счету пользователь может контролировать и получать доступ к своим финансовым средствам абсолютно в любое для него время, вне зависимости от работы того же банка, что значительно улучшает взаимодействие между клиентом и банком. Клиент больше не обязан ждать «своей очереди», а банк тем самым уменьшает свою загруженность в его учреждениях.

В наше время практически все банки предоставляют не только веб-приложения, где пользователи могут, пользуясь своим расчетным счетом, совершать различные операции, но и мобильными приложения, с помощью которых клиенты могут в полной мере получить банковскую помощь имея только лишь смартфон.

Такие программные обеспечения позволяют в значительной мере автоматизировать многие процессы. Клиенты могут самостоятельно и безопасно оплачивать счета, осуществлять переводы, отправлять заявки на получение кредитов, банковских карт, открывать депозиты, конвертировать средства. Автоматизация предполагает ускорение процессов внутри банка, оптимизацию ведения бухгалтерии, составления отчетности, точность внутрибанковских операций, управление средствами, доступ к базе данных клиентов и многое другое. Все в результате дает огромное снижение издержек самого банка.

Таким образом, целью курсового проекта будет автоматизация процессов обслуживания клиентов банка, путем создания программного обеспечения в виде интернет-портала.Приложение будет включать в себя хранение информации о клиентах, возможность клиента совершать переводы, создавать депозиты, оформлять кредит с различным сроком выплаты. Такое ПО позволит ускоритьпроцесс взаимодействия банка с клиентами, a такжеоптимизироватьведение бухгалтерии для банка.

Для достижения поставленной цели, в курсовом проекте решаются следующие задачи:

- Изучение предметной области;
- Разработкаалгоритма для реализации бизнес-логики;
- Разработка архитектуры программногообеспечения;
- Разработкапользовательского интерфейса с обработкой исключительных ситуаций;
- Построение диаграмм алгоритмов и UML-диаграмм.

1.

# ОПИСАНИЕ ПРЕДМЕТНОЙ ОБЛАСТИ

В данном проекте разрабатывается система автоматизацииобслуживания расчётных счетов физических лиц для ОАО «Приорбанк».

«Приорбанк» — белорусский коммерческий банк. Основным бенефициарным собственником «Приорбанк» ОАО является Raiffeisen Landesbanken Holding AG (Австрия) — дочерняя компания Raiffeisen Bank International AG.

«Приорбанк» — универсальный банк, предоставляющий широкий спектр банковских услуг. Банк занимает лидирующую позицию на белорусском финансовом рынке, а также является одним из самых эффективных банков в группе Raiffeisen.

В 1989 году банк был зарегистрирован как Минский инновационный банк. Дальнейшую судьбу банка определили проведённый в 1991-м году процесс акционирования, а также получение Генеральной лицензии на совершение операций в иностранных валютах. В 1994—1995 годах «Приорбанк» открыл свои представительства в Германии, Польше и России. Аудиторскую проверку проводили Coopers&amp;Lybrand, Price Waterhouse, Ernst&amp;Young. В 2003 году контрольный пакет акций «Приорбанка» приобрела крупнейшая банковская группа в Центральной и Восточной Европе — Райффайзен Интернешнл. Сегодня «Приорбанк» занимает лидирующие позиции по привлечению иностранных инвестиций и выпуску кредитных карт. Банк успешно сотрудничает с RZB, Европейским Банком Реконструкции и Развития, Международной финансовой корпорацией, Экспортно-Импортным банком (Тайвань) и многими другими международными финансовыми организациями.

Идентификационный код банка в Едином государственном регистре юридических лиц и индивидуальных предпринимателей – №100220190.

ОАО «Приорбанк» осуществляет банковскую деятельность на основании специального разрешения (лицензии) на право осуществления банковской деятельности от 24.07.2019 г., регистрационный №12.

Перечень операций, которые банк вправе осуществлять:

1. Привлечение денежных средств физических и юридических лиц на счета и во вклады (депозиты);
2. Размещение привлеченных денежных средств физических и юридических лиц на счета и во вклады (депозиты) от своего имени и за свой счет на условиях возвратности, платности и срочности;
3. Открытие и ведение банковских счетов физических и (или) юридических лиц;
4. Открытие и ведение счетов в драгоценных металлах;
5. Осуществление расчетного и (или) кассового обслуживания физических и (или) юридических лиц, в том числе банков-корреспондентов;
6. Валютно-обменные операции;
7. Купля-продажа драгоценных металлов и (или) драгоценных камней в случаях, предусмотренных Национальным банком;
8. Привлечение и размещение драгоценных металлов и (или) драгоценных камней во вклады (депозиты) физических и (или) юридических лиц;
9. Выдача банковских гарантий;
10. Доверительное управление фондом банковского управления на основании договора доверительного управления фондом банковского управления;
11. Доверительное управление денежными средствами по договору доверительного управления денежными средствами;
12. Инкассация наличных денежных средств, драгоценных металлов и драгоценных камней и иных ценностей;
13. Выпуск в обращение (эмиссия) банковских платежных карточек;
14. Выпуск в обращение (эмиссия) электронных денег;
15. Выдача ценных бумаг, подтверждающих привлечение денежных средств во вклады (депозиты) и размещение их на счета;
16. Финансирование под уступку денежного требования (факторинг);
17. Предоставление физическим и (или) юридическим лицам специальных помещений или находящихся в них сейфов для банковского хранения документов и ценностей (денежных средств, ценных бумаг, драгоценных металлов и драгоценных камней и др.);
18. Перевозка наличных денежных средств, драгоценных металлов и драгоценныхкамней и иных ценностей между банками и небанковскими кредитно-финансовыми организациями, их обособленными и структурными подразделениями, а также доставка таких ценностей клиентам банков и небанковских кредитно-финансовых организаций.

Основными акционерами ОАО «Приорбанк» являются: Райффайзен СИС Риджен Холдинг ГмбХ (Raiffeisen CIS Region Holding GmbH), Австрия – 87,74% акций, Государственный комитет по имуществу Республики Беларусь – 6,31% акций, оставшиеся 5,95% приходятся на прочих юридических и физических лиц (1,11% и 4,84% соответственно).

ОАО «Приорбанк» осуществляет работу на рынке ценных бумаг на основании специального разрешения (лицензии) на право осуществления профессиональной и биржевой деятельности по ценным бумагам №5200-1246-1080, которое действительно по 30 мая 2021 года.

К основным целям деятельности банка относятся: способствование реализации единой денежно-кредитной политики Республики Беларусь, содействие международному экономическому сотрудничеству, предоставление клиентам широкого спектра банковских услуг сиспользованием передовых банковских технологий;поддержка микро, малых и средних предприятий для укрепления иразвития рыночных отношений.

В состав банковского холдинга входят:

1. Совместное общество с ограниченной ответственностью «Райффайзен-Лизинг». Доля участия Приорбанка в уставном фонде - 70%.
2. Производственно-строительное унитарное предприятие «Дом Офис 2000». Доля участия Приорбанка в уставном фонде - 100%.
3. Страховое общество с ограниченной ответственностью &quot;Приорлайф&quot;. Доля участия Приорбанка в уставном фонде - 100%.
4. Производственное унитарное предприятие &quot;ПриортрансАгро&quot;. Доля участия Приорбанка в уставном фонде - 100%.
5. Общество с ограниченной ответственность «Эстейт Менеджмент». Доля участия Приорбанка в уставном фонде - 100%.

К преимуществам Приорбанка относят: многолетний опыт, австрийский капитал, надежность, технологичность.
