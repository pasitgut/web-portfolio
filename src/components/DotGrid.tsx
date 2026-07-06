"use client";

export default function DotGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(253,251,247,0.6) 70%, rgba(253,251,247,1) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,1) 100%)`,
        }}
      />
    </div>
  );
}
