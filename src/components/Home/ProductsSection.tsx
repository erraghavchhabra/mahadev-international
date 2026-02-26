"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Oil Expellers",
    image: "/img/product1.png",
    slug: "/products/premium-marble",
  },
  {
    id: 2,
    name: "Oilseed Cookers",
    image: "/img/product2.png",
    slug: "/products/granite-stone",
  },
  {
    id: 3,
    name: "Filter Press",
    image: "/img/product3.png",
    slug: "/products/designer-tiles",
  },
  {
    id: 4,
    name: "Material Handling",
    image: "/img/product4.png",
    slug: "/products/wall-cladding",
  },
];

export default function ProductsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Heading Row */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Products
          </h2>

          <Link
            href="/products"
            className="group  inline-flex items-center gap-2 
            bg-gradient-to-r from-[#114a9f] to-blue-500 
            text-white px-5 py-3 rounded-xl font-medium shadow 
            hover:opacity-90 transition"
          >
            Explore All
            <ArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
              size={18}
            />
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.slug}
              className="group block bg-slate-100  overflow-hidden 
              transition-all duration-500"
            >
              {/* Product Image */}
              <div className="relative bg-slate-100 p-2 overflow-hidden">
                <div className=" bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={400}
                  className="w-full "
                />
                </div>
              </div>

              {/* Product Name */}
              <div className="p-2">
                <h3
                  className="bg-gradient-to-r ms-product-title text-center from-[#114a9f] to-blue-500 text-white px-5 py-3  font-medium shadow hover:opacity-90 transition"
                >
                  {product.name}
                </h3>
              </div>

              {/* Subtle Hover Border Effect */}
              <div
                className="h-[3px] w-0 bg-gradient-to-r from-[#114a9f] to-blue-500 
                transition-all duration-500 group-hover:w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}