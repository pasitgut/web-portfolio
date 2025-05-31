"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const navItems = [
  { href: "/", label: "$ whoami" },
  { href: "/projects", label: "$ ls projects" },
  { href: "/skills", label: "$ ehco skills" },
  // { href: "/blog", label: "$ cat blog.md" },
  // { href: "/about", label: "About" },
  // { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full md:w-fit px-4 sm:px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Desktop Navbar */}
      <nav className="hidden md:flex items-center justify-center gap-5 px-6 py-3 rounded-full border border-white/20 bg-black/60 backdrop-blur-md shadow-md">
        {navItems.map(({ href, label }) => {
          const isActive = pathName === href;
          return (
            <Link
              key={href}
              href={href}
              className="relative px-4 py-1 text-sm text-white transition whitespace-nowrap"
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-white"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  isActive ? "text-black font-semibold" : ""
                }`}
              >
                {label}
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-glow"
                  className="absolute bottom-0 left-1/2 w-[70%] h-[8px] -translate-x-1/2 rounded-full 
                    bg-blue-400/80 blur-sm
                    after:content-[''] after:absolute after:inset-0 after:rounded-full 
                    after:bg-blue-400/40 after:blur-md"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end">
        <button
          className="p-2 rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md shadow-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl bg-zinc-900 border border-white/20 shadow-xl p-5 space-y-3 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map(({ href, label }) => {
              const isActive = pathName === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm px-3 py-2 rounded-lg transition ${
                    isActive
                      ? "bg-blue-400/10 text-blue-400 font-semibold"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
