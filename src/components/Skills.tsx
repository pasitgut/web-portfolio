"use client";
import { portfolioData } from "@/data/portfolio";
import * as Icons from "lucide-react";

export default function Skills() {
  return (
    <section className="w-full px-8 py-10 border-t border-neutral-200/60">
      <h2 className="text-lg font-medium mb-6 text-neutral-800">Skills</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-y-6 gap-x-4">
        {portfolioData.skills.map((skill, index) => {
          const IconComponent = (Icons as any)[skill.iconName] || Icons.Code;
          return (
            <div key={index} className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center border border-neutral-200 rounded shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all hover:border-neutral-300">
                <IconComponent size={24} strokeWidth={1.5} className="text-neutral-700" />
              </div>
              <span className="mt-2.5 text-[11px] font-medium text-neutral-500 text-center">
                {skill.name}
              </span>
            </div>
          );
        })}
        {/* <div className="flex flex-col items-center">
            <button className="w-14 h-8 mt-3 flex items-center justify-center bg-white border border-neutral-200 rounded-lg text-[11px] font-medium text-neutral-600 hover:bg-neutral-50 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                More
            </button>
        </div> */}
      </div>
    </section>
  );
}