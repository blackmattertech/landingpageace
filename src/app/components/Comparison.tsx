import { motion } from "motion/react";
import { X, Check } from "lucide-react";

const comparisons = [
  {
    current: "Static content only",
    blackMatter: "Dynamic, data-driven content"
  },
  {
    current: "Manual lead follow-up",
    blackMatter: "Automated lead capture & tracking"
  },
  {
    current: "No business integration",
    blackMatter: "CRM + ERP + WhatsApp unified"
  },
  {
    current: "Performance: 62/100 (your current site)",
    blackMatter: "Performance: 96-100/100 (TAG Unlimited example)"
  },
  {
    current: "Disconnected tools",
    blackMatter: "One integrated system"
  },
  {
    current: "Lost opportunities",
    blackMatter: "Full conversion pipeline"
  }
];

export function Comparison() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Current Website vs <span className="text-accent">System-Driven Website</span>
          </h2>
        </motion.div>

        {/* Side-by-side comparison cards */}
        <div className="space-y-4 md:space-y-6">
          {comparisons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Current Website */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.1 }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="bg-destructive/10 border border-destructive/30 rounded-xl p-5 md:p-6 relative overflow-hidden group"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-destructive/0 via-destructive/5 to-destructive/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />

                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-destructive/20 flex items-center justify-center">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-destructive" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-destructive/60 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      CURRENT
                    </div>
                    <span className="text-white/90 text-sm md:text-base">{item.current}</span>
                  </div>
                </div>
              </motion.div>

              {/* Black Matter System */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="bg-accent/10 border border-accent/30 rounded-xl p-5 md:p-6 relative overflow-hidden group"
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                />

                <div className="relative z-10 flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-accent/60 mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      BLACK MATTER
                    </div>
                    <span className="text-white/90 text-sm md:text-base">{item.blackMatter}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12 md:mt-16 space-y-4"
        >
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
            Most websites are built to <span className="text-white">look good</span>. <br />
            Ours are built to <span className="text-accent">perform</span>.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm text-white/40">
            <span>Analysis: acegiftingsolutions.com (Current: 62/100)</span>
            <span className="hidden md:inline">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Proven with TAG Unlimited Clothing (Achieved: 96-100/100)
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
