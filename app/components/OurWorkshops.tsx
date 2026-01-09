const GovernanceIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18" />
    <path d="M12 3a15 15 0 0 0 0 18" />
    <rect x="9" y="14" width="6" height="5" rx="1" />
    <path d="M10 14v-2a2 2 0 0 1 4 0v2" />
  </svg>
);

const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M12 7v2M12 13v2M9 11h2M13 11h2" />
  </svg>
);

const CyberIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 4v5c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V7l7-4z" />
    <path d="M13 9l-3 5h3l-1 4" />
  </svg>
);

const StrategyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="12" r="2" />
    <circle cx="12" cy="6" r="2" />
    <circle cx="18" cy="12" r="2" />
    <circle cx="12" cy="18" r="2" />
    <path d="M8 12h4M12 8v4M14 12h4M12 14v4" />
  </svg>
);
export default function OurWorkshop() {
  return (
    <section className="relative py-15 sm:py-15">
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl
                      px-6 sm:px-10 lg:px-12 py-16">

        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
            Our Workshop
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            Highlights from our recently conducted workshop.
          </p>
        </div>

        {/* INNER CONTENT CONTAINER */}
        <div className="
          bg-[#faf7fc] rounded-2xl
          px-6 sm:px-10 py-10 sm:py-12
          shadow-inner
          transition-all duration-300 ease-out
          hover:shadow-2xl
          sm:hover:-translate-y-1
        ">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#5e226d] mb-4">
                Digital & Tech Policy Workshop
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                A focused workshop that introduced students to the real-world
                intersection of technology, policy, and governance through expert
                discussions and practical learning experiences.
              </p>

              <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                <li>• Technology & Public Policy Foundations</li>
                <li>• AI, Data Governance & Cybersecurity</li>
                <li>• Innovation, Strategy & Policy Thinking</li>
                <li>• Real-World Case Studies & Simulations</li>
              </ul>
            </div>

            {/* RIGHT ICON GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Digital Governance & DPI", icon: <GovernanceIcon /> },
                { title: "AI & Emerging Tech Policies", icon: <AIIcon /> },
                { title: "Cyber-Physical & Energy Systems", icon: <CyberIcon /> },
                { title: "Technostrategic Decision Making", icon: <StrategyIcon /> },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 text-center text-white shadow-md
                             bg-gradient-to-br from-[#ac84b6] to-[#d476c6]"
                >
                  <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center text-white/90">
                    {item.icon}
                  </div>

                  <p className="text-sm font-medium leading-snug">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
