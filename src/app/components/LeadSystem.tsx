import { motion } from "motion/react";
import { MousePointer, Database, MessageCircle, TrendingUp, Facebook, Instagram } from "lucide-react";

const flowSteps = [
  { icon: MousePointer, label: "Website Visit", description: "User lands on site" },
  { icon: Database, label: "Auto Capture", description: "Lead data recorded" },
  { icon: MessageCircle, label: "WhatsApp", description: "Instant engagement" },
  { icon: TrendingUp, label: "Conversion", description: "Deal closed" }
];

const features = [
  "Auto lead capture from all sources",
  "Real-time lead dashboard",
  "Status tracking & pipeline views",
  "Team assignment & notifications",
  "No missed follow-ups ever"
];

const integrations = [
  { icon: MessageCircle, name: "WhatsApp Business", description: "Direct messaging & broadcasts" },
  { icon: Facebook, name: "Facebook", description: "Lead ads integration" },
  { icon: Instagram, name: "Instagram", description: "DM automation" }
];

export function LeadSystem() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative">
      <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
        {/* Lead System Flow */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Every Lead, <span className="text-accent">Tracked</span>. <br />
              Every Opportunity, <span className="text-accent">Actioned</span>.
            </h2>
          </motion.div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-4">
            {flowSteps.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.label}
                    </div>
                    <div className="text-sm text-white/60">{step.description}</div>
                  </div>
                  <div className="text-2xl text-white/20" style={{ fontFamily: 'var(--font-display)' }}>
                    {index + 1}
                  </div>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="text-accent text-2xl">↓</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between relative">
              {/* Connection line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/10 -translate-y-1/2 -z-10" />
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.3 }}
                className="absolute top-1/2 left-0 right-0 h-px bg-accent -translate-y-1/2 -z-10 origin-left"
              />

              {flowSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative flex-1 mx-2"
                >
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center relative">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      {step.label}
                    </div>
                    <div className="text-sm text-white/60">{step.description}</div>

                    {/* Step number */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-accent flex items-center justify-center text-accent text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                      {index + 1}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-12 md:mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-white/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Communication Integration */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h3 className="text-2xl md:text-3xl lg:text-5xl mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              Built-in Communication. <br />
              <span className="text-accent">No Extra Tools Needed.</span>
            </h3>
            <p className="text-white/60 max-w-2xl mx-auto">
              Engage leads instantly through WhatsApp and Meta platforms. All integrated into one system.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {integrations.map((integration, index) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 hover:border-accent/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <integration.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {integration.name}
                  </h4>
                  <p className="text-sm text-white/60">{integration.description}</p>
                </div>
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
            <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-display)' }}>
              From first click to final conversion—everything happens in one system.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
