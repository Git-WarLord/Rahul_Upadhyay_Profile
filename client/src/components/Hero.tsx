import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronDown } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy-surface to-navy-dark opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          variants={staggerContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            className="flex items-center justify-center gap-2"
          >
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-body text-sm font-medium tracking-widest uppercase">
              {portfolioData.hero.eyebrow}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUpVariants}
            custom={1}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="text-slate-light">{portfolioData.hero.headline.split("\n")[0]}</span>
            <br />
            <span className="gradient-text">{portfolioData.hero.headline.split("\n")[1]}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUpVariants}
            custom={2}
            className="font-body text-lg text-slate-muted max-w-2xl mx-auto leading-relaxed"
          >
            {portfolioData.hero.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUpVariants}
            custom={3}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            {portfolioData.hero.ctas.map((cta, idx) => (
              <motion.a
                key={idx}
                href={cta.href}
                target={cta.href.endsWith(".pdf") ? "_blank" : undefined}
                rel={cta.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                className={`px-8 py-3 rounded-lg font-body font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  idx === 0
                    ? "bg-cyan-500/20 border border-cyan-400 text-cyan-400 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20"
                    : "bg-violet-500/20 border border-violet-400 text-violet-400 hover:bg-violet-500/30 hover:shadow-lg hover:shadow-violet-500/20"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {cta.label}
                {cta.icon === "arrow-right" && <ArrowRight size={18} />}
                {cta.icon === "download" && <Download size={18} />}
              </motion.a>
            ))}
          </motion.div>

          {/* Stat Chips */}
          <motion.div
            variants={fadeUpVariants}
            custom={4}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
          >
            {portfolioData.hero.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="glass-card p-4 text-center"
                whileHover={{ y: -4, borderColor: "rgba(0, 212, 255, 0.4)" }}
              >
                <div className="text-2xl font-display font-bold text-cyan-400">{stat.value}</div>
                <div className="text-xs text-slate-muted font-body mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-cyan-400/50" size={24} />
      </motion.div>
    </section>
  );
}
