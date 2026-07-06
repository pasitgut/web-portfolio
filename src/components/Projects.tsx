"use client";

import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="w-full px-8 md:px-16 py-24 md:py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="mb-4 inline-block px-3 py-1 text-[10px] font-semibold text-orange-700 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800 rounded-full uppercase tracking-[0.15em]">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-16">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {portfolioData.projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

            return (
              <Link
                href={`/projects/${project.slug}`}
                key={index}
                className={`block group ${colSpan}`}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full p-6 md:p-8 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-colors duration-300 flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      size={16}
                      className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-[14px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 flex-grow">
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
