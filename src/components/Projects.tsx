'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, hoverScale, tapScale, viewportOptions } from '@/utils/animations';
import { Project } from '@/data/projects';

interface ProjectsProps {
  projects: Project[];
  showAll?: boolean;
  noPadding?: boolean;
}

export default function Projects({ projects, showAll = false, noPadding = false }: ProjectsProps) {
  return (
    <section id="projects" className={`px-6 bg-page ${noPadding ? '' : 'py-20'}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-left">
            Prosjekter
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
          {projects.map((project, index) => (
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
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-2xl font-bold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted">
                    {project.subtitle}
                  </p>
                </div>
                <p className="mb-4 text-muted leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
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
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-4 py-2 rounded-lg text-sm font-medium inline-block cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Besøk nettside
                  </motion.a>
                  <Link href={`/prosjekter/${project.slug}`}>
                    <motion.button 
                      className="btn-secondary px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Les mer
                    </motion.button>
                  </Link>
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
            <Link href="/prosjekter">
              <motion.button
                className="btn-primary px-8 py-3 rounded-lg text-base font-medium cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Se alle prosjekter
              </motion.button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
