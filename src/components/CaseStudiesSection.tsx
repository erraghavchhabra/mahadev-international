"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudiesSection() {
  return (
    <section className="relative w-full bg-gray-50 py-20 lg:py-28 overflow-hidden">

      {/* background glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-200/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Case Studies
          </h2>

          <p className="lg:w-[60%] mx-auto mt-4 text-lg text-gray-600 leading-relaxed">
            Case studies demonstrating efficiency, productivity, and real-world
            impact of our machinery solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group block rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-[240px] w-full overflow-hidden">

                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />

                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>

              </div>

              {/* Content */}
              <div className="p-7">

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#114a9f] transition">
                  {study.title}
                </h3>

                {/* Quote */}
                <p className="mt-3 text-gray-600 text-sm italic leading-relaxed line-clamp-3">
                  {study.quote}
                </p>

                {/* Info Row */}
                <div className="flex justify-between mt-6 text-sm">

                  <div>
                    <span className="text-gray-400 block text-xs uppercase tracking-wide">
                      Industry
                    </span>

                    <span className="font-medium text-gray-700">
                      {study.industry}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-gray-400 block text-xs uppercase tracking-wide">
                      Application
                    </span>

                    <span className="font-medium text-gray-700">
                      {study.application}
                    </span>
                  </div>

                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center gap-2 text-[#114a9f] font-medium">

                  Read Case Study

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}