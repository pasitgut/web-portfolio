'use client';

import { useState, useEffect, useRef } from "react";

export default function CursorGlow() {
  const gridSize = 40;
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]); // เก็บตำแหน่ง trail หลายจุด
  const maxTrailLength = 5;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = Math.floor(e.clientX / gridSize) * gridSize;
    const y = Math.floor(e.clientY / gridSize) * gridSize;

    setPositions((prev) => {
      const newPositions = [...prev, { x, y }];
      if (newPositions.length > maxTrailLength) {
        newPositions.shift(); // ลบจุดเก่าที่สุดให้ trail มีความยาวเท่ากับ maxTrailLength
      }
      return newPositions;
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-[9999]"
      style={{
        cursor: "none",
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: `${gridSize}px ${gridSize}px`,
      }}
    >
      {positions.map(({ x, y }, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: y,
            left: x,
            width: gridSize,
            height: gridSize,
            backgroundColor: `rgba(255, 255, 255, ${0.1 * (i + 1)})`,
            borderRadius: 4,
            mixBlendMode: "screen",
            transition: "top 0.1s ease, left 0.1s ease",
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
