"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsSection() {
  return (
    <section className="w-full bg-slate-100 overflow-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">

        {/* LEFT CONTENT */}
        <div className="px-6 md:px-12 lg:px-20 py-14 lg:py-24">
          <div className="max-w-xl">

            <h2
              className="text-3xl md:text-4xl font-semibold text-gray-900 wow animate__animated animate__fadeInUp"
              data-wow-delay="0.2s"
            >
              Technology & Solutions
            </h2>

            <p
              className="text-[#114a9f] italic font-medium mt-3 text-lg wow animate__animated animate__fadeInUp"
              data-wow-delay="0.4s"
            >
              Driving efficiency and innovation in every drop of oil.
            </p>

            <p
              className="text-gray-600 mt-6 leading-relaxed wow animate__animated animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              Our advanced oil extraction technologies deliver superior
              performance, efficiency, and reliability for various applications.
            </p>

            <p
              className="text-gray-600 mt-6 leading-relaxed wow animate__animated animate__fadeInUp"
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
              bg-gradient-to-r from-cyan-600 to-blue-600
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

        {/* RIGHT IMAGE */}
        <div className="relative h-[320px] md:h-[420px] lg:h-[620px] w-full overflow-hidden wow animate__animated animate__fadeInRight">
          <Image
            src="/img/solutions2.jpg"
            alt="Technology and Solutions"
            fill
            className="object-cover scale-105 hover:scale-100 transition-transform duration-[2000ms]"
            priority
          />
        </div>

      </div>
    </section>
  );
}