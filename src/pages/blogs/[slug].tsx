"use client";

import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, Clock } from "lucide-react";

type Blog = {
  title: string;
  desc: string;
  image: string;
  category: string;
  date: string;
  views: number;
  href: string;
};

// Static blogs (same as before)
const blogs: Blog[] = [
  {
    title: "Maximizing Oil Yield with Modern Extraction Technology",
    desc: "Discover how advanced screw press systems improve efficiency, reduce wastage, and deliver higher extraction performance for modern edible oil plants.",
    image: "/img/blog1.jpg",
    category: "Technology",
    date: "12 Feb 2026",
    views: 245,
    href: "oil-yield-technology",
  },
  {
    title: "Automation in Oil Mills: The Future of Smart Processing",
    desc: "PLC-driven automation is transforming traditional oil mills into smart factories with consistent output, reduced labor, and better monitoring.",
    image: "/img/blog2.webp",
    category: "Automation",
    date: "05 Feb 2026",
    views: 198,
    href: "smart-processing",
  },
  {
    title: "Choosing  Right Filtration System for Edible Oil",
    desc: "Learn how modern filtration solutions ensure clarity, purity, and long shelf life while reducing operational maintenance costs.",
    image: "/img/blog3.jpg",
    category: "Refining",
    date: "28 Jan 2026",
    views: 312,
    href: "filtration-system",
  },
];

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.href === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-xl font-semibold text-gray-700">Blog not found.</p>
      </div>
    );
  }

  // Recent blogs for sidebar (exclude current)
  const recentBlogs = blogs.filter((b) => b.href !== slug);

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16">
      {/* Back Link */}
      <div className="bg-blue-50 p-3 rounded-2xl  mb-8">
        <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
      >
        <ArrowLeft size={20} /> Back to Blogs
      </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1 lg:p-4 border border-slate-200 rounded-3xl">
            
          {/* Blog Title */}
          <h1 className="text-4xl md:text-4xl leading-14 font-bold text-gray-900 mb-4">
            {blog.title}
          </h1>

          {/* Blog Meta */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-500 mb-10 gap-2 sm:gap-0">
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} /> <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2"><Eye size={16} /> <span>{blog.views} views</span></div>
            </div>
          </div>
          {/* Hero Image with Category Badge */}
          <div className="relative w-full h-80 md:h-[400px] rounded-xl overflow-hidden shadow-lg mb-8">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
            <span className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full font-medium text-sm shadow">
              {blog.category}
            </span>
          </div>


          {/* Blog Content */}
          <div className="prose prose-slate max-w-none text-gray-700">
            <p>{blog.desc}</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dignissim, sapien non laoreet euismod, magna erat fermentum sem,
              nec consequat arcu lorem id lacus. Integer nec luctus ligula.
              Curabitur vel ipsum at ligula consequat ultricies.
            </p>
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-gray-900">
              Advanced Techniques in Modern Processing
            </h2>
            <p>
              Aliquam erat volutpat. Nulla facilisi. Phasellus in quam vitae
              lorem facilisis dictum. Suspendisse potenti. Vestibulum vel neque
              id urna feugiat varius.
            </p>
            <h3 className="mt-6 mb-2 text-xl font-semibold text-gray-900">
              Benefits of Modern Filtration
            </h3>
            <ul className="list-disc ml-6">
              <li>Improved oil clarity and purity</li>
              <li>Extended shelf life</li>
              <li>Reduced operational maintenance</li>
            </ul>
            <p className="mt-4">
              Proin nec quam ut nunc suscipit vulputate. Fusce porttitor, massa
              sed sollicitudin pretium, augue sapien vulputate lectus, in
              bibendum sapien lorem sed neque.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm gap-4">
            <span>Written by: Industry Expert</span>
            <span>© 2026 Mahadev International</span>
          </div>
        </div>

        {/* Sidebar: Recent Blogs */}
        <aside className="w-full lg:w-80 lg:p-4 border border-slate-200 rounded-3xl flex-shrink-0">
          <h2 className="text-xl font-semibold mb-6 text-gray-900">
            Recent Blogs
          </h2>
          <div className="flex flex-col gap-4">
            {recentBlogs.map((b) => (
              <Link
                key={b.href}
                href={`/blogs/${b.href}`}
                className="flex gap-4 p-3 border border-slate-200 rounded-lg hover:shadow-md transition"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-gray-900 font-medium text-sm line-clamp-2">
                    {b.title}
                  </h3>
                  <span className="text-gray-500 text-xs">{b.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}