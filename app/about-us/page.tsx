import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";
import {
  Rocket, Brain, BarChart3, Shield, Cpu, Landmark,
  Scale, University, Target, Lightbulb, Monitor,
} from "lucide-react";

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="relative py-10 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            {/* MAIN GLASS CONTAINER */}
            <div className="bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] backdrop-blur-lg rounded-3xl shadow-xl p-6 sm:p-12 space-y-14 sm:space-y-20">

              {/* HERO + STATS */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
                <div className="lg:col-span-7">
                  <h1 className="text-3xl sm:text-5xl font-black bg-gradient-to-r from-[#020024] via-[#090979] to-[#4f6ff2] bg-clip-text text-transparent mb-4 sm:mb-6">
                    Tech For Bharat
                  </h1>
                  <p className="text-gray-700 text-sm sm:text-xl leading-relaxed font-medium">
                    Empowering India’s youth with cutting-edge technology skills
                    for tomorrow’s challenges.
                  </p>
                </div>

                {/* STATS */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                  <Stat value="500+" label="Students Trained" />
                  <Stat value="12+" label="Programs" />
                  <Stat value="6" label="Research Areas" />
                  <Stat value="3" label=" Knowledge Partners" />
                </div>
              </div>

              {/* MISSION & VISION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
                <TabCard 
                  icon={<Target size={24} />} 
                  title="Our Mission" 
                  points={[
                    "Comprehensive learning platform",
                    "Hands-on workshops and programs",
                    "Focus on critical tech domains",
                  ]}
                  content="Tech For Bharat is dedicated to empowering India's youth with cutting-edge skills in the rapidly evolving technology landscape. We build a future-ready generation equipped to drive innovation and contribute meaningfully to Bharat's technological advancement."
                />
                <TabCard 
                  icon={<Lightbulb size={24} />} 
                  title="Our Vision" 
                  points={[
                    "Building tech leaders",
                    "Creating innovation opportunities",
                    "Shaping digital India",
                  ]}
                  content="We envision nurturing skilled professionals, tech leaders, and innovators who will safeguard India's digital future and accelerate its technological growth through comprehensive programs and opportunities."
                />
              </div>

              {/* CORE PILLARS */}
              <div>
                <h2 className="text-xl sm:text-3xl font-black text-center mb-8 sm:mb-12 text-[#020024] tracking-tight uppercase">
                  Core Pillars
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  <Pillar icon={<Rocket />} title="Future-Ready Skills" desc="Equipping youth with cutting-edge technology capabilities" />
                  <Pillar icon={<Brain />} title="Innovation Focus" desc="Driving technological advancement and creative solutions" />
                  <Pillar icon={<BarChart3 />} title="Capacity Building" desc="Strengthening technological capabilities" />
                  <Pillar icon={<Shield />} title="Meaningful Impact" desc="Contributing to technological growth" />
                </div>
              </div>

              {/* RESEARCH & PARTNERS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#1a36a3] mb-6 sm:mb-8 border-l-4 border-[#1a36a3] pl-4">
                    Research Areas
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <ResearchItem icon={<Cpu />} text="Emerging Technologies" />
                    <ResearchItem icon={<Brain />} text="Artificial Intelligence & Machine Learning (AI/ML)" />
                    <ResearchItem icon={<Shield />} text="Cyberspace Operations & Digital Defence" />
                    <ResearchItem icon={<Monitor />} text="Critical Cyber Technologies" />
                    <ResearchItem icon={<Landmark />} text="National Security & Strategic Technologies" />
                    <ResearchItem icon={<Scale />} text="Technology Governance & Tech Policy" />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-2xl font-bold text-[#1a36a3] mb-6 sm:mb-8 border-l-4 border-[#1a36a3] pl-4">
                    Knowledge Partners
                  </h3>
                  <div className="grid gap-4 sm:gap-6">
                    <Partner name="COEP Tech University Pune" icon={<University />} />
                    <Partner name="VJTI Mumbai" icon={<Landmark />} />
                    <Partner name="CDTIES IIT Bombay" icon={<Cpu />} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

/* ===============================
   COMPONENTS (MOBILE-SAFE)
================================ */

function TabCard({ icon, title, content, points }: { icon: ReactNode, title: string, content: string, points: string[] }) {
  return (
    <div className="relative flex items-center w-full">
      <div className="absolute inset-0 bg-[#1a36a3] rounded-tr-[28px] rounded-br-[28px] rounded-tl-xl rounded-bl-xl md:rounded-tr-[40px] md:rounded-br-[40px]" />
      <div className="relative z-10 w-full sm:w-[94%] bg-white rounded-tl-lg rounded-bl-lg rounded-tr-[60px] rounded-br-[60px] md:rounded-tr-[100px] md:rounded-br-[100px] p-5 sm:p-8 border-y-2 md:border-y-4 border-l-2 md:border-l-4 border-[#9db2ff] min-h-[260px] md:min-h-[320px] flex flex-col justify-center">
        <div className="text-[#1a36a3] mb-3">{icon}</div>
        <h3 className="text-lg md:text-2xl font-black text-[#020024] mb-3 uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
          {content}
        </p>
        <ul className="space-y-2">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-[10px] md:text-xs font-bold text-[#1a36a3]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#4f6ff2] mt-1 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Stat({ value, label }: { value: string, label: string }) {
  return (
    <div className="bg-white/50 backdrop-blur-sm border border-white/40 rounded-2xl p-4 sm:p-5 text-center shadow-sm">
      <p className="text-xl sm:text-3xl font-black text-[#1a36a3]">{value}</p>
      <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
        {label}
      </p>
    </div>
  );
}

function Pillar({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="group bg-white rounded-2xl p-5 sm:p-6 text-center shadow-sm hover:shadow-xl transition-all border-b-4 border-transparent hover:border-[#1a36a3]">
      <div className="flex justify-center mb-3 sm:mb-4 text-[#4f6ff2] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-bold text-[#020024] mb-2 text-sm sm:text-base">
        {title}
      </h3>
      <p className="text-[11px] sm:text-xs text-gray-500 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function ResearchItem({ icon, text }: { icon: ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-3 bg-white/60 p-3 sm:p-4 rounded-xl border-l-4 border-[#4f6ff2] shadow-sm hover:bg-white transition-colors">
      <span className="text-[#4f6ff2]">{icon}</span>
      <span className="text-xs sm:text-sm font-bold text-[#1a2b6d]">{text}</span>
    </div>
  );
}

function Partner({ name, icon }: { name: string, icon: ReactNode }) {
  return (
    <div className="relative flex items-center group h-14 sm:h-16">
      <div className="absolute inset-0 bg-[#4f6ff2] rounded-r-full rounded-l-xl" />
      <div className="relative z-10 w-[96%] bg-white rounded-l-lg rounded-r-full h-full flex items-center px-4 sm:px-6 gap-3 sm:gap-4 border border-blue-100 group-hover:-translate-x-1 transition-transform">
        <span className="text-[#4f6ff2]">{icon}</span>
        <span className="font-bold text-gray-700 text-xs sm:text-sm tracking-tight">
          {name}
        </span>
      </div>
    </div>
  );
}
