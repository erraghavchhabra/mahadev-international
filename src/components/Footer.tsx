
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f223a] via-[#132c4a] to-[#183a5c] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* COMPANY INFO */}
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-white/20 transition">
            <Image
              src="/img/wl.png" 
              alt="Mahadev International"
              width={100}
              height={60}
              className="mb-6"
            />

            <p className="text-gray-400 leading-relaxed">
              Leading manufacturer of turnkey solutions for edible oilseed crushing
              plants and fat rendering systems
            </p>

            <p className="mt-5 text-[#4fc3f7] font-medium">
              • Built for performance
            </p>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative pl-4">
              <span className="absolute left-0 top-1 w-[3px] h-6 bg-[#1da1f2]" />
              Products
            </h3>

            <ul className="space-y-4">
              {[
                "Oil Expellers",
                "Seed Cookers",
                "Filtration Systems",
                "Refining Units",
                "Turnkey Solutions",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 hover:text-white transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1da1f2]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative pl-4">
              <span className="absolute left-0 top-1 w-[3px] h-6 bg-[#1da1f2]" />
              Quick Links
            </h3>

            <ul className="space-y-4">
              {[
                "About Us",
                "News & Media",
                "Service & Support",
                "Careers",
                "Contact Us",
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 hover:text-white transition"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#1da1f2]" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 relative pl-4">
              <span className="absolute left-0 top-1 w-[3px] h-6 bg-[#1da1f2]" />
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">
                <div>
                    <div className="w-11 h-11 rounded-full bg-[#1da1f2]/20 flex items-center justify-center">
                  <MapPin className="text-[#1da1f2]" size={20} />
                </div>
                </div>
                <p className=" leading-relaxed">
                  B-29 Guru Gobind Singh Nagar, Sherpur Chowk, Ludhiana, 141008, India
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1da1f2]/20 flex items-center justify-center">
                  <Phone className="text-[#1da1f2]" size={20} />
                </div>
                <p className="">
                  +91 98155-93465,<br />
                  +61-402378703
                </p>
              </div>

              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-[#1da1f2]/20 flex items-center justify-center">
                  <Mail className="text-[#1da1f2]" size={20} />
                </div>
                <p className="">
                  info@oilseedmachinery.com,<br />
                  Mahadev.inter1@gmail.com
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-gray-400 text-sm">
            © 2026 Mahadev International. All rights reserved.
            <p className="mt-1 text-gray-500">Engineered for Excellence</p>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-gray-400">Follow us on social media</p>

            {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
              <Link
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#114a9f] flex items-center justify-center transition"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
}