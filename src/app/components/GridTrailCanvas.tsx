"use client";
import { useEffect, useRef } from "react";


export default function GridTrailCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        let mouse = { x: -1000, y: -1000};

        const resize = () => {
            canvas!.width = window.innerWidth;
            canvas!.height = window.innerHeight;
        };

        const draw = () => {
            ctx?.clearRect(0,0, canvas!.width, canvas!.height);
            const gridSize = 40;

            for (let x = 0; x < canvas!.width; x += gridSize) {
                for (let y = 0; y < canvas!.height; y += gridSize) {
                    const dx = x - mouse.x;
                    const dy = y - mouse.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const intensity = Math.max(0, 1 - dist / 150); // เพิ่มความไว
                    const alpha = intensity * 0.6; // เพิ่มความเข้ม
          
                    if (alpha > 0.02) {
                      ctx!.beginPath();
                      ctx!.fillStyle = `rgba(255, 255, 255, ${alpha})`; // สีฟ้าอ่อน
                      ctx!.shadowColor = `rgba(0, 183, 255, ${alpha})`;
                      ctx!.shadowBlur = 20 * intensity;
                      ctx!.arc(x, y, 2.5 + 2 * intensity, 0, Math.PI * 2); // ใหญ่ขึ้นเมื่อใกล้
                      ctx!.fill();
                      ctx!.closePath();
                      ctx!.shadowBlur = 0; // รีเซ็ต shadow
                    }
                }
              }

              requestAnimationFrame(draw);
        };


        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", resize);

        resize();
        draw();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
        }
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        />
    )
}