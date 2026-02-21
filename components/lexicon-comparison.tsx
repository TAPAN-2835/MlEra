'use client';

import { motion } from 'framer-motion';
import { BookMarked, Check, X } from 'lucide-react';

export default function LexiconComparison() {
  const lexiconTerms = [
    {
      term: 'Neural Network',
      definition: 'A computing system inspired by biological neural networks that learns to recognize patterns from data through layered processing.',
    },
    {
      term: 'Gradient Descent',
      definition: 'An optimization algorithm that iteratively adjusts model parameters to minimize prediction error by following the steepest slope.',
    },
    {
      term: 'Overfitting',
      definition: 'When a model memorizes training data too closely, performing well on training but failing to generalize to unseen examples.',
    },
    {
      term: 'Hyperparameter',
      definition: 'Configuration settings chosen before training — like learning rate or batch size — that control how the model learns.',
    },
  ];

  const comparison = [
    { feature: 'Structured Learning Path', mlera: true, traditional: false },
    { feature: 'Built-in Technical Lexicon', mlera: true, traditional: false },
    { feature: 'Concept-First Approach', mlera: true, traditional: false },
    { feature: 'Progress & Mastery Tracking', mlera: true, traditional: false },
    { feature: 'Expert-Curated Content', mlera: true, traditional: true },
    { feature: 'Fragmented Resources', mlera: false, traditional: true },
    { feature: 'Overwhelming Complexity', mlera: false, traditional: true },
  ];

  return (
    <section id="lexicon" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Lexicon Showcase */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 mb-6">
              <BookMarked className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">270+ Terms Defined</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              Built-in Technical Lexicon
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Never be confused by ML terminology again. Every term defined clearly, right where you need it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
            {lexiconTerms.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift cursor-default group"
              >
                <h3 className="text-base font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{item.term}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">MLera vs Traditional Learning</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See why structured learning delivers better outcomes.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-card">
                  <th className="px-5 py-4 text-left text-sm font-semibold">Feature</th>
                  <th className="px-5 py-4 text-center text-sm font-semibold">
                    <span className="text-primary">MLera</span>
                  </th>
                  <th className="px-5 py-4 text-center text-sm font-semibold">
                    <span className="text-muted-foreground">Traditional</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                    viewport={{ once: true }}
                    className="border-t border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-5 py-3.5 text-sm text-foreground font-medium">{row.feature}</td>
                    <td className="px-5 py-3.5 text-center">
                      {row.mlera ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </td>
                    <td className="px-5 py-3.5 text-center">
                      {row.traditional ? (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                          <Check className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted">
                          <X className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
