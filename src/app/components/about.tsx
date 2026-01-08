import { GitHubCalendar } from "react-github-calendar";
import { Mail } from "lucide-react";
export default function AboutSection() {
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
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">About</h1>
      {/* --- Contribution Graph Mockup --- */}
      <section className="border border-zinc-200 rounded p-4 bg-white/50 backdrop-blur-sm">
        <GitHubCalendar
          username="pasitgut"
          colorScheme="light"
          fontSize={12}
          blockSize={12}
          blockMargin={4}
          theme={theme}
          year={"last"}
        />
      </section>
      {/* --- Contact --- */}
      <section>
        <h1 className="text-2xl font-bold">Contact</h1>

        <a
          href="mailto:pasitgut.dev@gmail.com"
          className=" flex items-center gap-2 mt-2 underline underline-offset-4 hover:opacity-70 transition-opacity"
        >
          <Mail size={20} />
          pasitgut.dev@gmail.com
        </a>
      </section>
    </div>
  );
}
