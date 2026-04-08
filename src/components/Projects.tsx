"use client";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="w-full px-8 py-12 border-t border-neutral-200/60 pb-40">
      <div className="flex justify-between items-end mb-12">
        <h2 className="text-xl font-medium text-neutral-800 tracking-tight">Selected Projects</h2>
        <Link
          href="/projects"
          className="text-[13px] font-medium text-neutral-500 hover:text-neutral-800 flex items-center gap-1 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
        >
          See all
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {portfolioData.projects.slice(0, 4).map((project, index) => {
          // Create an alternating asymmetric rhythm (e.g. 7 cols, 5 cols, 5 cols, 7 cols)
          const isLarge = index === 0 || index === 3;
          const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

          return (
            <Link href={`/projects/${project.slug}`} key={index} className={`block group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FCFAF5] ${colSpan}`}>
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white border border-neutral-200/60 p-8 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] group-hover:border-neutral-300 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-colors duration-300 h-full flex flex-col"
              >
                <h3 className="font-semibold text-[17px] text-neutral-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-[14px] text-neutral-500 leading-relaxed mb-8 flex-grow max-w-[65ch]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 mb-1 bg-[#FCFAF5] border border-neutral-200/60 text-neutral-600 text-[11px] rounded-md font-mono font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}