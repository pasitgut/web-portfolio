"use client";

import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { Mail, Github, Globe, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="w-full px-8 md:px-16 py-24 md:py-32 border-t border-black/5 dark:border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="mb-4 inline-block px-3 py-1 text-[10px] font-semibold text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 rounded-full uppercase tracking-[0.15em]">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-4">
            Get in Touch
          </h2>
          <p className="text-[15px] text-neutral-500 dark:text-neutral-400 mb-12 max-w-md">
            Have a project in mind or want to collaborate? Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.32, 0.72, 0, 1] }}
        >
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Mail size={18} className="text-neutral-600 dark:text-neutral-400" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                Email
              </p>
              <p className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200">
                {portfolioData.contact.email}
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href={portfolioData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Github size={18} className="text-neutral-600 dark:text-neutral-400" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                GitHub
              </p>
              <p className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200">
                @pasitgut
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>

          <a
            href={portfolioData.contact.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-6 py-4 rounded-2xl border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm hover:border-black/10 dark:hover:border-white/10 hover:bg-white/60 dark:hover:bg-white/[0.05] transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <Globe size={18} className="text-neutral-600 dark:text-neutral-400" />
            </div>
            <div className="flex-1">
              <p className="text-[11px] text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-0.5">
                Website
              </p>
              <p className="text-[14px] font-medium text-neutral-800 dark:text-neutral-200">
                pasitgut.com
              </p>
            </div>
            <ArrowUpRight
              size={16}
              className="text-neutral-300 dark:text-neutral-600 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
