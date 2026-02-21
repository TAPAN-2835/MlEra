'use client';

import { motion } from 'framer-motion';
import { Check, Lock, Play, BookOpen, TrendingUp } from 'lucide-react';
import { useState } from 'react';

export default function ProductVisualization() {
  const [hoveredTerm, setHoveredTerm] = useState<string | null>(null);

  const tooltipContent: Record<string, string> = {
    'learning rate': 'Controls how much weights update per step',
    'loss function': 'Measures prediction error to optimize',
    'epochs': 'Complete passes through the training data',
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            See How MLera Guides Your Learning
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A structured roadmap, interactive concept explanations, and real-time progress tracking — so you always know exactly what to learn next.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* CARD 1: Learning Roadmap */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl glass-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Learning Roadmap</h3>
                  <p className="text-xs text-muted-foreground">Structured progression</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-3">
              {[
                { title: 'ML Foundations', completed: true },
                { title: 'Linear Regression', completed: true },
                { title: 'Logistic Regression', active: true },
                { title: 'Neural Networks', locked: true },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 3 }}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50 transition-colors cursor-default"
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${item.completed ? 'bg-primary text-primary-foreground' :
                      item.active ? 'bg-accent text-accent-foreground' :
                        'bg-muted text-muted-foreground'
                    }`}>
                    {item.completed ? <Check className="w-3.5 h-3.5" /> : item.locked ? <Lock className="w-3 h-3" /> : <span className="w-1.5 h-1.5 bg-current rounded-full" />}
                  </div>
                  <span className={`text-sm ${item.completed ? 'text-muted-foreground line-through' : item.active ? 'text-foreground font-semibold' : 'text-muted-foreground'}`}>
                    {item.title}
                  </span>
                  {item.active && (
                    <span className="ml-auto text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                      Current
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CARD 2: Concept Explanation with Lexicon */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl glass-card overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-5 border-b border-border/50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Gradient Descent</h3>
                  <p className="text-xs text-muted-foreground">Core Concepts · Week 2</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                An optimization algorithm that minimizes the loss by iteratively moving parameters in the direction that reduces error.
              </p>
              <div className="border-l-3 border-accent pl-4 py-3 bg-accent/5 rounded-r-lg space-y-2.5">
                <p className="text-xs font-semibold text-foreground tracking-wide">KEY TERMS</p>
                <div className="flex flex-wrap gap-2">
                  {['learning rate', 'loss function', 'epochs'].map((term) => (
                    <motion.button
                      key={term}
                      onHoverStart={() => setHoveredTerm(term)}
                      onHoverEnd={() => setHoveredTerm(null)}
                      className="relative px-2.5 py-1 text-xs rounded-md bg-primary/15 text-primary font-medium hover:bg-primary/25 transition-colors cursor-help"
                    >
                      {term}
                      {hoveredTerm === term && (
                        <motion.div
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 4 }}
                          className="absolute bottom-full left-0 mb-2 bg-foreground text-background text-xs px-3 py-1.5 rounded-lg whitespace-nowrap z-10 shadow-lg"
                        >
                          {tooltipContent[term]}
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
              <button className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all text-sm">
                Continue Learning
              </button>
            </div>
          </motion.div>

          {/* CARD 3: Progress Tracking */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 md:col-span-2 lg:col-span-1"
            style={{
              background: 'linear-gradient(135deg, color-mix(in srgb, var(--primary) 8%, var(--card)), color-mix(in srgb, var(--accent) 5%, var(--card)))',
              border: '1px solid color-mix(in srgb, var(--primary) 20%, transparent)',
            }}
          >
            <div className="p-5 border-b" style={{ borderColor: 'color-mix(in srgb, var(--primary) 15%, transparent)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-foreground">Progress Tracking</h3>
                  <p className="text-xs text-muted-foreground">Your learning journey</p>
                </div>
              </div>
            </div>
            <div className="p-5 space-y-5">
              {/* Completion bar */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-sm font-semibold text-foreground">Overall Completion</span>
                  <span className="text-sm font-bold text-primary">65%</span>
                </div>
                <div className="h-2.5 bg-muted/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '65%' }}
                    transition={{ duration: 1.5, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </div>

              {/* Module progress */}
              <div className="space-y-3">
                {[
                  { label: 'Foundations', progress: 100, color: 'bg-primary' },
                  { label: 'Core Concepts', progress: 72, color: 'bg-accent' },
                  { label: 'Advanced', progress: 15, color: 'bg-primary/60' },
                ].map((module, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-muted-foreground font-medium">{module.label}</span>
                      <span className="text-foreground font-semibold">{module.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${module.progress}%` }}
                        transition={{ duration: 1.2, delay: 0.3 + idx * 0.15 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${module.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 text-center pt-3 border-t border-border/30">
                <div>
                  <div className="text-xl font-bold text-primary">18</div>
                  <p className="text-xs text-muted-foreground mt-0.5">Concepts</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-accent">7d</div>
                  <p className="text-xs text-muted-foreground mt-0.5">Streak</p>
                </div>
                <div>
                  <div className="text-xl font-bold text-primary">12h</div>
                  <p className="text-xs text-muted-foreground mt-0.5">Total Time</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-xl hover:shadow-primary/20 transition-shadow inline-flex items-center gap-2.5 text-lg"
          >
            <Play className="w-5 h-5" />
            Start Your Structured ML Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
