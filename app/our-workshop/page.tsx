import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* -----------------------------
   IMAGE DATA (slider)
-------------------------------- */
const workshopImages = [
  "/day1-i1.png",
  "/day1-i2.png",
  "/day2-i1.png",
  "/day2-i2.png",
  "/day3-i1.png",
  "/day4-i1.jpg",
  "/day5-i1.png",
  "/day6-i1.jpg",
];

/* -----------------------------
   DAY-WISE SUMMARY
-------------------------------- */
const dayWiseSummary = [
  {
    day: "Day 1",
    title: "Foundations of Technology Policy",
    desc:
      "The workshop began with an introduction to technology policy and its significance at national and global levels. Participants explored policy frameworks, key stakeholders, and the role of technology in governance and strategic decision-making.",
  },
  {
    day: "Day 2",
    title: "Information, Digitalization & AI",
    desc:
      "Day two focused on digitalization, data governance, and artificial intelligence. Sessions covered misinformation, blockchain fundamentals, digital public infrastructure, and responsible use of data-driven technologies, followed by a policy-writing activity.",
  },
  {
    day: "Day 3",
    title: "Protecting Innovation",
    desc:
      "This day highlighted innovation management and the transition from research to practical outcomes. Discussions emphasized innovation frameworks, strategic planning, and the importance of structured processes to support sustainable technological development.",
  },
  {
    day: "Day 4",
    title: "Physical and Real-World Systems",
    desc:
      "Participants examined technology policies related to physical and cyber-physical systems. Topics included clean energy policies, digital asset management, and a simulated real-world security scenario integrating engineering, legal, and policy perspectives.",
  },
  {
    day: "Day 5",
    title: "Technostrategic Thinking",
    desc:
      "The fifth day focused on technostrategic perspectives through expert sessions and field visits. Participants gained insights into earth observation technologies, advanced computing systems, and leadership experiences related to governance and strategic decision-making.",
  },
  {
    day: "Day 6",
    title: "Policy Drafting & Integrated Learning",
    desc:
      "The final day consolidated learning through discussions, case studies, and simulations. Participants revisited key concepts from the workshop and explored the interconnected roles of technology, policy, law, and strategy in real-world decision-making.",
  },
];

