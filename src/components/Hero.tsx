"use client";

import { portfolioData } from "@/data/portfolio";
import { BadgeCheck, Instagram, Github, Download } from "lucide-react";
import { useMemo } from "react";

/* ---------- CONFIG ---------- */
const COLORS = [
  { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
  { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
  { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
  { border: "border-pink-200", bg: "bg-pink-50", text: "text-pink-700" },
];

/* deterministic hash (stable random) */
function hash(str: string) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0; // convert to 32bit int
  }
  return Math.abs(h);
}

function shuffle<T>(arr: T[]) {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function Hero() {
  return (
    <section className="w-full px-8 pb-12 pt-4 flex gap-6 items-start">
      
      {/* Avatar */}
      <img
        src={portfolioData.profile.avatar}
        alt="Profile"
        className="w-[120px] h-[120px] rounded-lg object-cover border border-neutral-200/60 shadow-sm bg-white"
      />

      <div className="flex-1">
        
        {/* Header */}
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h1 className="text-[22px] font-medium text-neutral-900">
            {portfolioData.profile.name}
          </h1>

          <BadgeCheck
            size={18}
            className="text-blue-500"
            fill="currentColor"
            stroke="white"
          />

          {/* Social */}
          <Instagram
            size={16}
            className="text-neutral-500 hover:text-neutral-800 cursor-pointer transition-colors"
          />
          <Github
            size={16}
            className="text-neutral-500 hover:text-neutral-800 cursor-pointer transition-colors"
          />

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 text-[12px]
                       border border-neutral-300/60 rounded-md
                       bg-white/40 backdrop-blur-sm
                       hover:border-blue-400 hover:text-blue-600
                       transition-all duration-200"
          >
            <Download size={14} />
            Resume / CV
          </a>
        </div>

        {/* Title */}
        <p className="text-[13px] text-neutral-400 font-medium mb-3">
          {portfolioData.profile.title}
        </p>

        {/* Bio */}
        <p className="text-[14px] leading-relaxed text-neutral-600 max-w-2xl">
          {portfolioData.profile.bio.intro}{" "}

          {portfolioData.profile.bio.tech.map((tech, i) => {
            const color = COLORS[i % COLORS.length];
            const rotation = i % 2 === 0 ? -2 : 2;

            return (
              <span
                key={tech}
                style={{ rotate: `${rotation}deg` }} // safer than transform
                className={
                  "inline-block mx-1 px-2 py-[2px] text-[12px] font-medium " +
                  color.border +
                  " " +
                  color.bg +
                  " " +
                  color.text +
                  " rounded-md shadow-sm " +
                  "transition-all duration-200 " +
                  "hover:scale-105 hover:-translate-y-[1px]"
                }
              >
                {tech}
              </span>
            );
          })}

          .
        </p>
      </div>
    </section>
  );
}