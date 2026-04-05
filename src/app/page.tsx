import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import GitHubGraph from "@/components/GitHubGraph";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#FCFAF5]  overflow-hidden">
      
      {/* TOP GRID BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 h-[400px] w-full">
  
  {/* GRID */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
      maskImage:
        "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
    }}
  />
</div>

      {/* CONTENT */}
      <div className="relative max-w-4xl mx-auto border-x border-neutral-200/60 min-h-screen flex flex-col">
        <Navbar />
        <Hero />
        <Skills />
        <GitHubGraph />
        <Projects />
      </div>
    </main>
  );
}