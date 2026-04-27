'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navItems = [
  { name: 'Hjem', href: '/' },
  { name: 'Om meg', href: '/om-meg' },
  { name: 'Prosjekter', href: '/prosjekter' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Only animate on first mount
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 100);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex justify-center items-center px-6 pt-6">
          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-1 px-2 py-2 rounded-full border backdrop-blur-md transition-all duration-300"
            style={{
              backgroundColor: scrolled ? 'var(--card-bg)' : 'rgba(255, 255, 255, 0.1)',
              borderColor: 'var(--border)',
              boxShadow: scrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
            }}
            animate={{
              scale: scrolled ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    className="relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                    style={{
                      color: active ? 'var(--btn-primary-text)' : 'var(--foreground)',
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {active && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{ backgroundColor: 'var(--primary)' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ 
                          duration: 0.2,
                          ease: "easeOut"
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Hamburger Menu - Bottom Center */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 md:hidden"
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-4 rounded-full border backdrop-blur-md shadow-lg"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: 'var(--border)',
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle menu"
        >
          <motion.div
            className="w-6 h-6 flex flex-col justify-center items-center"
            animate={isMenuOpen ? "open" : "closed"}
          >
            <motion.span
              className="w-5 h-0.5 block"
              style={{ backgroundColor: 'var(--foreground)' }}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: 45, y: 6 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-0.5 block mt-1"
              style={{ backgroundColor: 'var(--foreground)' }}
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 }
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="w-5 h-0.5 block mt-1"
              style={{ backgroundColor: 'var(--foreground)' }}
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 }
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Popup - Above Hamburger */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed bottom-24 left-1/2 transform -translate-x-1/2 z-50 md:hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div
              className="flex gap-2 p-2 rounded-full border backdrop-blur-md shadow-xl"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border)',
              }}
            >
              {navItems.map((item, index) => {
                const active = isActive(item.href);
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 whitespace-nowrap"
                      style={{
                        backgroundColor: active ? 'var(--primary)' : 'transparent',
                        color: active ? 'var(--btn-primary-text)' : 'var(--foreground)',
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}