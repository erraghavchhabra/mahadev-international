"use client";

import { useState } from "react";

export default function RequestInfoDark() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-cyan-50 via-white to-cyan-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Request Information
            </h2>

            <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mt-4 mb-8"></div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Interested in <span className="font-semibold text-gray-900">Optiflow-40?</span>
              Fill out the form and our sales team will contact you with
              detailed information, pricing, and availability.
            </p>

            <ul className="space-y-4 text-gray-600">
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

          {/* RIGHT FORM */}
          <div className="backdrop-blur-xl bg-white/80 p-10 rounded-2xl border border-cyan-100 shadow-2xl">

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
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
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
                    className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
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
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
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
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition"
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
                  placeholder="Please describe your requirements or ask any questions..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-cyan-700 to-cyan-900 hover:from-cyan-700 hover:to-cyzn-900 transition duration-300 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl"
              >
                Send Inquiry
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}