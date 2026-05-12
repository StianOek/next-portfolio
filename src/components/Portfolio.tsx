'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';
import { PortfolioItem } from '@/data/portfolio';

interface PortfolioProps {
  portfolioItems: PortfolioItem[];
  showAll?: boolean;
  noPadding?: boolean;
  title?: string;
}

export default function Portfolio({ portfolioItems, showAll = false, noPadding = false, title = 'Fremhevede prosjekter' }: PortfolioProps) {
  return (
    <section id="portfolio" className={`px-6 bg-page ${noPadding ? '' : 'py-20'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            {title}
          </h2>
          <div className="w-20 h-1 bg-primary mt-4"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="card rounded-2xl overflow-hidden border border-default transition-all duration-300 hover:shadow-lg"
              style={{ borderColor: 'var(--border)' }}
            >
              <div 
                className="relative h-64 flex flex-col items-center justify-center overflow-hidden"
              >
                <Image
                  src={item.heroImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {item.subtitle}
                  </p>
                </div>
                <p className="mb-4 text-muted leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        backgroundColor: 'var(--secondary)',
                        color: 'var(--foreground)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-medium inline-block cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Besøk nettside
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/portfolio">
              <motion.button
                className="btn-primary px-8 py-3 rounded-lg text-base font-medium cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Se hele portfolio
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
