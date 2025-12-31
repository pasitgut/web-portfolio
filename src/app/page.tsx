import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Video,
  FileText,
  Code2,
  ExternalLink,
} from "lucide-react";
import { GitHubCalendar } from "react-github-calendar";

export default function Home() {
  const theme = {
    light: [
      "#f5f5f5", // off white
      "#d6d6d6", // light gray
      "#b0b0b0", // medium gray
      "#7a7a7a", // dark gray
      "#404040", // almost black
    ],
    dark: [
      "#0a0a0a", // deep black
      "#141414", // very dark gray
      "#262626", // dark gray
      "#404040", // medium gray
      "#666666", // lighter gray (highlight)
    ],
  };

  return (
    <main className="min-h-screen bg-white bg-dot-pattern font-sans text-zinc-900 selection:bg-zinc-100">
      <div className="max-w-2xl mx-auto px-6 py-12 md:py-20 space-y-12">
        {/* --- Header Section --- */}
        <section className="flex flex-col gap-6 relative">
          {/* Top Row: Avatar & Name */}
          <div className="flex items-start gap-6">
            <div className="relative group">
              {/* Avatar Container */}
              <div className="h-24 w-24 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm bg-zinc-50 relative z-10">
                {/* ใส่รูปของคุณที่นี่ (เช่นวางไว้ใน public/me.jpg) */}
                <Image
                  src="https://avatars.githubusercontent.com/u/179317890?v=4"
                  alt="Profile"
                  width={100}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Hire Me Hand-drawn Arrow (SVG) */}
              <div className="absolute -top-10 -left-24 hidden sm:block opacity-60 rotate-[-6deg] pointer-events-none">
                <div className="flex flex-col items-center">
                  <span className="font-handwriting text-sm text-zinc-500 mb-1 font-medium">
                    HIRE ME
                  </span>
                  <svg
                    width="60"
                    height="30"
                    viewBox="0 0 60 30"
                    fill="none"
                    stroke="currentColor"
                    className="text-zinc-400"
                  >
                    <path
                      d="M5 5 Q 30 25 55 10"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M50 8 L 55 10 L 52 15"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center pt-2">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
                Pasit Polwisepornsuk
              </h1>
              <p className="text-zinc-500 font-medium">Full Stack Engineer</p>
            </div>
          </div>

          {/* Bio Text */}
          <div className="space-y-4 text-zinc-600 leading-relaxed">
            <p>
              hey!!! I&apos;m Pasit Polwisepornsuk, undergraduate computer
              science student and full-stack developer who loves turning ideas
              into real, working products.
            </p>
            <p>
              I&apos;m flexible working with any tech stack, though I prefer
              modern tools. I&apos;m currently working with{" "}
              <span className="font-semibold text-zinc-900">
                Next.js, Elysia, Express, and TypeScript.
              </span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="inline-flex items-center justify-center px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors shadow-sm gap-2">
              <Video size={16} /> Book an intro call
            </button>
            <button className="inline-flex items-center justify-center px-6 py-2.5 bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-full hover:bg-zinc-50 transition-colors gap-2">
              <Mail size={16} /> Send an email
            </button>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-2">
            <p className="text-sm font-medium text-zinc-500">
              Here are my{" "}
              <span className="text-zinc-900 font-semibold">socials</span>
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500">
              <SocialLink
                href="https://www.github.com/pasitgut"
                icon={<Github size={15} />}
                label="GitHub"
              />
              <SocialLink
                href="#"
                icon={<Twitter size={15} />}
                label="Twitter"
              />
              <SocialLink
                href="#"
                icon={<Linkedin size={15} />}
                label="LinkedIn"
              />
              <SocialLink
                href="#"
                icon={<FileText size={15} />}
                label="Medium"
              />
              <SocialLink
                href="#"
                icon={<Code2 size={15} />}
                label="LeetCode"
              />
            </div>
          </div>
        </section>
        {/* --- Contribution Graph Mockup --- */}
        <section className="border border-zinc-200 rounded-xl p-5 bg-white/50 backdrop-blur-sm">
          <GitHubCalendar
            username="pasitgut"
            colorScheme="light"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            theme={theme}
          />
        </section>
        {/*<section className="border border-zinc-200 rounded-xl p-5 bg-white/50 backdrop-blur-sm">
          // Grid Mockup
          <div className="flex flex-wrap gap-[3px] justify-center sm:justify-start opacity-80">
            {Array.from({ length: 147 }).map((_, i) => {
              // Random opacity to simulate contribution
              const level = Math.random();
              let colorClass = "bg-zinc-100"; // Empty
              if (level > 0.85)
                colorClass = "bg-zinc-800"; // High
              else if (level > 0.6)
                colorClass = "bg-zinc-400"; // Medium
              else if (level > 0.4) colorClass = "bg-zinc-200"; // Low

              return (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-[2px] ${colorClass}`}
                />
              );
            })}
          </div>
          <div className="flex justify-between items-center text-xs text-zinc-400 mt-3 px-1">
            <span>1637 activities in 2024</span>
            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="w-2.5 h-2.5 bg-zinc-100 rounded-[1px]"></div>
              <div className="w-2.5 h-2.5 bg-zinc-300 rounded-[1px]"></div>
              <div className="w-2.5 h-2.5 bg-zinc-500 rounded-[1px]"></div>
              <div className="w-2.5 h-2.5 bg-zinc-800 rounded-[1px]"></div>
              <span>More</span>
            </div>
          </div>
        </section>
        */}
        {/* --- Experience Section --- */}
        {/*<section className="space-y-8">
          <h2 className="text-xl font-bold text-zinc-900">Experiences.</h2>

          <div className="flex flex-col gap-10">
           // Experience Item 1
            <ExperienceItem
              company="Suiii"
              role="Software Engineer"
              date="Aug, 2025 - Present"
              location="USA, Remote"
              description={[
                "Led the development of the core banking engine.",
                "Optimized database queries reducing latency by 40%.",
                "Collaborated with design team to implement new UI.",
              ]}
              tags={[
                "React.js",
                "Next.js",
                "Tailwind",
                "TypeScript",
                "PostgreSQL",
                "MongoDB",
              ]}
            />

            // Experience Item 2 (Example)
            <ExperienceItem
              company="TechStart"
              role="Frontend Intern"
              date="Jan, 2024 - Jul, 2025"
              location="Bangkok, Hybrid"
              description={[
                "Built reusable components for the design system.",
                "Fixed bugs and improved accessibility score to 98/100.",
              ]}
              tags={["Vue.js", "Nuxt", "CSS", "JavaScript"]}
            />
          </div>
        </section>*/}
      </div>
    </main>
  );
}

/* --- Sub-Components (เพื่อความสะอาดของโค้ดหลัก) --- */

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors group"
    >
      {icon}
      <span className="group-hover:underline underline-offset-4 decoration-zinc-300">
        {label}
      </span>
    </Link>
  );
}

function ExperienceItem({
  company,
  role,
  date,
  location,
  description,
  tags,
}: {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
  tags: string[];
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      {/* Company Logo Placeholder */}
      <div className="shrink-0">
        <div className="w-12 h-12 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center text-lg font-bold text-zinc-400">
          {company.charAt(0)}
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <div>
            <h3 className="font-semibold text-zinc-900">{company}</h3>
            <p className="text-sm text-zinc-500">{role}</p>
          </div>
          <span className="text-xs font-medium text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md self-start sm:self-center">
            {date}
          </span>
        </div>

        <p className="text-xs text-zinc-400">{location}</p>

        <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-zinc-600 py-1">
          {description.map((item, idx) => (
            <li key={idx} className="pl-1">
              {item}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-zinc-50 border border-zinc-100 rounded-md text-[11px] font-medium text-zinc-600 hover:bg-zinc-100 cursor-default transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
