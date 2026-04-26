'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverScale, tapScale, viewportOptions } from '@/utils/animations';

const projects = [
  {
    title: 'Zeipt',
    subtitle: 'Home of the smart receipt',
    description: 'Smart kvitteringsløsning som kobler banker, regnskapssystemer og lojalitetsprogrammer i ett samlet økosystem. Automatisk levering av detaljerte kvitteringer direkte til bankapper.',
    url: 'https://zeipt.com',
    tags: ['Next.js', 'Tailwind'],
    image: '/zeipt_hero.png',
  },
  {
    title: 'Zeipt Dashboard',
    subtitle: 'Receipt Management System',
    description: 'Komplett dashboard for administrasjon og håndtering av digitale kvitteringer. Gir brukere full oversikt og kontroll over alle sine kvitteringer på ett sted.',
    url: '#',
    tags: ['React', 'TanStack Query', 'Tailwind'],
    image: '/zeipt_dashboard.png',
  },
  {
    title: 'Zeipt Receipt View',
    subtitle: 'Smart Receipt Viewer',
    description: 'Moderne kvitteringsvisning med detaljert informasjon og interaktiv design. Viser alle produkter, priser og betalingsinformasjon på en oversiktlig måte.',
    url: 'https://view.zeipt.dev/users/019c052d-9486-8010-b4e7-66a5ce937580/receipts/019c052d-9486-8007-95a0-8496592d4928?email=sebastian%40zeipt.com',
    tags: ['Next.js', 'SCSS', 'TanStack Query'],
    image: '/zeipt_receipt.png',
  },
  {
    title: 'Ihlen Sosiale Løpeklubb',
    subtitle: 'Din lokale løpeklubb i Indre Østfold',
    description: 'Lavterskel løpeklubb med fokus på løpeglede, fellesskap og kaffe etterpå. Vi samles hver uke for en fin løpetur hvor alle nivåer er velkomne.',
    url: 'https://ihlenslk.no',
    tags: ['Next.js', 'Neon', 'Tailwind'],
    image: '/ihlenslk_hero.png',
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            Prosjekter
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={hoverScale}
              whileTap={tapScale}
              className="card rounded-2xl overflow-hidden border border-default transition-all duration-300 hover:shadow-lg group"
              style={{ borderColor: 'var(--border)' }}
            >
              <div 
                className="relative h-64 flex flex-col items-center justify-center overflow-hidden"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {project.subtitle}
                  </p>
                </div>
                <p className="mb-4 text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--foreground)'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-medium inline-block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Besøk nettside
                  </motion.a>
                  <motion.button 
                    className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Les mer
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
