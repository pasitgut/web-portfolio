"use client";
import { motion } from "framer-motion";
import { FiTerminal, FiGithub } from "react-icons/fi"
import { FaFolderOpen } from "react-icons/fa"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-10">
     {/* Terminal-style Greeting */}
     {/* <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 text-2xl md:text-3xl"
      >
        <FiTerminal size={28} />
        <span>
          ~/intro &gt; <code className="text-blue-400">cat about-me.txt</code>
        </span>
      </motion.h1> */}

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl leading-relaxed space-y-4"
      >
        <h2 className="text-4xl md:text-5xl font-bold">
          👋 Hello, I’m <span className="text-blue-400">Pasit</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          I’m a 3rd-year Computer Science student at the College of Computing, Khon Kaen University.
          <br />
          I’m passionate about building modern web and mobile applications.
          <br />
          Future full stack, backend, or mobile developer.
        </p>
      </motion.section>

      {/* Call to Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col md:flex-row gap-4"
      >
        <a
          href="/projects"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition"
        >
          <FaFolderOpen />
          View Projects
        </a>
        <a
          href="https://github.com/pasitgut"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 border border-white/30 hover:border-white text-white rounded-full transition"
        >
          <FiGithub />
          Visit GitHub
        </a>
      </motion.div>
    </div>
  );
}
