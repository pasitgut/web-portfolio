import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen bg-[#FCFAF5] overflow-hidden">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 h-[400px] w-full">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto border-x border-neutral-200/60 min-h-screen flex flex-col">
        <Navbar />

        <div className="px-8 py-10 flex-grow">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[13px] text-neutral-500 hover:text-neutral-800 mb-8 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 rounded-sm"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to projects
          </Link>

          {/* PROJECT HEADER */}
          <div className="mb-10">
            <h1 className="text-3xl font-medium text-neutral-900 mb-4">{project.title}</h1>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-white border border-neutral-200 text-neutral-600 text-[12px] rounded-md font-medium shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* PROJECT CONTENT */}
          <div className="prose prose-neutral max-w-none prose-p:leading-relaxed prose-p:text-neutral-600 prose-p:text-[15px]">
            <div className="bg-white border border-neutral-200 rounded p-6 shadow-sm">
              <p>{project.content || project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
