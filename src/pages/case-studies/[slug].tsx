"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyPage() {
  const router = useRouter();
  const { slug } = router.query;

  const study = caseStudies.find((s) => s.slug === slug);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  if (!study) {
    return <p className="text-center mt-20">Loading...</p>;
  }

  return (
    <div className="w-full bg-slate-50">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        {/* Small Label */}
        <span className="text-sm font-semibold tracking-widest text-cyan-700 uppercase">
          Case Study
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mt-3 mb-8 leading-tight">
          {study.title}
        </h1>

        {/* Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-10 border border-gray-100">
          <video controls className="w-full h-auto">
            <source src={study.video} type="video/mp4" />
          </video>
        </div>

        {/* Quote */}
        <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed max-w-6xl mb-12">
          {study.quote}
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
            <span className="text-xs uppercase tracking-wide text-gray-400 block mb-2">
              Industry
            </span>

            <span className="text-lg font-semibold text-gray-900">
              {study.industry}
            </span>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl">
            <span className="text-xs uppercase tracking-wide text-gray-400 block mb-2">
              Application
            </span>

            <span className="text-lg font-semibold text-gray-900">
              {study.application}
            </span>
          </div>

        </div>

        {/* Paragraphs */}
        <div className="space-y-6 text-gray-600 leading-relaxed text-lg max-w-6xl">

          <p>
            This case study highlights how our advanced oil extraction
            equipment helped the client improve productivity and
            streamline their operations. By implementing modern
            machinery and optimized workflows, the production capacity
            increased significantly.
          </p>

          <p>
            The installation included high-performance oil expellers,
            seed preparation systems, and filtration equipment that
            ensured consistent oil quality while minimizing operational
            downtime.
          </p>

          <p>
            With better extraction efficiency and reduced manual
            intervention, the client achieved higher profitability and
            sustainable long-term operations in their processing plant.
          </p>

        </div>

      </section>


      {/* ENQUIRY SECTION */}

      <section className="w-full py-24 bg-gradient-to-br from-cyan-50 via-white to-cyan-100 border-t border-gray-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            {/* LEFT CONTENT */}

            <div>

              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                Request Information
              </h2>

              <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-5 mb-8"></div>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Interested in{" "}
                <span className="font-semibold text-gray-900">
                  {study.title}
                </span>
                ? Fill out the form and our sales team will contact you with
                pricing, machine details, and installation support.
              </p>

              <ul className="space-y-5 text-gray-600">

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-cyan-600 rounded-full"></span>
                  Technical specifications and pricing
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-cyan-600 rounded-full"></span>
                  Customization options
                </li>

                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 mt-2 bg-cyan-600 rounded-full"></span>
                  Installation and training services
                </li>

              </ul>

            </div>


            {/* FORM */}

            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm mb-2 text-gray-600">
                      First Name *
                    </label>

                    <input
                      type="text"
                      name="firstName"
                      required
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-2 text-gray-600">
                      Last Name *
                    </label>

                    <input
                      type="text"
                      name="lastName"
                      required
                      onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                    />
                  </div>

                </div>


                <div>

                  <label className="block text-sm mb-2 text-gray-600">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                  />

                </div>


                <div>

                  <label className="block text-sm mb-2 text-gray-600">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
                  />

                </div>


                <div>

                  <label className="block text-sm mb-2 text-gray-600">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={4}
                    onChange={handleChange}
                    placeholder="Please describe your requirements..."
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 resize-none"
                  ></textarea>

                </div>


                <button
                  type="submit"
                  className="w-full cursor-pointer bg-gradient-to-r from-cyan-700 to-cyan-900 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:scale-[1.01] transition"
                >
                  Send Inquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}