import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-dark">
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
              WORK
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2 variants={fadeUpVariants} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-4">
            Things I've Shipped.
          </motion.h2>
        </motion.div>

        {/* Featured Project */}
        {portfolioData.projects[0]?.featured && (
          <motion.div
            className="mb-12 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-xl overflow-hidden hover:border-cyan-500/40 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -8 }}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-3xl font-bold text-slate-light mb-2">
                    {portfolioData.projects[0].title}
                  </h3>
                  <p className="text-cyan-400 font-heading text-lg">{portfolioData.projects[0].subtitle}</p>
                </div>
                <span className="text-xs bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                  LIVE
                </span>
              </div>

              <p className="font-body text-slate-light text-lg leading-relaxed mb-6">
                {portfolioData.projects[0].description}
              </p>

              {/* Metrics */}
              {portfolioData.projects[0].metrics && (
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {portfolioData.projects[0].metrics.map((metric, idx) => (
                    <div key={idx} className="bg-navy-surface/50 rounded-lg p-4 border border-cyan-500/10">
                      <p className="text-xs text-slate-muted font-body mb-1">{metric.label}</p>
                      <p className="text-xl font-display font-bold text-cyan-400">{metric.value}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {portfolioData.projects[0].tags.map((tag) => (
                  <span key={tag} className="text-xs bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded border border-cyan-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {portfolioData.projects[0].links?.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.href}
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-500/30 transition-all duration-200 font-body text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.type === "live" && <ExternalLink size={16} />}
                    {link.type === "github" && <Github size={16} />}
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Projects */}
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {portfolioData.projects.slice(1).map((project, idx) => (
            <motion.div
              key={idx}
              className="bg-navy-surface border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300"
              variants={fadeUpVariants}
              custom={idx}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-heading text-xl font-bold text-slate-light">{project.title}</h3>
                {project.status && (
                  <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded border border-amber-500/30">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="text-cyan-400 font-body text-sm mb-3">{project.subtitle}</p>
              <p className="font-body text-slate-muted text-sm leading-relaxed mb-4">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
