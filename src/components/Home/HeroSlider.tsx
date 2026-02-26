"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/img/slide1.jpg",
    title: "Turnkey Oil Mill Solutions",
    desc: "Complete oil extraction plant setup with integrated systems for maximum efficiency and production capacity",
    btn: "Explore Solutions",
  },
  {
    image: "/img/slide2.jpg",
    title: "OPTIFLOW Series",
    desc: "High performance, robust build screw press for high oil content bearing seed with low energy consumption",
    btn: "Explore Solutions",
  },
  {
    image: "/img/slide3.jpg",
    title: "OILSEED Cooker",
    desc: "Built for durability, ensures precise temperature control for better oil yield and seed processing versatility",
    btn: "Contact Us",
  },
];

const AUTO_DELAY = 5000;
const easeSmooth = [0.4, 0, 0.2, 1];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  /* Swipe Ref (fixes window error) */
  const touchStartX = useRef<number | null>(null);

  /* Progress Bar */
  const progress = useMotionValue(0);
  const progressWidth = useTransform(progress, (v) => `${v}%`);

  const nextSlide = () => setIndex((p) => (p + 1) % slides.length);
  const prevSlide = () =>
    setIndex((p) => (p - 1 + slides.length) % slides.length);

  /* Autoplay Animation */
  useEffect(() => {
    progress.set(0);

    const controls = animate(progress, 100, {
      duration: AUTO_DELAY / 1000,
      ease: "linear",
    });

    const timer = setTimeout(nextSlide, AUTO_DELAY);

    return () => {
      controls.stop();
      clearTimeout(timer);
    };
  }, [index, progress]);

  return (
    <section className="relative hero-wrapper lg:mt-20 w-full h-[95vh] md:h-[90vh] overflow-hidden">
      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[3px] bg-[#114a9f] z-30"
        style={{ width: progressWidth }}
      />

      {/* ===== BACKGROUND CROSSFADE (NO FLASH) ===== */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{
              opacity: i === index ? 1 : 0,
              scale: i === index ? 1 : 1.08,
              zIndex: i === index ? 2 : 1,
            }}
            transition={{
              opacity: { duration: 0.9, ease: easeSmooth },
              scale: { duration: 6, ease: "linear" },
            }}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
            />

            <div className="absolute inset-0">
              {/* Main Left Dark Fade */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-transparent" />

              {/* Soft Depth Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ===== CONTENT (ALIGNED WITH NAVBAR) ===== */}
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: easeSmooth }}
        className="relative z-20 h-full flex items-center"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-white slide-title text-6xl md:text-6xl font-semibold leading-tight">
              {slides[index].title}
            </h1>

            <p className="text-gray-200 mt-5 text-base md:text-lg">
              {slides[index].desc}
            </p>

            <button className="bg-gradient-to-r from-[#114a9f] lg:mt-16 to-blue-500 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition">
              {slides[index].btn}
            </button>
          </div>
        </div>
      </motion.div>

      {/* ===== NAVIGATION BUTTONS ===== */}
      <div className="absolute right-[15px] bottom-[15px] flex gap-3 z-30">
        <button
          onClick={prevSlide}
          className="w-11 h-11 bg-white/90 hover:bg-[#114a9f] hover:text-white rounded-full flex items-center justify-center shadow transition"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={nextSlide}
          className="w-11 h-11 bg-white/90 hover:bg-[#114a9f] hover:text-white rounded-full flex items-center justify-center shadow transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* ===== LINE INDICATORS ===== */}
      <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[3px] transition-all duration-300 ${
              i === index ? "w-12 bg-[#114a9f]" : "w-6 bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* ===== MOBILE SWIPE (SAFE VERSION) ===== */}
      <div
        className="absolute inset-0 z-10"
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current === null) return;
          const diff = touchStartX.current - e.changedTouches[0].clientX;

          if (diff > 60) nextSlide();
          if (diff < -60) prevSlide();

          touchStartX.current = null;
        }}
      />
    </section>
  );
}