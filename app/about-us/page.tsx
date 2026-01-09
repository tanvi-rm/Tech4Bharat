import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";
import {
  Users,
  BookOpen,
  FlaskConical,
  Handshake,
  Target,
  Lightbulb,
  Rocket,
  Brain,
  BarChart3,
  Shield,
  Cpu,
  Landmark,
  Scale,
  University,
} from "lucide-react";

interface StatProps {
  icon: ReactNode;
  value: string;
  label: string;
}

interface PillarProps {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface ItemProps {
  icon: ReactNode;
  text: string;
}

interface PartnerProps {
  name: string;
}


export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative py-16">
          <div className="max-w-6xl mx-auto px-6">

            {/* MAIN CONTAINER */}
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl p-10 space-y-14">

              {/* HEADER */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT TEXT */}
                <div className="lg:col-span-2">
                  <h1 className="text-4xl font-bold text-[#5e226d] mb-4">
                    Tech For Bharat
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Empowering India’s youth with cutting-edge technology skills for tomorrow’s challenges.
                  </p>
                </div>

                {/* STATS */}
                <div className="bg-[#faf7fc] rounded-2xl shadow-md p-7 grid grid-cols-2 gap-6 text-center">
                  <Stat value="500+" label="Students Trained" />
                  <Stat value="12+" label="Programs" />
                  <Stat value="6" label="Research Areas" />
                  <Stat value="3" label="Knowledge Partners" />
                </div>
              </div>

              {/* MISSION & VISION */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* MISSION */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#5e226d] mb-4">
                    <Target className="text-[#d476c6]" /> Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tech For Bharat is dedicated to empowering India’s youth with cutting-edge skills in the rapidly evolving technology landscape. We build a future-ready generation equipped to drive innovation and contribute meaningfully to Bharat’s technological advancement.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Comprehensive learning platform with high-impact training</li>
                    <li>• Hands-on workshops and practical programs</li>
                    <li>• Focus on critical technology domains</li>
                  </ul>
                </div>

                {/* VISION */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#5e226d] mb-4">
                    <Lightbulb className="text-[#d476c6]" /> Our Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    We envision nurturing skilled professionals, tech leaders, and innovators who will safeguard India’s digital future and accelerate its technological growth through comprehensive programs and opportunities.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Building tomorrow’s tech leaders</li>
                    <li>• Creating opportunities for innovation</li>
                    <li>• Shaping India’s digital landscape</li>
                  </ul>
                </div>
              </div>

              {/* CORE PILLARS */}
              <div>
                <h2 className="text-3xl font-bold text-center text-[#5e226d] mb-10">
                  Core <span className="text-[#d476c6]">Pillars</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Pillar icon={<Rocket />} title="Future-Ready Skills" desc="Equipping youth with cutting-edge technology capabilities" />
                  <Pillar icon={<Brain />} title="Innovation Focus" desc="Driving technological advancement and creative solutions" />
                  <Pillar icon={<BarChart3 />} title="Capacity Building" desc="Strengthening technological capabilities" />
                  <Pillar icon={<Shield />} title="Meaningful Impact" desc="Contributing to technological growth" />
                </div>
              </div>

              {/* RESEARCH AREAS & PARTNERS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* RESEARCH AREAS */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#5e226d] mb-6">
                    Research Areas
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Item icon={<Cpu />} text="Emerging Technologies" />
                    <Item icon={<Brain />} text="Artificial Intelligence & Machine Learning (AI/ML)" />
                    <Item icon={<Shield />} text="Cyberspace Operations & Digital Defence" />
                    <Item icon={<Shield />} text="Critical Cyber Technologies" />
                    <Item icon={<Landmark />} text="National Security & Strategic Technologies" />
                    <Item icon={<Scale />} text="Technology Governance & Tech Policy" />
                  </div>
                </div>

                {/* KNOWLEDGE PARTNERS */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#5e226d] mb-6">
                    Knowledge Partners
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Partner name="COEP Tech University Pune" />
                    <Partner name="VJTI Mumbai" />
                    <Partner name="CDTIES IIT Bombay" />
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

/* ---------- SMALL REUSABLE COMPONENTS ---------- */

function Stat({ icon, value, label }: StatProps) {
  return (
    <div>
      <div className="flex justify-center mb-2 text-[#d476c6]">
        {icon}
      </div>
      <p className="text-2xl font-bold text-[#d476c6]">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}


function Pillar({ icon, title, desc }: PillarProps) {
  return (
    <div className="bg-[#faf7fc] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center mb-3 text-[#d476c6]">
        {icon}
      </div>
      <h3 className="font-semibold text-[#5e226d] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Item({ icon, text }: ItemProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-sm text-gray-700 flex gap-2 items-center">
      <span className="text-[#d476c6]">{icon}</span>
      {text}
    </div>
  );
}


function Partner({ name }: PartnerProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center text-gray-700 font-medium flex justify-center items-center gap-2">
      <University className="text-[#d476c6]" />
      {name}
    </div>
  );
}

