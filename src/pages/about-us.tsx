import Head from "next/head";
import {
  Factory,
  Cog,
  Globe2,
  ShieldCheck,
  Wrench,
  Boxes,
  Rocket,
  Building2,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";

export default function CompanyProfile() {
  return (
    <>
      <Head>
        <title>Company Profile | Mahadev International</title>
      </Head>

      {/* HERO SECTION – INDUSTRIAL PREMIUM DESIGN */}
      <section className="relative text-white py-28 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/img/hero-industrial.png')" }}
        ></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-700/90 via-blue-700/80 to-blue-900/90"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-xl">
            Mahadev International
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-xl max-w-3xl opacity-95 leading-relaxed drop-shadow">
            Engineering world‑class turnkey oil mill plants, high‑performance
            extraction systems, and industrial processing machinery trusted
            across global markets.
          </p>

          {/* Feature Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {/* Box 1 */}
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-7 h-7 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 21h18M3 10h18M3 3h18M7 21V10M17 21V10M7 3v7M17 3v7" />
                </svg>
                <h3 className="text-3xl font-bold">15+</h3>
              </div>
              <p className="text-sm opacity-90">Years Engineering Expertise</p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-7 h-7 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h4m-4-4h4M7 9h2m-2 4h2" />
                </svg>
                <h3 className="text-3xl font-bold">12+</h3>
              </div>
              <p className="text-sm opacity-90">Countries Global Presence</p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-7 h-7 text-cyan-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2 4-4m6 2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
                <h3 className="text-3xl font-bold">ISO</h3>
              </div>
              <p className="text-sm opacity-90">ISO‑Grade Quality Standards</p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg hover:bg-white/20 transition">
              <div className="flex items-center gap-3 mb-2">
                <svg
                  className="w-7 h-7 text-blue-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18M3 12h18M3 21h18" />
                </svg>
                <h3 className="text-3xl font-bold">High</h3>
              </div>
              <p className="text-sm opacity-90">High‑Efficiency Systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
           <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              About Our Company
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mahadev International is a leading engineering company
              specializing in the manufacturing of oil mill machinery,
              extraction systems, and industrial processing equipment. With a
              strong focus on innovation, durability, and performance, we
              deliver turnkey solutions that empower industries worldwide.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our engineering excellence, modern manufacturing capabilities, and
              customer‑centric approach make us a trusted partner for industrial
              processing plants across India, Africa, Southeast Asia, and the
              Middle East.
            </p>
          </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            What Sets Us Apart
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Cog className="text-cyan-600" size={32} />,
                title: "Precision Engineering",
                desc: "Machinery designed with accuracy, durability, and long‑term performance in mind.",
              },
              {
                icon: <Rocket className="text-blue-600" size={32} />,
                title: "Turnkey Project Execution",
                desc: "Complete plant setup from design to commissioning with seamless integration.",
              },
              {
                icon: <Wrench className="text-cyan-600" size={32} />,
                title: "Advanced Manufacturing",
                desc: "CNC machining, automated fabrication, and strict quality control processes.",
              },
              {
                icon: <Boxes className="text-blue-600" size={32} />,
                title: "Custom‑Built Solutions",
                desc: "Tailored machinery engineered to meet unique industrial requirements.",
              },
              {
                icon: <Users className="text-cyan-600" size={32} />,
                title: "Dedicated Support",
                desc: "Reliable after‑sales service, maintenance, and spare parts availability.",
              },
              {
                icon: <Award className="text-blue-600" size={32} />,
                title: "Global Trust",
                desc: "Preferred by industries across India, Africa, and Southeast Asia.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white rounded-2xl shadow-sm border hover:shadow-lg transition"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Our Engineering Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Turnkey Oil Mill Plants",
              desc: "Complete extraction plants with seed processing, pressing, filtration, and refining.",
            },
            {
              title: "OPTIFLOW Screw Press Series",
              desc: "High‑performance screw press designed for maximum oil recovery and low energy use.",
            },
            {
              title: "Material Handling Systems",
              desc: "Bucket elevators, chain conveyors, and feeders for smooth industrial operations.",
            },
            {
              title: "Filtration & Refining Units",
              desc: "Modern filtration systems ensuring clarity, purity, and extended shelf life.",
            },
            {
              title: "Automation & Control Panels",
              desc: "PLC‑based automation for consistent output and real‑time monitoring.",
            },
            {
              title: "Custom Engineering",
              desc: "Tailor‑made machinery designed for unique industrial requirements.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-sm border hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANY INFO */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">
            Company Information
          </h2>

          <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
            <table className="w-full text-sm">
              <tbody>
                {[
                  ["Company Name", "Mahadev International"],
                  ["Nature of Business", "Manufacturer & Supplier"],
                  [
                    "Primary Industry",
                    "Oil Mill Machinery & Industrial Equipment",
                  ],
                  ["Location", "India"],
                  ["Export Markets", "Africa, Middle East, Southeast Asia"],
                  ["Certifications", "ISO‑Grade Manufacturing Standards"],
                  ["Employees", "—"],
                  ["Year of Establishment", "—"],
                ].map((row, i) => (
                  <tr key={i} className="border-b">
                    <td className="bg-gray-50 font-medium p-4 w-1/3 text-gray-900">
                      {row[0]}
                    </td>
                    <td className="p-4 text-gray-700">{row[1]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-gray-900">
          Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-xl mb-3 text-cyan-700">
              Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To engineer world‑class oil extraction and processing systems that
              empower industries with efficiency, reliability, and sustainable
              performance.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl shadow-sm border">
            <h3 className="font-semibold text-xl mb-3 text-blue-700">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a global leader in industrial machinery manufacturing,
              recognized for innovation, quality, and customer‑centric
              solutions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
