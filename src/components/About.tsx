'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/me_original.png"
                alt="Stian Ihler"
                fill
                className="object-cover"
                quality={100}
                priority
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl leading-tight font-normal"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Stian heter jeg!
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
              Jeg har en ekte lidenskap for å lage nettsider som både fungerer godt og ser bra ut – og det har jeg hatt lenge.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Link href="/om-meg">
                <motion.button
                  className="btn-primary px-6 py-3 rounded-lg text-base font-medium cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Les mer om meg
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
