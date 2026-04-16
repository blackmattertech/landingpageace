import { motion } from "motion/react";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 md:space-y-12"
        >
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <div className="px-4 py-2 bg-accent/20 border border-accent/40 rounded-full">
                <span className="text-sm md:text-base text-accent">Ready to Transform?</span>
              </div>
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl" style={{ fontFamily: 'var(--font-display)' }}>
              Let's Fix <br />
              <span className="text-accent">What's Not Working</span>
            </h2>

            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto">
              We've already done the analysis. Let's walk you through how this can be
              implemented for your business.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/917483618278?text=Hi!%20I%27d%20like%20to%20book%20a%2030-min%20strategy%20call%20to%20discuss%20my%20website."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto bg-accent text-black px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Calendar className="w-5 h-5" />
              <span className="text-lg">Book a 30-min Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="tel:+917483618278"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-lg">or Call: +91 748-361-8278</span>
            </motion.a>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 md:pt-12 max-w-2xl mx-auto"
          >
            <motion.a
              href="https://wa.me/917483618278?text=Hi!%20I%27d%20like%20to%20discuss%20my%20website%20project."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-[#25D366] text-white p-6 rounded-xl text-center group hover:shadow-[0_0_30px_rgba(37,211,102,0.3)] transition-all"
            >
              <div className="text-2xl mb-2">💬</div>
              <div className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>WhatsApp</div>
              <div className="text-sm text-white/80">Instant Response</div>
            </motion.a>

            <motion.a
              href="tel:+917483618278"
              whileHover={{ scale: 1.05, y: -2 }}
              className="bg-blue-500 text-white p-6 rounded-xl text-center group hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
            >
              <div className="text-2xl mb-2">📞</div>
              <div className="text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>Call Direct</div>
              <div className="text-sm text-white/80">+91 748-361-8278</div>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
