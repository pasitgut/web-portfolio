"use client";
import { Search, Sun } from "lucide-react";

export default function Navbar() {
  return (
 <nav className="w-full px-8 py-8 flex justify-between items-center">
      <div className="font-bold text-2xl tracking-tight">PP</div>
      <div className="flex items-center gap-5 text-[13px] font-medium text-neutral-600">
        <a href="#" className="hover:text-black transition">Home</a>
        <a href="#" className="hover:text-black transition">Projects</a>
        <a href="#" className="hover:text-black transition">CV</a>
        <div className="flex items-center gap-2 ml-2">
          <button className="flex items-center gap-2 bg-white border border-neutral-200 px-2.5 py-1.5 rounded-md text-xs hover:bg-neutral-50 transition">
            <Search size={14} /> Ctrl K
          </button>
          <button className="p-1.5 border border-neutral-200 rounded-md hover:bg-neutral-50 transition bg-white">
            <Sun size={15} />
          </button>
        </div>
      </div>
    </nav>
  );
}