'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, Compass, MousePointerClick, Map, GraduationCap, BarChart3 } from 'lucide-react';

export default function FeaturesHowItWorks() {
  const features = [
    {
      icon: BookOpen,
      title: 'Structured Learning Paths',
      description: 'No more random tutorials. Follow expert-designed paths that build knowledge in the right order.',
    },
    {
      icon: Zap,
      title: 'Built-in Technical Lexicon',
      description: 'Understand terms instantly. Every concept defined inline — no more context-switching to Google.',
    },
    {
      icon: Compass,
      title: 'Guided Concept Flow',
      description: 'Learn in the right order. Prerequisites are mapped so you never hit a wall of confusion.',
    },
    {
      icon: MousePointerClick,
      title: 'Interactive Reinforcement',
      description: 'Not passive video watching. Hands-on exercises and quizzes that cement understanding.',
    },
  ];

  const steps = [
    {
      number: '01',
      icon: Map,
      title: 'Start with a Structured Roadmap',
      description: 'Pick your learning path and see every step ahead — no guessing what comes next.',
    },
    {
      number: '02',
      icon: BookOpen,
      title: 'Learn Concepts in Guided Order',
      description: 'Master each concept before moving on. Prerequisites handled automatically.',
    },
    {
      number: '03',
      icon: MousePointerClick,
      title: 'Reinforce with Interactive Elements',
      description: 'Apply what you learn through exercises, quizzes, and hands-on challenges.',
    },
    {
      number: '04',
      icon: BarChart3,
      title: 'Track Mastery and Progress',
      description: 'Visualize your journey. See completion rates, streaks, and mastery metrics.',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="text-center mb-12" id="features">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Why MLera Is Different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four core pillars that separate MLera from scattered tutorials and generic courses.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 hover-lift cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-semibold mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12" id="howitworks">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From zero to ML competency in four guided steps.
            </p>
          </div>

          {/* Desktop: horizontal with connectors */}
          <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
            {/* Connecting line */}
            <div className="absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  className="relative px-3"
                >
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm mb-6 shadow-lg shadow-primary/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="p-5 rounded-xl bg-card border border-border text-center hover-lift cursor-default w-full">
                      <div className="text-xs font-bold text-primary/60 mb-1.5 tracking-wider">STEP {step.number}</div>
                      <h3 className="text-sm font-semibold mb-2 tracking-tight">{step.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile: vertical with connecting line */}
          <div className="md:hidden relative">
            {/* Vertical connector */}
            <div className="absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/30 via-accent/30 to-primary/30" />

            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-md">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-card border border-border flex-1">
                      <div className="text-xs font-bold text-primary/60 mb-1 tracking-wider">STEP {step.number}</div>
                      <h3 className="text-sm font-semibold mb-1">{step.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
