"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, Maximize2 } from "lucide-react";

interface MediaItem {
  type: string;
  src: string;
}

interface ProductSliderProps {
  media: MediaItem[];
}

export default function ProductSlider({ media }: ProductSliderProps) {
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const active = media[index];
  const thumbContainerRef = useRef<HTMLDivElement | null>(null);

  const next = () => {
    setAnimate(true);
    setIndex((i) => (i + 1) % media.length);
  };

  const prev = () => {
    setAnimate(true);
    setIndex((i) => (i - 1 + media.length) % media.length);
  };

  const scrollThumbs = (direction: "left" | "right") => {
    if (!thumbContainerRef.current) return;
    // Scroll exactly width of 5 thumbnails
    const thumbWidth = thumbContainerRef.current.offsetWidth / 5;
    thumbContainerRef.current.scrollBy({
      left: direction === "left" ? -thumbWidth : thumbWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="mt-8 lg:mt-0">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-6">
        <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
          <div
            className={`absolute inset-0 transition-all duration-300 ${
              animate
                ? "opacity-0 translate-x-2 sm:translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            {active.type === "image" ? (
              <Image
                src={active.src}
                alt=""
                fill
                className="object-contain p-4 sm:p-10"
              />
            ) : (
              <video
                controls
                className="w-full h-full object-contain p-4 sm:p-10"
              >
                <source src={active.src} />
              </video>
            )}
          </div>

          {/* NAV */}
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full"
          >
            <ArrowRight size={16} />
          </button>

          <button
            onClick={() => setFullscreen(true)}
            className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-white shadow-md p-1 sm:p-2 rounded-full"
          >
            <Maximize2 size={18} />
          </button>
        </div>

        {/* THUMBNAILS */}
        <div className="relative mt-4 sm:mt-6">
          <button
            onClick={() => scrollThumbs("left")}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-10"
          >
            <ArrowLeft size={14} />
          </button>

          <button
            onClick={() => scrollThumbs("right")}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 bg-white shadow-md p-1 sm:p-2 rounded-full z-10"
          >
            <ArrowRight size={14} />
          </button>

          <div
            ref={thumbContainerRef}
            className="flex gap-2 sm:gap-3 overflow-x-auto px-1 sm:px-2  no-scrollbar scrollbar-none"
          >
            {media.map((m, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`relative w-20 h-16 sm:w-24 sm:h-20 flex-shrink-0 mt-3 mb-3 rounded-xl overflow-hidden border transition ${
                  i === index
                    ? "border-blue-600 scale-105"
                    : "border-gray-200 opacity-70"
                }`}
              >
                {m.type === "image" ? (
                  <Image src={m.src} alt="" fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-black flex items-center justify-center text-white text-xs sm:text-sm">
                    VIDEO
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* FULLSCREEN MODAL WITH NAV */}
      {fullscreen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setFullscreen(false)}
            className="absolute top-6 right-6 text-white"
          >
            <X size={30} />
          </button>

          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-50"
          >
            <ArrowLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-50"
          >
            <ArrowRight size={20} />
          </button>

          <div className="max-w-6xl w-full px-10">
            {active.type === "image" ? (
              <Image
                src={active.src}
                alt=""
                width={1600}
                height={1000}
                className="object-contain max-h-[85vh] mx-auto"
              />
            ) : (
              <video controls autoPlay className="max-h-[85vh] mx-auto">
                <source src={active.src} />
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
