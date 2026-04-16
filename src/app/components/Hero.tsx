import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-20 pt-32 md:pt-20 relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full"
            >
              <span className="text-sm md:text-base text-white/70">Performance Analysis</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-7xl leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Your Website <br />
              <span className="text-white/40">Looks Fine.</span> <br />
              It's Just Not <br />
              <span className="text-accent">Performing.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-xl text-white/60 max-w-xl"
            >
              We analyzed your website across performance, UX, and conversion metrics.
              Here's where you're losing customers—and how we fix it.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="https://wa.me/917483618278?text=Hi%20Black%20Matter%20Technologies!%20I%27m%20interested%20in%20learning%20more%20about%20your%20system-driven%20website%20solutions."
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-accent text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-lg">Get Your Free Analysis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="tel:+917483618278"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-lg">Call Us Now</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right: Visual Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              {/* Real metrics from acegiftingsolutions.com */}
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-xs text-white/40 mb-2">acegiftingsolutions.com</div>
                  <div className="text-sm text-white/60">Current Lighthouse Score</div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-white/60 text-sm">Performance Score</span>
                  <span className="text-2xl" style={{ fontFamily: 'var(--font-display)' }}>62/100</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "62%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-full bg-orange-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-destructive text-2xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>7.3s</div>
                    <div className="text-white/60 text-xs">LCP Time</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="text-destructive text-2xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>2.4s</div>
                    <div className="text-white/60 text-xs">Speed Index</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-white/40 text-xs mb-3">Critical Issues</div>
                  <div className="space-y-2">
                    {[
                      { issue: 'Unoptimized images', savings: '41.9 MB' },
                      { issue: 'Poor cache lifetimes', savings: '7.7 MB' },
                      { issue: 'No lead tracking system', savings: null }
                    ].map((item, i) => (
                      <motion.div
                        key={item.issue}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.2 + i * 0.1 }}
                        className="flex items-center justify-between text-sm"
                      >
                        <div className="flex items-center gap-2 text-white/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive" />
                          {item.issue}
                        </div>
                        {item.savings && (
                          <span className="text-destructive text-xs" style={{ fontFamily: 'var(--font-display)' }}>
                            {item.savings}
                          </span>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-destructive/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
