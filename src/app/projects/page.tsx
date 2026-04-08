"use client";
import Navbar from "@/components/Navbar";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-[#FCFAF5] overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 h-[400px] w-full">
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

      <div className="relative max-w-4xl mx-auto border-x border-neutral-200/60 min-h-screen flex flex-col">
        <Navbar />

        <div className="px-8 py-10 flex-grow">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[13px] text-neutral-500 hover:text-neutral-800 mb-8 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Home
          </Link>

          <h1 className="text-2xl font-medium text-neutral-900 mb-2">All Projects</h1>
          <p className="text-[14px] text-neutral-500 mb-10">
            A comprehensive list of things I&apos;ve built, experimented with, or contributed to.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-20">
            {portfolioData.projects.map((project, index) => (
              <Link href={`/projects/${project.slug}`} key={index} className="block group rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFAF5]">
                <motion.div 
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="bg-white border border-neutral-200 p-5 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-neutral-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-colors duration-300 h-full flex flex-col"
                >
                  <h3 className="font-medium text-[15px] text-neutral-800 mb-1.5 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-[#FDFBF7] border border-neutral-200/60 text-neutral-600 text-[10px] rounded-md font-mono font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
