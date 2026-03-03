"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

type Section = {
  title: string;
  description: string;
  points?: string[];
  button?: string;
  href?: string;
  image: string;
};

const sections: Section[] = [
  {
    title: "High quality oilseed cake with better texture and adjustment in thickness of cake",
    description:
      "A double chamber design enhances oilseed meal quality by improving extraction efficiency and consistency. Thickness can be precisely adjusted with a cone choke mechanism, ensuring optimal oil recovery, better meal texture, and superior processing performance for various oilseeds.",
    points: [
      "Customizable layouts for all feed types",
      "Pelletizing, Grinding & Mixing system",
      "Automation via PLC based System",
    ],
    image: "/img/feed.png",
  },
  {
    title: "Process optimisation with PLC control",
    description:
      "From controlling feed to reducing manpower each stage is optimised and handled with rigirous planning and flow charts. At mahadev we provide complete turnkey solution that works best with double chamber",
    points: [
      "Oil Expellers / Screw Press",
      "Seed Preparation",
      "Oil Filtration System",
      "Storage & Packaging Solutions",
    ],
    image: "/img/prep.jpg",
  },
];

export default function AlternatingSolutions() {
  return (
    <section className="w-full bg-blue-50 overflow-hidden">
      {sections.map((section, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div key={index} className="py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                {/* IMAGE */}
                <div
                  className={`${isReverse ? "lg:order-2" : "lg:order-1"}  ${
                    isReverse ? "animate__fadeInRight" : "animate__fadeInLeft"
                  }`}
                >
                  <div className="relative w-full h-[260px] md:h-[340px] lg:h-[420px] overflow-hidden rounded-2xl">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-[1600ms] hover:scale-105"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className={`${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                  <h2
                    className="text-3xl md:text-4xl font-semibold text-gray-900 "
                    data-wow-delay="0.2s"
                  >
                    {section.title}
                  </h2>

                  <p
                    className="text-gray-600 mt-6 leading-relaxed "
                    data-wow-delay="0.4s"
                  >
                    {section.description}
                  </p>

                  {/* POINTS */}
                  {section.points && (
                    <ul className="mt-6 space-y-4">
                      {section.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 "
                          data-wow-delay={`${0.5 + i * 0.2}s`}
                        >
                          <span className="mt-1 text-[#114a9f]">
                            <Check size={18} />
                          </span>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}