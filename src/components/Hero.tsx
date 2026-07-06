"use client";

import { portfolioData } from "@/data/portfolio";
import { BadgeCheck, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex items-center px-8 md:px-16">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">
        {/* Left: Name + Title */}
        <div className="md:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          >
            <span className="inline-block px-3 py-1 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full uppercase tracking-[0.15em]">
              Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] leading-[0.9] text-neutral-900 dark:text-neutral-50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
          >
            {portfolioData.profile.firstName}
          </motion.h1>

          <motion.h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] leading-[0.9] text-neutral-300 dark:text-neutral-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
          >
            {portfolioData.profile.lastName}
          </motion.h1>

          <motion.div
            className="mt-8 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
            <span className="text-[13px] text-neutral-400 dark:text-neutral-500">
              Khon Kaen, Thailand
            </span>
          </motion.div>
        </div>

        {/* Right: Avatar + Quick Info */}
        <motion.div
          className="md:col-span-4 flex flex-col items-start md:items-end gap-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.32, 0.72, 0, 1] }}
        >
          <div className="relative">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-[1.5rem] p-[3px] bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-700 dark:to-neutral-800">
              <Image
                src={portfolioData.profile.avatar}
                alt="Pasit Polwisepornsuk"
                width={128}
                height={128}
                priority
                className="w-full h-full rounded-[calc(1.5rem-3px)] object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white dark:bg-neutral-800 rounded-full flex items-center justify-center border border-neutral-200 dark:border-neutral-700">
              <BadgeCheck size={14} className="text-blue-500" fill="currentColor" stroke="white" />
            </div>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="mailto:pasitgut.dev@gmail.com"
              className="group inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-neutral-300 dark:hover:border-neutral-600 hover:bg-white dark:hover:bg-white/10 transition-all duration-300 text-neutral-700 dark:text-neutral-300"
            >
              Get in touch
              <span className="inline-block w-4 h-4 rounded-full bg-neutral-900 dark:bg-white flex items-center justify-center text-[10px] text-white dark:text-neutral-900 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              <Download size={14} />
              Resume / CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
