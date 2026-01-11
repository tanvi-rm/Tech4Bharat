/* ===============================
   DATA: PREVIOUS WORKSHOPS
================================ */

const workshops = [
  {
    img: "/day1-i1.png",
    title: "Inaugural Session & Opening Ceremony",
    desc: "The workshop commenced with a formal inauguration, setting the context for technology policy and governance in India.",
  },
  {
    img: "/day1-i2.png",
    title: "Introduction to Technology Policy",
    desc: "Experts introduced core concepts of policy frameworks, stakeholders, and the role of technology in governance.",
  },
  {
    img: "/day2-i1.png",
    title: "Digital Narratives & Blockchain",
    desc: "Participants explored fake narratives, blockchain fundamentals, and emerging digital financial systems.",
  },
  {
    img: "/day2-i2.png",
    title: "Digital Public Infrastructure & AI",
    desc: "Sessions focused on DPI, artificial intelligence governance, and responsible data-driven technologies.",
  },
  {
    img: "/day3-i1.png",
    title: "Innovation Management & Policy",
    desc: "Discussions highlighted the link between research, innovation, and policy-driven implementation.",
  },
  {
    img: "/day3-i2.png",
    title: "Strategic Innovation Frameworks",
    desc: "Experts introduced multi-horizon strategies for sustainable and scalable innovation planning.",
  },
  {
    img: "/day4-i1.jpg",
    title: "Clean Energy & Cyber-Physical Systems",
    desc: "Participants learned about clean energy transitions and cyber-physical systems shaping infrastructure.",
  },
  {
    img: "/day4-i2.png",
    title: "UAV Simulation & Security Analysis",
    desc: "A simulated UAV crash scenario demonstrated the intersection of engineering, law, and policy decisions.",
  },
  {
    img: "/day5-i1.png",
    title: "Earth Observation & Strategic Technologies",
    desc: "Sessions explored earth observation systems and their strategic applications in governance and defence.",
  },
  {
    img: "/day5-i2.png",
    title: "Field Visit & Advanced Computing",
    desc: "Participants engaged with experts at C-DAC, gaining insights into high-performance computing systems.",
  },
  {
    img: "/day6-i1.jpg",
    title: "Policy Drafting & Concluding Session",
    desc: "The workshop concluded with policy drafting exercises and reflections on technostrategic thinking.",
  },
];

/* ===============================
   COMPONENT: PREVIOUS WORKSHOPS
================================ */

export default function PreviousWorkshops() {
  return (
    <section className="relative py-5 sm:py-10 reveal">
      {/* MAIN GLASS CONTAINER */}
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
        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16 reveal delay-1">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#020024] via-[#090979] to-[#4f6ff2] bg-clip-text text-transparent">
            Previous Workshops
          </h2>

          <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-600 max-w-lg mx-auto">
            A glimpse into the sessions and learning experiences from our workshop.
          </p>
        </div>

        {/* AUTO-SCROLL STRIP */}
        <div className="relative overflow-x-auto sm:overflow-hidden reveal delay-2 no-scrollbar">
          <div className="flex gap-4 sm:gap-6 animate-scroll sm:animate-scroll">
            {[...workshops, ...workshops].map((item, index) => (
              <WorkshopCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===============================
   COMPONENT: WORKSHOP CARD
================================ */

function WorkshopCard({
  img,
  title,
  desc,
}: {
  img: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
        w-72 sm:w-96
        bg-white/85 backdrop-blur-lg
        rounded-2xl shadow-lg
        overflow-hidden
        transition
        hover:shadow-xl hover:scale-[1.02]
        reveal delay-3
        shrink-0
      "
    >
      {/* IMAGE */}
      <img
        src={img}
        alt={title}
        className="w-full h-44 sm:h-48 lg:h-60 object-cover"
      />

      {/* TEXT CONTENT */}
      <div className="p-3 sm:p-5">
        <h3
          className="
            text-sm sm:text-md font-semibold mb-2
            bg-gradient-to-r
            from-[#4f6ff2]
            to-[#8fa8ff]
            bg-clip-text text-transparent
          "
        >
          {title}
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}
