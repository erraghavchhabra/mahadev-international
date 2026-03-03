"use client";

import React from "react";
import Image from "next/image"; // ✅ correct import

const SplitSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="relative w-100 h-100">
          <Image
            src="/img/gearbox.png"  
            alt="Enhanced oil extraction efficiency"
            fill
            className="w-full h-full"
            priority
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            Enhanced Oil Extraction Efficiency with Double Chamber Design
          </h2>

          <h3 className="text-lg md:text-xl text-blue-600 font-semibold mb-4">
            Reduced Load on Motor & Ensures Consistent Power Transmission
          </h3>

          <p className="text-gray-600 leading-relaxed text-base md:text-lg">
            The three-stage reduction increases output torque, which is beneficial
            in crushing tough oilseeds and also prevents sudden load shocks,
            ensuring smooth and reliable operation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SplitSection;