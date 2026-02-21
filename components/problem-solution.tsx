'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, XCircle, Check } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    'Scattered resources across dozens of platforms',
    'No clear framework connecting ML concepts',
    'Confusing jargon without contextual definitions',
    'Steep learning curve with no guided progression',
  ];

  const solutions = [
    'One structured platform with curated paths',
    'Concept-first approach with logical ordering',
    'Built-in lexicon — every term explained inline',
    'Interactive exercises that reinforce understanding',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">The Problem We Solve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ML education is broken. Here&apos;s how MLera fixes it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-destructive/10 flex items-center justify-center">
                <AlertCircle className="w-4 h-4 text-destructive" />
              </div>
              Without Structure
            </h3>
            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-destructive/5 border border-destructive/15 hover-lift cursor-default"
                >
                  <XCircle className="w-5 h-5 text-destructive/70 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              With MLera
            </h3>
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary/5 border border-primary/15 hover-lift cursor-default"
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{solution}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
