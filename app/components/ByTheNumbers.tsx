export default function ByTheNumbers() {
  const stats = [
    { number: "500+", label: "Students Trained", desc: "Across various technology domains", delay: "delay-2" },
    { number: "15+", label: "Workshops Conducted", desc: "Intensive hands-on learning experiences", delay: "delay-3" },
    { number: "8", label: "Locations Reached", desc: "Across India's educational institutions", delay: "delay-4" },
  ];

  return (
    <section className="relative py-5 sm:py-15 reveal">
      <div className="max-w-6xl mx-auto bg-gradient-to-b from-[#edeef8] to-[#c5d1ff] backdrop-blur-lg rounded-3xl shadow-xl px-4 sm:px-10 lg:px-12 py-8 sm:py-16">

        {/* SECTION HEADER */}
        <div className="text-center mb-8 sm:mb-16 reveal delay-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#020024] via-[#090979] to-[#4f6ff2] bg-clip-text text-transparent">
            By The Numbers
          </h2>
          <p className="mt-2 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Our impact in empowering tech talent across India
          </p>
        </div>

        {/* STATS GRID */}
<div className="mt-12 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-10">
  {stats.map((stat, index) => (
    <div
      key={index}
      className={`reveal ${stat.delay}`}
    >
      <div
        className="
          bg-white
          rounded-tr-[60px] rounded-br-[60px]
          rounded-tl-[16px] rounded-bl-[16px]
          sm:rounded-tr-[100px] sm:rounded-br-[100px]
          sm:rounded-tl-[24px] sm:rounded-bl-[24px]
          border-l-4 border-t-4 border-b-4
          sm:border-l-7 sm:border-t-7 sm:border-b-7
          border-[#9db2ff]
          shadow-[8px_8px_0_#1a36a3]
          p-4 sm:p-6
        "
      >
        <h3 className="text-xl sm:text-4xl font-black text-[#1a1a1a]">
          {stat.number}
        </h3>
        <p className="mt-1 sm:mt-4 text-xs sm:text-lg font-bold text-[#2d3e50]">
          {stat.label}
        </p>
        <p className="mt-0.5 text-[10px] sm:text-sm text-gray-500 leading-tight">
          {stat.desc}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
