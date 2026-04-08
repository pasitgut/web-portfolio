"use client";

import { portfolioData } from "@/data/portfolio";
import { BadgeCheck, Instagram, Github, Download } from "lucide-react";
import Image from "next/image";

const COLORS = [
  { border: "border-blue-200", bg: "bg-blue-50", text: "text-blue-700" },
  { border: "border-green-200", bg: "bg-green-50", text: "text-green-700" },
  { border: "border-purple-200", bg: "bg-purple-50", text: "text-purple-700" },
  { border: "border-pink-200", bg: "bg-pink-50", text: "text-pink-700" },
];

export default function Hero() {
  return (
    <section className="w-full px-8 pb-12 pt-24 flex flex-col md:flex-row gap-8 md:gap-12 items-start">

      {/* Avatar */}
      <Image
        src={portfolioData.profile.avatar}
        alt="Profile"
        width={120}
        height={120}
        priority
        className="w-[120px] h-[120px] rounded-lg object-cover border border-neutral-200/60 shadow-sm bg-white"
      />

      <div className="flex-1">

        {/* Header */}
        <div className="flex items-center gap-3 mb-1 flex-wrap">
          <h1 className="text-[24px] font-semibold tracking-tight text-neutral-900">
            {portfolioData.profile.name}
          </h1>

          <BadgeCheck
            size={18}
            className="text-blue-500"
            fill="currentColor"
            stroke="white"
          />

          {/* Social */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            <Github size={16} />
          </a>

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
        <div className="flex items-center gap-2 mb-3">
          <p className="text-[13px] text-neutral-400 font-medium">
            {portfolioData.profile.title}
          </p>
          <span className="text-[11px] text-neutral-300">|</span>
          <p className="text-[12px] font-medium text-blue-600 bg-blue-50/80 border border-blue-100 px-2 py-0.5 rounded-md shadow-sm">
            {portfolioData.profile.position}
          </p>
        </div>

        {/* Bio */}
        <p className="text-[15px] leading-loose text-neutral-600 max-w-[65ch]">
          {portfolioData.profile.bio.intro}{" "}

          {portfolioData.profile.bio.tech.map((tech, i) => {
            const color = COLORS[i % COLORS.length];

            return (
              <span
                key={tech}
                className={
                  "inline-block mx-1 mb-1 px-2 py-[2px] text-[11px] font-mono font-medium " +
                  color.border +
                  " " +
                  color.bg +
                  " " +
                  color.text +
                  " rounded-md shadow-sm " +
                  "transition-all duration-200 " +
                  "hover:bg-opacity-80"
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
