import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-navy-dark/80 backdrop-blur-xl border-b border-cyan-500/20"
            : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.a
              href="#"
              className="flex items-center gap-2 font-display text-2xl font-bold text-cyan-400"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663736366063/AJyMkmXbyKVYbgTir8psJo/logo-ru-GStgJVJ45rsFApMqoqpSLU.webp"
                alt="RU"
                className="w-8 h-8"
              />
              <span className="hidden sm:inline">Rahul Upadhyay</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {portfolioData.nav.links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-slate-light hover:text-cyan-400 transition-colors duration-200 font-body text-sm"
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="#"
                className="px-4 py-2 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 font-body text-sm"
                whileHover={{ borderColor: "#00D4FF", boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)" }}
              >
                Download CV ↓
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-light hover:text-cyan-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 top-16 z-40 bg-navy-dark/95 backdrop-blur-xl md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col gap-4 p-6">
            {portfolioData.nav.links.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-slate-light hover:text-cyan-400 transition-colors duration-200 font-body text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ x: 10 }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#"
              className="mt-4 px-4 py-3 border border-cyan-500/50 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 font-body text-center"
              whileHover={{ borderColor: "#00D4FF" }}
            >
              Download CV ↓
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
