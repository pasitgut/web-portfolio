"use client";
import { GitHubCalendar } from "react-github-calendar";

export default function GitHubGraph() {
  const customTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], 
  };

  return (
  <section className="w-full px-8 py-10 border-t border-neutral-200/60">
      <h2 className="text-lg font-medium mb-6 text-neutral-800">GitHub Activity</h2>
      <div className="p-6 border border-neutral-200 rounded shadow-[0_1px_2px_rgba(0,0,0,0.03)] overflow-x-auto no-scrollbar">
        <div className="min-w-max flex justify-center">
          <GitHubCalendar 
            username="pasitgut" // เปลี่ยนเป็น Github Username ของคุณ
            theme={customTheme}
            colorScheme="light"
            blockSize={11}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </section>
  );
}