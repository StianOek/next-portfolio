'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import { CONTACT } from '@/constants/contact';

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
                  <Image
                    src="/me_original.png"
                    alt="Stian Ihler"
                    fill
                    className="object-cover"
                    quality={100}
                    priority
                  />
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
                    text="Følg på LinkedIn"
                    href={CONTACT.linkedin} 
                  />
                  <SocialLink 
                    icon="github" 
                    text="Følg på GitHub"
                    href={CONTACT.github} 
                  />
                  <SocialLink 
                    icon="email" 
                    text={CONTACT.email}
                    href={`mailto:${CONTACT.email}`} 
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hockey Section - Polaroid Style */}
        <div className="max-w-5xl mx-auto px-6 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left - Polaroid Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Polaroid Frame */}
              <div className="relative max-w-md mx-auto">
                <motion.div
                  className="relative bg-white p-4 pb-16 shadow-2xl"
                  style={{
                    transform: 'rotate(-2deg)',
                  }}
                  whileHover={{
                    transform: 'rotate(0deg) scale(1.02)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src="/me_hockey.png"
                      alt="Stian spiller hockey"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                  
                  {/* Polaroid Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-gray-700 font-handwriting text-lg" style={{ fontFamily: 'cursive' }}>
                      På isen 🏒
                    </p>
                  </div>
                </motion.div>

                {/* Tape effect on top */}
                <div 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-yellow-100 opacity-60"
                  style={{
                    transform: 'translateX(-50%) rotate(-1deg)',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              className="space-y-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Livet utenfor koden
              </motion.h2>

              <motion.div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  Når jeg ikke sitter og gjør underverk med design og utvikling, er jeg å finne på en isbane 
                  hvor jeg spiller <span className="text-foreground font-semibold">løkkehockey</span> av eller på isen.
                </p>
              </motion.div>

              {/* Second Polaroid Image */}
              <motion.div
                className="relative mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="relative max-w-sm mx-auto lg:mx-0">
                  <motion.div
                    className="relative bg-white p-4 pb-16 shadow-2xl"
                    style={{
                      transform: 'rotate(1.5deg)',
                    }}
                    whileHover={{
                      transform: 'rotate(0deg) scale(1.02)',
                      transition: { duration: 0.3 }
                    }}
                  >
                    {/* Image */}
                    <div className="relative aspect-square bg-gray-100 overflow-hidden">
                      <Image
                        src="/me_hockey_2.png"
                        alt="Hockey action"
                        fill
                        className="object-cover"
                        quality={100}
                      />
                    </div>
                    
                    {/* Polaroid Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-gray-700 font-handwriting text-lg" style={{ fontFamily: 'cursive' }}>
                        Hygge ved bålet
                      </p>
                    </div>
                  </motion.div>

                  {/* Tape effect on corner */}
                  <div 
                    className="absolute -top-2 right-8 w-20 h-6 bg-yellow-100 opacity-60"
                    style={{
                      transform: 'rotate(45deg)',
                      boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                    }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Running Section - Polaroid Style */}
        <div className="max-w-5xl mx-auto px-6 mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                Mandagsløp med familien
              </motion.h2>

              <motion.div
                className="space-y-4 text-base leading-relaxed"
                style={{ color: 'var(--muted)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  Hver mandag jogger jeg <span className="text-foreground font-semibold">4 km</span> med 
                  min lokale løpeklubb. Jeg synes det er gøy og fint å ta med barna på dette. 
                  Det er en fin måte å starte uken på, og det holder meg i form.
                </p>
               
              </motion.div>
            </motion.div>

            {/* Right - Polaroid Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Polaroid Frame */}
              <div className="relative max-w-md mx-auto">
                <motion.div
                  className="relative bg-white p-4 pb-16 shadow-2xl"
                  style={{
                    transform: 'rotate(2deg)',
                  }}
                  whileHover={{
                    transform: 'rotate(0deg) scale(1.02)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Image */}
                  <div className="relative aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src="/me_running.png"
                      alt="Fredrikstad Løpe 5km"
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>
                  
                  {/* Polaroid Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-center">
                    <p className="text-gray-700 font-handwriting text-lg" style={{ fontFamily: 'cursive' }}>
                      Fredrikstad Løpe 5km 🏃
                    </p>
                  </div>
                </motion.div>

                {/* Tape effect on side */}
                <div 
                  className="absolute top-1/2 -right-2 w-6 h-20 bg-yellow-100 opacity-60"
                  style={{
                    transform: 'translateY(-50%) rotate(2deg)',
                    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)',
                  }}
                />
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
