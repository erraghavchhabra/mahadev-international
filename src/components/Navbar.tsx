"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Mail } from "lucide-react";
import Image from "next/image";

const menuData = [
  {
    title: "Products",
    items: [
      { label: "Oil Expellers", href: "/products/oil-expellers" },
      { label: "Oilseed Cookers", href: "/products/oilseed-cookers" },
      { label: "Filter Press", href: "/products/filter-press" },
      { label: "Material Handling", href: "/products/material-handling" },
    ],
  },
  {
    title: "Turnkey Solutions",
    items: [
      { label: "Turnkey Oil Mill", href: "#" },
      { label: "Automation Systems", href: "#" },
      { label: "Solvent Extraction Plant", href: "#" },
      { label: "Mini Oil Mill", href: "#" },
      { label: "Seed Cleaning & Sortex Plant", href: "#" },
    ],
  },
  {
    title: "News & Media",
    items: [
      { label: "Blogs", href: "/blogs" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    title: "Service & Support",
    items: [{ label: "Spare Parts", href: "#" }],
  },

  // About Us is now a direct link (NO dropdown)
  {
    title: "About Us",
    href: "/about-us",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    number | null
  >(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setActiveMobileDropdown(activeMobileDropdown === index ? null : index);
  };

  return (
    <>
      {/* TOPBAR */}
      <div className="w-full bg-gradient-to-r from-cyan-700 to-cyan-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>info@yourcompany.com</span>
          </div>

          <div className="flex gap-6">
            <Link href="/careers" className="hover:underline">
              Career
            </Link>
            <Link href="#" className="hover:underline">
              CSR
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header
        className={`w-full sticky top-0 z-50 transition-all duration-300 ${
          isSticky
            ? "bg-white/80 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-2"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
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
                {/* Direct Link (About Us) */}
                {!menu.items ? (
                  <Link
                    href={menu.href!}
                    className="text-gray-700 font-medium hover:text-[#114a9f] transition"
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <>
                    {/* Dropdown Button */}
                    <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-[#114a9f] transition">
                      {menu.title}
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-300 group-hover:rotate-180"
                      />
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 top-full opacity-0 invisible group-hover:visible group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-300 bg-white shadow-xl rounded-lg min-w-[240px]">
                      <ul className="py-4">
                        {menu.items.map((item, i) => (
                          <li key={i}>
                            <Link
                              href={item.href}
                              className="block px-6 py-2 text-gray-600 hover:text-[#114a9f] hover:bg-blue-50 transition"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-700 to-cyan-900 text-white px-5 py-3 rounded-xl font-medium shadow hover:opacity-90 transition"
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
          className={`lg:hidden border-t ${mobileOpen ? "block" : "hidden"}`}
        >
          <div className="px-6">
            <ul className="flex flex-col">
              {menuData.map((menu, index) => (
                <li key={index} className="border-b">
                  {!menu.items ? (
                    <Link
                      href={menu.href!}
                      className="block py-4 text-gray-700 font-medium"
                    >
                      {menu.title}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="w-full flex justify-between items-center py-4 text-gray-700 font-medium"
                      >
                        {menu.title}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            activeMobileDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all ${
                          activeMobileDropdown === index
                            ? "max-h-96"
                            : "max-h-0"
                        }`}
                      >
                        <ul className="pb-4">
                          {menu.items.map((item, i) => (
                            <li key={i}>
                              <Link
                                href={item.href}
                                className="block pl-4 py-2 text-gray-600"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
