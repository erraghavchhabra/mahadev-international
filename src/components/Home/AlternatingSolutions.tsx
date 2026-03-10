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
    title: "Animal Feed Plant",
    description:
      "Advanced animal feed plants engineered for performance and precision. Featuring smart automation, rugged build, and energy-efficient systems.",
    points: [
      "Customizable layouts for all feed types",
      "Pelletizing, Grinding & Mixing system",
      "Automation via PLC based System",
    ],
    button: "Transform your feed process",
    image: "/img/feed.png",
  },
  {
    title: "Oil Mill Turnkey Solutions",
    description:
      "From initial planning to installation and commissioning, we provide complete turnkey solutions tailored to your specific oil extraction needs.",
    points: [
      "Oil Expellers / Screw Press",
      "Seed Preparation",
      "Oil Filtration System",
      "Storage & Packaging Solutions",
    ],
    button: "Discover our solutions",
    image: "/img/prep.jpg",
  },
  {
    title: "Spare parts",
    description:
      "We offer a complete range of custom-engineered spare parts compatible with all major OEM brands.",
    points: [
      "Worm Screw & Worm Shafts",
      "Hardfaced Press Cage Bars",
      "Gears and CNC Machined Parts",
    ],
    button: "Order Quality Parts Now",
    image: "/img/spare.png",
  },
  {
    title: "Solvent Extraction Plant",
    description:
      "We deliver end-to-end turnkey solutions for solvent extraction plants tailored to your processing needs.",
    points: [
      "Custom-engineered plant design",
      "Full-scale installation and commissioning",
      "Robustly Fabricated Vessels",
    ],
    button: "Explore Our solutions",
    image: "/img/solvent.jpg",
  },
];

export default function AlternatingSolutions() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {sections.map((section, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <div key={index} className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                {/* IMAGE */}
                <div
                  className={`${isReverse ? "lg:order-2" : "lg:order-1"} wow animate__animated ${
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
                    className="text-3xl md:text-4xl font-semibold text-gray-900 wow animate__animated animate__fadeInUp"
                    data-wow-delay="0.2s"
                  >
                    {section.title}
                  </h2>

                  <p
                    className="text-gray-600 mt-6 leading-relaxed wow animate__animated animate__fadeInUp"
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
                          className="flex items-start gap-3 wow animate__animated animate__fadeInUp"
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

                  {section.button && (
                    <Link
                      href={section.href ?? "#"}
                      className="group mt-8 inline-flex items-center gap-2
                      bg-gradient-to-r from-cyan-700 to-cyan-900
                      text-white px-6 py-3 rounded-xl font-medium shadow-lg
                      hover:shadow-xl transition-all duration-300
                      wow animate__animated animate__fadeInUp"
                      data-wow-delay="0.9s"
                    >
                      {section.button}
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
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