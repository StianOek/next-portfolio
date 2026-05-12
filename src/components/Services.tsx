'use client';

import { motion } from 'framer-motion';

const focusAreas = [
  {
    name: 'Ytelser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    description: 'Raske og effektive løsninger'
  },
  {
    name: 'Responsivt design',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    description: 'Fungerer på alle enheter'
  },
  {
    name: 'SEO',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    description: 'Optimalisert for søkemotorer'
  },
  {
    name: 'Universell utforming',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    description: 'Tilgjengelig for alle'
  },
  {
    name: 'Brukeropplevelser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    description: 'Intuitive grensesnitt'
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        {/* Intro Text */}
        <motion.div
          className="mb-16 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-base md:text-lg leading-relaxed text-muted">
            Kontinuerlig læring og bratt læringskurve er noe jeg syntes passer godt til faget jeg jobber med. Jeg liker både{' '}
            <span className="text-foreground font-medium">frontend</span> og{' '}
            <span className="text-foreground font-medium">backend</span>, -{' '}
            <i>her er det virkelig et hav av teknologier og velge mellom.</i> Dette er direkte kult, syntes jeg!
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted">
            Jeg spesialiserer meg innen frontend fordi jeg liker å jobbe med direkte visuelle endringer på web og mobilapplikasjoner, samtidig som jeg får brukt den kreative siden min gjennom design og CSS.
          </p>
        </motion.div>

        {/* Focus Areas Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="border-b border-default py-2 mb-4">
            <p className="text-base md:text-lg leading-relaxed text-muted">
              Når jeg bygger frontend applikasjoner så er det særlig disse temaene som jeg fokuserer på:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center text-center p-6 rounded-xl border border-default transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'var(--card)' }}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}
                >
                  {area.icon}
                </div>
                <h4 className="font-medium mb-2 text-sm md:text-base">
                  {area.name}
                </h4>
                <p className="text-xs md:text-sm text-muted">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
