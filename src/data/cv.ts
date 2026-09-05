export type Project = {
  name: string;
  status: string;
  summary: string;
  highlight: string;
  stack: string[];
  repoUrl: string;
  specialTags?: string[];
};

export type Group = { title: string; items: string[] };
/** Una tecnologia del stack. `logo` es el nombre de archivo en /logos/;
 *  si falta, la variante la muestra como chip de texto. */
export type Tech = { name: string; logo?: string };
export type TechGroup = { title: string; items: Tech[] };
/** `note` es una segunda linea dentro de la misma tarjeta de dato. */
export type Fact = { label: string; value: string; href?: string; note?: string };
export type FinanceItem = { label: string; detail: string };
/** Tarjeta del hero: un icono y una linea de texto. */
export type HeroStat = { icon: 'person' | 'location' | 'craft'; text: string };

export const profile = {
  name: 'Laureano Enrique',
  role: 'Developer + Trader + Software Engineer Student',
  email: 'Laureanoenrique29@gmail.com',
  emailHref: 'mailto:Laureanoenrique29@gmail.com',
  phone: '2325420927',
  phoneHref: 'tel:+542325420927',
  linkedin: 'https://www.linkedin.com/in/laureano-enrique/',
  linkedinLabel: 'LinkedIn',
  contactCta: 'Contact me',
  bio: `I love mixing finance with software development and simply trying out projects; nowadays, with the use of AI, I can test thousands of technologies and attempt things that used to take me months. I'm passionate about "risking it all." I'm also venturing into automating archaic processes with AI to try to solve problems for people. I'm passionate about what I do and I love learning all the time — I'd say that's my greatest virtue above all others.
Is it the best CV? I don't know, but it perfectly describes what I love, and that's what matters.`,
  projectsNote: `These days, how many lines of code are written by hand? Very few, to be honest, with the use of AI. That's why, in this sense, I highlight my virtue of understanding software architecture — knowing what a thread is, APIs, workers, databases, lightweight clients, sockets, cookies, requests, CDNs, brokers, cache, and so many more that I'm forgetting`,
  architectureHeading: 'What I use across product, data and systems work.',
  contactHeading: 'If you are hiring for pragmatic engineering work, let’s talk.',
  contactNote:
    'The page is intentionally simple: it shows what I have built, which stacks I know and the kind of problems I like to solve.',
  footerLeft: 'Built with Astro, TypeScript and Tailwind.',
  footerRight: 'Buenos Aires, Argentina.',
};

export const heroStats: HeroStat[] = [
  { icon: 'person', text: '24 years old' },
  { icon: 'location', text: 'Buenos Aires, Argentina' },
  { icon: 'craft', text: 'Software Engineer + Trader' },
];

export const facts: Fact[] = [
  { label: 'Name', value: 'Laureano Enrique' },
  { label: 'Age', value: '24' },
  { label: 'City', value: 'Ciudad Autonoma de Buenos Aires, Argentina' },
  { label: 'Focus', value: 'Trading + Software automation + IA automation' },
  {
    label: 'Education',
    value: '6th year, Systems Engineering — UTN FRBA',
    note: 'Colegio Nacional Mariano Moreno (Economics orientation)',
  },
  { label: 'Languages', value: 'Spanish (Native), English (Fluent)' },
];

