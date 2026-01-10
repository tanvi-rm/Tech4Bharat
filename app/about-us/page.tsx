import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { ReactNode } from "react";
import {
  Rocket,
  Brain,
  BarChart3,
  Shield,
  Cpu,
  Landmark,
  Scale,
  University,
  Target,
  Lightbulb,
  Monitor,
} from "lucide-react";

/* ===============================
   TYPES
================================ */

interface StatProps {
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
  icon: ReactNode;
}


/* ===============================
   PAGE
================================ */

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
                  <h1
                    className="
                      text-4xl font-bold
                      bg-gradient-to-r
                      from-[#020024]
                      via-[#090979]
                      to-[#00D4FF]
                      bg-clip-text text-transparent
                      mb-4
                    "
                  >
                    Tech For Bharat
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Empowering India’s youth with cutting-edge technology skills
                    for tomorrow’s challenges.
                  </p>
                </div>

                {/* STATS */}
                <div className="bg-[#edf2ff] rounded-2xl shadow-md p-7 grid grid-cols-2 gap-6 text-center">
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
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#1e3a8a] mb-4">
                    <Target className="text-[#2563eb]" />
                    Our Mission
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Tech For Bharat is dedicated to empowering India’s youth with
                    cutting-edge skills in the rapidly evolving technology
                    landscape.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Comprehensive learning platform</li>
                    <li>• Hands-on workshops and programs</li>
                    <li>• Focus on critical tech domains</li>
                  </ul>
                </div>

                {/* VISION */}
                <div className="bg-white rounded-2xl shadow-md p-8">
                  <h2 className="flex items-center gap-2 text-2xl font-semibold text-[#1e3a8a] mb-4">
                    <Lightbulb className="text-[#2563eb]" />
                    Our Vision
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Nurturing skilled professionals and innovators who will
                    safeguard India’s digital future.
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>• Building tech leaders</li>
                    <li>• Creating innovation opportunities</li>
                    <li>• Shaping digital India</li>
                  </ul>
                </div>
              </div>

              {/* CORE PILLARS */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-10">
                  <span className="bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF] bg-clip-text text-transparent">
                    Core Pillars
                  </span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Pillar icon={<Rocket />} title="Future-Ready Skills" desc="Equipping youth with modern tech skills" />
                  <Pillar icon={<Brain />} title="Innovation Focus" desc="Driving creative technology solutions" />
                  <Pillar icon={<BarChart3 />} title="Capacity Building" desc="Strengthening technical capabilities" />
                  <Pillar icon={<Shield />} title="Meaningful Impact" desc="Contributing to national growth" />
                </div>
              </div>

              {/* RESEARCH & PARTNERS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* RESEARCH */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">
                    Research Areas
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Item icon={<Cpu />} text="Emerging Technologies" />
                    <Item icon={<Brain />} text="Artificial Intelligence & Machine Learning" />
                    <Item icon={<Shield />} text="Cyberspace Operations & Digital Defence" />
                    <Item icon={<Monitor />} text="Critical Cyber Technologies" />
                    <Item icon={<Landmark />} text="National Security & Strategic Technologies" />
                    <Item icon={<Scale />} text="Technology Governance & Tech Policy" />
                  </div>
                </div>

                {/* PARTNERS */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1e3a8a] mb-6">
                    Knowledge Partners
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                    <Partner
                      name="COEP Tech University Pune"
                      icon={<University />}
                    />

                    <Partner
                      name="VJTI Mumbai"
                      icon={<Landmark />}
                    />

                    <Partner
                      name="CDTIES IIT Bombay"
                      icon={<Cpu />}
                    />

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
   REUSABLE COMPONENTS
================================ */

function Stat({ value, label }: StatProps) {
  return (
    <div>
      <p className="text-2xl font-bold text-[#2563eb]">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
}

function Pillar({ icon, title, desc }: PillarProps) {
  return (
    <div className="bg-[#edf2ff] rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition">
      <div className="flex justify-center mb-3 text-[#2563eb]">
        {icon}
      </div>
      <h3 className="font-semibold text-[#1e3a8a] mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function Item({ icon, text }: ItemProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm text-sm text-gray-700 flex gap-2 items-center">
      <span className="text-[#2563eb]">{icon}</span>
      {text}
    </div>
  );
}

function Partner({ name, icon }: PartnerProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm text-center font-medium text-gray-700 flex justify-center items-center gap-2">
      <span className="text-[#2563eb]">{icon}</span>
      {name}
    </div>

  );
}
