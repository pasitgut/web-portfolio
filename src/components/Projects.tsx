"use client";
import { portfolioData } from "@/data/portfolio";

export default function Projects() {
  return (
   <section className="w-full px-8 py-10 border-t border-neutral-200/60 pb-20">
      <h2 className="text-lg font-medium mb-6 text-neutral-800">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolioData.projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white border border-neutral-200 p-5 rounded shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-neutral-300 transition-colors cursor-pointer flex flex-col h-full"
          >
            <h3 className="font-medium text-[15px] text-neutral-800 mb-1.5">{project.title}</h3>
            <p className="text-[13px] text-neutral-500 leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-[#FDFBF7] border border-neutral-200/60 text-neutral-600 text-[10px] rounded-md font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}