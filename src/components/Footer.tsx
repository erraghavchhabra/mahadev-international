import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" ms-footer text-gray-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* COMPANY */}
          <div>
            <Image
              src="/img/wl.png"
              alt="Mahadev International"
              width={110}
              height={60}
              className="mb-6"
            />

            <p className="text-gray-400 leading-relaxed text-sm">
              Mahadev International specializes in turnkey edible oilseed
              processing plants, delivering engineered solutions built for
              durability, efficiency, and long-term performance.
            </p>

            <div className="flex gap-4 mt-6">
              {[Facebook, Youtube, Instagram, Linkedin].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-gray-600 hover:border-[#114a9f] hover:bg-[#114a9f] flex items-center justify-center transition"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Products
            </h3>

            <ul className="space-y-3 text-sm">
              {[
                "Oil Expellers",
                "Seed Cookers",
                "Filtration Systems",
                "Refining Units",
                "Turnkey Projects",
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li><Link href="/company-profile" className="hover:text-white">About Us</Link></li>
              <li><Link href="#" className="hover:text-white">News & Media</Link></li>
              <li><Link href="#" className="hover:text-white">Service & Support</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Info
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <MapPin size={18} className="text-[#4fc3f7] mt-1" />
                <p>
                  B-29 Guru Gobind Singh Nagar,<br />
                  Sherpur Chowk, Ludhiana – 141008, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="text-[#4fc3f7] mt-1" />
                <p>
                  +91 98155-93465<br />
                  +61 402378703
                </p>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="text-[#4fc3f7] mt-1" />
                <p>
                  info@oilseedmachinery.com<br />
                  mahadev.inter1@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700" />

      {/* BOTTOM BAR */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>
          © {new Date().getFullYear()} Mahadev International. All Rights Reserved.
        </p>

        <p className="text-gray-500 mt-2 md:mt-0">
          Engineered for Performance • Built for Reliability
        </p>
      </div>
    </footer>
  );
}