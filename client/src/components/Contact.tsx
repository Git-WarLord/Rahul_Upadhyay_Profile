import { motion } from "framer-motion";
import { Mail, Phone, Globe, Linkedin, Github } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-navy-dark">
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
              {portfolioData.contact.eyebrow}
            </span>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.h2 variants={fadeUpVariants} custom={1} className="font-display text-4xl sm:text-5xl font-bold mb-4">
            {portfolioData.contact.headline}
          </motion.h2>

          <motion.p variants={fadeUpVariants} custom={2} className="font-body text-lg text-slate-muted max-w-2xl mx-auto">
            {portfolioData.contact.subheadline}
          </motion.p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            variants={fadeUpVariants}
            custom={0}
          >
            {/* Email */}
            <a
              href={`mailto:${portfolioData.contact.email}`}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-surface/50 transition-colors group"
            >
              <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-muted font-body text-sm mb-1">Email</p>
                <p className="text-slate-light font-body hover:text-cyan-400 transition-colors">
                  {portfolioData.contact.email}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${portfolioData.contact.phone}`}
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-surface/50 transition-colors group"
            >
              <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-slate-muted font-body text-sm mb-1">Phone</p>
                <p className="text-slate-light font-body hover:text-cyan-400 transition-colors">
                  {portfolioData.contact.phone}
                </p>
              </div>
            </a>

            {/* Website */}
            <a
              href={`https://${portfolioData.contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-navy-surface/50 transition-colors group"
            >
              <div className="text-cyan-400 mt-1 group-hover:scale-110 transition-transform">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-slate-muted font-body text-sm mb-1">Website</p>
                <p className="text-slate-light font-body hover:text-cyan-400 transition-colors">
                  {portfolioData.contact.website}
                </p>
              </div>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-col justify-center gap-4"
            variants={fadeUpVariants}
            custom={1}
          >
            <p className="text-slate-light font-body mb-4">Connect with me on social platforms</p>
            <div className="flex gap-4">
              {portfolioData.contact.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon === "linkedin" && <Linkedin size={20} />}
                  {link.icon === "github" && <Github size={20} />}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
