import { motion } from "framer-motion";
import { Code, BarChart3, Zap } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const iconMap: { [key: string]: React.ReactNode } = {
  code: <Code size={32} />,
  "chart-line": <BarChart3 size={32} />,
  zap: <Zap size={32} />,
};

export default function Differentiator() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-dark">
      <div className="max-w-6xl mx-auto">
        {/* Main Headline */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            <span className="text-slate-light">Most data scientists can't ship production code.</span>
            <br />
            <span className="text-slate-light">Most engineers can't think in data.</span>
            <br />
            <span className="gradient-text">I do both.</span>
          </h2>
        </motion.div>

        {/* Three Columns */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.differentiator.columns.map((column, idx) => (
            <motion.div
              key={idx}
              className="bg-navy-surface border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-500/40 transition-all duration-300"
              variants={fadeUpVariants}
              custom={idx}
              whileHover={{ y: -8 }}
            >
              <div className="text-cyan-400 mb-4">{iconMap[column.icon]}</div>

              <h3 className="font-display text-2xl font-bold text-slate-light mb-4">{column.title}</h3>

              <p className="font-body text-slate-muted leading-relaxed">{column.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
