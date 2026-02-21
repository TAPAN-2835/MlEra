'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" style={{ animation: 'glow-pulse 6s ease-in-out infinite' }} />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" style={{ animation: 'glow-pulse 6s ease-in-out infinite 2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <span className="text-accent font-medium text-sm tracking-wide">Structured Learning Redefined</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-balance">
                Machine Learning,{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Finally Structured
                </span>.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl">
                MLera is a structured Machine Learning operating system that guides you step-by-step, builds deep conceptual clarity, and eliminates content chaos.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold transition-shadow hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2 text-base"
              >
                Start Learning Smarter <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3.5 rounded-xl border border-border text-foreground font-semibold hover:bg-muted/80 transition-all text-base"
              >
                Explore the Platform
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-8 sm:gap-10 pt-2">
              <div>
                <div className="text-2xl font-bold text-primary tracking-tight">500+</div>
                <div className="text-sm text-muted-foreground mt-0.5">Active Learners</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary tracking-tight">95%</div>
                <div className="text-sm text-muted-foreground mt-0.5">Completion Rate</div>
              </div>
              <div className="w-px bg-border" />
              <div>
                <div className="text-2xl font-bold text-primary tracking-tight">4.9★</div>
                <div className="text-sm text-muted-foreground mt-0.5">User Rating</div>
              </div>
            </motion.div>
          </div>

          {/* Right — Mockup Card */}
          <motion.div variants={itemVariants} className="relative flex justify-center lg:justify-end">
            <div className="animate-float">
              <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
                {/* Roadmap header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-3 w-3 rounded-full bg-primary" />
                  <span className="text-sm font-semibold text-foreground">Your ML Roadmap</span>
                  <span className="ml-auto text-xs text-muted-foreground">63% complete</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-muted mb-6">
                  <div className="h-full w-[63%] rounded-full bg-gradient-to-r from-primary to-accent transition-all" />
                </div>

                {/* Steps */}
                {[
                  { title: "Linear Algebra Basics", done: true },
                  { title: "Probability & Statistics", done: true },
                  { title: "Gradient Descent", done: false, active: true },
                  { title: "Neural Networks Intro", done: false },
                ].map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 py-3 px-3 rounded-lg mb-2 transition-all ${s.active
                        ? "bg-secondary border border-primary/20"
                        : "hover:bg-muted/50"
                      }`}
                  >
                    <div
                      className={`h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold ${s.done
                          ? "bg-primary text-primary-foreground"
                          : s.active
                            ? "border-2 border-primary text-primary"
                            : "border-2 border-border text-muted-foreground"
                        }`}
                    >
                      {s.done ? "✓" : i + 1}
                    </div>
                    <span
                      className={`text-sm ${s.done
                          ? "text-muted-foreground line-through"
                          : s.active
                            ? "text-foreground font-medium"
                            : "text-muted-foreground"
                        }`}
                    >
                      {s.title}
                    </span>
                  </div>
                ))}

                {/* Lexicon tooltip */}
                <div className="mt-4 p-3 rounded-lg bg-accent/10 border border-accent/20">
                  <div className="text-xs font-medium text-accent mb-1">📖 Lexicon</div>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground">Gradient Descent</strong> — An optimization algorithm that iteratively adjusts parameters to minimize a loss function.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce-arrow" />
      </motion.div>
    </section>
  );
}
