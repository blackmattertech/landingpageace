import { motion } from "motion/react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "TAG Unlimited Clothing",
    role: "E-commerce Brand",
    content: "Black Matter transformed our website from a basic catalog to a high-performance sales system. Our load times dropped from 7s to 1.2s, and conversions tripled.",
    metric: "96/100 Performance Score"
  },
  {
    name: "ACE Gifting Solutions",
    role: "B2B Corporate Gifting",
    content: "The performance analysis revealed issues we didn't even know existed. Now we're working with Black Matter to build a complete CRM-integrated system.",
    metric: "Performance audit completed"
  }
];

export function SocialProof() {
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
            Trusted by <span className="text-accent">Forward-Thinking</span> Businesses
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent"
                >
                  <Quote className="w-6 h-6" />
                </motion.div>
                <div className="text-right">
                  <div className="text-sm text-accent" style={{ fontFamily: 'var(--font-display)' }}>
                    {testimonial.metric}
                  </div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="pt-4 border-t border-white/10">
                <div className="font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                  {testimonial.name}
                </div>
                <div className="text-sm text-white/60">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
