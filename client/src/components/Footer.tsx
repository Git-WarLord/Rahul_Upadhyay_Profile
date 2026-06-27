import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 bg-navy-surface border-t border-cyan-500/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="font-body text-slate-muted text-sm">
              Designed and engineered by Rahul Upadhyay. Built with React, Vite, Tailwind CSS, and Framer Motion.
            </p>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="font-body text-slate-muted text-sm">
              © 2026 Rahul Upadhyay. All rights reserved.
            </p>
          </div>
        </motion.div>

        {/* Scroll to top button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/30 transition-all duration-200"
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ↑
        </motion.button>
      </div>
    </footer>
  );
}
