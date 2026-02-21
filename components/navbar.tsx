'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#howitworks' },
    { label: 'Lexicon', href: '#lexicon' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg border-b border-border/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity duration-200">
              <Image
                src="/mlera-logo.png"
                alt="MLera"
                width={180}
                height={52}
                className="h-[52px] w-auto"
                priority
              />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Learning
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pb-4 pt-2 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={handleNavClick}
                  className="w-full mt-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Start Learning
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
