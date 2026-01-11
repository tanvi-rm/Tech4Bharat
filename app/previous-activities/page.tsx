/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { 
  Calendar, MapPin, Clock, Award, 
  Brain, Globe, BookOpen, Terminal, Sparkles 
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
      rounded-2xl p-5 shadow-md 
      border border-white/50
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

const Tag = ({ text, color = "blue" }: { text: string, color?: "blue" | "indigo" | "purple" }) => {
    // Exact colors from your theme's palette
    const styles = {
        blue: "bg-white/70 text-[#4f6ff2] border-[#4f6ff2]/30",
        indigo: "bg-white/70 text-[#4f6ff2] border-[#4f6ff2]/30",
        purple: "bg-white/70 text-[#090979] border-[#090979]/30",
    };
    return (
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide border shadow-sm backdrop-blur-sm ${styles[color]}`}>
            {text}
        </span>
    );
};

export default function PreviousActivitiesPage() {
  return (
    <div className="min-h-screen font-sans text-[#020024]">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
            (Matching Homepage Hero Vibe)
        ======================== */}
        <section className="relative pt-16 pb-20 px-6 overflow-hidden">
            
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-extrabold text-5xl md:text-7xl tracking-tight leading-[1.1]"
                >
                    <GradientText>Previous Activities</GradientText>
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    A showcase of workshops and internship programs conducted by Tech For Bharat.
                </motion.p>
            </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 relative space-y-24">
            
            {/* Timeline Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-10 bottom-10 w-0.5 bg-[#8fa8ff]/30 transform md:-translate-x-1/2 hidden md:block"></div>


            {/* ======================================================
                1. DIGITAL & TECH POLICY WORKSHOP
            ====================================================== */}
            <AnimatedSection>
                <div className="relative md:flex md:justify-between group">
                    
                    {/* Timeline Dot */}
                    <motion.div variants={itemVariants} className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-12 h-12 bg-gradient-to-br from-[#4f6ff2] to-[#090979] rounded-full border-4 border-white shadow-xl items-center justify-center z-20">
                        <Globe className="text-white w-6 h-6" />
                    </motion.div>

                    {/* MAIN CARD CONTAINER (Theme Gradient Applied) */}
                    <motion.div variants={itemVariants} className="
                        w-full 
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden 
                        hover:shadow-2xl transition-all duration-500
                    ">
                        
                        {/* Card Header */}
                        <div className="p-8 md:p-12 border-b border-white/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <Tag text="Most Recent Workshop" color="blue" />
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6fffa] border border-[#b2f5ea] text-[#234e52] text-xs font-bold shadow-sm">
                                    <Award size={14} /> Certified Program
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                                <GradientText>Digital & Tech Policy Workshop</GradientText>
                            </h2>
                            <p className="text-lg text-[#4f6ff2] font-bold">Technology, Governance & Strategic Decision-Making</p>
                        </div>

                        {/* Logistics Bar (Glass Effect) */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/50 border-b border-white/50 bg-white/30">
                            <div className="p-6 flex items-center gap-3">
                                <Clock className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Duration</p><p className="font-bold text-[#020024]">6-Day Intensive</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <Calendar className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Dates</p><p className="font-bold text-[#020024]">18th – 23rd Dec, 2025</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <MapPin className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Venue</p><p className="font-bold text-[#020024]">COEP Tech University</p></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-8 md:p-12 grid lg:grid-cols-3 gap-10">
                            
                            {/* Left Col: Details */}
                            <div className="lg:col-span-1 space-y-6">
                                <GlassCard className="bg-white/70">
                                    <h3 className="font-bold text-[#090979] mb-3 flex items-center gap-2"><Sparkles size={18}/> Key Focus</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                        Intersection of technology, policy, and governance in national decision-making.
                                    </p>
                                </GlassCard>

                                <div className="space-y-4 px-2">
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Organized By</h4>
                                        <ul className="text-sm text-[#020024] space-y-1 font-bold">
                                            <li>• COEP Technological University</li>
                                            <li>• VJTI, Mumbai</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Partners</h4>
                                        <ul className="text-sm text-gray-700 space-y-1 font-medium">
                                            <li>• CDTIES, IIT Bombay</li>
                                            <li>• Observer Research Foundation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Agenda Grid */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-[#020024] mb-6">Workshop Agenda</h3>
                                
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        ["Foundations of Policy", "Frameworks, governance, stakeholders"],
                                        ["Digitalization & AI", "DPI, data governance, misinformation"],
                                        ["Innovation Strategy", "Innovation management & policy translation"],
                                        ["Physical Systems", "Clean energy, digital assets, cyber-physical"],
                                        ["Technostrategic Views", "Earth observation & institutional exposure"],
                                        ["Policy Drafting", "Simulations, case discussions & drafting"],
                                    ].map(([title, desc], i) => (
                                        <GlassCard key={i}>
                                            <h4 className="text-sm font-bold text-[#090979] mb-1">{title}</h4>
                                            <p className="text-xs text-gray-600 font-medium">{desc}</p>
                                        </GlassCard>
                                    ))}
                                </div>

                                {/* Footer Note */}
                                <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-white/40">
                                    <p className="text-sm text-gray-600">
                                        <span className="font-bold text-[#4f6ff2]">Vision:</span> “Building awareness and capability in technology-driven governance.”
                                    </p>
                                </motion.div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </AnimatedSection>


            {/* ======================================================
                2. AI WORKSHOP BY BHARATGEN
            ====================================================== */}
            <AnimatedSection>
                <div className="relative md:flex md:justify-between group">
                    
                     {/* Timeline Dot */}
                     <motion.div variants={itemVariants} className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-12 h-12 bg-gradient-to-br from-[#00D4FF] to-[#090979] rounded-full border-4 border-white shadow-xl items-center justify-center z-20">
                        <Brain className="text-white w-6 h-6" />
                    </motion.div>

                    {/* MAIN CARD CONTAINER */}
                    <motion.div variants={itemVariants} className="
                        w-full 
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden 
                        hover:shadow-2xl transition-all duration-500
                    ">
                        
                        {/* Card Header */}
                        <div className="p-8 md:p-12 border-b border-white/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <Tag text="Past Workshop" color="indigo" />
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6fffa] border border-[#b2f5ea] text-[#234e52] text-xs font-bold shadow-sm">
                                    <Award size={14} /> Certified Program
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                                <GradientText>AI Workshop by BharatGen</GradientText>
                            </h2>
                            <p className="text-lg text-[#4f6ff2] font-bold">GenAI for Everyone, by Everyone</p>
                        </div>

                         {/* Logistics Bar */}
                         <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/50 border-b border-white/50 bg-white/30">
                            <div className="p-6 flex items-center gap-3">
                                <Calendar className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Date</p><p className="font-bold text-[#020024]">Fri, 21st March, 2025</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <Clock className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Time</p><p className="font-bold text-[#020024]">5:00 PM (3 Hours)</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <MapPin className="text-[#090979]" />
                                <div><p className="text-xs text-gray-500 font-bold uppercase">Venue</p><p className="font-bold text-[#020024]">Cognizant Lab, COEP</p></div>
                            </div>
                        </div>

                         {/* Main Content */}
                         <div className="p-8 md:p-12 grid lg:grid-cols-3 gap-10">
                            
                            {/* Left Col */}
                            <div className="lg:col-span-1 flex flex-col gap-6">
                                
                                {/* Selling Point Card */}
                                <GlassCard className="bg-white/70">
                                    <h3 className="font-bold text-[#090979] mb-3 flex items-center gap-2"><Terminal size={18}/> Key Selling Point</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                        Learn to build AI with just minimum coding knowledge.
                                    </p>
                                </GlassCard>

                                {/* Organized By */}
                                <div>
                                    <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Organized By</h4>
                                    <p className="text-sm font-bold text-[#020024]">COEP Tech University Pune</p>
                                </div>

                                {/* NEW: Vision & Goal Section */}
                                <div className="mt-8 pt-6 border-t border-white/50 space-y-4">
                                    <div className="text-sm text-gray-600 leading-relaxed">
                                        <span className="font-bold text-[#4f6ff2] block mb-1">Vision</span> 
                                        “Explore AI innovations for everyone. Real-world applications discussed: Agriculture, Healthcare, and more.”
                                    </div>
                                    <div className="text-sm text-gray-600 leading-relaxed">
                                        <span className="font-bold text-[#4f6ff2] block mb-1">Goal</span> 
                                        “Inspire AI-driven solutions for technological advancement.”
                                    </div>
                                </div>
                            </div>

                            {/* Right Col: Agenda */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-[#020024] mb-6">Workshop Agenda</h3>
                                
                                <div className="space-y-4">
                                    {[
                                        ["Langchain", "Intro to app development using Langchain with hands-on AI tools."],
                                        ["Hugging Face Transformers", "Exploring pre-trained models for NLP and image classification."],
                                        ["Neural Networks", "Basics of neural networks with hands-on model training."],
                                        ["Transformers & LLMs", "Architecture deep-dive and coding a basic LLM from scratch."],
                                        ["Careers & Landscape", "Overview of ecosystems, career paths, and projects."],
                                    ].map(([title, desc], i) => (
                                        <GlassCard key={i} className="flex gap-4 items-start">
                                            <div className="mt-0.5 min-w-[24px] text-[#4f6ff2] font-extrabold text-sm">{i + 1}.</div>
                                            <div>
                                                <h4 className="text-sm font-bold text-[#090979]">{title}</h4>
                                                <p className="text-xs text-gray-600 mt-1 font-medium">{desc}</p>
                                            </div>
                                        </GlassCard>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </AnimatedSection>

            {/* ======================================================
                3. INTERNSHIP AT VJTI
            ====================================================== */}
            <AnimatedSection>
                <div id="internship" className="relative md:flex md:justify-between group">
                    
                    {/* Timeline Dot */}
                    <motion.div variants={itemVariants} className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-12 h-12 bg-gradient-to-br from-[#7c3aed] to-[#4c1d95] rounded-full border-4 border-white shadow-xl items-center justify-center z-20">
                        <BookOpen className="text-white w-6 h-6" />
                    </motion.div>

                    {/* MAIN CARD CONTAINER */}
                    <motion.div variants={itemVariants} className="
                        w-full 
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden 
                        hover:shadow-2xl transition-all duration-500
                    ">
                        
                        {/* Header */}
                        <div className="p-8 md:p-12 border-b border-white/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <Tag text="Past Internship" color="purple" />
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e6fffa] border border-[#b2f5ea] text-[#234e52] text-xs font-bold shadow-sm">
                                    <Award size={14} /> Certificate of Excellence
                                </div>
                            </div>

                            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                                <span className="bg-gradient-to-r from-[#020024] to-[#7c3aed] bg-clip-text text-transparent">Internship at Centre of Excellence in AI</span>
                            </h2>
                            <p className="text-lg text-[#7c3aed] font-bold">VJTI Mumbai</p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/50 border-b border-white/50 bg-white/30">
                            <motion.div variants={itemVariants} className="p-6 text-center">
                                <p className="text-3xl font-extrabold text-[#7c3aed]">45+</p>
                                <p className="text-xs font-bold text-gray-500 uppercase mt-1">Selected Interns</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="p-6 text-center">
                                <p className="text-3xl font-extrabold text-[#7c3aed]">8</p>
                                <p className="text-xs font-bold text-gray-500 uppercase mt-1">Research Areas</p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="p-6 text-center">
                                <p className="text-3xl font-extrabold text-[#7c3aed]">12</p>
                                <p className="text-xs font-bold text-gray-500 uppercase mt-1">Faculty Mentors</p>
                            </motion.div>
                        </div>

                        {/* Main Content */}
                        <div className="p-8 md:p-12">
                            <h3 className="text-xl font-bold text-[#020024] mb-8 text-center">Research Areas & Projects</h3>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                                {[
                                    ["Artificial Intelligence", "Foundational AI concepts"],
                                    ["Deep Learning", "Advanced neural architectures"],
                                    ["Generative AI", "Content generation models"],
                                    ["Computer Vision", "Image & video analysis"],
                                    ["NLP", "Text generation models"],
                                    ["Robotics & AI", "Integration with hardware"],
                                    ["AI in Healthcare", "Diagnosis solutions"],
                                    ["Research Methodology", "Academic research structure"], 
                                ].slice(0, 8).map(([title, desc], i) => (
                                    <GlassCard key={i} className="text-center bg-white/50 hover:border-[#c4b5fd]">
                                        <h4 className="text-sm font-bold text-[#4c1d95] mb-1">{title}</h4>
                                        <p className="text-xs text-gray-600">{desc}</p>
                                    </GlassCard>
                                ))}
                            </div>

                            {/* Skills */}
                            <motion.div variants={itemVariants} className="bg-white/30 rounded-xl p-6 border border-white/40 text-center">
                                <p className="text-sm font-bold text-gray-500 uppercase mb-4 tracking-wider">Technologies & Skills Mastered</p>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning", "Research"].map((skill) => (
                                        <span key={skill} className="px-4 py-1.5 bg-white text-gray-800 text-sm font-semibold border border-gray-200 rounded-full shadow-sm hover:scale-105 transition-transform">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>

                        </div>

                    </motion.div>
                </div>
            </AnimatedSection>

        </div>
      </main>

      <Footer />
    </div>
  );
}