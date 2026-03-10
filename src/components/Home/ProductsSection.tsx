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
    <section className="py-16 relative product-section-bg">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center justify-between mb-10 wow animate__animated animate__fadeInUp">
          <h2 className="text-3xl md:text-4xl lg:mb-16 font-semibold text-gray-900">
            Our Products
          </h2>
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
              <div className="h-[200px] flex items-center justify-center overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={180}
                  height={180}
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title */}
              <div className="mt-3 flex flex-col items-center gap-3">
                <h3 className="text-lg font-medium text-gray-900 text-center tracking-wide">
                  {product.name}
                </h3>

                {/* Animated Arrow Circle */}
                <div className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 group-hover:border-cyan-700 transition-all duration-500">
                  <ArrowRight
                    size={14}
                    className="text-gray-700 transition-all duration-500 group-hover:text-cyan-700 group-hover:translate-x-[3px]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center lg:mt-14 mt-10">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 
            bg-gradient-to-r from-cyan-700 to-cyan-900 
            text-white px-5 py-3 rounded-xl font-medium shadow 
            hover:opacity-90 transition"
          >
            Explore All Products
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
