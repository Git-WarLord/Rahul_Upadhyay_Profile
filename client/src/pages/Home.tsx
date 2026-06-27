import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ParticleCanvas from "@/components/ParticleCanvas";
import Story from "@/components/Story";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Differentiator from "@/components/Differentiator";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-dark text-slate-light">
      <ParticleCanvas />
      <Navbar />
      <Hero />
      <Story />
      <Skills />
      <Projects />
      <Differentiator />
      <Experience />
      <Stats />
      <Contact />
      <Footer />
    </div>
  );
}
