import { motion } from "motion/react";
import { Logo } from "./Logo";
import { ArrowRight } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* CTA Button - Desktop */}
          <motion.a
            href="https://wa.me/917483618278?text=Hi!%20I%27d%20like%20to%20get%20a%20free%20website%20analysis."
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-300"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span>Get Your Analysis</span>
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          {/* CTA Button - Mobile */}
          <motion.a
            href="tel:+917483618278"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden bg-accent text-black px-4 py-2 rounded-lg text-sm"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Call Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
