"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Clock } from "lucide-react";

type Blog = {
  title: string;
  desc: string;
  image: string;
  category: string;
  date: string;
  views: number;
  href?: string;
};

type BlogsSectionProps = {
  showViewAll?: boolean; // controls button visibility
};

const blogs: Blog[] = [
  {
    title: "Maximizing Oil Yield with Modern Extraction Technology",
    desc: "Discover how advanced screw press systems improve efficiency, reduce wastage, and deliver higher extraction performance for modern edible oil plants.",
    image: "/img/blog1.jpg",
    category: "Technology",
    date: "12 Feb 2026",
    views: 245,
    href: "/blogs/oil-yield-technology",
  },
  {
    title: "Automation in Oil Mills: The Future of Smart Processing",
    desc: "PLC-driven automation is transforming traditional oil mills into smart factories with consistent output, reduced labor, and better monitoring.",
    image: "/img/blog2.webp",
    category: "Automation",
    date: "05 Feb 2026",
    views: 198,
    href: "/blogs/smart-processing",
  },
  {
    title: "Choosing the Right Filtration System for Edible Oil",
    desc: "Learn how modern filtration solutions ensure clarity, purity, and long shelf life while reducing operational maintenance costs.",
    image: "/img/blog3.jpg",
    category: "Refining",
    date: "28 Jan 2026",
    views: 312,
    href: "/blogs/filtration-system",
  },
];

export default function BlogsSection({ showViewAll = false }: BlogsSectionProps) {
  return (
    <section className="w-full bg-gray-50 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Industry Insights & Blogs
          </h2>

          <p className="lg:w-[60%] mx-auto mt-4 text-xl text-gray-600">
            Stay ahead with expert insights, technical guides, and the latest
            developments in oil extraction technology
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <Link href={blog.href ?? "#"} className="block relative overflow-hidden">
                <div className="relative h-[220px] w-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-[1600ms] hover:scale-110"
                  />
                </div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-[#114a9f] text-white text-xs px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </Link>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock size={16} /> {blog.date}
                </p>

                <Link
                  href={blog.href ?? "#"}
                  className="block mt-2 text-lg font-semibold text-gray-900 hover:text-[#114a9f] transition"
                >
                  {blog.title}
                </Link>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {blog.desc}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <Link
                    href={blog.href ?? "#"}
                    className="inline-flex items-center gap-1 text-[#114a9f] font-medium hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>

                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Eye size={16} />
                    {blog.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (ONLY when enabled) */}
        {showViewAll && (
          <div className="mt-14 text-center">
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2
              bg-gradient-to-r from-cyan-700 to-cyan-900
              text-white px-6 py-3 rounded-xl font-medium shadow-lg
              hover:shadow-xl transition-all duration-300"
            >
              View All Blogs
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}