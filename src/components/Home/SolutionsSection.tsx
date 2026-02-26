"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
export default function SolutionsSection() {
  return (
    <section className="w-full bg-slate-100">
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
        {/* LEFT CONTENT */}
        <div className="px-6 md:px-12 lg:px-20 py-14 lg:py-20">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Technology & Solutions
            </h2>

            <p className="text-[#114a9f] italic font-medium mt-3 text-lg">
              Driving efficiency and innovation in every drop of oil.
            </p>
    <p className="text-gray-600 mt-6 leading-relaxed">Our advanced oil extraction technologies deliver superior performance, efficiency, and reliability for various applications.</p>
            <p className="text-gray-600 mt-6 leading-relaxed">
              Mahadev offers advanced oil extraction solutions featuring
              advanced screw presses, filter presses, and modular RBD refining
              systems. Designed for multi-seed processing, continuous operation,
              and intelligent automation, our equipment ensures high oil yield
              and operational efficiency. With IoT-ready controls, low
              maintenance, and scalable design, Mahadev empowers modern edible
              oil plants to increase productivity, reduce processing losses, and
              adopt smart, energy-efficient technologies for competitive
              advantage.
            </p>

            <Link
              href="/products"
              className="group mt-6 lg:mt-12  inline-flex items-center gap-2 
            bg-gradient-to-r from-[#114a9f] to-blue-500 
            text-white px-5 py-3 rounded-xl font-medium shadow 
            hover:opacity-90 transition"
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
        <div className="relative h-[320px] md:h-[420px] lg:h-full w-full overflow-hidden">
          <Image
            src="/img/solutions2.jpg" // 👉 put your image inside /public/img/
            alt="Technology and Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
