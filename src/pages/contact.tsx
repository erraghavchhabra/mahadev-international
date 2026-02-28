"use client";
export const dynamic = "force-static";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Globe,
  Clock,
  Send,
  Building2,
  CheckCircle,
  Star,
  MessageCircle,
} from "lucide-react";

const styles = `
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in-left {
    animation: fadeInLeft 1s ease-out;
  }
  
  .animate-fade-in-right {
    animation: fadeInRight 1s ease-out 0.3s both;
  }
`;
export default function ContactPage() {
  const menuData = {
    products: {
      title: "Products",
      items: [
        { name: "Oil Expellers", href: "/products/expeller" },
        { name: "Seed Cookers", href: "/products/cooker" },
        { name: "Filter Press", href: "#" },
        { name: "Bucket Elevators", href: "#" },
        { name: "Seed Cleaners", href: "#" },
        { name: "Industrial Shredders", href: "#" },
        { name: "Extruders", href: "#" },
        { name: "Industrial Blenders", href: "#" },
        { name: "Material Handling Equipments", href: "#" },
      ],
      brochure: {
        title: "Brochure Download",
        image: "/images/brochure-preview.jpg",
        href: "#",
      },
    },
    technology: {
      title: "Technology & Solutions",
      items: [
        { name: "Turnkey oil Mill", href: "#" },
        { name: "Automation Systems", href: "#" },
        { name: "Solvent Extraction Plant", href: "#" },
        { name: "Mini Oil Mill", href: "#" },
        { name: "Seed Cleaning & Sortex Plant", href: "#" },
      ],
      brochure: {
        title: "Technology Guide",
        image: "/images/tech-guide-preview.jpg",
        href: "#",
      },
    },
    news: {
      title: "News & Media",
      items: [
        { name: "Events & Exhibitions", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Media Gallery", href: "#" },
      ],
    },
    service: {
      title: "Service & Support",
      items: [
        { name: "Installation Services", href: "#" },
        { name: "General Maintenance & Fabrication Work", href: "#" },
        { name: "Spare Parts", href: "#" },
        { name: "Technical Support", href: "#" },
      ],
    },
    about: {
      title: "About Us",
      items: [{ name: "Company Profile", href: "#" }],
    },
    contact: {
      title: "Contact Us",
      items: [{ name: "Sales Inquiries", href: "/contact" }],
    },
  };
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    console.log("Form submitted:", formData);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 3000);
  };

  return (
    <div className="flex flex-col min-h-screen  bg-white">
      <style jsx>{styles}</style>
    
      {/* Main Content */}
      <main className="max-w-7xl mx-auto relative cont-sec  px-4 ">

        {/* Page Header */}
        <section className="bg-white py-16  overflow-hidden">
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Contact Our Experts
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Ready to discuss your oil processing needs? Our experienced team
                is here to provide personalized solutions for your business
                requirements.
              </p>

              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-8 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">14+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">200+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact-form"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </a>
                <a
                  href="tel:+919815593465"
                  className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all font-medium inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="pt-10 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="lg:col-span-1 space-y-8">
                <div>
                 

                  <div className="space-y-6">
                    {/* Phone */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Phone
                          </h3>
                          <div className="space-y-1">
                            <div>
                              <a
                                href="tel:+919815593465"
                                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                              >
                                +91 98155-93465
                              </a>
                            </div>
                            <div>
                              <a
                                href="tel:+61402378703"
                                className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                              >
                                +61-402378703
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Email
                          </h3>
                          <div className="space-y-1">
                            <div>
                              <a
                                href="mailto:info@oilseedmachinery.com"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                              >
                                Info@oilseedmachinery.com
                              </a>
                            </div>
                            <div>
                              <a
                                href="mailto:Mahadev.inter1@gmail.com"
                                className="text-gray-600 hover:text-green-600 transition-colors font-medium"
                              >
                                Mahadev.inter1@gmail.com
                              </a>
                            </div>
                          </div>
                          <div className="mt-2">
                            <span className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full">
                              <Clock className="w-3 h-3 mr-1" />
                              Quick Response
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Address */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Office{" "}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            B-29 Guru Gobind Singh Nagar,
                            <br />
                            Sherpur Chowk, Ludhiana,
                            <br />
                            Punjab 141008, India
                          </p>
                          <div className="mt-2">
                            <span className="inline-flex items-center bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full">
                              <Building2 className="w-3 h-3 mr-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Hours */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-6 h-6 text-orange-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-2">
                            Business Hours
                          </h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <div className="flex justify-between">
                              <span>Monday - Saturday</span>
                              <span className="font-medium">
                                9:00 AM - 6:00 PM
                              </span>
                            </div>

                            <div className="flex justify-between">
                              <span>Sunday</span>
                              <span className="font-medium text-red-600">
                                Closed
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Contact */}
                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="w-8 h-8" />
                    <div>
                      <h3 className="font-semibold">WhatsApp Direct</h3>
                      <p className="text-green-100 text-sm">
                        Get instant response
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/919815593465?text=Hello%2C%20I%20am%20interested%20in%20your%20oil%20processing%20equipment.%20Please%20provide%20more%20information."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-green-600 px-4 py-2 rounded-lg font-medium hover:bg-green-50 transition-colors inline-flex items-center text-sm w-full justify-center"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm border p-8 pb-0">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">
                      Send us a Message
                    </h2>
                    <div className="text-sm text-gray-500">
                      * Required fields
                    </div>
                  </div>

                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for contacting us. We'll get back to you
                        within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      id="contact-form"
                    >
                      {/* Inquiry Type */}
                      <div>
                        <label
                          htmlFor="inquiryType"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Type of Inquiry
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="product">Product Information</option>
                          <option value="quote">Request Quote</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">
                            Partnership Opportunity
                          </option>
                        </select>
                      </div>

                      {/* Name Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            First Name *
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Last Name *
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Email and Phone */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Company and Subject */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="company"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="subject"
                            className="block text-sm font-medium text-gray-700 mb-2"
                          >
                            Subject *
                          </label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            required
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                          placeholder="Please describe your requirements, project details, or questions in detail..."
                          required
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-end pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-400 transition-all font-medium flex items-center shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:transform-none"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>

                      <div className="text-sm text-gray-500 pt-4 border-t bg-gray-50 -mx-8 px-8 py-4 rounded-b-xl">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p>
                            We typically respond to inquiries within 24 hours
                            during business days. For urgent matters, please
                            call us directly at +91 98155-93465.
                          </p>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/919815593465?text=Hello%2C%20I%20am%20interested%20in%20your%20oil%20processing%20equipment.%20Please%20provide%20more%20information."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
