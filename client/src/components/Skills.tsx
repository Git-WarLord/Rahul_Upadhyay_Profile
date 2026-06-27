import { motion } from "framer-motion";
import { Database, Brain, Layout, Server, TrendingUp } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants, skillBarVariants } from "@/lib/animations";

const iconMap: { [key: string]: React.ReactNode } = {
  database: <Database size={24} />,
  brain: <Brain size={24} />,
  layout: <Layout size={24} />,
  server: <Server size={24} />,
  "trending-up": <TrendingUp size={24} />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-surface">
      <div className="max-w-6xl mx-auto">
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
              {portfolioData.skills.eyebrow}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2 variants={fadeUpVariants} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-4">
            {portfolioData.skills.headline}
          </motion.h2>

          <motion.p variants={fadeUpVariants} custom={2} className="font-body text-lg text-slate-muted max-w-2xl mx-auto">
            {portfolioData.skills.subheadline}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.skills.categories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              className="bg-navy-dark border border-cyan-500/20 rounded-xl p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300"
              variants={fadeUpVariants}
              custom={catIdx}
              whileHover={{ y: -4 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="text-cyan-400">{iconMap[category.icon]}</div>
                <h3 className="font-heading text-lg font-bold text-slate-light">{category.title}</h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-slate-light">{skill.name}</span>
                      <span className="text-xs text-cyan-400 font-medium">{skill.level}%</span>
                    </div>

                    {/* Skill Bar */}
                    <div className="h-2 bg-navy-hover rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
                        variants={skillBarVariants}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning */}
        <motion.div
          className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-xl p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="font-heading text-lg font-bold text-slate-light mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.learning.map((item, idx) => (
              <motion.span
                key={idx}
                className="text-sm bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full border border-cyan-500/30 font-body"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 212, 255, 0.3)" }}
              >
                → {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
