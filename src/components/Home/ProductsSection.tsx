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
  },
  {
    id: 2,
    name: "Oilseed Cookers",
    image: "/img/product2.png",
    slug: "/products/oilseed-cookers",
  },
  {
    id: 3,
    name: "Filter Press",
    image: "/img/product3.png",
    slug: "/products/filter-press",
  },
  {
    id: 4,
    name: "Material Handling",
    image: "/img/product4.png",
    slug: "/products/material-handling",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex items-center justify-between mb-10 wow animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Products
          </h2>

          <Link
            href="/products"
            className="group inline-flex items-center gap-2 
            bg-gradient-to-r from-cyan-600 to-blue-600 
            text-white px-5 py-3 rounded-xl font-medium shadow 
            hover:opacity-90 transition"
          >
            Explore All
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.slug}
              className="group block wow animate__animated animate__fadeInUp"
              data-wow-delay={`${index * 0.15}s`}
            >
              {/* Image */}
              <div className="overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="mt-5 flex flex-col items-center gap-3">
                <h3 className="text-lg font-medium text-gray-900 text-center tracking-wide">
                  {product.name}
                </h3>

                {/* Animated Arrow Circle */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-blue-600 transition-all duration-500">
                  <ArrowRight
                    size={18}
                    className="text-gray-700 transition-all duration-500 group-hover:text-blue-600 group-hover:translate-x-[3px]"
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