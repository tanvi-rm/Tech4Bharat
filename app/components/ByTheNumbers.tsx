export default function ByTheNumbers() {
  return (
    <section className="relative py-15 sm:py-15">
      <div
        className="max-w-6xl mx-auto bg-white/90 backdrop-blur-lg
                   rounded-3xl shadow-xl
                   px-6 sm:px-10 lg:px-12
                   py-16"
      >

        {/* SECTION HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
            By The Numbers
          </h2>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Our impact in empowering tech talent across India
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">

          {/* CARD 1 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
                       hover:shadow-xl transition hover:-translate-y-1
                       text-center sm:text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
              500+
            </h3>
            <p className="mt-3 font-semibold text-[#5e226d]">
              Students Trained
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              Across various technology domains
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
                       hover:shadow-xl transition hover:-translate-y-1
                       text-center sm:text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
              15+
            </h3>
            <p className="mt-3 font-semibold text-[#5e226d]">
              Workshops Conducted
            </p>
            <p className="mt-1 text-gray-600 text-sm">
              Intensive hands-on learning experiences
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-md
                       hover:shadow-xl transition hover:-translate-y-1
                       text-center sm:text-left"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-[#d476c6]">
              8
            </h3>
            <p className="mt-3 font-semibold text-[#5e226d]">
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
