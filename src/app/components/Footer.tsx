"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full py-6 px-4 text-sm text-white/60 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 text-center">
      <span>© {year} pasitdev</span>
      <span>Made with <span className="text-red-400">❤️</span> by pasitdev</span>
      <a
        href="https://github.com/pasitgut"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white underline transition"
      >
        GitHub
      </a>
    </footer>
  );
}
