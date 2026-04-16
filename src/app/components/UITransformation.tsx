import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    title: "Navigation",
    before: "Cluttered menu, unclear hierarchy",
    after: "Clean, intuitive navigation with clear CTAs"
  },
  {
    title: "Call-to-Actions",
    before: "Generic buttons, low visibility",
    after: "Strategic, high-contrast CTAs that convert"
  },
  {
    title: "Visual Clarity",
    before: "Busy layouts, competing elements",
    after: "Focused hierarchy, clear user flow"
  },
  {
    title: "Mobile Experience",
    before: "Desktop-first, poor mobile UX",
    after: "Mobile-optimized, thumb-friendly design"
  }
];

export function UITransformation() {
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
            Designed for Users. <br />
            <span className="text-accent">Engineered for Action.</span>
          </h2>
        </motion.div>

        {/* Transformation Cards */}
        <div className="space-y-8 md:space-y-12">
          {transformations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl mb-6 text-center md:text-left" style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </h3>

                {/* Mobile: Stacked */}
                <div className="md:hidden space-y-4">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4">
                    <div className="text-xs text-destructive mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      BEFORE
                    </div>
                    <p className="text-white/80">{item.before}</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-5 h-5 text-accent rotate-90" />
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4">
                    <div className="text-xs text-accent mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      AFTER
                    </div>
                    <p className="text-white/80">{item.after}</p>
                  </div>
                </div>

                {/* Desktop: Side by side */}
                <div className="hidden md:grid md:grid-cols-2 gap-6 items-center">
                  <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                    <div className="text-xs text-destructive mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      BEFORE
                    </div>
                    <p className="text-white/80">{item.before}</p>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-6 md:col-start-2">
                    <div className="text-xs text-accent mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                      AFTER
                    </div>
                    <p className="text-white/80">{item.after}</p>
                  </div>
                </div>
              </div>

              {/* Visual representation */}
              <div className="border-t border-white/10 p-6 md:p-8 bg-white/[0.02]">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  {/* Before mockup */}
                  <div className="space-y-2">
                    <div className="text-xs text-white/40 text-center mb-3">Current Design</div>
                    <div className="aspect-[4/3] bg-white/5 rounded-lg border border-destructive/30 p-3 md:p-4">
                      <div className="space-y-2 opacity-50">
                        <div className="h-2 bg-white/10 rounded w-3/4" />
                        <div className="h-2 bg-white/10 rounded w-full" />
                        <div className="h-2 bg-white/10 rounded w-2/3" />
                        <div className="h-8 bg-destructive/20 rounded mt-4" />
                      </div>
                    </div>
                  </div>

                  {/* After mockup */}
                  <div className="space-y-2">
                    <div className="text-xs text-white/40 text-center mb-3">Black Matter Design</div>
                    <div className="aspect-[4/3] bg-white/5 rounded-lg border border-accent/30 p-3 md:p-4">
                      <div className="space-y-3">
                        <div className="h-3 bg-white/20 rounded w-4/5" />
                        <div className="h-2 bg-white/10 rounded w-full" />
                        <div className="h-10 bg-accent/40 rounded mt-4 flex items-center justify-center">
                          <div className="text-[8px] text-white/60">Clear CTA</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
