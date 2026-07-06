"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";

export default function NotFound() {
  return (
    <main className="relative min-h-screen">
      <DotGrid />
      <Navbar />
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-neutral-200 dark:text-neutral-800 tracking-tighter"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.p
          className="mt-4 text-[15px] text-neutral-500 dark:text-neutral-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Page not found
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium rounded-full border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 bg-white/60 dark:bg-white/5 backdrop-blur-sm transition-all text-neutral-700 dark:text-neutral-300"
          >
            ← Back home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
