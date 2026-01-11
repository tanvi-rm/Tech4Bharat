/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView, Variants } from "framer-motion";
import { 
  Calendar, Shield, Cpu, Globe, Zap, Users, 
  CheckCircle2, Layers
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

/* -----------------------------
   DATA
-------------------------------- */
const workshopImages = [
  "/day1-i1.png", "/day1-i2.png", "/day2-i1.png", "/day2-i2.png",
  "/day3-i1.png", "/day4-i1.jpg", "/day5-i1.png", "/day6-i1.jpg",
];

const dayWiseSummary = [
  {
    day: "Day 1",
    title: "Foundations of Technology Policy",
    desc: "The workshop began with an introduction to technology policy and its significance at national and global levels. Participants explored policy frameworks, key stakeholders, and the role of technology in governance and strategic decision-making.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    day: "Day 2",
    title: "Information, Digitalization & AI",
    desc: "Day two focused on digitalization, data governance, and artificial intelligence. Sessions covered misinformation, blockchain fundamentals, digital public infrastructure, and responsible use of data-driven technologies.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    day: "Day 3",
    title: "Protecting Innovation",
    desc: "This day highlighted innovation management and the transition from research to practical outcomes. Discussions emphasized innovation frameworks, strategic planning, and structured processes to support sustainable development.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    day: "Day 4",
    title: "Physical and Real-World Systems",
    desc: "Participants examined technology policies related to physical and cyber-physical systems. Topics included clean energy policies, digital asset management, and a simulated real-world security scenario.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    day: "Day 5",
    title: "Technostrategic Thinking",
    desc: "The fifth day focused on technostrategic perspectives through expert sessions and field visits. Participants gained insights into earth observation technologies, advanced computing systems, and leadership experiences.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    day: "Day 6",
    title: "Policy Drafting & Integrated Learning",
    desc: "The final day consolidated learning through discussions, case studies, and simulations. Participants revisited key concepts and explored the interconnected roles of technology, policy, law, and strategy.",
    icon: <Calendar className="w-5 h-5" />,
  },
];

export default function OurPreviousWorkshopPage() {
  return (
    // Global Gradient Background applied here
    <div className="min-h-screen font-sans text-[#020024]">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
        ======================== */}
        <section className="relative pt-16 pb-16 px-6 overflow-hidden">
            {/* Background blobs for depth */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block py-1 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-4"
                >
                    Workshop Recap
                </motion.div>
                
                {/* MATCHING FONT SIZE TO PREVIOUS ACTIVITIES (5xl md:7xl) */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-extrabold text-5xl md:text-7xl tracking-tight leading-[1.1]"
                >
                    <GradientText>Digital & Tech Policy</GradientText> <br className="hidden md:block" /> Workshop
                </motion.h1>
                
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
                >
                    An overview of our recently conducted program showcasing key learnings and moments from the 6-day intensive curriculum.
                </motion.p>
            </div>
        </section>

        {/* =======================
            SLIDER HIGHLIGHTS
        ======================== */}
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-[#020024]">Workshop Highlights</h2>
                        <div className="w-16 h-1 bg-gradient-to-r from-[#4f6ff2] to-[#00D4FF] mx-auto mt-3 rounded-full"></div>
                    </div>
                    
                    {/* Glass Container for Slider */}
                    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-4 border border-white/60 shadow-lg">
                        <div className="relative overflow-hidden rounded-2xl">
                            <div className="flex gap-4 animate-scroll">
                                {[...workshopImages, ...workshopImages].map((img, idx) => (
                                    <div key={idx} className="min-w-[300px] md:min-w-[380px] h-[240px] relative group overflow-hidden rounded-xl shadow-md cursor-pointer">
                                        <img 
                                            src={img} 
                                            alt="Workshop highlight" 
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020024]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* =======================
            TIMELINE JOURNEY
        ======================== */}
        <section className="py-8 relative">
            <div className="max-w-6xl mx-auto px-6 w-full 
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden 
                        hover:shadow-2xl transition-all duration-500">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#020024] m-12">Daily Breakdown</h2>
                        <p className="text-gray-600 mt-2">A step-by-step journey through the 6 days.</p>
                    </div>
                </AnimatedSection>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#8fa8ff]/30 transform md:-translate-x-1/2"></div>

                    {dayWiseSummary.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <AnimatedSection key={index}>
                                <div className={`relative flex flex-col md:flex-row items-start justify-between mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                                    
                                    {/* Spacer for desktop layout */}
                                    <div className="hidden md:block w-5/12"></div>

                                    {/* Center Dot */}
                                    <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#4f6ff2] to-[#090979] border-4 border-[#f8f9ff] shadow-lg z-10 flex items-center justify-center mt-1">
                                        <div className="text-white">{item.icon}</div>
                                    </div>

                                    {/* Content Card (Using consistent GlassCard) */}
                                    <div className="ml-12 md:ml-0 w-auto md:w-5/12">
                                        <GlassCard>
                                            <div className="flex items-center gap-3 mb-3">
                                                <span className="bg-blue-50 text-[#4f6ff2] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wide border border-blue-100">
                                                    {item.day}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-[#090979] mb-2 leading-tight">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </GlassCard>
                                    </div>
                                </div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* =======================
            WORKSHOP THEMES
        ======================== */}
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-6 w-full 
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden py-6
                        hover:shadow-2xl transition-all duration-500">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#020024]">Themes & Focus Areas</h2>
                        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                            The core concepts and emerging domains explored during the interactive sessions.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Technology policy frameworks and governance structures",
                        "AI, data governance, and cybersecurity policy considerations",
                        "Innovation management and strategic technology planning",
                        "Emerging domains: space policy, clean energy, digital assets",
                        "Policy drafting, simulations, and real-world case discussions",
                        "Interconnected roles of law, strategy, and technology"
                    ].map((theme, index) => (
                        <AnimatedSection key={index}>
                            <GlassCard className="h-full flex items-start gap-4 hover:border-[#4f6ff2]">
                                <div className="mt-1 w-10 h-10 rounded-xl bg-gradient-to-br from-[#e0e7ff] to-[#c7d2fe] text-[#4f6ff2] flex items-center justify-center flex-shrink-0 shadow-inner">
                                    <Layers size={20} />
                                </div>
                                <p className="text-gray-700 text-sm font-medium leading-relaxed">
                                    {theme}
                                </p>
                            </GlassCard>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* =======================
            OUTCOMES & IMPACT
        ======================== */}
        <section className="py-8">
            <div className="max-w-6xl mx-auto px-6 w-full
                        bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
                        backdrop-blur-lg rounded-3xl shadow-xl 
                        overflow-hidden 
                        hover:shadow-2xl transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">
                    
                    {/* Left: Heading & Context */}
                    <div className="lg:col-span-5 sticky top-24">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold text-[#020024] mb-6 leading-tight">
                                Outcomes & <br/>
                                <span className="text-[#4f6ff2]">Key Impact</span>
                            </h2>
                            <p className="text-gray-600 text-base leading-relaxed mb-8">
                                The workshop successfully bridged the gap between technical understanding and policy formulation.
                                Participants left with actionable insights into how technology shapes national strategy.
                            </p>
                            
                            {/* Organizer Badges */}
                            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 shadow-sm">
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Organizers and Partners</h4>
                                <div className="flex flex-wrap gap-3">
                                    {["COEP Tech", "VJTI", "IIT Bombay", "ORF"].map((partner) => (
                                        <span key={partner} className="px-3 py-1.5 bg-white text-[#090979] text-xs font-bold rounded-lg border border-blue-100 shadow-sm">
                                            {partner}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right: Outcome List */}
                    <div className="lg:col-span-7">
                        <div className="grid gap-5">
                            {[
                                "Developed a foundational understanding of digital and technology policy frameworks",
                                "Explored the role of AI, data governance, and cybersecurity in modern governance",
                                "Gained exposure to real-world policy challenges through case studies and simulations",
                                "Understood the connection between innovation, strategy, and national decision-making",
                                "Experienced practical learning through expert sessions and institutional field visits"
                            ].map((outcome, idx) => (
                                <AnimatedSection key={idx}>
                                    <GlassCard className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <p className="text-gray-700 text-sm font-medium">{outcome}</p>
                                    </GlassCard>
                                </AnimatedSection>
                            ))}
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