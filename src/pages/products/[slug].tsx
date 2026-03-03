"use client";

import ProductSlider from "@/components/ProductSlider";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SplitSection from "@/components/SplitSection";
import DetailAlternate from "@/components/DetailAlternate";
import RequestInfoDark from "@/components/RequestInfoDark";
import VideoGallery from "@/components/VideoGallery";
import CaseStudies from "@/components/CaseStudies";
import RelatedProducts from "@/components/RelatedProducts";
/* ---------------- MOCK DATA ---------------- */
const product = {
  title: "Oil Expeller Machine",
  subtitle: "High-efficiency continuous extraction for industrial mills",
  description:
    "Engineered for continuous operation, delivering maximum extraction efficiency with minimal maintenance and superior durability.",

  features: [
    "Continuous high-output performance",
    "Energy efficient motor system",
    "Low maintenance & long lifespan",
    "Industrial-grade steel construction",
  ],

  media: [
    { type: "image", src: "/img/product1.png" },
    { type: "image", src: "/img/product2.png" },
    { type: "video", src: "/videos/cooker.mp4" },
    { type: "image", src: "/img/product3.png" },
    { type: "image", src: "/img/product4.png" },
    { type: "image", src: "/img/product1.png" },
    { type: "image", src: "/img/product2.png" },
    { type: "video", src: "/videos/corp.mp4" },
  ],

  specs: [
    { label: "Motor Power", value: "30 Kw × 960 RPM" },
    { label: "Length", value: "4160 mm" },
    { label: "Width", value: "1090 mm" },
    { label: "Height", value: "1250 mm" },
    { label: "Crushing Capacity", value: "13–14 TPD" },
    { label: "Oil Residual", value: "6–7%" },
  ],
};

const leftFeatures = [
  {
    title: "Worm Cage Assembly",
    desc: "Hard Faced Worm assembly, Cone ring and Cone point ensures longer life span of spares",
  },
  {
    title: "Rigid Construction",
    desc: "Heavy-duty carbon steel construction reduces vibration and handles heat for long-lasting performance",
  },
  {
    title: "User-Friendly Interface",
    desc: "The machine is user-friendly and can be operated smoothly with very little experience or training",
  },
];

const rightFeatures = [
  {
    title: "Energy Efficient",
    desc: "Optimized power consumption reduces operating costs while maintaining high performance.",
  },
  {
    title: "Flexible Automation",
    desc: "Compatible with various automation solutions to enhance productivity and reduce labor costs.",
  },
  {
    title: "Quick-Access Worm Shaft",
    desc: "Main worm shaft can be easily removed without disturbing the gearbox assembly.",
  },
];

export default function ProductDetailPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight">
            {product.title}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            {product.subtitle}
          </p>
          <p className="text-gray-600">{product.description}</p>

          <ul className="space-y-3 pt-4">
            {product.features.map((feature, i) => (
              <li
                key={i}
                className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
              >
                <CheckCircle
                  className="text-blue-600 flex-shrink-0"
                  size={20}
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - Slider Component */}
        <ProductSlider media={product.media} />
      </section>
{/* ================= 3D Image Split Section ================= */}
<SplitSection />
      {/* ================= SPECIFICATIONS ================= */}
      <section className="py-20 bg-[#0e1a2b] text-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-4xl font-semibold mb-10 text-center">
            Technical Specifications
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {product.specs.map((s, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 flex justify-between"
              >
                <span className="text-gray-300">{s.label}</span>
                <span className="font-semibold">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold">Key Features & Benefits</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-12">
              {leftFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-blue-600" size={26} />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Image
                src="/img/gearbox.png"
                alt="Machine"
                width={420}
                height={420}
                className="object-contain drop-shadow-2xl"
              />
            </div>

            <div className="space-y-12">
              {rightFeatures.map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-blue-600" size={26} />
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DetailAlternate />
      <RelatedProducts />
      <RequestInfoDark  />
      <VideoGallery />
      <CaseStudies />
    </div>
  );
}
