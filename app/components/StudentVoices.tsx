/* ===============================
   DATA: STUDENT TESTIMONIALS
================================ */

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Computer Science Student",
    institution: "COEP Pune",
    content:
      "The Tech For Bharat workshop completely transformed my understanding of AI applications. The hands-on approach and expert guidance helped me build my first AI model.",
    avatar: "PS",
  },
  {
    name: "Rahul Verma",
    role: "Engineering Student",
    institution: "VJTI Mumbai",
    content:
      "The program was an incredible experience. I worked on real-world projects that are making a difference in various fields.",
    avatar: "RV",
  },
  {
    name: "Anjali Patel",
    role: "Research Scholar",
    institution: "SIMS Pune",
    content:
      "I gained invaluable insights into cybersecurity and digital defense strategies. The program opened doors to opportunities I never imagined.",
    avatar: "AP",
  },
  {
    name: "Amit Kumar",
    role: "Tech Enthusiast",
    institution: "IIT Bombay",
    content:
      "The comprehensive curriculum and industry mentorship helped me transition into a tech career. Truly transformative experience!",
    avatar: "AK",
  },
  {
    name: "Sneha Kulkarni",
    role: "Public Policy Student",
    institution: "Gokhale Institute, Pune",
    content:
      "The sessions on technology policy and governance helped me understand how emerging technologies influence national decision-making.",
    avatar: "SK",
  },
  {
    name: "Rohit Deshmukh",
    role: "Electronics Engineering Student",
    institution: "COEP Technological University",
    content:
      "Learning about cyber-physical systems and clean energy policies gave me a new perspective on real-world infrastructure.",
    avatar: "RD",
  },
  {
    name: "Neha Joshi",
    role: "Data Science Student",
    institution: "IISc Bangalore",
    content:
      "The AI, data governance, and digital public infrastructure sessions were extremely relevant and practical.",
    avatar: "NJ",
  },
  {
    name: "Kunal Patil",
    role: "Mechanical Engineering Student",
    institution: "VJTI Mumbai",
    content:
      "The field visits to C-DAC and Pune International Centre were eye-opening and memorable.",
    avatar: "KP",
  },
];


/* ===============================
   COMPONENT: STUDENT VOICES
================================ */

export default function StudentVoices() {
  return (
    <section className="relative py-15 sm:py-15 reveal">

      {/* MAIN GLASS CONTAINER */}
      <div
        className="
          max-w-6xl mx-auto
          bg-gradient-to-b from-[#edeef8] to-[#c5d1ff]
          backdrop-blur-lg
          rounded-3xl shadow-xl
          px-6 sm:px-10 lg:px-12
          py-16
        "
      >

        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-14 reveal delay-1">
          <h2
            className="
              text-3xl sm:text-4xl font-bold
              bg-gradient-to-r
              from-[#020024]
              via-[#090979]
              to-[#4f6ff2]
              bg-clip-text text-transparent
            "
          >
            Student Voices
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Hear directly from students about their learning experiences
            and takeaways from Tech For Bharat workshops.
          </p>
        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div
          className="
            relative -mx-6 sm:-mx-10 lg:-mx-12
            reveal delay-2
            overflow-y-hidden
          "
        >
          <div
            className="
              flex gap-6
              px-6 sm:px-10 lg:px-12
              overflow-x-auto overflow-y-hidden
              scroll-smooth
              pb-6
              no-scrollbar
            "
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className={`
                  min-w-[260px] sm:min-w-[300px] lg:min-w-[340px]
                  bg-white/60 backdrop-blur-md
                  rounded-2xl p-6
                  shadow-md
                  hover:shadow-xl transition
                  hover:-translate-y-1
                  border border-transparent
                  reveal delay-${(index % 4) + 1}
                `}
              >
                {/* AVATAR */}
                <div
                  className="
                    w-12 h-12 rounded-full
                    bg-gradient-to-br from-[#4f6ff2] to-[#8fa8ff]
                    text-white font-semibold
                    flex items-center justify-center
                    mb-4
                  "
                >
                  {item.avatar}
                </div>

                {/* CONTENT */}
                <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                  “{item.content}”
                </p>

                {/* FOOTER */}
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#020024]">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role} · {item.institution}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* SCROLL HINT */}
        <p className="text-center text-sm text-gray-400 mt-6 reveal delay-3">
          ← Scroll horizontally to read more student experiences →
        </p>

      </div>
    </section>
  );
}
