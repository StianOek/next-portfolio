'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PortfolioItem } from '@/data/portfolio';

interface PortfolioSliderProps {
  portfolioItems: PortfolioItem[];
}

export default function PortfolioSlider({ portfolioItems }: PortfolioSliderProps) {
  return (
    <section className="py-20 px-6 bg-page">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Ting jeg har vært med å bygge
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 mx-auto"></div>
        </motion.div>

        <div className="space-y-32">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="border-b border-default pb-16 last:border-b-0"
            >
              {/* Project Title */}
              <div className="mb-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-lg text-muted">
                  {item.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left - Images */}
                <div className="space-y-4">
                  {/* Main Image */}
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={item.heroImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                      quality={100}
                    />
                  </div>

                  {/* Additional Images Grid */}
                  {item.images && item.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-4">
                      {item.images.slice(1, 4).map((img, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                        >
                          <Image
                            src={img}
                            alt={`${item.title} ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            quality={90}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right - Content */}
                <div className="space-y-6">
                  {/* Meta Information */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      <div>
                        <span className="text-muted font-medium block">Type prosjekt:</span>
                        <span>{item.role}</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--primary)' }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <div>
                        <span className="text-muted font-medium block">Periode:</span>
                        <span>{item.year}</span>
                      </div>
                    </div>
                    {item.githubUrl && (
                      <div className="flex items-start gap-3 text-sm">
                        <svg
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: 'var(--primary)' }}
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <div>
                          <span className="text-muted font-medium block">Kildekode:</span>
                          <a 
                            href={item.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Se på GitHub
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-base leading-relaxed text-muted">
                      {item.longDescription}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full"
                        style={{
                          backgroundColor: 'var(--card)',
                          color: 'var(--foreground)',
                          border: '1px solid var(--border)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-6 py-3 rounded-lg text-sm font-medium inline-block cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Besøk nettside
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
