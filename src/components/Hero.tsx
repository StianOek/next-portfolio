'use client';

import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, heroStaggerContainer } from '@/utils/animations';

export default function Hero() {
  return (
    <section 
      id="hero"
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          <motion.span 
            style={{ color: 'var(--foreground)', display: 'inline-block' }}
          >
            Stian
          </motion.span>
          {' '}
          <motion.span 
            style={{ color: 'var(--primary)', display: 'inline-block' }}
          >
            Ihler
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-32 text-muted"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 1.0,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          Utvikler med hjerte for faget
        </motion.p>
        
        <motion.div 
          className="flex justify-center absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 1.6
          }}
        >
          <motion.svg
            className="w-6 h-6"
            style={{ color: 'var(--icon-muted)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.8
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </motion.svg>
        </motion.div>
      </div>
    </section>
  );
}
