/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView } from "framer-motion";
import { 
  Calendar, MapPin, Clock, Award, CheckCircle2, 
  Brain, Shield, Globe, Users, BookOpen, Terminal, Sparkles 
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

/* -----------------------------
   REUSABLE COMPONENTS
-------------------------------- */
const Tag = ({ text, color = "blue" }: { text: string, color?: "blue" | "indigo" | "purple" }) => {
    const styles = {
        blue: "bg-blue-100 text-blue-700 border-blue-200",
        indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
        purple: "bg-purple-100 text-purple-700 border-purple-200",
    };
    return (
        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${styles[color]}`}>
            {text}
        </span>
    );
};

const InfoItem = ({ icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <div className="text-blue-600 mt-1">{icon}</div>
        <div>
            <p className="text-xs font-bold text-slate-400 uppercase">{label}</p>
            <p className="text-sm font-semibold text-slate-800">{value}</p>
        </div>
    </div>
);

export default function PreviousActivitiesPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
            (Consistent with Workshop Page)
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
                    Previous Activities
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed"
                >
                    A showcase of workshops and internship programs conducted by Tech For Bharat.
                </motion.p>
            </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-20 relative space-y-24">
            
            {/* Timeline Vertical Line */}
            <div className="absolute left-6 md:left-1/2 top-20 bottom-20 w-0.5 bg-blue-200 transform md:-translate-x-1/2 hidden md:block"></div>


            {/* ======================================================
                1. DIGITAL & TECH POLICY WORKSHOP
            ====================================================== */}
            <FadeInSection>
                <div className="relative md:flex md:justify-between group">
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-10 h-10 bg-blue-600 rounded-full border-4 border-white shadow-lg items-center justify-center z-10">
                        <Globe className="text-white w-5 h-5" />
                    </div>

                    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        
                        {/* Card Header */}
                        <div className="p-8 md:p-10 border-b border-slate-100 bg-gradient-to-r from-white to-blue-50/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <Tag text="Most Recent Workshop" color="blue" />
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold">
                                    <Award size={14} /> Certified Program
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Digital & Tech Policy Workshop</h2>
                            <p className="text-lg text-blue-700 font-medium">Technology, Governance & Strategic Decision-Making</p>
                            <p className="text-slate-500 mt-1">Policy Frameworks for Emerging Technologies</p>
                        </div>

                        {/* Logistics Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
                            <div className="p-6 flex items-center gap-3">
                                <Clock className="text-blue-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Duration</p><p className="font-semibold text-slate-700">6-Day Intensive</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <Calendar className="text-blue-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Dates</p><p className="font-semibold text-slate-700">18th – 23rd Dec, 2025</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <MapPin className="text-blue-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Venue</p><p className="font-semibold text-slate-700">COEP Tech University</p></div>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-8 md:p-10 grid lg:grid-cols-3 gap-10">
                            
                            {/* Left Col: Vision & Partners */}
                            <div className="lg:col-span-1 space-y-8">
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2"><Sparkles size={16}/> Key Learning Focus</h3>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        Understanding how technology, policy, and governance intersect to shape national and global decision-making.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Organized By</h4>
                                    <ul className="text-sm text-slate-700 space-y-2 font-medium">
                                        <li>• COEP Technological University</li>
                                        <li>• VJTI, Mumbai</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Knowledge Partners</h4>
                                    <ul className="text-sm text-slate-700 space-y-2">
                                        <li>• CDTIES, IIT Bombay</li>
                                        <li>• Observer Research Foundation</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Col: Agenda Grid */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Workshop Agenda</h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {[
                                        ["Foundations of Policy", "Frameworks, governance, stakeholders"],
                                        ["Digitalization & AI", "DPI, data governance, misinformation"],
                                        ["Innovation Strategy", "Innovation management & policy translation"],
                                        ["Physical Systems", "Clean energy, digital assets, cyber-physical"],
                                        ["Technostrategic Views", "Earth observation & institutional exposure"],
                                        ["Policy Drafting", "Simulations, case discussions & drafting"],
                                    ].map(([title, desc], i) => (
                                        <div key={i} className="p-4 rounded-lg border border-slate-100 hover:border-blue-300 hover:shadow-md transition-all">
                                            <h4 className="text-sm font-bold text-slate-800 mb-1">{title}</h4>
                                            <p className="text-xs text-slate-500">{desc}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Vision Footer */}
                                <div className="mt-8 pt-6 border-t border-slate-100">
                                    <p className="text-sm text-slate-600">
                                        <span className="font-bold text-blue-700">Vision:</span> “Building awareness and capability in technology-driven governance.” Equip students with technostrategic thinking skills.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </FadeInSection>


            {/* ======================================================
                2. AI WORKSHOP BY BHARATGEN
            ====================================================== */}
            <FadeInSection>
                <div className="relative md:flex md:justify-between group">
                    
                     {/* Timeline Dot */}
                     <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-10 h-10 bg-indigo-600 rounded-full border-4 border-white shadow-lg items-center justify-center z-10">
                        <Brain className="text-white w-5 h-5" />
                    </div>

                    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        
                        {/* Card Header */}
                        <div className="p-8 md:p-10 border-b border-slate-100 bg-gradient-to-r from-white to-indigo-50/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <Tag text="Past Workshop" color="indigo" />
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold">
                                    <Award size={14} /> Certified Program
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-2">AI Workshop by BharatGen</h2>
                            <p className="text-lg text-indigo-700 font-medium">GenAI for Everyone, by Everyone</p>
                            <p className="text-slate-500 mt-1">Multimodal Large Language Model (LLM)</p>
                        </div>

                         {/* Logistics Bar */}
                         <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
                            <div className="p-6 flex items-center gap-3">
                                <Calendar className="text-indigo-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Date</p><p className="font-semibold text-slate-700">Fri, 21st March, 2025</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <Clock className="text-indigo-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Time</p><p className="font-semibold text-slate-700">5:00 PM (3 Hours)</p></div>
                            </div>
                            <div className="p-6 flex items-center gap-3">
                                <MapPin className="text-indigo-500" />
                                <div><p className="text-xs text-slate-400 font-bold uppercase">Venue</p><p className="font-semibold text-slate-700">Cognizant Lab, COEP</p></div>
                            </div>
                        </div>

                         {/* Main Content */}
                         <div className="p-8 md:p-10 grid lg:grid-cols-3 gap-10">
                            
                            {/* Left Col */}
                            <div className="lg:col-span-1 space-y-8">
                                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                                    <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2"><Terminal size={16}/> Key Selling Point</h3>
                                    <p className="text-sm text-slate-700 leading-relaxed">
                                        Learn to build AI with just minimum coding knowledge.
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Organized By</h4>
                                    <p className="text-sm font-bold text-slate-800">COEP Tech University Pune</p>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <p className="text-sm text-slate-600">
                                        <span className="font-bold text-indigo-700">Vision:</span> Explore AI innovations for everyone. Inspire AI-driven solutions.
                                    </p>
                                </div>
                            </div>

                            {/* Right Col: Agenda */}
                            <div className="lg:col-span-2">
                                <h3 className="text-xl font-bold text-slate-900 mb-6">Workshop Agenda (Curriculum)</h3>
                                <div className="space-y-4">
                                    {[
                                        ["Langchain", "Intro to app development using Langchain with hands-on AI tools."],
                                        ["Hugging Face Transformers", "Exploring pre-trained models for NLP and image classification."],
                                        ["Neural Networks", "Basics of neural networks with hands-on model training."],
                                        ["Transformers & LLMs", "Architecture deep-dive and coding a basic LLM from scratch."],
                                        ["Careers & Landscape", "Overview of ecosystems, career paths, and projects."],
                                    ].map(([title, desc], i) => (
                                        <div key={i} className="flex gap-4 items-start p-4 rounded-lg bg-slate-50 border border-slate-100">
                                            <div className="mt-1 min-w-[24px] text-indigo-500 font-bold text-sm">{i + 1}.</div>
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-800">{title}</h4>
                                                <p className="text-xs text-slate-600 mt-1">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* ======================================================
                3. INTERNSHIP AT VJTI
            ====================================================== */}
            <FadeInSection>
                <div id="internship" className="relative md:flex md:justify-between group">
                    
                    {/* Timeline Dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -top-4 w-10 h-10 bg-purple-600 rounded-full border-4 border-white shadow-lg items-center justify-center z-10">
                        <BookOpen className="text-white w-5 h-5" />
                    </div>

                    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                        
                        {/* Header */}
                        <div className="p-8 md:p-10 border-b border-slate-100 bg-gradient-to-r from-white to-purple-50/50">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                <Tag text="Past Internship" color="purple" />
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold">
                                    <Award size={14} /> Certificate of Excellence
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900 mb-2">Internship at Centre of Excellence in AI</h2>
                            <p className="text-lg text-purple-700 font-medium">VJTI Mumbai</p>
                            <p className="text-slate-500 mt-1">6-week intensive program with hands-on research projects</p>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 border-b border-slate-100">
                            <div className="p-6 text-center">
                                <p className="text-3xl font-bold text-purple-600">45+</p>
                                <p className="text-xs font-bold text-slate-400 uppercase mt-1">Selected Interns</p>
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-3xl font-bold text-purple-600">8</p>
                                <p className="text-xs font-bold text-slate-400 uppercase mt-1">Research Areas</p>
                            </div>
                            <div className="p-6 text-center">
                                <p className="text-3xl font-bold text-purple-600">12</p>
                                <p className="text-xs font-bold text-slate-400 uppercase mt-1">Faculty Mentors</p>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="p-8 md:p-10">
                            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Research Areas & Projects</h3>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                                {[
                                    ["Artificial Intelligence", "Foundational AI concepts"],
                                    ["Deep Learning", "Advanced neural architectures"],
                                    ["Generative AI", "Content generation models"],
                                    ["Computer Vision", "Image & video analysis"],
                                    ["NLP", "Text generation models"],
                                    ["Robotics & AI", "Integration with hardware"],
                                    ["AI in Healthcare", "Diagnosis solutions"],
                                    ["Research Methodology", "Academic research structure"], // Added filler to balance grid if needed, or stick to 7
                                ].slice(0, 8).map(([title, desc], i) => (
                                    <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-center hover:border-purple-300 transition-colors">
                                        <h4 className="text-sm font-bold text-purple-800 mb-1">{title}</h4>
                                        <p className="text-xs text-slate-500">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Skills */}
                            <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-xl p-6 border border-slate-200 text-center">
                                <p className="text-sm font-bold text-slate-500 uppercase mb-4 tracking-wider">Technologies & Skills Mastered</p>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {["Python", "TensorFlow", "PyTorch", "Computer Vision", "NLP", "Deep Learning", "Research"].map((skill) => (
                                        <span key={skill} className="px-3 py-1 bg-white text-slate-700 text-sm font-medium border border-slate-200 rounded-full shadow-sm">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </FadeInSection>

        </div>
      </main>

      <Footer />
    </div>
  );
}