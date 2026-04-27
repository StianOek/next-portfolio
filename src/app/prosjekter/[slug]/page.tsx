'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getProjectBySlug } from '@/data/projects';
import { staggerContainer, staggerItem, viewportOptions } from '@/utils/animations';

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
              <button className="btn-primary px-6 py-3 rounded-lg">
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
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link href="/prosjekter">
              <motion.button
                className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                whileHover={{ x: -5 }}
              >
                <span>←</span>
                <span>Tilbake til prosjekter</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
                {project.title}
              </h1>
              <p className="text-xl text-muted mb-4">{project.subtitle}</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 text-sm font-medium rounded-full"
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
                  className="btn-primary px-6 py-3 rounded-lg font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Besøk nettside →
                </motion.a>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Project Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">Om prosjektet</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.section>

              {/* Features */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-6">Funksjoner</h2>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {project.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="flex items-start gap-3 p-4 rounded-lg"
                      style={{ backgroundColor: 'var(--secondary)' }}
                    >
                      <span className="text-primary text-xl">✓</span>
                      <span className="text-muted">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Image Gallery */}
              {project.images.length > 1 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Bilder</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative h-64 rounded-xl overflow-hidden"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
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
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Details */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card p-6 rounded-xl border border-default"
              >
                <h3 className="text-xl font-bold mb-4">Prosjektdetaljer</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted mb-1">År</p>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted mb-1">Rolle</p>
                    <p className="font-medium">{project.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card p-6 rounded-xl border border-default"
              >
                <h3 className="text-xl font-bold mb-4">Teknologier</h3>
                <div className="space-y-4">
                  {project.technologies.frontend.length > 0 && (
                    <div>
                      <p className="text-sm text-muted mb-2">Frontend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.frontend.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: 'var(--secondary)',
                              color: 'var(--foreground)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.technologies.backend.length > 0 && (
                    <div>
                      <p className="text-sm text-muted mb-2">Backend</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.backend.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: 'var(--secondary)',
                              color: 'var(--foreground)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.technologies.other.length > 0 && (
                    <div>
                      <p className="text-sm text-muted mb-2">Annet</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.other.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full"
                            style={{
                              backgroundColor: 'var(--secondary)',
                              color: 'var(--foreground)'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
