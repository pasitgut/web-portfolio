import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <DotGrid />
      <Navbar />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <footer className="px-8 md:px-16 py-8 border-t border-black/5 dark:border-white/5">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-neutral-400 dark:text-neutral-500">
              © 2026 Pasit Polwisepornsuk
            </p>
            <p className="text-[12px] text-neutral-400 dark:text-neutral-500">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
