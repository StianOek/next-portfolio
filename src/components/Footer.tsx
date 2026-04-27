'use client';

import { motion } from 'framer-motion';
import Icon from './Icon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-6">
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
              whileHover={{ 
                color: 'var(--primary)',
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="linkedin" size={18} />
              <span>LinkedIn</span>
            </motion.a>
            <motion.a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-colors flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
              whileHover={{ 
                color: 'var(--primary)',
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="github" size={18} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="mailto:stian.oek@gmail.com"
              className="text-sm transition-colors flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
              whileHover={{ 
                color: 'var(--primary)',
                y: -2
              }}
              transition={{ duration: 0.2 }}
            >
              <Icon name="email" size={18} />
              <span>E-post</span>
            </motion.a>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Designet og bygget av Stian Ihler. {currentYear} - Alle rettigheter reservert.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
