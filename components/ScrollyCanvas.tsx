"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const FRAME_COUNT = 90;

function getFramePath(index: number) {
  // e.g. /sequence/frame_00_delay-0.056s.png
  const paddedIndex = String(index).padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.056s.png`;
}

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        setImagesLoaded(loadedCount);
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = useCallback((frameIndex: number) => {
    if (images.length === 0 || !images[frameIndex]) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[frameIndex];

    // object-fit: cover logic
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth = canvas.width;
    let drawHeight = canvas.height;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvas.height * imgRatio;
      offsetX = (canvas.width - drawWidth) / 2;
    } else {
      drawHeight = canvas.width / imgRatio;
      offsetY = (canvas.height - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Use quality smoothing
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  // Keep canvas size synced with window
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame after resize
        drawFrame(Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1)));
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [images, scrollYProgress, drawFrame]);

  // Scrub through images on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
    );
    requestAnimationFrame(() => drawFrame(frameIndex));
  });

  // Initial draw once loaded
  useEffect(() => {
    if (imagesLoaded > 0 && imagesLoaded === FRAME_COUNT) {
      drawFrame(0);
    }
  }, [imagesLoaded, drawFrame]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {imagesLoaded < FRAME_COUNT && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white/50 text-sm tracking-widest uppercase">
            Loading... {Math.round((imagesLoaded / FRAME_COUNT) * 100)}%
          </div>
        )}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
        />
      </div>
    </div>
  );
}
