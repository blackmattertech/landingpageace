import { motion } from "motion/react";
import { Globe, Users, Database, BarChart, Zap } from "lucide-react";

const stages = [
  { icon: Globe, label: "Website", color: "from-blue-500 to-cyan-500" },
  { icon: Users, label: "Leads", color: "from-cyan-500 to-teal-500" },
  { icon: Database, label: "CRM", color: "from-teal-500 to-green-500" },
  { icon: BarChart, label: "ERP", color: "from-green-500 to-emerald-500" },
  { icon: Zap, label: "Growth", color: "from-emerald-500 to-accent" }
];

export function ScaleVision() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            From Website → System → <span className="text-accent">Scale</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A complete transformation roadmap for your business operations
          </p>
        </motion.div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-6">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-center gap-4">
                {/* Stage number and icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center`}>
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span className="text-xs text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Stage label */}
                <div className="flex-1">
                  <div className="text-xl" style={{ fontFamily: 'var(--font-display)' }}>
                    {stage.label}
                  </div>
                </div>
              </div>

              {/* Connector */}
              {index < stages.length - 1 && (
                <div className="flex justify-center py-3 ml-8">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.3 }}
                    className={`w-1 h-8 bg-gradient-to-b ${stage.color} origin-top`}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between relative px-8">
            {/* Connection line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 -z-10">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-blue-500 via-teal-500 to-accent origin-left rounded-full"
              />
            </div>

            {stages.map((stage, index) => (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center"
              >
                {/* Stage icon */}
                <div className="relative mb-4">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg`}>
                    <stage.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                    <span className="text-sm text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Stage label */}
                <div className="text-xl text-center" style={{ fontFamily: 'var(--font-display)' }}>
                  {stage.label}
                </div>

                {/* Arrow */}
                {index < stages.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    className="absolute left-full top-1/2 -translate-y-1/2 ml-4 text-accent text-2xl"
                  >
                    →
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-2xl px-8 py-6">
            <p className="text-lg md:text-xl text-white/90">
              This isn't a redesign. <br />
              <span className="text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                This is a complete revenue and operations system.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
