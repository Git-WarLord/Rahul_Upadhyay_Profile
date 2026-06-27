import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function Story() {
  return (
    <section id="story" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-dark">
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
              {portfolioData.story.eyebrow}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2 variants={fadeUpVariants} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-4">
            {portfolioData.story.headline}
          </motion.h2>

          <motion.p variants={fadeUpVariants} custom={2} className="font-body text-lg text-slate-muted max-w-2xl mx-auto">
            {portfolioData.story.subheadline}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-400 via-violet-400 to-cyan-400 hidden md:block"
            style={{ height: "100%", top: 0 }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-12 md:space-y-16">
            {portfolioData.story.chapters.map((chapter, idx) => (
              <motion.div
                key={chapter.id}
                className="md:grid md:grid-cols-2 md:gap-8 md:items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                {/* Left side - content on odd, empty on even */}
                <div className={idx % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8"}>
                  <motion.div
                    className="bg-navy-surface border border-cyan-500/20 rounded-xl p-6 backdrop-blur-md hover:border-cyan-500/40 transition-all duration-300"
                    whileHover={{ y: -4, boxShadow: "0 0 20px rgba(0, 212, 255, 0.2)" }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-400 font-display text-2xl font-bold">{chapter.year}</span>
                      {chapter.badge && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                          {chapter.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading text-xl font-bold text-slate-light mb-1">{chapter.title}</h3>
                    <p className="text-sm text-slate-muted mb-3">{chapter.company}</p>
                    {chapter.role && <p className="text-sm text-violet-400 mb-3">{chapter.role}</p>}

                    <p className="font-body text-slate-light text-sm leading-relaxed mb-4">{chapter.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {chapter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded border border-cyan-500/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    {chapter.achievements && (
                      <div className="flex flex-wrap gap-2">
                        {chapter.achievements.map((achievement) => (
                          <span key={achievement} className="text-xs bg-emerald-500/10 text-emerald-300 px-2 py-1 rounded">
                            {achievement}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-navy-dark z-10"
                  style={{ top: "24px" }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