export const projects: Project[] = [
  {
    name: 'Red Voluntarias',
    status: 'Astro + CMS',
    summary:
      'Institutional ONG (builded for my sister) website built as a fast static site with Sveltia CMS for editorial content management.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'Sveltia CMS', 'Static hosting'],
    highlight: 'A content-driven public site with no backend or database.',
    repoUrl: 'https://github.com/Laureano11/red-voluntarias',
  },
  {
    name: 'Questioning App',
    status: 'FastAPI web app',
    summary:
      'A Q&A platform with registration, login, anonymous posting and answer flows backed by SQLite and sessions.',
    stack: ['FastAPI', 'SQLModel', 'SQLite', 'Jinja2', 'Python'],
    highlight: 'Server-rendered product with auth and CRUD-style interactions.',
    repoUrl: 'https://github.com/Laureano11/questioningAPP',
  },
  {
    name: 'Topuria',
    status: 'Habit tracker',
    summary:
      'A lightweight habit tracker with streaks, progress views, seeded demo data and persistent storage.',
    stack: ['FastAPI', 'Jinja2', 'SQLModel', 'SQLite', 'Python'],
    highlight: 'Focused on clear dashboards and a compact backend.',
    repoUrl: 'https://github.com/Laureano11/topuria',
  },
  {
    name: 'MetaMapa',
    status: 'Modular platform',
    summary:
      'A multi-service platform for facts, collections and statistics with CSV ingestion, dynamic requests and external proxies.',
    stack: ['Java 17', 'Spring Boot', 'Thymeleaf', 'JPA', 'MySQL', 'Docker'],
    highlight: 'A full stack built around a modular, service-oriented architecture.',
    repoUrl: 'https://github.com/Laureano11/2025-tpa-mi-no-grupo-10',
    specialTags: ['UTN-FRBA', 'Team project'],
  },
  {
    name: 'pyFINVIZ',
    status: 'CLI analytics',
    summary:
      'A technical analysis and backtesting tool for equities that calculates indicators, runs strategies and scans opportunities in batch.',
    stack: ['Python', 'pandas', 'yfinance', 'plotly', 'dash', 'schedule'],
    highlight: 'A data-heavy console workflow designed for fast iteration.',
    repoUrl: 'https://github.com/Laureano11/pyFINVIZ',
  },
  {
    name: 'Temporary Number Scraper',
    status: 'Scraping tool',
    summary:
      'A multithreaded Python scraper that collects temporary phone numbers and inspects messages from a public site.',
    stack: ['Python', 'Requests', 'Beautiful Soup 4', 'lxml', 'threading'],
    highlight: 'Optimized for concurrent inspection and quick analysis.',
    repoUrl: 'https://github.com/Laureano11/temporary-number-scraper',
  },
  {
    name: 'TP-SO T.U.K.I.',
    status: 'Distributed systems',
    summary:
      'A systems programming exercise that simulates an operating system with console, kernel, CPU, memory and filesystem modules.',
    stack: ['C', 'GCC', 'GNU Make', 'pthread', 'Sockets', 'Bash'],
    highlight: 'Low-level coordination across multiple Linux processes.',
    repoUrl: 'https://github.com/Laureano11/TP-SO',
    specialTags: ['UTN-FRBA', 'Team project'],
  },
  {
    name: 'Sistema de Gestión de Turnos',
    status: 'Django app',
    summary:
      'A court-booking platform for padel clubs with admin workflows, payments, configurable preferences and server-rendered UI.',
    stack: ['Django 5', 'PostgreSQL', 'Tailwind CSS', 'HTMX', 'Python'],
    highlight: 'A practical web app built for real operational flow.',
    repoUrl: 'https://github.com/Laureano11/proyect-holanda',
  },
  {
    name: 'Calculator MEP',
    status: 'Market utility',
    summary:
      'A small Python script that compares the MEP dollar against the blue rate and estimates the spread from public data.',
    stack: ['Python', 'Requests', 'Beautiful Soup 4'],
    highlight: 'Simple, focused and useful for quick financial checks.',
    repoUrl: 'https://github.com/Laureano11/dolar_mep_calculator',
  },
];

