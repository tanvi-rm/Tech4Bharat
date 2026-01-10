"use client";

import { useState, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView } from "framer-motion";
import { 
  Mail, MapPin, Send, CheckCircle2, 
  Users, Loader2, Building2 
} from "lucide-react";

/* -----------------------------
   ANIMATION WRAPPER
-------------------------------- */
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // YOUR STATE (Preserved)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    university: "", // Preserved your custom field
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // YOUR SUBMIT LOGIC (Preserved)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
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
        
        // Auto-reset success message after 5 seconds (Optional UX improvement)
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
      alert("Error sending message.");
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
            (Blue Gradient Theme)
        ======================== */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-purple-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                >
                    Get in Touch
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
                >
                    Have a question or would like to collaborate? 
                    Share your details and we’ll get back to you.
                </motion.p>
            </div>
        </section>

        {/* =======================
            MAIN CONTENT
        ======================== */}
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                
                {/* ---------------------
                   LEFT COLUMN: INFO (From Sir's Reference)
                   --------------------- */}
                <div className="space-y-6">
                    <FadeInSection>
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact Information</h2>
                            <p className="text-slate-600 mb-8 leading-relaxed">
                                Reach out to us for workshop details, internship queries, or institutional collaborations.
                            </p>
                        </div>
                    </FadeInSection>

                    {/* Organization Info */}
                    <FadeInSection delay={0.1}>
                        <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-2xl border border-blue-100 shadow-sm">
                             <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-blue-600 rounded-lg text-white">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Tech For Bharat</h3>
                             </div>
                             <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                An initiative empowering youth with cutting-edge technology skills and training programs across critical domains.
                             </p>
                             <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-100 w-fit px-3 py-1 rounded-full">
                                <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                                Empowering Tech Future
                             </div>
                        </div>
                    </FadeInSection>

                    {/* Email Card */}
                    <FadeInSection delay={0.2}>
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 group">
                            <div className="bg-indigo-50 p-3 rounded-xl text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">General Inquiries</h3>
                                <a href="mailto:info@tech4bharat.com" className="text-indigo-600 font-medium hover:underline block mt-1">
                                    info@tech4bharat.com
                                </a>
                            </div>
                        </div>
                    </FadeInSection>

                    {/* Location Card */}
                    <FadeInSection delay={0.3}>
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 flex items-start gap-4 hover:shadow-lg transition-shadow duration-300 group">
                            <div className="bg-slate-100 p-3 rounded-xl text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900 text-lg">Location</h3>
                                <p className="text-slate-700 font-medium mt-1">Mumbai, Maharashtra, India</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>

                {/* ---------------------
                   RIGHT COLUMN: YOUR FUNCTIONAL FORM
                   --------------------- */}
                <div className="relative">
                    <FadeInSection delay={0.2}>
                        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>

                                {isSubmitted ? (
                                    /* Success State */
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600">
                                            Thank you for reaching out.<br/>We&apos;ll contact you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    /* Form */
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Full Name *</label>
                                            <input
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                            />
                                        </div>

                                        {/* University (Your Custom Field) */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">University / Institution *</label>
                                            <div className="relative">
                                                <input
                                                    name="university"
                                                    required
                                                    value={formData.university}
                                                    onChange={handleChange}
                                                    placeholder="e.g. COEP Tech"
                                                    className="w-full pl-10 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                                />
                                                <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                                            <input
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Mobile number"
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700">Your Message *</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message here..."
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none text-sm"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-900/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>

                                    </form>
                                )}
                            </div>
                        </div>
                    </FadeInSection>
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}