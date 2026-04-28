'use client';

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';

export default function OmMegPage() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);

  useEffect(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setTheme(isDark ? 'dark' : 'light');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const profileImage = theme === 'dark' ? '/me_asleep.svg' : '/me_awake.svg';

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Main Heading */}
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Jeg er{' '}
                <span style={{ color: 'var(--primary)' }}>
                  Stian Ihler
                </span>
                . Jeg bor i Østfold, hvor jeg designer fremtiden.
              </motion.h1>

              {/* Description */}
              <motion.div
                className="space-y-4 text-base leading-relaxed max-w-lg"
                style={{ color: 'var(--muted)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  Jeg har jobbet med en rekke prosjekter gjennom årene og er stolt av fremgangen jeg har gjort. 
                  Mange av disse prosjektene er gjort for Zeipt AS, en bedrift som har bidratt til min karriære og som jeg er stolt av. Jeg jobber også som freelance for små bedrifter ved siden av.
                </p>
                <p>
                  Hvis du er interessert i noen av prosjektene jeg har jobbet med, kan du gjerne sjekke ut koden 
                  og foreslå eventuelle forbedringer eller endringer som kan være nyttige. Det er kult!
                </p>
                <p>
                  Samarbeid med andre er en fin måte å lære og vokse på, og jeg er alltid åpen for nye ideer og tilbakemeldinger.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative lg:ml-8"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative w-full max-w-md mx-auto lg:max-w-none space-y-6">
                {/* Image Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  {theme && (
                    <Image
                      key={theme}
                      src={profileImage}
                      alt="Stian Ihler"
                      fill
                      className="object-cover"
                      quality={100}
                      priority
                    />
                  )}
                </div>
                
                {/* Social Links - Below Image */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <SocialLink 
                    icon="linkedin" 
                    text="Follow on LinkedIn"
                    href="https://linkedin.com/in/your-profile" 
                  />
                  <SocialLink 
                    icon="github" 
                    text="Follow on GitHub"
                    href="https://github.com/your-username" 
                  />
                  <SocialLink 
                    icon="email" 
                    text="stian.oek@gmail.com"
                    href="mailto:stian.oek@gmail.com" 
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Social Link Component (below image)
function SocialLink({ icon, text, href }: { icon: 'linkedin' | 'github' | 'email'; text: string; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm transition-colors duration-200"
      style={{ color: 'var(--muted)' }}
      whileHover={{ 
        color: 'var(--foreground)',
        x: 5
      }}
      transition={{ duration: 0.2 }}
    >
      <Icon name={icon} size={18} />
      <span>{text}</span>
    </motion.a>
  );
}