export const architectureGroups: Group[] = [
  {
    title: 'Architecture families',
    items: [
      'Static content sites with CMS-managed pages',
      'Server-rendered CRUD apps with auth and sessions',
      'Console-based analytics and backtesting tools',
      'Scraping pipelines with concurrent workers',
      'Distributed systems with separate runtime modules',
      'Modular service-oriented and proxy-based platforms',
    ],
  },
  {
    title: 'Delivery patterns',
    items: [
      'Astro static builds deployed as plain assets',
      'FastAPI and Django apps for quick iteration',
      'Dockerized Java services and multi-module stacks',
      'SQLite-backed local-first development flows',
      'Batch processing for multiple symbols or tickers',
      'Multi-terminal Linux workflows for systems labs',
    ],
  },
];

export const techGroups: TechGroup[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Python', logo: 'python.svg' },
      { name: 'Java', logo: 'java.svg' },
      { name: 'C', logo: 'c.svg' },
      { name: 'TypeScript', logo: 'typescript.svg' },
      { name: 'HTML', logo: 'html5.svg' },
      { name: 'CSS', logo: 'css3.svg' },
      { name: 'SQL' },
      { name: 'Bash', logo: 'bash.svg' },
    ],
  },
  {
    title: 'Frameworks and libraries',
    items: [
      { name: 'Astro', logo: 'astro.svg' },
      { name: 'React', logo: 'react.svg' },
      { name: 'Next.js', logo: 'nextjs.svg' },
      { name: 'Tailwind CSS', logo: 'tailwindcss.svg' },
      { name: 'HTMX', logo: 'htmx.svg' },
      { name: 'Jinja2' },
      { name: 'Thymeleaf', logo: 'thymeleaf.svg' },
      { name: 'FastAPI', logo: 'fastapi.svg' },
      { name: 'Django', logo: 'django.svg' },
      { name: 'Spring Boot', logo: 'spring.svg' },
      { name: 'Spring MVC' },
      { name: 'Spring WebFlux' },
      { name: 'Spring Security' },
      { name: 'Hibernate', logo: 'hibernate.svg' },
      { name: 'JPA' },
      { name: 'SQLModel' },
      { name: 'REST APIs' },
      { name: 'JWT' },
      { name: 'Sessions' },
      { name: 'pandas', logo: 'pandas.svg' },
      { name: 'numpy', logo: 'numpy.svg' },
      { name: 'scipy' },
      { name: 'statsmodels' },
      { name: 'plotly', logo: 'plotly.svg' },
      { name: 'dash' },
      { name: 'yfinance' },
      { name: 'pandas-ta' },
      { name: 'Beautiful Soup 4' },
      { name: 'lxml' },
    ],
  },
  {
    title: 'Systems, data and tooling',
    items: [
      { name: 'SQLite', logo: 'sqlite.svg' },
      { name: 'PostgreSQL', logo: 'postgresql.svg' },
      { name: 'MySQL', logo: 'mysql.svg' },
      { name: 'SQL Server', logo: 'microsoftsqlserver.svg' },
      { name: 'Nginx', logo: 'nginx.svg' },
      { name: 'Linux', logo: 'linux.svg' },
      { name: 'Mac OS', logo: 'apple.svg' },
      { name: 'Windows', logo: 'windows11.svg' },
      { name: 'Git', logo: 'git.svg' },
    ],
  },
];

export const finance: FinanceItem[] = [
  {
    label: 'Instruments',
    detail: 'Equities (stocks), fixed income (bonds), derivatives (options, futures)',
  },
  { label: 'Market analysis', detail: 'Fundamental analysis, technical analysis, chart patterns' },
  {
    label: 'Trading & ops',
    detail: 'Options trading (ROFEX), implied volatility (IV), Greeks (Delta, Gamma, Vega, Theta)',
  },
  {
    label: 'Argentinian bonds',
    detail: 'Valuation, duration, IRR, spreads, sovereign risk analysis',
  },
  {
    label: 'Tools',
    detail: 'Finviz, TradingView, Python for quantitative analysis (pandas, numpy, plotly)',
  },
  { label: 'Experience', detail: '18+ months trading options and continuous market analysis' },
];
