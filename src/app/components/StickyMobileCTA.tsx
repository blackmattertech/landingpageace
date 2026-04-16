import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show CTA after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-lg border-t border-white/10 p-4">
            <motion.a
              href="https://wa.me/917483618278?text=Hi!%20I%27m%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              whileTap={{ scale: 0.95 }}
              className="w-full bg-accent text-black px-6 py-4 rounded-lg flex items-center justify-center gap-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-lg">Contact Us Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
