'use client'

import { useState } from "react"
import { motion } from "framer-motion"
import { Projects } from "../lib/projects"
import { projects } from "../lib/projects"

const categories = ['All', 'Mobile App', 'Web App', 'Others']

export default function Page() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === 'All'
    ? projects
    : projects.filter(p => p.category === selected)

  return (
    <div className="min-h-screen px-4 py-8 max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6"
      >
        My Projects
      </motion.h1>

      {/* Filter buttons */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {categories.map(cat => (
          <motion.button
            whileTap={{ scale: 0.95 }}
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1 rounded-full border transition-colors duration-300 ${
              selected === cat ? 'bg-black text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project cards grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map(project => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition-transform"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm text-gray-600">{project.description}</p>
              <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded mt-2 inline-block">
                {project.category}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
