'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import ContactForm from '@/components/ContactForm';
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
                La oss komme i kontakt
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
                  spørsmål og forslag velkommen. Fyll ut skjemaet under, så kommer jeg tilbake til 
                  deg så snart som mulig.
                </p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <ContactForm />
            </motion.div>

            {/* Divider */}
            <motion.div
              className="w-full h-px"
              style={{ backgroundColor: 'var(--border)' }}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Alternative Contact Methods */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold">Andre måter å nå meg på</h3>

              {/* Social Links */}
              <div className="space-y-3">
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
              </div>
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
