"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setIsSubmitting(false);

    if (res.ok) {
      setIsSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        university: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="min-h-screen pt-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-[#d476c6]">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-700 text-lg">
            Have a question or would like to collaborate?
            Share your details and we’ll get back to you.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12 max-w-3xl mx-auto">

          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full
                              bg-gradient-to-br from-[#ac84b6] to-[#d476c6]
                              flex items-center justify-center">
                <CheckCircle className="text-white w-8 h-8" />
              </div>
              <h2 className="text-2xl font-semibold text-[#5e226d] mb-2">
                Message Sent Successfully
              </h2>
              <p className="text-gray-600">
                Thank you for reaching out. We’ll contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3
                             focus:ring-2 focus:ring-[#d476c6]/30 focus:border-[#d476c6]
                             outline-none"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3
                             focus:ring-2 focus:ring-[#d476c6]/30 focus:border-[#d476c6]
                             outline-none"
                  placeholder="your@email.com"
                />
              </div>

              {/* University */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  University *
                </label>
                <input
                  name="university"
                  required
                  value={formData.university}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3
                             focus:ring-2 focus:ring-[#d476c6]/30 focus:border-[#d476c6]
                             outline-none"
                  placeholder="Your university / institution"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3
                             focus:ring-2 focus:ring-[#d476c6]/30 focus:border-[#d476c6]
                             outline-none"
                  placeholder="Mobile number"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3
                             focus:ring-2 focus:ring-[#d476c6]/30 focus:border-[#d476c6]
                             outline-none resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  w-full flex items-center justify-center gap-3
                  rounded-xl px-6 py-4 font-semibold text-white
                  bg-gradient-to-r from-[#ac84b6] to-[#d476c6]
                  shadow-lg hover:shadow-2xl hover:-translate-y-0.5
                  transition-all duration-300
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}
