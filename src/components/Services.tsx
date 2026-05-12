'use client';

import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

const services = [
  {
    title: 'Frontend utvikling',
    items: [
      'Responsivt design',
      'SEO',
      'Tilgjengelighet',
      'Brukeropplevelse - UX'
    ]
  }
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            Hva jeg gjør
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card rounded-2xl p-8 border border-default"
              style={{ borderColor: 'var(--border)' }}
            >
              <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--primary)' }}>
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--primary)' }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
