"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Trophy, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section className="w-full px-8 md:px-16 py-24 md:py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="mb-4 inline-block px-3 py-1 text-[10px] font-semibold text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800 rounded-full uppercase tracking-[0.15em]">
            Education & Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-16">
            Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            className="p-8 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6">
              <GraduationCap size={20} className="text-neutral-600 dark:text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-50 mb-1">
              {portfolioData.education.university}
            </h3>
            <p className="text-[14px] text-neutral-500 dark:text-neutral-400 mb-4">
              {portfolioData.education.degree}
            </p>
            <div className="flex items-center gap-4 text-[13px]">
              <span className="text-neutral-400 dark:text-neutral-500">
                {portfolioData.education.graduation}
              </span>
              <span className="text-neutral-200 dark:text-neutral-700">·</span>
              <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                GPA {portfolioData.education.gpa}
              </span>
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            className="p-8 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center mb-6">
              <Trophy size={20} className="text-neutral-600 dark:text-neutral-400" />
            </div>
            <div className="space-y-5">
              {portfolioData.hackathons.map((hackathon, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-[14px] font-semibold text-neutral-900 dark:text-neutral-50">
                      {hackathon.name}
                    </h3>
                  </div>
                  <span className="inline-block px-2 py-0.5 text-[10px] font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 rounded-md mb-2">
                    {hackathon.achievement}
                  </span>
                  <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                    {hackathon.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
