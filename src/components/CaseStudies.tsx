"use client";

import React from "react";
import { Quote, Factory, DollarSign } from "lucide-react";

interface CaseStudy {
  title: string;
  quote: string;
  industry: string;
  application: string;
  icon: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    title: "Groundnut Oil Cake Manufacturer",
    quote:
      "The VC-Ez IP has significantly improved our production efficiency. We've seen a 30% reduction in cycle times while maintaining exceptional surface quality on our aluminum engine components.",
    industry: "Edible Oil",
    application: "Oil Cake",
    icon: <Factory className="w-8 h-8 text-blue-600" />,
  },
  {
    title: "Reduction in Production Cost",
    quote:
      "The machine's stability and precision have allowed us to achieve tolerances we never thought possible. Our reject rate has dropped to nearly zero since implementing the VC-Ez IP.",
    industry: "Edible Oil",
    application: "Precision Tooling",
    icon: <DollarSign className="w-8 h-8 text-green-600" />,
  },
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Case Studies
          </h2>
         
        </div>

        {/* Spread Row Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="flex-1 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 p-8 border border-gray-100"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gray-100 rounded-xl">
                  {study.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {study.title}
                </h3>
              </div>

              {/* Quote */}
              <div className="flex items-start mb-8">
                <Quote className="w-6 h-6 text-gray-300 mr-3 mt-1" />
                <p className="text-gray-600 leading-relaxed italic">
                  {study.quote}
                </p>
              </div>

              {/* Bottom Info Strip */}
              <div className="flex justify-between bg-gray-50 rounded-xl px-4 py-3 text-sm">
                <div>
                  <span className="text-gray-400 block">Industry</span>
                  <span className="font-medium text-gray-700">
                    {study.industry}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block">Application</span>
                  <span className="font-medium text-gray-700">
                    {study.application}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;