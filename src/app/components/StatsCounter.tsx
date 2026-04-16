import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

function useCounter({ end, duration = 2, decimals = 0 }: { end: number; duration?: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end * Math.pow(10, decimals)) / Math.pow(10, decimals));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration, decimals]);

  return { count, ref };
}

export function Counter({ end, duration = 2, suffix = "", prefix = "", decimals = 0 }: CounterProps) {
  const { count, ref } = useCounter({ end, duration, decimals });

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  icon?: React.ReactNode;
  delay?: number;
}

export function StatCard({ value, label, suffix = "", prefix = "", decimals = 0, icon, delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center group hover:border-accent/30 transition-all duration-300"
    >
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
          className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center text-accent"
        >
          {icon}
        </motion.div>
      )}
      <div className="text-3xl md:text-4xl lg:text-5xl text-accent mb-2 group-hover:scale-110 transition-transform" style={{ fontFamily: 'var(--font-display)' }}>
        <Counter end={value} suffix={suffix} prefix={prefix} decimals={decimals} duration={2.5} />
      </div>
      <div className="text-sm md:text-base text-white/60">{label}</div>
    </motion.div>
  );
}
