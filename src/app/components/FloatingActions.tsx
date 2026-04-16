import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, X } from "lucide-react";

const WHATSAPP_NUMBER = "917483618278"; // India format with country code
const PHONE_NUMBER = "+917483618278";

export function FloatingActions() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi Black Matter Technologies! I'm interested in learning more about your system-driven website solutions."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = `tel:${PHONE_NUMBER}`;
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* Call Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={handleCall}
              className="group flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                Call Now
              </span>
            </motion.button>

            {/* WhatsApp Button */}
            <motion.button
              initial={{ scale: 0, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0, opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              onClick={handleWhatsApp}
              className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                WhatsApp
              </span>
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-all ${
          isExpanded
            ? "bg-white text-black hover:bg-gray-100"
            : "bg-accent hover:bg-accent/90 text-white"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {/* Ripple effect */}
        {!isExpanded && (
          <>
            <motion.div
              className="absolute inset-0 rounded-full bg-accent"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-accent"
              animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </>
        )}

        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Tooltip - shows after 5 seconds */}
      {!isExpanded && (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 5 }}
          className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap pointer-events-none"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Need help? Chat with us!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-white" />
        </motion.div>
      )}
    </div>
  );
}
