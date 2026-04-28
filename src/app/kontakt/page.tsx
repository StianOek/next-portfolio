'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import { CONTACT } from '@/constants/contact';

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            className="space-y-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.h1
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                La oss komme i kontakt: Måter å koble til meg
              </motion.h1>

              <motion.div
                className="text-base md:text-lg leading-relaxed space-y-4"
                style={{ color: 'var(--muted)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p>
                  Takk for din interesse i å komme i kontakt med meg. Jeg ønsker tilbakemeldinger, 
                  spørsmål og forslag velkommen. Hvis du har et spesifikt spørsmål eller kommentar, 
                  vennligst send meg en e-post direkte på{' '}
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="font-medium transition-colors"
                    style={{ color: 'var(--primary)' }}
                    onMouseEnter={(e) => e.currentTarget.style.textDecoration = 'underline'}
                    onMouseLeave={(e) => e.currentTarget.style.textDecoration = 'none'}
                  >
                    {CONTACT.email}
                  </a>
                  . Jeg gjør mitt beste for å svare på alle meldinger innen 24 timer, selv om det 
                  kan ta lenger tid i travle perioder.
                </p>
                <p>
                  Alternativt kan du bruke kontaktskjemaet på nettstedet mitt for å komme i kontakt. 
                  Bare fyll ut de nødvendige feltene, så kommer jeg tilbake til deg så snart som mulig. 
                  Til slutt, hvis du foretrekker å koble til på sosiale medier, kan du finne meg på 
                  LinkedIn og GitHub. Takk igjen for din interesse, og jeg ser frem til å høre fra deg!
                </p>
              </motion.div>
            </div>

            {/* Social Links */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <SocialLink 
                icon="linkedin" 
                text="Follow on LinkedIn"
                href={CONTACT.linkedin} 
              />
              <SocialLink 
                icon="github" 
                text="Follow on GitHub"
                href={CONTACT.github} 
              />
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-full h-px"
              style={{ backgroundColor: 'var(--border)' }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Email Display */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Icon name="email" size={20} />
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-sm font-medium transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted)'}
              >
                {CONTACT.email}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}

// Social Link Component
function SocialLink({ icon, text, href }: { icon: 'linkedin' | 'github'; text: string; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-sm transition-colors"
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
