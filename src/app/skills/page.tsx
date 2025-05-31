'use client'

import { motion } from "framer-motion"
import { FiTerminal } from "react-icons/fi"
import { FaCode, FaMobileAlt, FaServer, FaDatabase, FaTools } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"

const skills = [
  {
    title: "Languages",
    icon: <FaCode className="text-yellow-400" />,
    items: ["JavaScript", "TypeScript", "Go", "Rust", "Java", "C / C++ / C#", "Dart", "Kotlin", "Python"]
  },
  {
    title: "Frontend",
    icon: <SiFrontendmentor className="text-pink-400" />,
    items: ["React", "Next.js", "Vue.js", "TailwindCSS"]
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt className="text-green-400" />,
    items: ["Flutter", "Jetpack Compose (Kotlin)"]
  },
  {
    title: "Backend & API",
    icon: <FaServer className="text-blue-400" />,
    items: ["Express.js", "Elysia.js", "Fiber (Go)", "Postman", "Docker"]
  },
  {
    title: "Database & DevOps",
    icon: <FaDatabase className="text-purple-400" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Git"]
  }
]

export default function Page() {
  return (
    <main className="min-h-screen px-6 max-w-5xl mx-auto font-mono text-slate-100 select-none">
      {/* Terminal Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-2 text-2xl sm:text-3xl mb-8"
      >
        <FiTerminal size={28} />
        <span>~/portfolio &gt; <code className="text-blue-400">echo skills</code></span>
      </motion.h1>

      {/* Skill Blocks */}
      <div className="space-y-6 text-sm">
        {skills.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            className="border border-slate-700 rounded-md p-4 bg-black/40 backdrop-blur-sm"
          >
            {/* Section Header with Icon */}
            <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 uppercase tracking-wider">
              <span className="text-lg">{section.icon}</span>
              <span>// {section.title}</span>
            </div>

            {/* Skills List */}
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.04 }
                }
              }}
              viewport={{ once: true }}
              className="space-y-1"
            >
              {section.items.map((skill, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="pl-4 relative before:absolute before:left-0 before:content-['>'] before:text-emerald-400 text-slate-200"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
