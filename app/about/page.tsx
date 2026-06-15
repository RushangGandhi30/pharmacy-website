"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      router.push(`/?search=${encodeURIComponent(query)}#catalog`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setSubmitted(false);
      }, 5000); // Reset after 5s
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/20">
      {/* Navigation Header */}
      <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} />

      <main className="flex-grow">
        {/* About Hero Section */}
        <section className="bg-gradient-to-br from-teal-800 to-emerald-700 text-white py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent" />
          <div className="container mx-auto px-4 relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">About MediVibe</h1>
            <p className="text-teal-100 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              We are a premier digital healthcare partner committed to providing 100% genuine medicines and authentic healthcare products directly to your home.
            </p>
          </div>
        </section>

        {/* Content Section: Form & Map */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
              
              {/* Left Side: Contact Form Card */}
              <div className="lg:col-span-6 flex flex-col justify-between bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Get in Touch</h2>
                  <p className="text-xs md:text-sm text-gray-500 mb-6">
                    Have any query regarding prescription verification, bulk orders, or product details? Fill in the form below and our pharmacist representative will reach you.
                  </p>

                  {submitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl flex flex-col items-center text-center gap-3 animate-fade-in">
                      <CheckCircle className="w-12 h-12 text-emerald-600 animate-bounce" />
                      <div>
                        <h4 className="font-bold text-lg">Thank You!</h4>
                        <p className="text-xs text-emerald-700 mt-1">
                          Your contact message has been sent successfully. We will get back to you within 2-4 hours.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="name@email.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                          Your Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="How can we assist you today? Please detail your query..."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm transition resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md transition-all hover:shadow-lg text-sm"
                      >
                        Submit Request
                      </button>
                    </form>
                  )}
                </div>

                {/* Additional Trust Contacts */}
                <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900">Direct Call</p>
                      <p className="text-gray-500">+91 22 1234 5678</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-600" />
                    <div>
                      <p className="font-semibold text-gray-900">E-mail Support</p>
                      <p className="text-gray-500">support@medivibe.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Map & Address Card */}
              <div className="lg:col-span-6 flex flex-col bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Store Location</h2>
                  <p className="text-xs md:text-sm text-gray-500 mb-4">
                    Visit our state-of-the-art offline pharmacy store in Mumbai for walk-in consultations, prescription drop-offs, and custom health checkups.
                  </p>
                  
                  {/* Address Badge info */}
                  <div className="flex items-start gap-3 p-3 bg-teal-50/40 border border-teal-100/40 rounded-2xl text-xs text-gray-700 mb-6">
                    <MapPin className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900">MediVibe Pharmacy Hub</p>
                      <p className="text-gray-600 mt-0.5">12, Green Circle Metro Hub, Sector 4, Mumbai, Maharashtra 400001</p>
                    </div>
                  </div>
                </div>

                {/* Map Frame Container */}
                <div className="w-full flex-grow aspect-video lg:aspect-auto min-h-[300px] bg-gray-100 rounded-2xl border border-gray-200 overflow-hidden relative shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.906752062608!2d72.82578505500624!3d19.075983701254336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9113e6533f7%3A0xe7f9ab301ff1910a!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Google Map embed showing MediVibe Location"
                    className="absolute inset-0"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