export default function OurPreviousWorkshopPage() {
  return (
    <>
      <Header />

      <main>

        {/* =======================
            PAGE HEADER
        ======================== */}
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl font-bold text-[#d476c6]">
            Our Previous Workshop
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
            An overview of our recently conducted Digital & Tech Policy Workshop,
            showcasing key learnings and moments from the program.
          </p>
        </section>

        {/* =======================
            WORKSHOP HIGHLIGHTS
        ======================== */}
        <section className="max-w-6xl mx-auto px-8 mb-28">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12">

            <div className="text-center mb-10">
              <h2 className="text-3xl font-semibold text-[#d476c6]">
                Workshop Highlights
              </h2>
              <p className="mt-2 text-gray-600">
                A visual glimpse into key sessions, discussions, and activities from the workshop.
              </p>
            </div>

            {/* Slider */}
            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll">
                {[...workshopImages, ...workshopImages].map((img, idx) => (
                  <div
                    key={idx}
                    className="min-w-[360px] h-[240px] rounded-2xl overflow-hidden shadow-lg"
                  >
                    <img
                      src={img}
                      alt="Workshop highlight"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =======================
    WORKSHOP JOURNEY (GRID CARD)
======================= */}
<section className="max-w-6xl mx-auto px-8 mb-28">
  <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12">

    {/* Section Header INSIDE CARD */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-[#d476c6]">
        Workshop Journey: Day-wise Summary
      </h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        A brief overview of the key themes and activities covered across each day of the workshop.
      </p>
    </div>

    {/* Grid of Day Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {dayWiseSummary.map((item, index) => (
        <div
          key={index}
          className="
            bg-white rounded-2xl p-6 shadow-md
            transition-all duration-300 ease-out
            hover:shadow-2xl hover:-translate-y-2
          "
        >
          {/* Day Badge */}
          <div
            className="
              w-12 h-12 mb-4 flex items-center justify-center
              rounded-xl font-bold text-white text-lg
              bg-gradient-to-br from-[#ac84b6] to-[#d476c6]
            "
          >
            {index + 1}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-[#5e226d] mb-2">
            {item.day} – {item.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-700 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>


        {/* =======================
    EVENT OVERVIEW + ORGANIZERS
======================= */}
<section className="max-w-6xl mx-auto px-8 mb-28">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Event Overview Card */}
    <div
      className="
        bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:-translate-y-1
      "
    >
      <h2 className="text-3xl font-semibold text-[#d476c6] mb-4">
        Event Overview
      </h2>

      <p className="text-gray-700 leading-relaxed">
        The Digital & Tech Policy Workshop was designed to introduce students to
        the evolving relationship between technology, governance, and policy-making.
        The program focused on building awareness of how emerging technologies
        influence decision-making, regulation, and national strategy through
        expert-led discussions and applied learning.
      </p>
    </div>

    {/* Organizers & Knowledge Partners Card */}
    <div
      className="
        bg-white/90 backdrop-blur rounded-3xl p-10 shadow-xl
        transition-all duration-300 ease-out
        hover:shadow-2xl hover:-translate-y-1
      "
    >
      <h2 className="text-3xl font-semibold text-[#d476c6] mb-4">
        Organizers & Knowledge Partners
      </h2>

      {/* Organized By */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-[#5e226d] mb-3 uppercase tracking-wide">
          Organized By
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• COEP Technological University, Pune</li>
          <li>• Veermata Jijabai Technological Institute (VJTI), Mumbai</li>
        </ul>
      </div>

      {/* Knowledge Partners */}
      <div>
        <h3 className="text-sm font-semibold text-[#5e226d] mb-3 uppercase tracking-wide">
          Knowledge Partners
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• CDTIES, IIT Bombay</li>
          <li>• Observer Research Foundation</li>
        </ul>
      </div>
    </div>

  </div>
</section>

{/* =======================
    WORKSHOP THEMES & FOCUS AREAS
======================= */}
<section className="max-w-6xl mx-auto px-8 mb-28">
  <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-[#d476c6]">
        Workshop Themes & Focus Areas
      </h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Key thematic areas explored during the workshop.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Technology policy frameworks and governance structures",
        "AI, data governance, and cybersecurity policy considerations",
        "Innovation management and strategic technology planning",
        "Emerging domains including space policy, clean energy, and digital assets",
        "Policy drafting, simulations, and real-world case discussions",
      ].map((text, index) => (
        <div
          key={index}
          className="
            bg-white rounded-2xl p-6 shadow-md
            transition-all duration-300 ease-out
            hover:shadow-2xl hover:-translate-y-2
            flex items-start gap-4
          "
        >
          <div className="
            w-10 h-10 rounded-xl flex items-center justify-center
            text-white font-semibold
            bg-gradient-to-br from-[#ac84b6] to-[#d476c6]
            flex-shrink-0
          ">
            {index + 1}
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>



        {/* =======================
    WORKSHOP OUTCOMES & IMPACT
======================= */}
<section className="max-w-6xl mx-auto px-8 mb-32">
  <div className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12">

    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-semibold text-[#d476c6]">
        Workshop Outcomes & Impact
      </h2>
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
        Key takeaways and learning outcomes from the workshop.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Developed a foundational understanding of digital and technology policy frameworks",
        "Explored the role of AI, data governance, and cybersecurity in modern governance",
        "Gained exposure to real-world policy challenges through case studies and simulations",
        "Understood the connection between innovation, strategy, and national decision-making",
        "Experienced practical learning through expert sessions and institutional field visits",
      ].map((text, index) => (
        <div
          key={index}
          className="
            bg-white rounded-2xl p-6 shadow-md
            transition-all duration-300 ease-out
            hover:shadow-2xl hover:-translate-y-2
            flex items-start gap-4
          "
        >
          <div className="
            w-10 h-10 rounded-xl flex items-center justify-center
            text-white font-semibold
            bg-gradient-to-br from-[#ac84b6] to-[#d476c6]
            flex-shrink-0
          ">
            ✓
          </div>

          <p className="text-sm text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      ))}
    </div>

  </div>
  
</section>

<Footer />
      </main>

    </>
  );
}
