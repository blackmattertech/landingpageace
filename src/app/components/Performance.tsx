import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { AlertTriangle } from "lucide-react";
import lighthouseImg from "../../imports/image.png";
import webVitalsImg from "../../imports/image-1.png";
import optimizationImg from "../../imports/image-2.png";

const metrics = [
  { label: "Performance", before: 62, after: 98, color: "accent" },
  { label: "Accessibility", before: 66, after: 95, color: "accent" },
  { label: "Best Practices", before: 96, after: 100, color: "accent" },
  { label: "SEO", before: 82, after: 100, color: "accent" }
];

const issues = [
  { issue: "Improve image delivery", savings: "41,949 KiB", severity: "critical" },
  { issue: "Use efficient cache lifetimes", savings: "7,767 KiB", severity: "critical" },
  { issue: "Document request latency", savings: "501 KiB", severity: "warning" },
  { issue: "Legacy JavaScript", savings: "60 KiB", severity: "warning" }
];

const keyMetrics = [
  { label: "First Contentful Paint", value: "1.8s", status: "poor" },
  { label: "Largest Contentful Paint", value: "7.3s", status: "poor" },
  { label: "Speed Index", value: "2.4s", status: "poor" },
  { label: "Total Blocking Time", value: "120ms", status: "good" }
];

export function Performance() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Performance Isn't a Guess. <br />
            <span className="text-accent">It's Measured.</span>
          </h2>
          <p className="text-white/60 mt-4">
            Live data from <span className="text-white">acegiftingsolutions.com</span> • Captured April 16, 2026
          </p>
        </motion.div>

        {/* Actual Screenshots */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden"
          >
            <div className="text-xs text-white/40 mb-3 text-center">Google Lighthouse Report - Desktop</div>
            <ImageWithFallback
              src={lighthouseImg}
              alt="Lighthouse Performance Scores"
              className="w-full rounded-lg"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden"
            >
              <div className="text-xs text-white/40 mb-3">Core Web Vitals Breakdown</div>
              <ImageWithFallback
                src={webVitalsImg}
                alt="Core Web Vitals Metrics"
                className="w-full rounded-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 overflow-hidden"
            >
              <div className="text-xs text-white/40 mb-3">Optimization Opportunities</div>
              <ImageWithFallback
                src={optimizationImg}
                alt="Performance Insights"
                className="w-full rounded-lg"
              />
            </motion.div>
          </div>
        </div>

        {/* Current Metrics Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-destructive/10 border border-destructive/30 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-6 h-6 text-destructive" />
            <h3 className="text-xl md:text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              Critical Issues Detected
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-background/50 rounded-lg p-4 flex items-center justify-between"
              >
                <span className="text-white/80 text-sm">{metric.label}</span>
                <span className={`text-lg ${metric.status === 'poor' ? 'text-destructive' : 'text-accent'}`} style={{ fontFamily: 'var(--font-display)' }}>
                  {metric.value}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="text-sm text-white/60 mb-3">Potential Savings</div>
            {issues.map((item, index) => (
              <motion.div
                key={item.issue}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between bg-background/50 rounded-lg p-3"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${item.severity === 'critical' ? 'bg-destructive' : 'bg-orange-500'}`} />
                  <span className="text-white/80 text-sm">{item.issue}</span>
                </div>
                <span className="text-destructive text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.savings}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/60 text-sm">
              <span className="text-destructive">Total potential savings: ~50 MB</span> •
              Estimated load time reduction: <span className="text-destructive">4-5 seconds</span>
            </p>
          </div>
        </motion.div>

        {/* Black Matter Solution - Before/After Comparison */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-accent">Black Matter Solution</span> - Projected Scores
            </h3>
            <p className="text-white/60">What your website will achieve with our system-driven approach</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-6"
              >
                <div className="text-center">
                  <div className="text-sm text-white/60 mb-4">{metric.label}</div>

                  {/* Before Score */}
                  <div className="mb-4">
                    <div className="text-xs text-white/40 mb-2">Current</div>
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-white/10"
                        />
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                          whileInView={{
                            strokeDashoffset: 2 * Math.PI * 40 * (1 - metric.before / 100)
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                          className={metric.before >= 90 ? "text-accent" : metric.before >= 50 ? "text-orange-500" : "text-destructive"}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>
                          {metric.before}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="text-accent text-sm mb-4">↓</div>

                  {/* After Score */}
                  <div>
                    <div className="text-xs text-white/40 mb-2">With Black Matter</div>
                    <div className="relative w-24 h-24 mx-auto">
                      <svg className="w-full h-full transform -rotate-90">
                        <circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          className="text-white/10"
                        />
                        <motion.circle
                          cx="48"
                          cy="48"
                          r="40"
                          stroke="currentColor"
                          strokeWidth="6"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 40}`}
                          initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                          whileInView={{
                            strokeDashoffset: 2 * Math.PI * 40 * (1 - metric.after / 100)
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                          className="text-accent"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                          {metric.after}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Improvement */}
                <div className="text-center pt-4 border-t border-white/10">
                  <div className="text-accent text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                    +{metric.after - metric.before} points
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
