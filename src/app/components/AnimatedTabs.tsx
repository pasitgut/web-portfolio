"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function AnimatedTabs() {
  const [active, setActive] = useState<string>("about");

  return (
    <div className="w-full">
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActive("about")}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            active === "about" ? "border-b-2 border-neutral-900 text-neutral-900" : "text-neutral-500"
          }`}
        >
          About
        </button>
        <button
          onClick={() => setActive("project")}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            active === "project" ? "border-b-2 border-neutral-900 text-neutral-900" : "text-neutral-500"
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActive("techstack")}
          className={`pb-2 px-1 text-sm font-medium transition-colors ${
            active === "techstack" ? "border-b-2 border-neutral-900 text-neutral-900" : "text-neutral-500"
          }`}
        >
          Tech Stack
        </button>
      </div>
      <div className="relative mt-4">
        <AnimatePresence mode="wait">
          {active === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p>About content</p>
            </motion.div>
          )}
          {active === "project" && (
            <motion.div
              key="project"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p>Project content</p>
            </motion.div>
          )}
          {active === "techstack" && (
            <motion.div
              key="techstack"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p>Tech stack content</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
