"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { href: "/", label: "$ whoami" },
  { href: "/projects", label: "$ ls projects" },
  { href: "/skills", label: "$ ehco skills"},
  // { href: "/blog", label: "$ cat blog.md" },
  // { href: "/about", label: "About"},
  // { href: "/contact", label: "Contact"},
];

export default function NavBar() {
  const pathName = usePathname();

  return (
    <motion.div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="mx-auto max-w-fit flex flex-wrap items-center justify-center gap-3 sm:gap-5 px-4 sm:px-6 py-3 rounded-full border border-white/20 bg-black/60 backdrop-blur-md shadow-md overflow-x-auto">
        {navItems.map(({ href, label }) => {
          const isActive = pathName === href;
          return (
            <Link
              key={href}
              href={href}
              className="relative px-3 sm:px-4 py-1 text-sm sm:text-base text-white transition whitespace-nowrap"
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
    </motion.div>
  );
}