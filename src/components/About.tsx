'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            Fullstack & UI/UX
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tekst kolonne */}
          <motion.div 
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <motion.p 
              className="text-lg leading-relaxed text-muted"
              variants={staggerItem}
            >
              Jeg er en <span className="text-foreground font-semibold">fullstack-utvikler</span> med 
              ekspertise innen <span className="text-foreground font-semibold">frontend-utvikling</span>. 
              Jeg digger å skape intuitive brukeropplevelser og har solid erfaring med{' '}
              <span className="text-foreground font-semibold">UI/UX-design</span>.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-muted"
              variants={staggerItem}
            >
              Jeg har bygget skalerbare, sikre og pålitelige webapplikasjoner 
              med forskjellige moderne rammeverk og teknologier. På backend
              har jeg det gøy med <span className="text-foreground font-semibold">Node.js</span>-utvikling, 
              spesielt når jeg skal implementere autentisering, bygge API-er, eller lage 
              bloggfunksjonalitet.
            </motion.p>

            <motion.p 
              className="text-lg leading-relaxed text-muted"
              variants={staggerItem}
            >
              Jeg liker å løse komplekse problemer og lære nye teknologier. Jeg ser alltid etter 
              nye utfordringer og muligheter til å vokse som utvikler, enten det er å mestre 
              nye frontend-rammeverk eller dykke dypere inn i backend-arkitektur.
            </motion.p>
          </motion.div>

          {/* Bilde kolonne - placeholder for fremtidig bilde */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl flex items-center justify-center border border-default">
              <div className="text-center text-muted">
                <div className="text-6xl mb-4">👨‍💻</div>
                <p className="text-sm">Bilde kommer snart</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
