export default function ByTheNumbers() {
  return (
    <section className="relative py-15 sm:py-15 reveal">

      {/* MAIN CONTAINER */}
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

        {/* ===============================
            SECTION HEADER
        ================================ */}
        <div className="text-center mb-12 sm:mb-16 reveal delay-1">
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
            By The Numbers
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our impact in empowering tech talent across India
          </p>
        </div>

        {/* ===============================
            STATS GRID
        ================================ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {/* CARD 1 */}
          <div
            className="
              bg-white/60 backdrop-blur-md
              rounded-2xl p-6 sm:p-8 shadow-md
              hover:shadow-xl transition hover:-translate-y-1
              text-center sm:text-left
              reveal delay-2
            "
          >
            <h3
              className="
                text-3xl sm:text-4xl font-bold
                bg-gradient-to-r
                from-[#020024]
                to-[#4f6ff2]
                bg-clip-text text-transparent
              "
            >
              500+
            </h3>
            <p className="mt-3 font-semibold text-[#020024]">
              Students Trained
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              Across various technology domains
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="
              bg-white/60 backdrop-blur-md
              rounded-2xl p-6 sm:p-8 shadow-md
              hover:shadow-xl transition hover:-translate-y-1
              text-center sm:text-left
              reveal delay-3
            "
          >
            <h3
              className="
                text-3xl sm:text-4xl font-bold
                bg-gradient-to-r
                from-[#020024]
                to-[#4f6ff2]
                bg-clip-text text-transparent
              "
            >
              15+
            </h3>
            <p className="mt-3 font-semibold text-[#020024]">
              Workshops Conducted
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              Intensive hands-on learning experiences
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="
              bg-white/60 backdrop-blur-md
              rounded-2xl p-6 sm:p-8 shadow-md
              hover:shadow-xl transition hover:-translate-y-1
              text-center sm:text-left
              reveal delay-4
            "
          >
            <h3
              className="
                text-3xl sm:text-4xl font-bold
                bg-gradient-to-r
                from-[#020024]
                to-[#4f6ff2]
                bg-clip-text text-transparent
              "
            >
              8
            </h3>
            <p className="mt-3 font-semibold text-[#020024]">
              Locations Reached
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              Across India’s educational institutions
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
