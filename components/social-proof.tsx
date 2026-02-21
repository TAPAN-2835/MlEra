'use client';

import { motion } from 'framer-motion';
import { Star, Award } from 'lucide-react';

export default function SocialProof() {
  const testimonials = [
    {
      name: 'Arjun Kumar',
      role: 'ML Engineer',
      initials: 'AK',
      quote: 'MLera finally made sense of the chaos. Structured learning was exactly what I needed to go from confused to confident.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Data Science Student',
      initials: 'PS',
      quote: 'The built-in lexicon is a game-changer. I stopped Googling every term and started actually understanding concepts.',
      rating: 5,
    },
    {
      name: 'Rahul Patel',
      role: 'AI Researcher',
      initials: 'RP',
      quote: 'Best structured ML curriculum I\'ve encountered. The concept-first approach mirrors how experts actually think.',
      rating: 5,
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
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Built under IIIT Dharwad Research Park</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Trusted by Early Adopters</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join 500+ learners who replaced tutorial chaos with structured clarity.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover-lift cursor-default"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
