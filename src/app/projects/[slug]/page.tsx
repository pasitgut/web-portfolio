import { portfolioData } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import DotGrid from "@/components/DotGrid";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = portfolioData.projects.find(
    (p) => p.slug === resolvedParams.slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen">
      <DotGrid />
      <Navbar />
      <div className="relative z-10 max-w-4xl mx-auto px-8 md:px-16 pt-32 pb-24">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 mb-12 transition-colors group"
        >
          <ArrowLeft
            size={14}
            className="group-hover:-translate-x-0.5 transition-transform"
          />
          Back to projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-[12px] font-mono font-medium text-neutral-500 dark:text-neutral-400 bg-neutral-100/50 dark:bg-neutral-800/50 rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-[1.5rem] border border-black/5 dark:border-white/5 bg-white/40 dark:bg-white/[0.02] backdrop-blur-sm">
          <p className="text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-400">
            {project.content || project.description}
          </p>
        </div>
      </div>
    </main>
  );
}
