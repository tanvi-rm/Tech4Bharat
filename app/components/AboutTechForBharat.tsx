"use client";

import { useEffect } from "react";

/* ===============================
   ICONS
================================ */

export const NationalInitiativeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const MultidisciplinaryIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M8 6h8M7 8l4 8M17 8l-4 8" />
  </svg>
);

export const EmergingTechIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l4 8-4 4-4-4 4-8z" />
    <path d="M8 14l-2 6h12l-2-6" />
  </svg>
);

export const AIIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="7" y="7" width="10" height="10" rx="2" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export const CyberDefenceIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l8 4v5c0 5-4 7-8 9-4-2-8-4-8-9V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const NationalSecurityIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l7 4v6c0 5-3 8-7 10-4-2-7-5-7-10V6l7-4z" />
    <path d="M12 9v4M12 17h.01" />
  </svg>
);

export const TechPolicyIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="3" width="14" height="18" rx="2" />
    <path d="M9 7h6M9 11h6M9 15h4" />
  </svg>
);

export const StrategyIcon = () => (
  <svg viewBox="0 0 24 24" width="26" height="26" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="12" r="2" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="18" cy="12" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M8 12h4M12 8v4M14 12h4M12 14v4" />
  </svg>
);

/* ===============================
   COMPONENT
================================ */

export default function AboutTechForBharat() {

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-15 sm:py-15 reveal">
      <div
        className="
          max-w-6xl mx-auto
          bg-gradient-to-b from-[#c5d1ff] to-[#edeef8]
          backdrop-blur-lg
          rounded-3xl shadow-xl
          px-6 sm:px-10 lg:px-12 py-16
        "
      >

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="
            text-3xl sm:text-4xl font-bold
            bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF]
            bg-clip-text text-transparent
          ">
            About Tech For Bharat
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Empowering India’s youth with cutting-edge technology skill
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4
              bg-gradient-to-r from-[#020024] to-[#4f6ff2]
              bg-clip-text text-transparent">
              Who We Are
            </h3>

            <p className="text-gray-700 mb-4">
              Tech For Bharat is a national initiative focused on building a future-ready generation.
            </p>

            <p className="text-gray-700">
              We work at the intersection of technology, governance, and innovation.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "National Initiative",
                desc: "Driving awareness and capability-building through a technology-first vision.",
                icon: <NationalInitiativeIcon />,
              },
              {
                title: "Multi-disciplinary Learning",
                desc: "Blending technology, policy, security, and innovation.",
                icon: <MultidisciplinaryIcon />,
              },
            ].map((item, i) => (
              <div key={i}
                className="flex gap-4 p-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md">
                <div className="w-10 h-10 rounded-full
                  bg-gradient-to-br from-[#4f6ff2] to-[#8fa8ff]
                  flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#020024]">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold mb-10
            bg-gradient-to-r from-[#020024] to-[#4f6ff2]
            bg-clip-text text-transparent">
            What We Do
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Emerging Technologies", icon: <EmergingTechIcon /> },
              { title: "AI & Machine Learning", icon: <AIIcon /> },
              { title: "Cyber & Digital Defence", icon: <CyberDefenceIcon /> },
              { title: "National Security Technologies", icon: <NationalSecurityIcon /> },
              { title: "Tech Governance & Policy", icon: <TechPolicyIcon /> },
              { title: "Strategic Innovation", icon: <StrategyIcon /> },
            ].map((item, i) => (
              <div key={i}
                className="bg-white/60 rounded-2xl p-6 text-center shadow-md">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl
                  bg-gradient-to-br from-[#4f6ff2] to-[#8fa8ff]
                  flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#020024] text-sm">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* KEY FOCUS + APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-30">

          {/* KEY FOCUS */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6
              bg-gradient-to-r from-[#020024] to-[#4f6ff2]
              bg-clip-text text-transparent">
              Key Focus Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { code: "AI", label: "Artificial Intelligence" },
                { code: "CT", label: "Cyber Technologies" },
                { code: "TP", label: "Tech Policy" },
                { code: "EI", label: "Equity & Inclusion" },
              ].map((item, i) => (
                <div key={i}
                  className="p-5 rounded-xl bg-white/60 text-center shadow-sm">
                  <div className="text-2xl font-bold text-[#4f6ff2]">
                    {item.code}
                  </div>
                  <p className="text-sm text-gray-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* APPROACH */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-6
              bg-gradient-to-r from-[#020024] to-[#4f6ff2]
              bg-clip-text text-transparent">
              Our Approach
            </h3>

            <ul className="space-y-5">
              {[
                "Comprehensive Learning Platform",
                "Industry & Academic Collaboration",
                "Future-Ready Skill Development",
                "Innovation & Policy Thinking",
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full
                    bg-gradient-to-br from-[#4f6ff2] to-[#8fa8ff]
                    text-white flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
