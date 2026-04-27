'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-6 bg-page pb-32 md:pb-20">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
       
        <motion.p 
          className="mb-4 text-muted"
          variants={staggerItem}
        >
         Send meg en melding
        </motion.p>
        <motion.div 
          className="flex items-center justify-center gap-2 mb-12 text-muted"
          variants={staggerItem}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>Indre østfold</span>
        </motion.div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem}>
            <label htmlFor="name" className="sr-only">
             Navn
            </label>
            <motion.input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 card border border-default rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              whileFocus={{ 
                scale: 1.02,
                borderColor: 'var(--primary)'
              }}
            />
          </motion.div>
          <motion.div variants={staggerItem}>
            <label htmlFor="email" className="sr-only">
              Epost
            </label>
            <motion.input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 card border border-default rounded-xl placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
              style={{
                borderColor: 'var(--border)',
                color: 'var(--foreground)'
              }}
              whileFocus={{ 
                scale: 1.02,
                borderColor: 'var(--primary)'
              }}
            />
          </motion.div>
          <motion.button
            type="submit"
            className="btn-primary w-full px-6 py-4 font-medium rounded-xl transition-all duration-300 cursor-pointer"
            variants={staggerItem}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Melding
          </motion.button>
        </motion.form>

        <motion.div 
          className="mt-12 flex justify-center gap-6"
          variants={staggerContainer}
        >
          {[
            { label: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
            { label: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
            { label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href="#"
              className="transition-colors"
              style={{ color: 'var(--icon-secondary)' }}
              aria-label={social.label}
              variants={staggerItem}
              whileHover={{ 
                scale: 1.2,
                color: 'var(--primary)'
              }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path} />
              </svg>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
