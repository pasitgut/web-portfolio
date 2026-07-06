"use client";

import ThemeToggle from "./ThemeToggle";
import { Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-black/5 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
        <Link
          href="/"
          className="px-4 py-1.5 text-[13px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          PP
        </Link>
        <span className="w-px h-4 bg-black/10 dark:bg-white/10" />
        <Link
          href="/#about"
          className="px-4 py-1.5 text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          About
        </Link>
        <Link
          href="/#projects"
          className="px-4 py-1.5 text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/#contact"
          className="px-4 py-1.5 text-[13px] font-medium text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          Contact
        </Link>
        <span className="w-px h-4 bg-black/10 dark:bg-white/10" />
        <a
          href="mailto:pasitgut.dev@gmail.com"
          className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
          aria-label="Email"
        >
          <Mail size={14} />
        </a>
        <a
          href="https://github.com/pasitgut"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
          aria-label="GitHub"
        >
          <Github size={14} />
        </a>
        <ThemeToggle />
      </div>
    </nav>
  );
}
