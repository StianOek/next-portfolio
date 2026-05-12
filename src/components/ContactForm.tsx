'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';

// Zod validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Navn må være minst 2 tegn').max(100, 'Navn kan ikke være mer enn 100 tegn'),
  email: z.string().email('Ugyldig e-postadresse'),
  message: z.string().min(10, 'Melding må være minst 10 tegn').max(2000, 'Melding kan ikke være mer enn 2000 tegn'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Hva heter du?
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: errors.name ? 'var(--primary)' : 'var(--border)',
            color: 'var(--foreground)',
          }}
          placeholder="Ola Nordmann"
        />
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm mt-1"
          >
            {errors.name.message}
          </motion.p>
        )}
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Din e-post
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: errors.email ? 'var(--primary)' : 'var(--border)',
            color: 'var(--foreground)',
          }}
          placeholder="ola@eksempel.no"
        />
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm mt-1"
          >
            {errors.email.message}
          </motion.p>
        )}
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Hva har du på hjertet?
        </label>
        <textarea
          id="message"
          {...register('message')}
          rows={6}
          className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          style={{
            backgroundColor: 'var(--card-bg)',
            borderColor: errors.message ? 'var(--primary)' : 'var(--border)',
            color: 'var(--foreground)',
          }}
          placeholder="Fortell meg om ideen din, eller bare si hei..."
        />
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary text-sm mt-1"
          >
            {errors.message.message}
          </motion.p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary px-8 py-3 rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
      >
        {isSubmitting ? 'Sender...' : 'Send melding 🚀'}
      </motion.button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg"
          style={{
            backgroundColor: 'var(--secondary)',
          }}
        >
          <p className="text-sm font-medium flex items-center gap-2">
            <span>🎉</span>
            <span>Takk for meldingen! Jeg tar kontakt snart.</span>
          </p>
        </motion.div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-lg"
          style={{
            backgroundColor: 'var(--secondary)',
          }}
        >
          <p className="text-sm font-medium flex items-center gap-2" style={{ color: 'var(--primary)' }}>
            <span>😕</span>
            <span>Noe gikk galt. Prøv igjen eller send meg en e-post direkte.</span>
          </p>
        </motion.div>
      )}
    </form>
  );
}
