'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function CTAFooter() {
  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#howitworks' },
        { label: 'Lexicon', href: '#lexicon' },
        { label: 'Pricing', href: '#pricing' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Guides', href: '#' },
        { label: 'Community', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <>
      {/* CTA Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">
              Ready to Transform Your{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ML Learning?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Join 500+ learners building real ML competency through structured, guided progression. Backed by IIIT Dharwad Research Park.
            </p>
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-shadow hover:shadow-xl hover:shadow-primary/25 inline-flex items-center gap-2.5 text-lg"
            >
              Start Free <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8 mt-12">
            {[
              {
                name: 'Starter',
                price: 'Free',
                description: 'Perfect for getting started',
                features: ['Foundational learning path', '5 core concepts', 'Full lexicon access', 'Basic exercises'],
              },
              {
                name: 'Pro',
                price: '$9/mo',
                description: 'For committed learners',
                features: [
                  'Everything in Starter',
                  'Intermediate + advanced paths',
                  '50+ structured concepts',
                  'Interactive exercises',
                  'Community access',
                ],
                highlighted: true,
              },
              {
                name: 'Master',
                price: '$19/mo',
                description: 'Complete mastery track',
                features: [
                  'Everything in Pro',
                  'All learning paths',
                  '200+ concepts',
                  'Expert mentorship',
                  'Project portfolio builder',
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-7 hover-lift ${plan.highlighted
                  ? 'border-2 border-primary bg-primary/5 shadow-lg shadow-primary/10 relative'
                  : 'border border-border bg-card'
                  }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <div className="text-3xl font-bold text-primary mb-1">{plan.price}</div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all ${plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-md'
                    : 'border border-border text-foreground hover:bg-muted'
                    }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="inline-block mb-3 hover:opacity-80 transition-opacity duration-200">
                <Image
                  src="/mlera-logo.png"
                  alt="MLera"
                  width={150}
                  height={42}
                  className="h-[42px] w-auto"
                />
              </a>
              <p className="text-sm text-muted-foreground mb-2 leading-relaxed">
                Structured Machine Learning Education.
              </p>
              <p className="text-xs text-muted-foreground/70">
                Built under IIIT Dharwad Research Park
              </p>
            </div>

            {/* Links */}
            {footerLinks.map((section, index) => (
              <div key={index}>
                <h4 className="text-sm font-semibold mb-4 text-foreground">{section.title}</h4>
                <ul className="space-y-2.5">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                      >
                        {link.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border gap-4">
            <p className="text-muted-foreground text-xs">
              © 2025 MLera. All rights reserved.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 flex items-center justify-center transition-all duration-200 group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
