import { motion } from "motion/react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-3 ${className}`}
    >
      {/* Logo Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="relative w-10 h-10 md:w-12 md:h-12"
      >
        {/* Outer ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-accent"
              strokeDasharray="10 5"
            />
          </svg>
        </motion.div>

        {/* Inner geometric shape - representing "matter" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="relative w-6 h-6 md:w-7 md:h-7"
          >
            <div className="absolute inset-0 bg-accent" style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
            }} />
          </motion.div>
        </div>

        {/* Center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-white"
          />
        </div>
      </motion.div>

      {/* Logo Text */}
      <div className="flex flex-col">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-baseline gap-1"
        >
          <span
            className="text-xl md:text-2xl tracking-tight text-white"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            BLACK
          </span>
          <span
            className="text-xl md:text-2xl tracking-tight text-accent"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            MATTER
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-[10px] text-white/40 tracking-widest origin-left"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          TECHNOLOGIES
        </motion.div>
      </div>
    </motion.div>
  );
}
