"use client";

import { useEffect } from "react";

/* ===============================
   ICONS (UNCHANGED)
================================ */

export const NationalInitiativeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
  </svg>
);

export const MultidisciplinaryIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M8 6h8M7 8l4 8M17 8l-4 8" />
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
    <section className="relative py-5 sm:py-15 reveal">
      <div
        className="
          max-w-6xl mx-auto
          bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
          backdrop-blur-lg
          rounded-3xl shadow-xl
          px-4 sm:px-10 lg:px-12
          py-8 sm:py-16
        "
      >
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-15">
          <h2
            className="
              text-2xl sm:text-3xl md:text-4xl font-bold
              bg-gradient-to-r from-[#020024] via-[#090979] to-[#00D4FF]
              bg-clip-text text-transparent
            "
          >
            About Tech For Bharat
          </h2>
          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600">
            Empowering India’s youth with cutting-edge technology skill
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="mb-10 sm:mb-15">
          {/* LEFT CARD */}
          <div className="bg-[#173b6c] text-white rounded-2xl p-5 sm:p-8 shadow-lg card-glow">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
              Who We Are
            </h3>
            <p className="text-xs sm:text-[17px] leading-relaxed mb-3 sm:mb-4 opacity-90">
              Tech For Bharat is a national initiative dedicated to empowering India’s youth with cutting-edge skills in the rapidly evolving technology landscape. Our mission is to build a future-ready generation equipped to drive innovation, strengthen national capabilities, and contribute meaningfully to the technological advancement of Bharat.
            </p>
            <p className="text-xs sm:text-[17px] leading-relaxed opacity-90">
              At Tech For Bharat, we believe that the nation’s progress rests on empowering young minds with the right knowledge, tools, and opportunities. Our initiative aims to nurture skilled professionals, tech leaders, and innovators who will safeguard India’s digital future and accelerate its technological growth.
            </p>
          </div>

        </div>

        {/* WHAT WE DO */}
        <div className="mb-10 sm:mb-15">
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-10 text-[#020024]">
            What We Do
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">

            {[
              "Emerging Technologies",
              "AI & Machine Learning",
              "Cyber & Digital Defence",
              "National Security Technologies",
              "Tech Governance & Policy",
              "Strategic Innovation",
            ].map((title, i) => (
              <div
                key={i}
                className="
                  border-2 border-[#173b6c]
                  rounded-xl
                  p-4 sm:p-6
                  text-center
                  bg-white
                  shadow-sm card-glow
                "
              >
                <p className="text-xs sm:text-[15px] font-medium text-[#020024]">
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* KEY FOCUS & APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16">
          {/* KEY FOCUS */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-[#020024]">
              Key Focus Areas
            </h3>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { code: "AI", label: "Artificial Intelligence", dark: true },
                { code: "CT", label: "Cyber Technologies", dark: true },
                { code: "TP", label: "Tech Policy", dark: false },
                { code: "EI", label: "Equity & Inclusion", dark: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-4 sm:p-5 text-center shadow-sm card-glow ${
                    item.dark
                      ? "bg-[#173b6c] text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  <div className="text-base sm:text-lg font-bold">
                    {item.code}
                  </div>
                  <p className="text-xs sm:text-[15px] font-medium mt-1 opacity-90">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OUR APPROACH */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-6 text-[#020024]">
              Our Approach
            </h3>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Comprehensive Learning Platform",
                "Industry & Academic Collaboration",
                "Future-Ready Skill Development",
                "Innovation & Policy Thinking",
              ].map((item, i) => (
                <li
                  key={i}
                  className="
                    flex items-center gap-3 sm:gap-4
                    bg-white rounded-full
                    px-4 sm:px-5
                    py-2.5 sm:py-3
                    shadow-sm card-glow
                  "
                >
                  <span
                    className="
                      w-6 h-6 sm:w-7 sm:h-7
                      rounded-full
                      bg-[#4f6ff2]
                      text-white
                      flex items-center justify-center
                      text-xs sm:text-sm font-semibold
                    "
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm sm:text-[15px] text-gray-700">
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
