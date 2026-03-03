"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oil Expellers",
    image: "/img/product1.png",
    slug: "/products/oil-expellers",
    desc: "High-performance oil expellers engineered for maximum extraction efficiency, low power consumption, and long operational life.",
    points: [
      "Heavy-duty industrial construction",
      "Optimized oil recovery rate",
      "Low maintenance design",
      "Suitable for multiple oilseeds",
    ],
  },
  {
    id: 2,
    name: "Oilseed Cookers",
    image: "/img/product2.png",
    slug: "/products/oilseed-cookers",
    desc: "Uniform seed conditioning system designed to improve oil yield and ensure precise temperature control.",
    points: [
      "Uniform heating technology",
      "Improves pressing efficiency",
      "Energy-efficient operation",
      "Robust & reliable build",
    ],
  },
  {
    id: 3,
    name: "Filter Press",
    image: "/img/product3.png",
    slug: "/products/filter-press",
    desc: "Advanced filtration system delivering crystal-clear oil with high throughput and minimal losses across continuous operations.",
    points: [
      "High filtration accuracy",
      "Easy cleaning & operation",
      "Durable plate structure",
      "Designed for continuous use",
    ],
  },
  {
    id: 4,
    name: "Material Handling",
    image: "/img/product4.png",
    slug: "/products/material-handling",
    desc: "Efficient conveying and handling solutions to streamline plant workflow and reduce manual intervention.",
    points: [
      "Custom conveyor solutions",
      "Smooth material flow",
      "Reduced handling losses",
      "Built for heavy-duty use",
    ],
  },
];

export default function ProductsPage() {
  return (
    <section className="py-20 bg-[#f4f7fb]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-semibold text-gray-900">Our Products</h1>
          <p className="text-gray-600 mt-4">
            Engineered Solutions for Efficient Oil Processing Plants
          </p>
        </div>

        {/* 3 Column Card Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              {/* CLICKABLE IMAGE */}
              <Link
                href={product.slug}
                className="h-[220px] flex items-center justify-center p-6 bg-gradient-to-br from-white to-blue-50"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="object-contain transition duration-500 group-hover:scale-105"
                />
              </Link>

              {/* CONTENT */}
              <div className="p-6">
                {/* CLICKABLE TITLE */}
                <Link href={product.slug}>
                  <h2 className="text-xl font-semibold text-gray-900 hover:text-blue-700 transition">
                    {product.name}
                  </h2>
                </Link>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {product.desc}
                </p>

                <ul className="mt-5 space-y-2">
                  {product.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <span className="w-2 h-2 mt-2 bg-blue-600 rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>

                {/* ORIGINAL BUTTON (UNCHANGED) */}
                <Link
                  href={product.slug}
                  className="inline-flex items-center gap-2 mt-6
                  bg-gradient-to-r from-cyan-600 to-blue-600
                  text-white px-5 py-2.5 rounded-xl font-medium shadow
                  hover:opacity-90 transition-all duration-300"
                >
                  Know More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}