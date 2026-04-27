'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Icon from '@/components/Icon';
import { getProjectBySlug } from '@/data/projects';

type ImageFilter = 'desktop' | 'mobile';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);
  const [imageFilter, setImageFilter] = useState<ImageFilter>('desktop');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleImageLoad = (imageSrc: string) => {
    setLoadedImages(prev => new Set(prev).add(imageSrc));
  };

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

  // Determine which images to show based on filter
  const displayImages = imageFilter === 'mobile' && project.mobileImages 
    ? project.mobileImages 
    : project.images;

  // Check if project has mobile images
  const hasMobileImages = project.mobileImages && project.mobileImages.length > 0;

  // For gallery, show all images (don't skip first one for mobile since they're separate)
  const galleryImages = imageFilter === 'mobile' && project.mobileImages
    ? project.mobileImages // Show all mobile images
    : project.images.slice(1); // Skip first desktop image (it's the hero)

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
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border" style={{ 
              borderColor: 'var(--border)',
              backgroundColor: 'var(--secondary)'
            }}>
              {/* Loading Skeleton for Hero */}
              {!loadedImages.has(project.heroImage) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center gap-3">
                    <div className="w-12 h-12 border-3 border-primary border-t-transparent rounded-full animate-spin" />
                    <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>Laster hero bilde...</p>
                  </div>
                </div>
              )}
              
              <Image
                src={project.heroImage}
                alt={project.title}
                fill
                className={`object-cover ${
                  loadedImages.has(project.heroImage) ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-500`}
                priority
                onLoad={() => handleImageLoad(project.heroImage)}
              />
            </div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-20">
            {/* About */}
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>
                Om prosjektet
              </h2>
              <p className="text-lg leading-relaxed max-w-3xl">
                {project.longDescription}
              </p>
            </section>

            {/* Divider */}
            <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />

            {/* Details Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
            </section>

            {/* Additional Images */}
            {(project.images.length > 1 || hasMobileImages) && (
              <>
                <div className="w-full h-px" style={{ backgroundColor: 'var(--border)' }} />
                
                <section className="space-y-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                      Flere bilder
                    </h2>
                    
                    {/* Filter Buttons */}
                    {hasMobileImages && (
                      <div className="flex gap-2">
                        <motion.button
                          onClick={() => setImageFilter('desktop')}
                          className="px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer"
                          style={{
                            backgroundColor: imageFilter === 'desktop' ? 'var(--primary)' : 'var(--secondary)',
                            color: imageFilter === 'desktop' ? 'var(--btn-primary-text)' : 'var(--muted)',
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Desktop
                        </motion.button>
                        <motion.button
                          onClick={() => setImageFilter('mobile')}
                          className="px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer"
                          style={{
                            backgroundColor: imageFilter === 'mobile' ? 'var(--primary)' : 'var(--secondary)',
                            color: imageFilter === 'mobile' ? 'var(--btn-primary-text)' : 'var(--muted)',
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Mobile
                        </motion.button>
                      </div>
                    )}
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div 
                      className={`grid grid-cols-1 ${
                        imageFilter === 'mobile' ? 'md:grid-cols-4 gap-3' : 'md:grid-cols-2 gap-6'
                      }`}
                      key={imageFilter}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                    {galleryImages.map((image, index) => (
                      <motion.div
                        key={`${imageFilter}-${index}`}
                        className={`relative rounded-lg overflow-hidden border ${
                          imageFilter === 'mobile' ? ' max-w-[200px] mx-auto' : 'aspect-video'
                        }`}
                        style={{ 
                          borderColor: 'var(--border)',
                          backgroundColor: 'var(--secondary)'
                        }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Loading Skeleton */}
                        {!loadedImages.has(image) && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="animate-pulse flex flex-col items-center gap-2">
                              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                              <p className="text-xs" style={{ color: 'var(--muted)' }}>Laster bilde...</p>
                            </div>
                          </div>
                        )}
                        
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={image}
                          alt={`${project.title} ${imageFilter} screenshot ${index + 1}`}
                          className={`w-full h-full ${imageFilter === 'mobile' ? 'object-contain' : 'object-cover'} ${
                            loadedImages.has(image) ? 'opacity-100' : 'opacity-0'
                          } transition-opacity duration-300`}
                          onLoad={() => handleImageLoad(image)}
                        />
                      </motion.div>
                    ))}
                  </motion.div>
                  </AnimatePresence>
                </section>
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
