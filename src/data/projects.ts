export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  url: string;
  tags: string[];
  heroImage: string;
  images: string[];
  features: string[];
  technologies: {
    frontend: string[];
    backend: string[];
    other: string[];
  };
  year: string;
  role: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'zeipt',
    title: 'Zeipt',
    subtitle: 'Home of the smart receipt',
    description: 'Smart kvitteringsløsning som kobler banker, regnskapssystemer og lojalitetsprogrammer i ett samlet økosystem.',
    longDescription: 'Zeipt er en innovativ kvitteringsløsning som revolusjonerer måten vi håndterer digitale kvitteringer på. Plattformen kobler sømløst sammen banker, regnskapssystemer og lojalitetsprogrammer i ett samlet økosystem, og leverer automatisk detaljerte kvitteringer direkte til bankapper. Med Zeipt får både forbrukere og bedrifter full oversikt og kontroll over alle transaksjoner.',
    url: 'https://zeipt.com',
    tags: ['Next.js', 'Tailwind', 'TypeScript'],
    heroImage: '/zeipt_hero.png',
    images: [
      '/zeipt_hero.png',
      '/zeipt_dashboard.png',
      '/zeipt_receipt.png',
      '/zeipt_trusted.png',
    ],
    features: [
      'Automatisk kvitteringslevering til bankapper',
      'Integrasjon med regnskapssystemer',
      'Lojalitetsprogrammer og belønninger',
      'Detaljert produktinformasjon',
      'Miljøvennlig og papirløs løsning',
      'Sikker databehandling',
    ],
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      backend: ['Node.js', 'PostgreSQL', 'REST API'],
      other: ['Vercel', 'Git', 'Figma'],
    },
    year: '2023-2024',
    role: 'Fullstack Developer & UI/UX Designer',
  },
  {
    slug: 'zeipt-dashboard',
    title: 'Zeipt Dashboard',
    subtitle: 'Receipt Management System',
    description: 'Komplett dashboard for administrasjon og håndtering av digitale kvitteringer.',
    longDescription: 'Zeipt Dashboard er et kraftig administrasjonsverktøy som gir brukere full kontroll over sine digitale kvitteringer. Med avanserte filtreringsmuligheter, søkefunksjonalitet og detaljert statistikk, gjør dashboardet det enkelt å holde oversikt over alle transaksjoner. Systemet er bygget med fokus på ytelse og brukervennlighet.',
    url: '#',
    tags: ['React', 'TanStack Query', 'Tailwind'],
    heroImage: '/zeipt_dashboard.png',
    images: [
      '/zeipt_dashboard.png',
      '/zeipt_receipt.png',
    ],
    features: [
      'Oversikt over alle kvitteringer',
      'Avansert søk og filtrering',
      'Statistikk og rapporter',
      'Eksport til regnskapssystemer',
      'Kategorisering av utgifter',
      'Responsive design',
    ],
    technologies: {
      frontend: ['React', 'TanStack Query', 'Tailwind CSS', 'TypeScript'],
      backend: ['REST API', 'WebSocket'],
      other: ['Vite', 'ESLint', 'Prettier'],
    },
    year: '2024',
    role: 'Frontend Developer',
  },
  {
    slug: 'zeipt-receipt-view',
    title: 'Zeipt Receipt View',
    subtitle: 'Smart Receipt Viewer',
    description: 'Moderne kvitteringsvisning med detaljert informasjon og interaktiv design.',
    longDescription: 'Zeipt Receipt View er en elegant og brukervennlig løsning for visning av digitale kvitteringer. Med et moderne design og interaktive elementer, presenteres all relevant informasjon på en oversiktlig måte. Løsningen støtter både desktop og mobil, og gir brukerne en sømløs opplevelse uansett enhet.',
    url: 'https://view.zeipt.dev/users/019c052d-9486-8010-b4e7-66a5ce937580/receipts/019c052d-9486-8007-95a0-8496592d4928?email=sebastian%40zeipt.com',
    tags: ['Next.js', 'SCSS', 'TanStack Query'],
    heroImage: '/zeipt_receipt.png',
    images: [
      '/zeipt_receipt.png',
      '/zeipt_dashboard.png',
    ],
    features: [
      'Detaljert produktvisning',
      'Interaktiv design',
      'Responsive layout',
      'Rask lasting',
      'Delbar link',
      'Print-vennlig',
    ],
    technologies: {
      frontend: ['Next.js', 'SCSS', 'TanStack Query', 'TypeScript'],
      backend: ['Next.js API Routes'],
      other: ['Vercel', 'PostCSS'],
    },
    year: '2024',
    role: 'Frontend Developer & Designer',
  },
  {
    slug: 'ihlenslk',
    title: 'Ihlen Sosiale Løpeklubb',
    subtitle: 'Din lokale løpeklubb i Indre Østfold',
    description: 'Lavterskel løpeklubb med fokus på løpeglede, fellesskap og kaffe etterpå.',
    longDescription: 'Ihlen Sosiale Løpeklubb er en inkluderende løpeklubb som samler løpere av alle nivåer i Indre Østfold. Med fokus på fellesskap, løpeglede og sosiale sammenkomster, tilbyr klubben ukentlige løpeturer etterfulgt av kaffe og hygge. Nettstedet gir medlemmer og interesserte full oversikt over aktiviteter, arrangementer og klubbinformasjon.',
    url: 'https://ihlenslk.no',
    tags: ['Next.js', 'Neon', 'Tailwind'],
    heroImage: '/ihlenslk_hero.png',
    images: [
      '/ihlenslk_hero.png',
      '/ihlenslk_klubb.png',
      '/ihlenslk_blogg.png',
    ],
    features: [
      'Aktivitetskalender',
      'Medlemsregistrering',
      'Blogg og nyheter',
      'Bildegalleri',
      'Kontaktskjema',
      'Responsive design',
    ],
    technologies: {
      frontend: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      backend: ['Neon PostgreSQL', 'Prisma', 'Next.js API'],
      other: ['Vercel', 'Git'],
    },
    year: '2024',
    role: 'Fullstack Developer & Designer',
    githubUrl: 'https://github.com/StianOek/islk-nextjs-app',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter(project => 
    project.slug === 'zeipt' || project.slug === 'ihlenslk'
  );
}
