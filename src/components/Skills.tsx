"use client";

import { portfolioData } from "@/data/portfolio";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="w-full px-8 md:px-16 py-24 md:py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="mb-4 inline-block px-3 py-1 text-[10px] font-semibold text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 rounded-full uppercase tracking-[0.15em]">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-16">
            Technology & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.skills.map((categoryGroup, cIndex) => (
            <motion.div
              key={cIndex}
              className="p-6 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: cIndex * 0.05,
                ease: [0.32, 0.72, 0, 1],
              }}
            >
              <h3 className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.15em] mb-5">
                {categoryGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categoryGroup.items.map((skill, index) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const IconComponent = (Icons as any)[skill.iconName] || Icons.Code;
                  return (
                    <div
                      key={index}
                      className="group flex items-center gap-2 px-3 py-2 rounded-xl border border-black/5 dark:border-white/5 bg-white/60 dark:bg-white/[0.03] hover:border-black/10 dark:hover:border-white/10 hover:bg-white dark:hover:bg-white/[0.06] transition-all duration-300"
                    >
                      <IconComponent
                        size={14}
                        strokeWidth={1.5}
                        className="text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors"
                      />
                      <span className="text-[12px] font-medium text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
