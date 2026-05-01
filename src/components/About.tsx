'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

export default function About() {
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

  const codingImage = theme === 'dark' ? '/me_coding_tierd.svg' : '/me_coding.svg';

  const scrollToUIUX = () => {
    const uiuxSection = document.getElementById('uiux');
    if (uiuxSection) {
      uiuxSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Fullstack Section */}
      <section id="about" className="py-20 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-left">
              Fullstack
            </h2>
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Tekst kolonne */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                Jeg er <span className="text-foreground font-semibold">fullstack-utvikler</span>, som betyr 
                at jeg jobber med hele spekteret av en webapplikasjon – både det brukeren ser og interagerer 
                med (frontend), og det som skjer bak kulissene (backend).
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                På <span className="text-foreground font-semibold">frontend</span> har jeg spesialisert meg i 
                å lage intuitive og brukervennlige grensesnitt, med fokus på god brukeropplevelse{' '}
                <button
                  onClick={scrollToUIUX}
                  className="text-foreground font-semibold cursor-pointer transition-colors hover:text-primary underline decoration-primary decoration-2 underline-offset-4"
                >
                  (UI/UX)
                </button>. 
                Jeg er opptatt av at løsninger ikke bare skal fungere teknisk, men også være enkle og gode å bruke.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                På <span className="text-foreground font-semibold">backend</span> jobber jeg med å bygge 
                stabile og sikre systemer som håndterer data, autentisering og forretningslogikk. Jeg har 
                særlig erfaring med <span className="text-foreground font-semibold">Node.js</span>, hvor jeg 
                utvikler API-er og funksjonalitet som for eksempel innlogging og bloggplattformer.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                Som fullstack-utvikler trives jeg med å se helheten – fra idé til ferdig løsning – og hvordan 
                frontend og backend spiller sammen. Jeg liker å løse komplekse problemer og er alltid nysgjerrig 
                på å lære nye teknologier og metoder. For meg handler utvikling både om å bygge gode løsninger 
                og å stadig utvikle meg videre som fagperson.
              </motion.p>
            </motion.div>

            {/* Bilde kolonne */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Dark mode note */}
              {theme === 'dark' && (
                <motion.div
                  className="mb-4 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-sm italic" style={{ color: 'var(--muted)' }}>
                    💤 Vekk meg ved å skru på dagmodus
                  </p>
                </motion.div>
              )}

              <div className="relative aspect-square rounded-2xl overflow-hidden border border-default">
                {theme && (
                  <Image
                    key={theme}
                    src={codingImage}
                    alt="Stian Ihler coding"
                    fill
                    className="object-cover"
                    quality={100}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UI/UX Section */}
      <section id="uiux" className="py-20 px-6 bg-page">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-left">
              UI/UX
            </h2>
            <div className="w-20 h-1 bg-primary mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Bilde kolonne - vises først på mobil */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-default">
                <Image
                  src="/me_ux.svg"
                  alt="UI/UX Design"
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
            </motion.div>

            {/* Tekst kolonne */}
            <motion.div 
              className="space-y-6 order-2 lg:order-1"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                <span className="text-foreground font-semibold">UI/UX-design</span> handler om å skape 
                digitale opplevelser som både ser bra ut og fungerer intuitivt. UI (User Interface) er 
                det visuelle – farger, typografi, knapper og layout. UX (User Experience) er hvordan det 
                føles å bruke løsningen – er den enkel å forstå? Løser den brukerens behov?
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                Jeg jobber med hele designprosessen, fra <span className="text-foreground font-semibold">wireframes 
                og prototyper</span> i tidlig fase, til <span className="text-foreground font-semibold">design 
                systems</span> og <span className="text-foreground font-semibold">interaksjonsdesign</span> som 
                sikrer konsistens og kvalitet. Jeg bruker verktøy som <span className="text-foreground font-semibold">Figma</span> og{' '}
                <span className="text-foreground font-semibold">Adobe XD</span> for å visualisere ideer og teste 
                konsepter før de blir til kode.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                Min tilnærming er alltid <span className="text-foreground font-semibold">brukersentrert</span>. 
                Jeg starter med å forstå hvem brukerne er og hva de trenger, lager løsninger basert på dette, 
                og tester underveis for å sikre at resultatet faktisk fungerer i praksis. God design handler 
                ikke bare om estetikk – det handler om å gjøre hverdagen enklere for de som bruker løsningen.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-muted"
                variants={staggerItem}
              >
                Som både designer og utvikler ser jeg verdien av å kombinere disse rollene. Jeg forstår 
                tekniske begrensninger og muligheter, noe som gjør at jeg kan designe løsninger som både 
                er ambisiøse og realistiske å implementere. For meg er UI/UX-design en naturlig del av 
                fullstack-utviklingen – det ene gir ikke mening uten det andre.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
