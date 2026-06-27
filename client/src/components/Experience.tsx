import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-surface">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUpVariants} custom={0} className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400" />
            <span className="text-cyan-400 font-body text-sm font-medium tracking-widest uppercase">
              EXPERIENCE
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2 variants={fadeUpVariants} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Career Timeline.
          </motion.h2>
        </motion.div>

        {/* Experience List */}
        <motion.div
          className="space-y-4"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              variants={fadeUpVariants}
              custom={idx}
              className="bg-navy-dark border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-navy-hover/50 transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl font-bold text-slate-light">{exp.company}</h3>
                    {exp.badge && (
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded border border-cyan-500/30">
                        {exp.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-cyan-400 font-body text-sm mb-1">{exp.role}</p>
                  <p className="text-slate-muted font-body text-xs">{exp.period}</p>
                </div>

                <motion.div
                  animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-cyan-400"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>

              {/* Expanded Content */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: expandedId === exp.id ? "auto" : 0,
                  opacity: expandedId === exp.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-cyan-500/20"
              >
                <div className="p-6 space-y-4">
                  {exp.duration && (
                    <p className="text-slate-muted font-body text-sm">
                      <span className="text-cyan-400 font-medium">Duration:</span> {exp.duration}
                    </p>
                  )}

                  <div>
                    <h4 className="text-slate-light font-heading font-semibold mb-3">Key Contributions</h4>
                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, bulletIdx) => (
                        <li key={bulletIdx} className="flex gap-3 font-body text-slate-light text-sm">
                          <span className="text-cyan-400 flex-shrink-0">▸</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
