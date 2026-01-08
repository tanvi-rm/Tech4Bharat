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

export default function PreviousWorkshops() {
  return (
    <section className="relative py-13 sm:py-13">
      {/* MAIN CONTAINER */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg rounded-3xl shadow-xl
                      px-6 sm:px-10 lg:px-12 py-16">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
            Previous Workshops
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg">
            A glimpse into the sessions and learning experiences from our workshop.
          </p>
        </div>

        {/* AUTO-SCROLL WRAPPER */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-scroll">
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

/* CARD */
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
    <div className="min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]
                    bg-white rounded-2xl shadow-lg overflow-hidden
                    hover:shadow-xl transition">
      <img
        src={img}
        alt={title}
        className="w-full h-60 sm:h-48 lg:h-60 object-cover"
      />

      <div className="p-4 sm:p-5">
        <h3 className="text-sm sm:text-md font-semibold text-[#5e226d] mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 leading-snug">
          {desc}
        </p>
      </div>
    </div>
  );
}
