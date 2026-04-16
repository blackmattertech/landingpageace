import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, TrendingUp } from "lucide-react";
import tagLighthouseImg from "../../imports/image-3.png";

export function CaseStudy() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-accent/20 border border-accent/40 rounded-full mb-6">
            <span className="text-sm text-accent" style={{ fontFamily: 'var(--font-display)' }}>
              REAL RESULTS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            This Is What <span className="text-accent">Peak Performance</span> Looks Like
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real Lighthouse scores from our work with TAG Unlimited Clothing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Lighthouse Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-white/5 border border-accent/30 rounded-2xl p-4 md:p-6 overflow-hidden">
              <div className="text-xs text-white/40 mb-3 text-center">
                Lighthouse Report • March 10, 2026
              </div>
              <ImageWithFallback
                src={tagLighthouseImg}
                alt="TAG Unlimited Clothing Lighthouse Scores"
                className="w-full rounded-lg"
              />

              {/* Accent badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <TrendingUp className="w-4 h-4 text-accent" />
                <span className="text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                  Perfect Scores Achieved
                </span>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Right: Score Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                TAG Unlimited Clothing
              </h3>

              {/* Score cards */}
              {[
                { label: "Performance", score: 96, description: "Lightning-fast load times" },
                { label: "Accessibility", score: 96, description: "WCAG AA compliant" },
                { label: "Best Practices", score: 96, description: "Industry standards met" },
                { label: "SEO", score: 100, description: "Perfect search optimization" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 flex items-center justify-between group hover:border-accent/30 transition-colors"
                >
                  <div className="flex-1">
                    <div className="text-sm text-white/60 mb-1">{metric.label}</div>
                    <div className="text-xs text-white/40">{metric.description}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Progress circle */}
                    <div className="relative w-16 h-16">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-white/10"
                        />
                        <motion.circle
                          cx="32"
                          cy="32"
                          r="28"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 28}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                          whileInView={{
                            strokeDashoffset: 2 * Math.PI * 28 * (1 - metric.score / 100)
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                          className="text-accent"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                          {metric.score}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-accent/10 border border-accent/30 rounded-xl p-6 mt-8"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    Your Website Can Achieve This Too
                  </div>
                  <p className="text-sm text-white/60">
                    From 62/100 to 96-100/100. Full CRM integration. Complete business system.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
