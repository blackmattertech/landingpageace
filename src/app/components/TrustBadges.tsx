import { motion } from "motion/react";
import { Shield, Zap, Award, HeartHandshake } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Data Secure",
    description: "Enterprise-grade security"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "2-4 week turnaround"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "95+ performance guaranteed"
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Support",
    description: "24/7 technical assistance"
  }
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-6 text-center group hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg bg-accent/20 flex items-center justify-center text-accent"
              >
                <badge.icon className="w-5 h-5 md:w-6 md:h-6" />
              </motion.div>
              <div className="text-sm md:text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {badge.title}
              </div>
              <div className="text-xs text-white/60">
                {badge.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
