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
  return (
    <section className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl
                      px-6 sm:px-10 lg:px-12 py-16">

        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
            About Tech For Bharat
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Empowering India’s youth with cutting-edge technology skill
          </p>
        </div>

        {/* WHO WE ARE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-20">

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#5e226d] mb-4">
              Who We Are
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
              Tech For Bharat is a national initiative focused on building a
              future-ready generation equipped to navigate and lead in an
              increasingly technology-driven world.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              We work at the intersection of technology, governance, and
              innovation to empower young minds with practical knowledge and
              strategic thinking.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "National Initiative",
                desc: "Driving awareness and capability-building through a technology-first national vision.",
                icon: <NationalInitiativeIcon />,
              },
              {
                title: "Multi-disciplinary Learning",
                desc: "Blending technology, policy, security, and innovation for holistic growth.",
                icon: <MultidisciplinaryIcon />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-2xl bg-gradient-to-br
                           from-purple-50 to-pink-50 shadow-md"
              >
                <div className="w-10 h-10 rounded-full bg-[#d476c6]/20
                                flex items-center justify-center text-[#d476c6]">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-[#5e226d]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT WE DO */}
        <div className="mb-20">
          <h3 className="text-xl sm:text-2xl font-bold text-[#5e226d] mb-10">
            What We Do
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Emerging Technologies", icon: <EmergingTechIcon /> },
              { title: "AI & Machine Learning", icon: <AIIcon /> },
              { title: "Cyber & Digital Defence", icon: <CyberDefenceIcon /> },
              { title: "National Security Technologies", icon: <NationalSecurityIcon /> },
              { title: "Tech Governance & Policy", icon: <TechPolicyIcon /> },
              { title: "Strategic Innovation", icon: <StrategyIcon /> },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md
                           hover:shadow-xl transition hover:-translate-y-1 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl
                                bg-gradient-to-br from-[#ac84b6] to-[#d476c6]
                                flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-[#5e226d] text-sm sm:text-base">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* KEY FOCUS + APPROACH */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14">

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#5e226d] mb-6">
              Key Focus Areas
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {[
                { code: "AI", label: "Artificial Intelligence" },
                { code: "CT", label: "Cyber Technologies" },
                { code: "TP", label: "Tech Policy" },
                { code: "EI", label: "Equity & Inclusion" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 bg-purple-50 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-[#ac84b6]">
                    {item.code}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-[#5e226d] mb-6">
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
                  <div className="w-8 h-8 rounded-full bg-[#d476c6]
                                  text-white flex items-center justify-center font-semibold">
                    {i + 1}
                  </div>
                  <p className="text-gray-700 text-sm sm:text-base">
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
