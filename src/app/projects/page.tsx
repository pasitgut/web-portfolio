"use client";

import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <DotGrid />
      <Navbar />
      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16 pt-32 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 mb-12 transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Home
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <p className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.15em] mb-4">
            Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            All Projects
          </h1>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400 mb-16 max-w-md">
            A comprehensive list of things I&apos;ve built, experimented with, or
            contributed to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.projects.map((project, index) => (
            <Link
              href={`/projects/${project.slug}`}
              key={index}
              className="block group"
            >
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full p-6 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                  />
                </div>
                <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
