import { motion } from "motion/react";
import logoMark from "@/imports/logo.svg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-3 ${className}`}
    >
      <motion.img
        src={logoMark}
        alt=""
        width={485}
        height={618}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="h-10 w-auto md:h-12 max-w-[2.75rem] md:max-w-[3.25rem] object-contain object-left shrink-0"
        aria-hidden
      />

      <div className="flex flex-col min-w-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-baseline gap-1"
        >
          <span
            className="text-xl md:text-2xl tracking-tight text-white"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BLACK
          </span>
          <span
            className="text-xl md:text-2xl tracking-tight text-accent"
            style={{ fontFamily: "var(--font-display)" }}
          >
            MATTER
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-[10px] text-white/40 tracking-widest origin-left truncate"
          style={{ fontFamily: "var(--font-body)" }}
        >
          TECHNOLOGIES
        </motion.div>
      </div>
    </motion.div>
  );
}
