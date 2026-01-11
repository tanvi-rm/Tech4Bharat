/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { 
  Mail, MapPin, Send, CheckCircle2, 
  Users, Loader2, Building2 
} from "lucide-react";

/* -----------------------------
   ANIMATION VARIANTS
-------------------------------- */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

/* -----------------------------
   ANIMATED WRAPPER
-------------------------------- */
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
};

/* -----------------------------
   REUSABLE UI COMPONENTS
-------------------------------- */
const GlassCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div 
    variants={itemVariants}
    className={`
      bg-white/60 backdrop-blur-md 
      rounded-2xl p-6 shadow-sm 
      border border-white/50
      
      /* Hover Effects */
      hover:bg-white 
      hover:shadow-xl hover:shadow-indigo-500/10 
      hover:border-[#4f6ff2]/30
      hover:-translate-y-1
      
      transition-all duration-300 ease-out
      ${className}
    `}
  >
    {children}
  </motion.div>
);

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`
    bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] 
    bg-clip-text text-transparent 
    ${className}
  `}>
    {children}
  </span>
);

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // YOUR STATE
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

  // YOUR SUBMIT LOGIC
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
        
        // Auto-reset success message after 5 seconds
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
    // Global Theme Background
    <div className="min-h-screen font-sans text-[#020024]">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
        ======================== */}
        <section className="relative pt-16 pb-16 px-6 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-extrabold text-5xl md:text-7xl tracking-tight leading-[1.1]"
                >
                    <GradientText>Get in Touch</GradientText>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    Have a question or would like to collaborate? 
                    Share your details and we’ll get back to you.
                </motion.p>
            </div>
        </section>

        {/* =======================
            MAIN CONTENT
        ======================== */}
        <section className="max-w-7xl mx-auto px-6 pb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                
                {/* ---------------------
                   LEFT COLUMN: INFO
                   --------------------- */}
                <div className="space-y-6">
                    <AnimatedSection>
                        <div>
                            <h2 className="text-3xl font-bold text-[#020024] mb-4">Contact Information</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                Reach out to us for workshop details, internship queries, or institutional collaborations.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Organization Info */}
                    <AnimatedSection>
                        <GlassCard className="bg-gradient-to-br from-white/80 to-blue-50/50">
                             <div className="flex items-center gap-3 mb-3">
                                <div className="p-2 bg-[#4f6ff2] rounded-lg text-white shadow-md">
                                    <Users className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-[#020024]">Tech For Bharat</h3>
                             </div>
                             <p className="text-gray-600 text-sm leading-relaxed mb-4 font-medium">
                                An initiative empowering youth with cutting-edge technology skills and training programs across critical domains.
                             </p>
                             <div className="flex items-center gap-2 text-xs font-bold text-[#090979] bg-white/80 border border-blue-100 w-fit px-3 py-1 rounded-full shadow-sm">
                                <div className="w-2 h-2 bg-[#4f6ff2] rounded-full animate-pulse" />
                                Empowering Tech Future
                             </div>
                        </GlassCard>
                    </AnimatedSection>

                    {/* Email Card */}
                    <AnimatedSection>
                        <GlassCard className="flex items-start gap-4">
                            <div className="bg-[#edeef8] p-3 rounded-xl text-[#4f6ff2] group-hover:bg-[#4f6ff2] group-hover:text-white transition-colors shadow-inner">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#020024] text-lg">General Inquiries</h3>
                                <a href="mailto:info@tech4bharat.com" className="text-[#4f6ff2] font-semibold hover:underline block mt-1">
                                    info@tech4bharat.com
                                </a>
                            </div>
                        </GlassCard>
                    </AnimatedSection>

                    {/* Location Card */}
                    <AnimatedSection>
                        <GlassCard className="flex items-start gap-4">
                            <div className="bg-[#edeef8] p-3 rounded-xl text-[#090979] group-hover:bg-[#090979] group-hover:text-white transition-colors shadow-inner">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[#020024] text-lg">Location</h3>
                                <p className="text-gray-600 font-medium mt-1">Mumbai, Maharashtra, India</p>
                            </div>
                        </GlassCard>
                    </AnimatedSection>
                </div>

                {/* ---------------------
                   RIGHT COLUMN: FORM
                   --------------------- */}
                <div className="relative">
                    <AnimatedSection>
                        <GlassCard className="p-8 md:p-10 relative overflow-hidden bg-white/70">
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-[#020024] mb-6">Send us a message</h3>

                                {isSubmitted ? (
                                    /* Success State */
                                    <motion.div 
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-12 text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#020024] mb-2">Message Sent!</h3>
                                        <p className="text-gray-600 font-medium">
                                            Thank you for reaching out.<br/>We&apos;ll contact you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    /* Form */
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Full Name *</label>
                                            <input
                                                name="fullName"
                                                required
                                                value={formData.fullName}
                                                onChange={handleChange}
                                                placeholder="Your full name"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-[#4f6ff2] focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Email Address *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="your@email.com"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-[#4f6ff2] focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400"
                                            />
                                        </div>

                                        {/* University */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">University / Institution *</label>
                                            <div className="relative">
                                                <input
                                                    name="university"
                                                    required
                                                    value={formData.university}
                                                    onChange={handleChange}
                                                    placeholder="e.g. COEP Tech"
                                                    className="w-full pl-10 px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-[#4f6ff2] focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400"
                                                />
                                                <Building2 className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                                            <input
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Mobile number"
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-[#4f6ff2] focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all text-sm font-medium shadow-sm placeholder:text-gray-400"
                                            />
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Your Message *</label>
                                            <textarea
                                                name="message"
                                                rows={4}
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Write your message here..."
                                                className="w-full px-4 py-3 rounded-xl bg-white/50 border border-white/60 focus:border-[#4f6ff2] focus:bg-white focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none text-sm font-medium shadow-sm placeholder:text-gray-400"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full px-8 py-4 bg-gradient-to-r from-[#4f6ff2] to-[#090979] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        </GlassCard>
                    </AnimatedSection>
                </div>

            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}