import { motion } from "motion/react";
import { Globe, Users, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "High-performance, conversion-optimized websites built on modern frameworks.",
    features: ["95+ Lighthouse scores", "Mobile-first design", "SEO optimized", "Lightning fast"]
  },
  {
    icon: Users,
    title: "CRM Systems",
    description: "Custom CRM solutions that track every lead, interaction, and conversion.",
    features: ["Lead tracking", "Pipeline management", "Team collaboration", "Analytics dashboard"]
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "End-to-end business operations systems integrated with your entire workflow.",
    features: ["Inventory management", "Order processing", "Financial tracking", "Automation"],
    highlight: true
  }
];

export function Services() {
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
            We Don't Build Websites. <br />
            <span className="text-accent">We Build Systems.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative bg-white/5 border rounded-2xl p-6 md:p-8 space-y-6 group hover:bg-white/10 transition-all duration-300 ${
                service.highlight
                  ? 'border-accent shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:shadow-[0_0_40px_rgba(16,185,129,0.25)]'
                  : 'border-white/10 hover:border-accent/30'
              }`}
            >
              {service.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-full text-xs" style={{ fontFamily: 'var(--font-display)' }}>
                  FEATURED
                </div>
              )}

              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  service.highlight ? 'bg-accent text-black' : 'bg-white/10 text-white group-hover:bg-accent/20 group-hover:text-accent'
                }`}
              >
                <service.icon className="w-6 h-6" />
              </motion.div>

              <div>
                <h3 className="text-xl md:text-2xl mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </h3>
                <p className="text-white/60">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      service.highlight ? 'bg-accent' : 'bg-white/40'
                    }`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            Your website should not exist alone. <br />
            <span className="text-white">It should plug into your entire business.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
