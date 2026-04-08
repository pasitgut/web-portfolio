"use client";
import { portfolioData } from "@/data/portfolio";
import * as Icons from "lucide-react";

export default function Skills() {
  return (
    <section className="w-full px-8 py-10 border-t border-neutral-200/60">
      <h2 className="text-lg font-medium mb-6 text-neutral-800">Skills</h2>
      <div className="flex flex-col gap-8">
        {portfolioData.skills.map((categoryGroup, cIndex) => (
          <div key={cIndex}>
            <h3 className="text-[13px] text-neutral-500 font-medium mb-4 uppercase tracking-wider relative inline-block">
              {categoryGroup.category}
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-6 gap-x-4">
              {categoryGroup.items.map((skill, index) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const IconComponent = (Icons as any)[skill.iconName] || Icons.Code;
                return (
                  <div key={index} className="flex flex-col items-center group">
                    <div className="w-14 h-14 flex items-center justify-center border border-neutral-200/80 rounded shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-all hover:border-neutral-300 hover:shadow-sm bg-white">
                      <IconComponent size={24} strokeWidth={1.5} className="text-neutral-600 transition-colors group-hover:text-blue-600" />
                    </div>
                    <span className="mt-2 text-[11px] font-medium text-neutral-500 text-center transition-colors group-hover:text-neutral-800">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
