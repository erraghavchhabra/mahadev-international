"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import Image from "next/image";
const menuData = [
  {
    title: "Products",
    items: ["Product One", "Product Two", "Product Three", "Product Four"],
  },
  {
    title: "Technology & Solutions",
    items: ["Turnkey Oil Mill", "Automation Systems", "Solvent Extraction Plant", "Mini Oil Mill", "Seed Cleaning & Sortex Plant",],
  },
  {
    title: "News & Media",
    items: ["Latest News", "Press Release", "Events", "Blogs"],
  },
  {
    title: "Service & Support",
    items: ["Customer Support", "Documentation", "Training", "Contact Support"],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<number | null>(
    null
  );

  const toggleDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  return (
    <header className="w-full shadow-md bg-white fixed top-0 left-0 z-50">
      {/* Topbar */}
      <div className="w-full bg-[#114a9f] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          {/* Left: Email */}
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@yourcompany.com</span>
          </div>

          {/* Right: Quick Links */}
          <div className="flex gap-6">
            <Link href="#" className="hover:underline">
              Career
            </Link>
            <Link href="#" className="hover:underline">
              CSR
            </Link>
          </div>
        </div>
      </div>

      {/* Logo + Menu */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-[#114a9f]">
           <Image
                        src="/img/logo.png" 
                        alt="Mahadev International"
                        width={100}
                        height={60}
                      />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          {menuData.map((menu, index) => (
            <div key={index} className="relative group">
              <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#114a9f] transition duration-300">
                {menu.title}
                <ChevronDown
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300 ease-out delay-75 bg-white shadow-xl rounded-lg min-w-[240px] z-50">
                <ul className="py-4">
                  {menu.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href="#"
                        className="block px-6 py-2 text-gray-600 hover:text-[#114a9f] hover:bg-blue-50 transition duration-200"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* About Us */}
          <Link
            href="#"
            className="text-gray-700 font-medium hover:text-[#114a9f] transition"
          >
            About Us
          </Link>

          {/* Contact Us Gradient Button */}
          <Link
            href="#"
            className="bg-gradient-to-r from-[#114a9f] to-blue-500 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-[#114a9f]"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`lg:hidden border-t transition-all duration-300 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="px-6">
          <ul className="flex flex-col">
            {menuData.map((menu, index) => (
              <li key={index} className="border-b">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex justify-between items-center py-4 text-gray-700 font-medium hover:text-[#114a9f] transition duration-300"
                >
                  {menu.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeMobileDropdown === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mobile Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeMobileDropdown === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <ul className="pb-4">
                    {menu.items.map((item, i) => (
                      <li key={i}>
                        <Link
                          href="#"
                          className="block pl-4 py-2 text-gray-600 hover:text-[#114a9f]"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}

            {/* About Us */}
            <li className="py-4">
              <Link
                href="#"
                className="text-gray-700 font-medium hover:text-[#114a9f] transition"
              >
                About Us
              </Link>
            </li>

            {/* Contact Us Gradient Button */}
            <li className="py-4">
              <Link
                href="#"
                className="block text-center bg-gradient-to-r from-[#114a9f] to-blue-500 text-white px-5 py-2 rounded-md font-medium shadow hover:opacity-90 transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
