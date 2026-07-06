import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Pasit Polwisepornsuk | Full-Stack Developer",
  description:
    "Full-Stack Developer & Computer Science student at Khon Kaen University. Building production web applications, internal systems, and AI-assisted workflows.",
  keywords: [
    "Pasit Polwisepornsuk",
    "Full-Stack Developer",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
  ],
  openGraph: {
    title: "Pasit Polwisepornsuk | Full-Stack Developer",
    description:
      "Full-Stack Developer & Computer Science student at Khon Kaen University.",
    url: "https://pasitgut.com",
    siteName: "Pasit Polwisepornsuk Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${mono.variable} font-sans tracking-tight antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
