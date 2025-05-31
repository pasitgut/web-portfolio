'use client';

import Link from "next/link"
import { FiTerminal } from "react-icons/fi"
import { motion } from "framer-motion";
export default function Page() {
  const posts = [{
    slug: "first-blog",
    title: "My First Blog",
    date: "2025-05-28",
    description: "First blog about next.js",
    content: "",
  }]
  return (
    <div className="min-h-screen px-6 py-12 max-w-4xl mx-auto text-slate-100 font-mono">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl flex items-center gap-2 mb-8 text-sky-400"
      >
        <FiTerminal /> ~/blog &gt; <span className="text-white">posts</span>
      </motion.h1>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post, idx) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="group border border-slate-700 bg-[#0f172a] rounded p-5 hover:border-sky-500 hover:bg-slate-800/40 transition-all duration-300 cursor-pointer">
                <h2 className="text-lg text-sky-400 font-semibold group-hover:underline underline-offset-2">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-400 mb-1">{post.date}</p>
                <p className="text-sm text-slate-300">{post.description}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}