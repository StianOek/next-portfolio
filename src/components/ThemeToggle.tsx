'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Get initial theme
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
    if (!theme) return;
    
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Don't render until theme is loaded
  if (!theme) {
    return (
      <div
        className="fixed top-6 right-6 z-50 w-16 h-16 rounded-full border-2"
        style={{
          backgroundColor: 'var(--card-bg)',
          borderColor: 'var(--border)',
        }}
      />
    );
  }

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
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      <div className="w-full h-full relative">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <Image
              src={theme === 'light' ? '/me_awake.svg' : '/me_asleep.svg'}
              alt={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
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
        </AnimatePresence>
      </div>
    </motion.button>
  );
}
