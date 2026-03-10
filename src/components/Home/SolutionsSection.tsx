"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/solution-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-2 lg:px-2 py-20 flex justify-start items-center min-h-[600px]">

        {/* Glass Text Box */}
        <div className="max-w-xl backdrop-blur-lg bg-white/20 border border-white/20 rounded-2xl p-8 md:p-10 shadow-xl">

          <h2
            className="text-3xl md:text-4xl font-semibold text-white wow animate__animated animate__fadeInUp"
            data-wow-delay="0.2s"
          >
            Technology & Solutions
          </h2>

          <p
            className="text-cyan-200 italic font-medium mt-3 text-lg wow animate__animated animate__fadeInUp"
            data-wow-delay="0.4s"
          >
            Driving efficiency and innovation in every drop of oil.
          </p>

          <p
            className="text-gray-200 mt-6 leading-relaxed wow animate__animated animate__fadeInUp"
            data-wow-delay="0.6s"
          >
            Our advanced oil extraction technologies deliver superior
            performance, efficiency, and reliability for various applications.
          </p>

          <p
            className="text-gray-200 mt-6 leading-relaxed wow animate__animated animate__fadeInUp"
            data-wow-delay="0.8s"
          >
            Mahadev offers advanced oil extraction solutions featuring
            advanced screw presses, filter presses, and modular RBD refining
            systems. Designed for multi-seed processing, continuous operation,
            and intelligent automation, our equipment ensures high oil yield
            and operational efficiency.
          </p>

          <Link
            href="/products"
            className="group mt-8 inline-flex items-center gap-2 
            bg-gradient-to-r from-cyan-700 to-cyan-900
            text-white px-6 py-3 rounded-xl font-medium shadow-lg
            hover:shadow-xl transition-all duration-300
            wow animate__animated animate__fadeInUp"
            data-wow-delay="1s"
          >
            Technology & Solutions
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={18}
            />
          </Link>

        </div>

      </div>

    </section>
  );
}