"use client";

import { useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion, useInView } from "framer-motion";
import { 
  Calendar, Shield, Cpu, Globe, Zap, Users, 
  CheckCircle2, Target, Lightbulb, Layers 
} from "lucide-react";

/* -----------------------------
   IMAGE DATA
-------------------------------- */
const workshopImages = [
  "/day1-i1.png", "/day1-i2.png", "/day2-i1.png", "/day2-i2.png",
  "/day3-i1.png", "/day4-i1.jpg", "/day5-i1.png", "/day6-i1.jpg",
];

/* -----------------------------
   FULL DATA (Restored Original Text)
-------------------------------- */
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
    desc: "Day two focused on digitalization, data governance, and artificial intelligence. Sessions covered misinformation, blockchain fundamentals, digital public infrastructure, and responsible use of data-driven technologies, followed by a policy-writing activity.",
    icon: <Cpu className="w-5 h-5" />,
  },
  {
    day: "Day 3",
    title: "Protecting Innovation",
    desc: "This day highlighted innovation management and the transition from research to practical outcomes. Discussions emphasized innovation frameworks, strategic planning, and the importance of structured processes to support sustainable technological development.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    day: "Day 4",
    title: "Physical and Real-World Systems",
    desc: "Participants examined technology policies related to physical and cyber-physical systems. Topics included clean energy policies, digital asset management, and a simulated real-world security scenario integrating engineering, legal, and policy perspectives.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    day: "Day 5",
    title: "Technostrategic Thinking",
    desc: "The fifth day focused on technostrategic perspectives through expert sessions and field visits. Participants gained insights into earth observation technologies, advanced computing systems, and leadership experiences related to governance and strategic decision-making.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    day: "Day 6",
    title: "Policy Drafting & Integrated Learning",
    desc: "The final day consolidated learning through discussions, case studies, and simulations. Participants revisited key concepts from the workshop and explored the interconnected roles of technology, policy, law, and strategy in real-world decision-making.",
    icon: <Calendar className="w-5 h-5" />,
  },
];

/* -----------------------------
   ANIMATED SECTION COMPONENT
-------------------------------- */
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default function OurPreviousWorkshopPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">
      <Header />

      <main>
        {/* =======================
            HERO SECTION
            (Compact Padding)
        ======================== */}
        <section className="relative pt-28 pb-16 px-6 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-72 h-72 bg-cyan-400 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.span 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    className="inline-block py-1 px-3 rounded-full bg-blue-700/50 border border-blue-500/30 text-xs font-medium mb-3 backdrop-blur-md"
                >
                    Workshop Recap
                </motion.span>
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
                >
                    Digital & Tech Policy Workshop
                </motion.h1>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
                >
                    An overview of our recently conducted program showcasing key learnings and moments.
                </motion.p>
            </div>
        </section>

        {/* =======================
            SLIDER HIGHLIGHTS
            (Gap reduced)
        ======================== */}
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-slate-900">Workshop Highlights</h2>
                        <div className="w-12 h-1 bg-blue-600 mx-auto mt-2 rounded-full"></div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100">
                        <div className="flex gap-4 py-6 animate-scroll bg-slate-50">
                            {[...workshopImages, ...workshopImages].map((img, idx) => (
                                <div key={idx} className="min-w-[300px] md:min-w-[380px] h-[220px] relative group overflow-hidden rounded-xl mx-2 shadow-sm">
                                    <img 
                                        src={img} 
                                        alt="Workshop highlight" 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>

        {/* =======================
            TIMELINE JOURNEY (Full Text, Tighter Gaps)
        ======================== */}
        <section className="py-12 bg-slate-50 relative">
            <div className="max-w-5xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-slate-900">Daily Breakdown</h2>
                    </div>
                </FadeInSection>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>

                    {dayWiseSummary.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                // Reduced mb-24 to mb-12 for tighter spacing
                                className={`relative flex flex-col md:flex-row items-start justify-between mb-12 ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Spacer */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Center Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-600 z-10 flex items-center justify-center mt-1">
                                    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
                                </div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 w-auto md:w-5/12">
                                    <div className="bg-white p-5 rounded-xl shadow-md border border-slate-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="bg-blue-50 text-blue-700 font-bold px-2 py-0.5 rounded text-xs uppercase tracking-wide border border-blue-100">
                                                {item.day}
                                            </span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>

        {/* =======================
            WORKSHOP THEMES (Restored & Styled)
        ======================== */}
        <section className="py-12 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-10">
                        <h2 className="text-2xl font-bold text-slate-900">Themes & Focus Areas</h2>
                        <p className="text-slate-500 mt-2 text-sm">Core concepts explored during the sessions.</p>
                    </div>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Technology policy frameworks and governance structures",
                        "AI, data governance, and cybersecurity policy considerations",
                        "Innovation management and strategic technology planning",
                        "Emerging domains: space policy, clean energy, digital assets",
                        "Policy drafting, simulations, and real-world case discussions",
                        "Interconnected roles of law, strategy, and technology"
                    ].map((theme, index) => (
                        <FadeInSection key={index} delay={index * 0.05}>
                            <div className="h-full p-6 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition-colors duration-300 flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                                    <Layers size={18} />
                                </div>
                                <p className="text-slate-700 text-sm font-medium leading-relaxed">
                                    {theme}
                                </p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>

        {/* =======================
            OUTCOMES & IMPACT (Restored & Styled)
        ======================== */}
        <section className="py-12 bg-slate-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Left: Heading & Context */}
                    <div className="lg:col-span-4">
                        <FadeInSection>
                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                Outcomes & <span className="text-blue-600">Impact</span>
                            </h2>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">
                                The workshop successfully bridged the gap between technical understanding and policy formulation.
                                Participants left with actionable insights into how technology shapes national strategy.
                            </p>
                            
                            {/* Organizer Badges (Small) */}
                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Organizers and Partners</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["COEP Tech", "VJTI", "IIT Bombay", "ORF"].map((partner) => (
                                        <span key={partner} className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">
                                            {partner}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeInSection>
                    </div>

                    {/* Right: Outcome List */}
                    <div className="lg:col-span-8">
                        <div className="grid gap-4">
                            {[
                                "Developed a foundational understanding of digital and technology policy frameworks",
                                "Explored the role of AI, data governance, and cybersecurity in modern governance",
                                "Gained exposure to real-world policy challenges through case studies and simulations",
                                "Understood the connection between innovation, strategy, and national decision-making",
                                "Experienced practical learning through expert sessions and institutional field visits"
                            ].map((outcome, idx) => (
                                <FadeInSection key={idx} delay={idx * 0.1}>
                                    <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm border-l-4 border-blue-500 hover:shadow-md transition-shadow">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                        <p className="text-slate-700 text-sm">{outcome}</p>
                                    </div>
                                </FadeInSection>
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