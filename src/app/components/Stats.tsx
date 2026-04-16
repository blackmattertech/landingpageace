import { motion } from "motion/react";
import { StatCard } from "./StatsCounter";
import { Zap, TrendingUp, Users, Award } from "lucide-react";

export function Stats() {
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
            Results That <span className="text-accent">Speak for Themselves</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Real metrics from our implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <StatCard
            value={98}
            suffix="+"
            label="Avg. Performance Score"
            icon={<Zap className="w-6 h-6" />}
            delay={0}
          />
          <StatCard
            value={3}
            suffix="x"
            label="Lead Conversion Increase"
            icon={<TrendingUp className="w-6 h-6" />}
            delay={0.1}
          />
          <StatCard
            value={100}
            suffix="%"
            label="System Integration"
            icon={<Award className="w-6 h-6" />}
            delay={0.2}
          />
          <StatCard
            value={50}
            suffix="+"
            label="Businesses Transformed"
            icon={<Users className="w-6 h-6" />}
            delay={0.3}
          />
        </div>

        {/* Additional metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-4xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              <StatCard value={7.3} decimals={1} suffix="s → 1.2s" label="Load Time Reduction" delay={0.5} />
            </div>
          </div>
          <div className="text-center">
            <StatCard value={50} suffix=" MB" label="Avg. Data Saved Per Site" delay={0.6} />
          </div>
          <div className="text-center">
            <StatCard value={0} label="Missed Leads (Zero Tolerance)" delay={0.7} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
