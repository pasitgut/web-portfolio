"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="w-full px-8 md:px-16 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
          className="flex items-center gap-2 mb-12"
        >
          <span className="px-3 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full uppercase tracking-[0.15em]">
            About
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          <motion.div
            className="md:col-span-7"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <p className="text-xl md:text-2xl leading-relaxed text-neutral-700 dark:text-neutral-300 font-light">
              {portfolioData.profile.bio}
            </p>
          </motion.div>

          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="grid grid-cols-2 gap-8 mb-10">
              {portfolioData.stats.map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
                    {stat.value}
                  </p>
                  <p className="text-[13px] text-neutral-500 dark:text-neutral-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb size={14} className="text-amber-500" />
                <span className="text-[11px] font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.15em]">
                  Soft Skills
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {portfolioData.softSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-[12px] font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 border border-black/5 dark:border-white/5 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
