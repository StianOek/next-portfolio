'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

export default function About() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            Fullstack Utvikler
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div 
          className="space-y-6 text-lg leading-relaxed"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <motion.p 
            className="text-muted"
            variants={staggerItem}
          >
            Jeg er en <span className="text-foreground font-semibold">frontend-utvikler</span> med 
            ekspertise innen <span className="text-foreground font-semibold">UI/UX</span>. 
            Jeg har erfaring med å bygge skalerbare, sikre og pålitelige webapplikasjoner 
            med forskjellige rammeverk og teknologier.
          </motion.p>

          <motion.p 
            className="text-muted"
            variants={staggerItem}
          >
            Jeg liker å løse problemer og lære nye ting. Jeg ser alltid etter nye utfordringer 
            og muligheter til å vokse som utvikler.
          </motion.p>

          <motion.p 
            className="text-muted"
            variants={staggerItem}
          >
            I tillegg til frontend, liker jeg også å bygge ting med{' '}
            <span className="text-foreground font-semibold">Node.js</span>, slik at jeg kan 
            levere komplette løsninger med både frontend og backend.
          </motion.p>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
            variants={staggerContainer}
          >
            {[
              { label: 'Frontend', icon: '⚛️' },
              { label: 'UI/UX', icon: '🎨' },
              { label: 'Backend', icon: '⚙️' },
              { label: 'Problem Solving', icon: '🧩' }
            ].map((skill, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: 'var(--primary)',
                  transition: { duration: 0.2 }
                }}
                className="card border border-default rounded-xl p-4 text-center transition-all"
                style={{ borderColor: 'var(--border)' }}
              >
                <div className="text-3xl mb-2">{skill.icon}</div>
                <p className="text-sm font-medium">{skill.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
