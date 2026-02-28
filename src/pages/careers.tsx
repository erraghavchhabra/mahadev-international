"use client";

import { useState } from "react";
import {
  Briefcase,
  Mail,
  Phone,
  Upload,
  User,
  ArrowRight,
  Sparkles,
  Users,
  Rocket,
} from "lucide-react";

const Index = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null as File | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Application Submitted!");
  };

  const values = [
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "We encourage creative thinking and fresh ideas at every level.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Great things happen when talented people work together.",
    },
    {
      icon: Rocket,
      title: "Growth",
      description:
        "Your career trajectory matters to us — we invest in your future.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-foreground bg-blue-50">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute  inset-0"
            
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-16">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">
              Careers
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight max-w-3xl">
            Be a part of{" "}
            <span className="text-primary">Mahadev International</span>
          </h1>

          <p className="mt-5 text-lg text-primary-foreground/70 max-w-2xl leading-relaxed">
            Join a team that values innovation, collaboration, and your personal
            growth. We're building something extraordinary — and we want you on
            board.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 -mt-8 relative z-10 pb-20">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Content */}
          <div className="lg:col-span-3 space-y-10">
            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="/img/career-hero.jpg"
                alt="Team collaboration at Mahadev International"
                className="w-full h-[320px] object-cover"
              />
            </div>

            {/* About */}
            <div className="space-y-5">
              <h2 className="text-2xl font-bold text-foreground">
                Why Join Us?
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  At Mahadev International, we believe that our people are the
                  driving force behind our success. We are committed to building
                  a workplace that encourages innovation, collaboration, and
                  continuous growth.
                </p>
                <p>
                  Joining our team means becoming part of a dynamic environment
                  where your skills are valued and your ideas are heard. We
                  provide opportunities to work on industry-leading technologies
                  and contribute to impactful projects.
                </p>
                <p>
                  If you are passionate, driven, and ready to grow your career
                  with a forward-thinking organization, we would love to hear
                  from you. Let's build the future together.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-card rounded-xl p-5 shadow-card border border-slate-200 hover:shadow-elevated transition-shadow duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-accent-foreground" />
                  </div>

                  <h3 className="font-semibold text-foreground mb-1">
                    {title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-2">
            <div className="bg-card bg-white rounded-2xl shadow-2xl border border-slate-200 p-7 sticky top-8">
              <h2 className="text-xl font-bold text-foreground mb-1">
                Apply Now
              </h2>

              <p className="text-sm text-muted-foreground mb-6">
                Fill in your details and we'll get back to you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    required
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full bg-secondary border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm
    outline-none focus:outline-none
    focus:ring-2 focus:ring-blue-500/40
    focus:border-blue-500
    transition-all duration-200"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full bg-secondary border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm
    outline-none focus:outline-none
    focus:ring-2 focus:ring-blue-500/40
    focus:border-blue-500
    transition-all duration-200"
                  />
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    required
                    onChange={handleChange}
                    placeholder="Phone Number"
                     className="w-full bg-secondary border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm
    outline-none focus:outline-none
    focus:ring-2 focus:ring-blue-500/40
    focus:border-blue-500
    transition-all duration-200"
                  />
                </div>

                {/* Resume */}
                <div className="relative">
                  <Upload className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="file"
                    name="resume"
                    required
                    onChange={handleChange}
                    className="w-full bg-secondary border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm
    outline-none focus:outline-none
    focus:ring-2 focus:ring-blue-500/40
    focus:border-blue-500
    transition-all duration-200"
                  />
                </div>

                {/* Submit Button (your required gradient) */}
                <button
                  type="submit"
                  className="w-full cursor-pointer mt-2 flex items-center justify-center gap-2 text-white py-3.5 rounded-xl font-semibold text-sm tracking-wide shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5 bg-gradient-to-r from-cyan-600 to-blue-600"
                >
                  Submit Application
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;