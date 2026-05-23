'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CVPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">CV</h1>
            <p className="text-lg" style={{ color: 'var(--muted)' }}>
              Min erfaring, utdanning og teknologier
            </p>
          </motion.div>

          {/* Arbeidserfaring */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <span className="text-2xl">💼</span>
              Arbeidserfaring
            </h2>

            <div className="space-y-8">
              {/* Ihlen SLK */}
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}>
                    2025 - 2026
                  </span>
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                    Freelance
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Ihlen SLK - www.ihlenslk.no</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                  NEXT.JS, TYPESCRIPT, TAILWIND, POSTGRESQL, NEON
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tok eierskap til hele utviklingsløpet fra idé til ferdig produkt, inkludert arkitekturvalg, implementasjon og drift</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Gjennomførte reverse engineering av Strava-integrasjon, muliggjorde offentlig tilgjengelig statistikk uten krav til innlogging</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Etablert og vedlikeholdt av CI/CD pipeline og automatisert test, bygg og deploy.</span>
                  </li>
                </ul>
              </div>

              {/* Zeipt promo v2 */}
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}>
                    2024 - 2026
                  </span>
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                    Zeipt
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Zeipt promo v2 - www.zeipt.com</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                  NEXT.JS, TYPESCRIPT, TAILWIND, MAPBOX
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Ledet prosjektet fra stat til slutt</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tverfaglig samarbeid med UX-designere og utviklingsteam for å sikre helhetlige og brukervennlig løsninger</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Tok eierskap til kontinuerlig forbedring av brukeropplevelse basert på innsikt og tilbakemeldinger</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Sørget for at web applikasjonen er SEO optimalisert</span>
                  </li>
                </ul>
              </div>

              {/* Receipt management system */}
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}>
                    2022 - 2026
                  </span>
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                    Zeipt
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Receipt management system</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                  REACT, TYPESCRIPT, TANSTACK QUERY, TAILWIND, MAPBOX, ZUSTAND, VITEST
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Arkitekterte og utviklet en skalerbar Receipt-as-a-Service (SaaS)-plattform fra grunnen av</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Ledet frontend-teamet gjennom utvikling, forvaltning og vedlikehold, og sikret høy kvalitet og konsistent leveranse</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Samarbeidet tett med backend utviklere og ux designere</span>
                  </li>
                </ul>
              </div>

              {/* Receipt view - Embedded */}
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}>
                    2021 - 2023
                  </span>
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                    Zeipt
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Receipt view - Embedded</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                  NEXT.JS, TYPESCRIPT, SCSS
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Samarbeidet tett med utvikler teamet slik at vi kunne effektivisere løsninger og sikre kodekvalitet</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Jobbet i praksis mye med parprogrammering for å fremme forbedring og kunnskap.</span>
                  </li>
                </ul>
              </div>

              {/* Retro spill marketsplass */}
              <div className="relative pl-8 border-l-2" style={{ borderColor: 'var(--border)' }}>
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full" style={{ backgroundColor: 'var(--primary)' }}></div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--muted)' }}>
                    2022 - 2023
                  </span>
                  <span className="text-sm font-semibold px-2 py-1 rounded" style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                    Skoleprosjekt
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Retro spill marketsplass - kryssplattform app</h3>
                <p className="text-sm mb-3" style={{ color: 'var(--muted)' }}>
                  VUE, TYPESCRIPT, IONIC, CAPACITOR, DIRECTUS, GRAPHQL
                </p>
                <ul className="space-y-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Designet og utviklet løsningen fra start til slutt</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Autentisering og brukerflyt (innlogging, utlogging, profil etc.)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Bruk av Geolokasjon og google maps for å vise og registrere lokasjoner</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Utdanning og Teknologier */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Utdanning */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                Utdanning
              </h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border" style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border)'
                }}>
                  <h4 className="font-semibold mb-1">Bachelor, Informasjonsteknologi</h4>
                  <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
                    Frontend og mobil utvikling
                  </p>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Høyskolen Kristiania - 2020-2023
                  </p>
                </div>

                <div className="p-4 rounded-lg border" style={{ 
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border)'
                }}>
                  <h4 className="font-semibold mb-1">Selvlært & Praksis</h4>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>
                    Mye av det jeg kan har jeg lært gjennom egne prosjekter, dokumentasjon og 
                    praktisk erfaring. Jeg tror på å lære ved å gjøre.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Teknologier */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <span className="text-2xl">🛠️</span>
                Teknologier
              </h2>
              
              {/* Frontend */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  Frontend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vue', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Figma', 'Ionic'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  Backend
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Directus', 'REST API', 'Prisma'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Verktøy */}
              <div>
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
                  Verktøy & Annet
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'VS Code', 'Vercel', 'Docker', 'Capacitor' , 'Kryss-platform'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                        borderColor: 'var(--border)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
