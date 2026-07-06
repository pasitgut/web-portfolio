"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export default function Experience() {
  const exp = portfolioData.experience[0];

  return (
    <section className="w-full px-8 md:px-16 py-24 md:py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="flex items-center gap-3 mb-12">
            <span className="px-3 py-1 text-[10px] font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 rounded-full uppercase tracking-[0.15em]">
              Experience
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-semibold text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 border border-black/5 dark:border-white/5 rounded-full">
              <Clock size={10} />
              6 months internship
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-16">
            Work History
          </h2>
        </motion.div>

        <div className="relative pl-8 border-l border-black/10 dark:border-white/10">
          <motion.div
            className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-neutral-900 dark:bg-neutral-100"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3">
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {exp.company}
              </h3>
              <span className="text-[13px] text-neutral-400 dark:text-neutral-500 mt-1 sm:mt-0">
                {exp.period}
              </span>
            </div>
            <p className="text-[14px] font-medium text-neutral-500 dark:text-neutral-400 mb-4">
              {exp.role}
            </p>
            <p className="text-[14px] text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.highlights.map((highlight, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-600 shrink-0" />
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
