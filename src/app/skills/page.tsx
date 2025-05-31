'use client'

import { motion } from "framer-motion"
import { FiTerminal } from "react-icons/fi"
import {
  FaCode, FaMobileAlt, FaServer, FaDatabase,
  FaJs, FaJava, FaPython, FaReact, FaVuejs, FaDocker, FaGit, FaRust, FaNodeJs,
} from "react-icons/fa"
import {
  SiTypescript, SiGo, SiDart, SiKotlin, SiMongodb,
  SiPostgresql, SiFirebase, SiTailwindcss, SiMysql, SiNextdotjs,
  SiBun, SiPostman
} from "react-icons/si"
import { SiFrontendmentor } from "react-icons/si"

const skills = [
  {
    title: "Languages",
    icon: <FaCode className="text-yellow-400" />,
    items: [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiGo />, name: "Go" },
      { icon: <FaRust />, name: "Rust" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiDart />, name: "Dart" },
      { icon: <SiKotlin />, name: "Kotlin" },
    ]
  },
  {
    title: "Frontend",
    icon: <SiFrontendmentor className="text-pink-400" />,
    items: [
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaVuejs />, name: "Vue.js" },
      { icon: <SiTailwindcss />, name: "TailwindCSS" }
    ]
  },
  {
    title: "Mobile",
    icon: <FaMobileAlt className="text-green-400" />,
    items: [
      { icon: <SiDart />, name: "Flutter" },
      { icon: <SiKotlin />, name: "Jetpack Compose" }
    ]
  },
  {
    title: "Backend & API",
    icon: <FaServer className="text-blue-400" />,
    items: [
      { icon: <FaNodeJs />, name: "Express.js / Node.js" },
      { icon: <SiBun />, name: "Elysia.js / Bun.js"},
      { icon: <SiGo />, name: "Fiber (Go)" },
      { icon: <FaDocker />, name: "Docker" },
      { icon: <SiPostman />, name: "Postman"}
    ]
  },
  {
    title: "Database & DevOps",
    icon: <FaDatabase className="text-purple-400" />,
    items: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FaGit />, name: "Git" }
    ]
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
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-3 text-xs text-slate-400 uppercase tracking-wider">
              <span className="text-lg">{section.icon}</span>
              <span>{section.title}</span>
            </div>

            {/* Skills with icon + label */}
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
              className="flex flex-wrap gap-4"
            >
              {section.items.map((skill, idx) => (
                <motion.li
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: { opacity: 1, scale: 1 }
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded-full text-sm text-slate-200 hover:text-emerald-400 hover:bg-slate-700 transition-colors cursor-default"
                  title={skill.name}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
