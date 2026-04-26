'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    setTheme(initialTheme);
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  if (!mounted) return null;

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden border-2 shadow-lg cursor-pointer"
      style={{
        backgroundColor: 'var(--card-bg)',
        borderColor: 'var(--border)',
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 2, -2, 0]
      }}
      transition={{
        scale: {
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        },
        rotate: {
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 4.4,
          ease: "easeInOut"
        }
      }}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <AnimatePresence mode="wait">
        {theme === 'light' ? (
          <motion.div
            key="awake"
            className="w-full h-full relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <Image
              src="/me_awake.svg"
              alt="Switch to dark mode"
              width={64}
              height={64}
              quality={100}
              priority
              unoptimized
              className="w-full h-full object-cover object-center"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'contrast(1.1) saturate(1.1)'
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="asleep"
            className="w-full h-full relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.22, 1, 0.36, 1] 
            }}
          >
            <Image
              src="/me_asleep.svg"
              alt="Switch to light mode"
              width={64}
              height={64}
              quality={100}
              priority
              unoptimized
              className="w-full h-full object-cover object-center"
              style={{ 
                imageRendering: 'pixelated',
                filter: 'contrast(1.1) saturate(1.1)'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}