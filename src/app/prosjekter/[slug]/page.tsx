'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import { getProjectBySlug } from '@/data/projects';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-page pt-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Prosjekt ikke funnet</h1>
            <Link href="/prosjekter">
              <button className="btn-primary px-6 py-3 rounded-lg cursor-pointer">
                Tilbake til prosjekter
              </button>
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Link href="/prosjekter">
              <motion.button
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: 'var(--muted)' }}
                whileHover={{ x: -5, color: 'var(--foreground)' }}
              >
                <span>←</span>
                <span>Tilbake</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8" style={{ color: 'var(--muted)' }}>
              {project.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-6 py-3 rounded-lg font-medium cursor-pointer inline-flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Besøk nettside</span>
                <span>→</span>
              </motion.a>
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-6 py-3 rounded-lg font-medium cursor-pointer inline-flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon name="github" size={18} />
                  <span>Kildekode</span>
                </motion.a>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs font-medium rounded-full"
                  style={{
                    backgroundColor: 'var(--secondary)',
                    color: 'var(--muted)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border" style={{ borderColor: 'var(--border)' }}>
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* About */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>
                Om prosjektet
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>
            </motion.section>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />

            {/* Details Grid */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {/* Year */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>
                  År
                </h3>
                <p className="text-base">{project.year}</p>
              </div>

              {/* Role */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>
                  Rolle
                </h3>
                <p className="text-base">{project.role}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--muted)' }}>
                  Teknologier
                </h3>
                <div className="space-y-1">
                  {[...project.technologies.frontend, ...project.technologies.backend, ...project.technologies.other]
                    .slice(0, 5)
                    .map((tech, index) => (
                      <p key={index} className="text-sm" style={{ color: 'var(--muted)' }}>
                        {tech}
                      </p>
                    ))}
                </div>
              </div>
            </motion.section>

            {/* Additional Images */}
            {project.images.length > 1 && (
              <>
                <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />
                
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-8"
                >
                  <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                    Flere bilder
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative aspect-video rounded-lg overflow-hidden border"
                        style={{ borderColor: 'var(--border)' }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
