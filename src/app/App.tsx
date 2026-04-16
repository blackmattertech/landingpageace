import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { ScrollProgress } from "./components/ScrollProgress";
import { Hero } from "./components/Hero";
import { TrustBadges } from "./components/TrustBadges";
import { Stats } from "./components/Stats";
import { Comparison } from "./components/Comparison";
import { Performance } from "./components/Performance";
import { CaseStudy } from "./components/CaseStudy";
import { UITransformation } from "./components/UITransformation";
import { Services } from "./components/Services";
import { LeadSystem } from "./components/LeadSystem";
import { ScaleVision } from "./components/ScaleVision";
import { SocialProof } from "./components/SocialProof";
import { FinalCTA } from "./components/FinalCTA";
import { FloatingActions } from "./components/FloatingActions";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Navbar */}
      <Navbar />

      {/* Floating WhatsApp & Call Buttons */}
      <FloatingActions />

      {/* Main content */}
      <Hero />
      <TrustBadges />
      <Stats />
      <Comparison />
      <Performance />
      <CaseStudy />
      <UITransformation />
      <Services />
      <LeadSystem />
      <ScaleVision />
      <SocialProof />
      <FinalCTA />


      {/* Footer */}
      <footer className="border-t border-white/10 py-12 md:py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8">
            {/* Logo & Description */}
            <div className="space-y-4">
              <Logo />
              <p className="text-white/60 text-sm">
                Building system-driven websites that transform businesses from static pages into complete revenue engines.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Services
              </h4>
              <ul className="space-y-2 text-sm text-white/60">
                <li className="hover:text-accent transition-colors cursor-pointer">Website Development</li>
                <li className="hover:text-accent transition-colors cursor-pointer">CRM Systems</li>
                <li className="hover:text-accent transition-colors cursor-pointer">ERP Solutions</li>
                <li className="hover:text-accent transition-colors cursor-pointer">WhatsApp Integration</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Get in Touch
              </h4>
              <div className="space-y-3 text-sm">
                <a
                  href="tel:+917483618278"
                  className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
                >
                  📞 +91 748-361-8278
                </a>
                <a
                  href="https://wa.me/917483618278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors"
                >
                  💬 WhatsApp Us
                </a>
                <div className="pt-4 flex gap-3">
                  <motion.a
                    href="https://wa.me/917483618278"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-[#25D366] flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    💬
                  </motion.a>
                  <motion.a
                    href="tel:+917483618278"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center hover:shadow-lg transition-all"
                  >
                    📞
                  </motion.a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-white/40">
              © 2026 Black Matter Technologies. All rights reserved. • Operations-first technology partner
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}