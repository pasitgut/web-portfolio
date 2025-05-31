// 'use client'

// import { useState } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { projects } from "../lib/projects"
// import { FiBox } from "react-icons/fi";

// const categories = ['All', 'Mobile App', 'Web App', 'Others']

// export default function Page() {
//   const [selected, setSelected] = useState("All")

//   const filtered = selected === 'All'
//     ? projects
//     : projects.filter(p => p.category === selected)

//     const buttonVariants = {
//       initial: { scale: 1, borderColor: '#ccc' },
//       tap: { scale: 0.95 },
//       selected: { backgroundColor: '#000', color: '#fff', borderColor: 'white' },
//       unselected: { backgroundColor: '#fff', color: '#000', borderColor: '#ccc' },
//     }
    
    
    
    

//   const cardVariants = {
//     initial: { opacity: 0, scale: 0.9 },
//     animate: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.9 },
//     hover: { scale: 1.03, boxShadow: "0 8px 20px rgba(0,0,0,0.15)" },
//   }

//   return (
//     <div className="min-h-screen px-4 max-w-6xl mx-auto">
//       <motion.h1
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="text-3xl font-bold mb-6"
//       >
//         My Projects
//       </motion.h1>

//       {/* Filter buttons */}
//       <div className="flex gap-3 mb-8 flex-wrap">
//         {categories.map(cat => (
//           <motion.button
//           key={cat}
//           onClick={() => setSelected(cat)}
//           variants={buttonVariants}
//           initial="unselected"
//           animate={selected === cat ? "selected" : "unselected"}
//           whileTap="tap"
//           className="px-4 py-1 rounded-full border transition-colors duration-300"
//         >
//           {cat}
//         </motion.button>
        
//         ))}
//       </div>

//       {/* Project cards grid */}
//       <motion.div
//         layout
//         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[300px]"
//       >
//         <AnimatePresence>
//           {filtered.length === 0 ? (
//             <motion.div
//               key="no-projects"
//               className="col-span-full flex flex-col items-center justify-center text-gray-400"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: 10 }}
//               transition={{ duration: 0.5, ease: "easeOut" }}
//             >
//               <FiBox size={48} className="mb-4" />
//               <p className="text-xl font-semibold mb-2">No projects found</p>
//               <p className="max-w-sm text-center text-gray-500">
//                 Looks like there are no projects in this category yet. Please check back later or try a different filter.
//               </p>
//             </motion.div>
//           ) : (
//             filtered.map(project => (
//               <motion.div
//                 key={project.id}
//                 layout
//                 variants={cardVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 whileHover="hover"
//                 transition={{ duration: 0.2, ease: "easeInOut" }}
//                 className="border rounded-xl overflow-hidden shadow-md bg-white/5 cursor-pointer"
//               >
//                 {project.image ? (
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="w-full h-48 bg-gray-900 flex items-center justify-center text-gray-400 text-3xl">
//                     Not found image
//                   </div>
//                 )}
//                 <div className="p-4">
//                   <h2 className="text-xl font-semibold text-white">{project.title}</h2>
//                   <p className="text-sm text-gray-400">{project.description}</p>
//                   <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded mt-2 inline-block">
//                     {project.category}
//                   </span>
//                 </div>
//               </motion.div>
//             ))
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   )
// }

'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { projects } from "../lib/projects"
import { FiTerminal } from "react-icons/fi"
import Image from "next/image"

const categories = ['All', 'Mobile App', 'Web App', 'Others']

export default function Page() {
  const [selected, setSelected] = useState("All")

  const filtered = selected === 'All'
    ? projects
    : projects.filter(p => p.category === selected)

  const buttonVariants = {
    tap: { scale: 0.95 },
    selected: {
      backgroundColor: "#000",
      color: "#fff",
      borderColor: "#fff"
    },
    unselected: {
      backgroundColor: "#fff",
      color: "#000",
      borderColor: "#000"
    }
  }

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  return (
    <div className="min-h-screen font-mono px-6 max-w-4xl mx-auto select-none text-slate-100">
      {/* Terminal Header */}
      <motion.h1 
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="flex items-center gap-2 text-3xl mb-6"
>
  <FiTerminal size={28} /> <span>~/portfolio &gt; <code className="text-blue-400">ls projects</code></span>
</motion.h1>


      {/* Category Filter Buttons */}
      <div className="flex gap-3 mb-6 flex-wrap">
        {categories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setSelected(cat)}
            variants={buttonVariants}
            initial="unselected"
            animate={selected === cat ? "selected" : "unselected"}
            whileTap="tap"
            className="px-4 py-1 rounded rounded-full border text-sm transition-colors duration-300"
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project List */}
      <motion.div layout className="rounded-md p-5 min-h-[300px]">
        <AnimatePresence>
          {filtered.length === 0 ? (
            <motion.div
              key="no-projects"
              className="text-blue-300 italic text-center py-12"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={itemVariants}
              transition={{ duration: 0.3 }}
            >
              No projects found in this category.
            </motion.div>
          ) : (
            filtered.map(project => (
              <motion.div
                key={project.id}
                layout
                initial="initial"
                animate="animate"
                exit="exit"
                variants={itemVariants}
                transition={{ duration: 0.2 }}
                className="flex flex-col sm:flex-row items-start gap-4 last:border-none py-4 hover:bg-gray-800/30 rounded-lg"
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={200}
                    height={300}
                    className="w-full sm:w-40 h-28 object-cover rounded shadow-md"
                  />
                ) : (
                  <div className="w-full sm:w-40 h-28 bg-gray-900 flex items-center justify-center text-gray-400 text-sm rounded">
                    No Image
                  </div>
                )}
                <div>
                  <div className="text-white font-semibold text-lg">{project.title}</div>
                  <div className="flex flex-wrap items-center gap-1 mb-1">
  <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full tracking-wide">
    {project.category.toLowerCase()}
  </span>
</div>

                  <p className="text-gray-300 text-sm max-w-md">{project.description}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
