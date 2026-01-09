import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function PreviousActivitiesPage() {
  return (
    <>
      <Header />

      <main>

        {/* ================= PAGE HEADER ================= */}
        <section className="text-center py-24 px-6">
          <h1 className="text-5xl font-bold text-[#d476c6]">
            Previous Activities
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
            A showcase of workshops and internship programs conducted by Tech For Bharat.
          </p>
        </section>

        <div className="max-w-6xl mx-auto px-8 space-y-28">

          {/* ======================================================
              MOST RECENT WORKSHOP – DIGITAL & TECH POLICY
          ====================================================== */}
          <section className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12 hover:shadow-2xl transition-all">

            {/* Header */}
            <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                Most Recent Workshop
              </span>

              <h2 className="text-3xl font-semibold text-[#5e226d]">
                Digital & Tech Policy Workshop
              </h2>

              <p className="mt-2 text-sm text-gray-700">
                Technology, Governance & Strategic Decision-Making
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Policy Frameworks for Emerging Technologies
              </p>

              <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                Participants received a Digital & Tech Policy Workshop Certificate
              </p>
            </div>

            {/* Logistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                ["Duration", "6-Day Intensive Workshop"],
                ["Dates", "18th – 23rd December, 2025"],
                ["Venue", "COEP Technological University, Pune"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                >
                  <p className="text-base font-semibold text-[#5e226d] mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-gray-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Learning Focus */}
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl px-6 py-4 mb-10 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-center text-[#5e226d] mb-2">
                Key Learning Focus
              </p>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                Understanding how technology, policy, and governance intersect to shape national and global decision-making.
              </p>
            </div>

            {/* Agenda */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-10 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-center text-[#5e226d] mb-6">
                Agenda
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  ["Foundations of Technology Policy", "Policy frameworks, governance, and stakeholders"],
                  ["Information, Digitalization & AI Governance", "DPI, data governance, misinformation, AI policy"],
                  ["Innovation & Strategic Policy Thinking", "Innovation management and policy translation"],
                  ["Physical & Cyber-Physical Systems", "Clean energy, digital assets, cyber-physical policy"],
                  ["Technostrategic Perspectives & Field Exposure", "Earth observation and institutional exposure"],
                  ["Policy Drafting & Integrated Learning", "Simulations, case discussions, policy drafting"],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                  >
                    <h4 className="text-base font-semibold text-[#5e226d] mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Organizers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all">
                <h4 className="text-lg font-semibold text-[#5e226d] mb-3">
                  Organized By
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• COEP Technological University, Pune</li>
                  <li>• Veermata Jijabai Technological Institute (VJTI), Mumbai</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all">
                <h4 className="text-lg font-semibold text-[#5e226d] mb-3">
                  Knowledge Partners
                </h4>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• CDTIES, IIT Bombay</li>
                  <li>• Observer Research Foundation</li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="text-center bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-[#5e226d] mb-2">
                Our Vision
              </p>
              <p className="text-sm font-medium text-gray-800 mb-2">
                “Building awareness and capability in technology-driven governance.”
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Real-world policy challenges across AI, cybersecurity, clean energy, space, and digital public infrastructure.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Goal:</span> Equip students with technostrategic thinking skills for governance and national decision-making roles.
              </p>
            </div>

          </section>


          {/* ======================================================
              PAST WORKSHOP – AI WORKSHOP BY BHARATGEN
          ====================================================== */}

          <section className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12 hover:shadow-2xl transition-all">

            {/* Header */}
            <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4">
                Past Workshop
              </span>

              <h2 className="text-3xl font-semibold text-[#5e226d]">
                AI Workshop by BharatGen
              </h2>

              <p className="mt-2 text-sm text-gray-700">
                GenAI for Everyone, by Everyone
              </p>

              <p className="text-sm text-gray-600 mt-2">
                Multimodal Large Language Model (LLM)
              </p>

              <p className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                Participants received AI Workshop Certificate
              </p>
            </div>

            {/* Logistics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                ["Date", "Friday, 21st March, 2025"],
                ["Time", "5:00 PM (Approx. 3 hours)"],
                ["Venue", "Cognizant Lab, COEP Tech University Pune"],
              ].map(([label, value], i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                >
                  <p className="text-base font-semibold text-[#5e226d] mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-gray-700">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Key Selling Point */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl px-6 py-4 mb-10 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-center text-[#5e226d] mb-2">
                Key Selling Point
              </p>
              <p className="text-sm text-gray-700 text-center leading-relaxed">
                Learn to build AI with just minimum coding knowledge.
              </p>
            </div>

            {/* Agenda */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-10 hover:shadow-xl transition-all">

              <p className="text-lg font-semibold text-center text-[#5e226d] mb-6">
                Agenda
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  [
                    "Langchain",
                    "Introduction to application development using Langchain with hands-on AI-powered tools.",
                  ],
                  [
                    "Hugging Face Transformers",
                    "Exploring pre-trained models for NLP tasks and image classification.",
                  ],
                  [
                    "Neural Networks",
                    "Understanding the basics of neural networks with hands-on model training.",
                  ],
                  [
                    "Transformers & Large Language Models (LLMs)",
                    "Understanding transformer architecture and coding a basic LLM from scratch.",
                  ],
                  [
                    "LLM Landscape & Career Opportunities",
                    "Overview of current LLM ecosystems, career paths, and project discussions.",
                  ],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                  >
                    <h4 className="text-base font-semibold text-[#5e226d] mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>


            {/* Organizer */}
            <div className="bg-white rounded-2xl p-5 shadow-md text-center hover:shadow-xl transition-all mb-10">
              <h4 className="text-lg font-semibold text-[#5e226d] mb-3">
                Organized By
              </h4>
              <p className="text-sm text-gray-700">
                OEP Tech University Pune
              </p>
            </div>

            {/* Vision */}
            <div className="text-center bg-purple-50 rounded-xl p-6 border border-purple-200 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-[#5e226d] mb-2">
                Our Vision
              </p>
              <p className="text-sm font-medium text-gray-800 mb-2">
                “Explore AI innovations for everyone.”
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Real-world applications discussed across agriculture, healthcare, and more.
              </p>
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-medium">Goal:</span> Inspire AI-driven solutions for technological advancement.
              </p>
            </div>

          </section>


          {/* ======================================================
    INTERNSHIP – CENTRE OF EXCELLENCE IN AI, VJTI
====================================================== */}
          <section id="internship" className="bg-white/90 backdrop-blur rounded-3xl shadow-xl p-12 hover:shadow-2xl transition-all">

            {/* Header */}
            <div className="mb-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm mb-4">
                Past Internship
              </span>

              <h2 className="text-3xl font-semibold text-[#5e226d]">
                Internship at Centre of Excellence in AI, VJTI
              </h2>

              <p className="mt-2 text-gray-700">
                6-week intensive program with hands-on research projects
              </p>

              <p className="mt-3 inline-block bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold">
                Interns received Certificate of Excellence
              </p>
            </div>

            {/* Logistics / Key Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-center">
              {[
                ["45+", "Selected Interns"],
                ["8", "Research Areas"],
                ["12", "Faculty Mentors"],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
                >
                  <p className="text-3xl font-bold text-purple-600 mb-1">{num}</p>
                  <p className="text-sm font-medium text-gray-700">{label}</p>
                </div>
              ))}
            </div>

            {/* Research Areas */}
            <div className="bg-white rounded-2xl p-6 shadow-md mb-10 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-center text-[#5e226d] mb-6">
                Research Areas & Projects
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  ["Artificial Intelligence", "Foundational AI concepts and real-world applications."],
                  ["Deep Learning", "Advanced neural network architectures and training techniques."],
                  ["Generative AI", "AI models for content generation and creative applications."],
                  ["Computer Vision", "Image and video analysis using vision-based AI systems."],
                  ["Natural Language Processing", "Language understanding and text generation models."],
                  ["Robotics and AI", "Integrating AI algorithms with robotic systems."],
                  ["AI in Healthcare", "AI-driven solutions for diagnosis and patient care."],
                ].map(([title, desc], i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-all"
                  >
                    <h4 className="text-base font-semibold text-[#5e226d] mb-2">
                      {title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Gained */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-6 mb-8 hover:shadow-xl transition-all">
              <p className="text-lg font-semibold text-center text-[#5e226d] mb-4">
                Skills Gained
              </p>

              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Python",
                  "TensorFlow",
                  "PyTorch",
                  "Computer Vision",
                  "NLP",
                  "Deep Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-1.5 rounded-full bg-white text-indigo-700 text-sm font-semibold shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Organizer */}
            <div className="bg-white rounded-2xl p-5 shadow-md text-center hover:shadow-xl transition-all">
              <h4 className="font-bold text-[#5e226d] mb-3">Organized By</h4>
              <p className="text-gray-700 font-medium">VJTI Mumbai</p>
            </div>

          </section>


        </div>
      </main>

      <Footer />
    </>
  );
}
