'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function MidCTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-accent/5 to-primary/8" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-balance">
            Stop Learning Machine Learning{' '}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Randomly</span>.
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Start building real understanding with structured clarity. Every concept in the right order, at the right time.
          </p>

          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-shadow hover:shadow-xl hover:shadow-primary/25 inline-flex items-center gap-2.5 text-lg"
          >
            Join the Structured Learning Movement <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-xs text-muted-foreground mt-6">
            Free to start · No credit card required
          </p>
        </motion.div>
      </div>
    </section>
  );
}
