"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.99 }}
      transition={{ 
        type: "spring", 
        stiffness: 280, 
        damping: 30,
        mass: 0.5 
      }}
      className="origin-top"
    >
      {children}
    </motion.div>
  );
}
