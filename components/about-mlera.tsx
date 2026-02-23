'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, Users, Target } from 'lucide-react';

export default function AboutMLera() {
  const values = [
    {
      icon: BookOpen,
      title: 'Structured',
      description: 'Intentional learning paths designed by ML practitioners — not random YouTube rabbit holes.',
    },
    {
      icon: Zap,
      title: 'Concept-First',
      description: 'Master fundamentals deeply before layering complexity. Build intuition, not just syntax.',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Learn alongside peers. Ask questions, share insights, grow together.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Clear milestones, real projects, and measurable progress at every stage.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">What is MLera?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            MLera is the{' '}
            <span className="text-primary font-semibold">Operating System for Learning Machine Learning</span>.
            We eliminate chaos by providing structure, guidance, and clarity at every step of your ML journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Left: Core Values */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 tracking-tight">Why MLera Exists</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Learning ML shouldn&apos;t feel like navigating a maze. Most learners jump between tutorials, get lost in jargon, and never understand how concepts connect. MLera changes that.
            </p>
            <div className="space-y-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary/40 hover-lift group cursor-default"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{value.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Visual Preview Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              {/* Learning Roadmap Preview */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="p-6 rounded-xl glass-card border-primary/20"
                style={{ border: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)' }}
              >
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  Learning Roadmap
                </h4>
                <div className="space-y-3">
                  <div className="p-3 bg-background/80 rounded-lg border border-primary/15">
                    <div className="text-sm font-medium text-primary mb-1.5">Foundations (Week 1-2)</div>
                    <div className="h-1.5 bg-primary/15 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: '0%' }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      />
                    </div>
                  </div>
                  <div className="p-3 bg-background/80 rounded-lg border border-border/50">
                    <div className="text-sm font-medium text-foreground/50 mb-1.5">Core Concepts (Week 3-4)</div>
                    <div className="h-1.5 bg-muted rounded-full" />
                  </div>
                  <div className="p-3 bg-background/80 rounded-lg border border-border/50">
                    <div className="text-sm font-medium text-foreground/50 mb-1.5">Advanced Topics (Week 5+)</div>
                    <div className="h-1.5 bg-muted rounded-full" />
                  </div>
                </div>
              </motion.div>

              {/* Lexicon Tooltip Preview */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                className="p-6 rounded-xl glass-card"
                style={{ border: '1px solid color-mix(in srgb, var(--accent) 20%, transparent)' }}
              >
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  Built-in Lexicon
                </h4>
                <div className="space-y-2 bg-background/80 rounded-lg p-4 border border-accent/15">
                  <div className="text-sm">
                    <span className="font-semibold text-foreground">Gradient Descent</span>
                    <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                      An optimization algorithm that iteratively updates model parameters to minimize the loss function by moving in the direction of steepest descent.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Who It's For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-muted/30 rounded-2xl border border-border p-8"
        >
          <h3 className="text-2xl font-bold mb-6 tracking-tight">Built For</h3>
          <div className="grid sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Students</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Build rock-solid ML foundations before diving into college projects and research.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Career Switchers</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Transition into ML engineering with a structured, proven progression path.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary mb-2">Enthusiasts</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">Go from random learning to mastery with intentional, guided progression.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
