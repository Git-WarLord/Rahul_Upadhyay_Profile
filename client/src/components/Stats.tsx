import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

interface StatValue {
  value: number;
  label: string;
}

function CountUpNumber({ value, label }: StatValue) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.toString());

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-5xl sm:text-6xl font-bold text-cyan-400 mb-2">{count}+</div>
      <div className="font-body text-slate-muted text-sm">{label}</div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-dark to-navy-surface">
      <div className="max-w-6xl mx-auto">
        {/* Background glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 pointer-events-none" />

        <motion.div
          className="relative z-10 grid md:grid-cols-5 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.stats.map((stat, idx) => (
            <motion.div key={idx} variants={fadeUpVariants} custom={idx}>
              <CountUpNumber value={parseInt(stat.value)} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
