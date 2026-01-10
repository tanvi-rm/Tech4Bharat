import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-[90vh] overflow-hidden">

      {/* ===============================
         HERO BACKGROUND IMAGE
      =============================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Optional dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ===============================
         BLEND LAYER (HERO → PAGE BG)
         This is what removes the hard edge
      =============================== */}
      <div
        className="
          absolute bottom-0 left-0 w-full h-56
          bg-gradient-to-b
          from-transparent
          via-[#8fa8ff]/90
          to-[#eef2ff]
          pointer-events-none
        "
      />

      {/* ===============================
         CONTENT
      =============================== */}
      <div
        className="
          relative z-10 max-w-6xl mx-auto
          px-6 sm:px-8
          pt-28 sm:pt-32 md:pt-36
          pb-32 sm:pb-40
          text-white
        "
      >
        {/* HEADING */}
        <h1
          className="
            fade-up font-extrabold leading-[1.1]
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
            max-w-4xl
          "
        >
          Tech For Bharat
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            fade-up-delay-1 mt-6 sm:mt-8
            max-w-3xl text-white/90
            text-lg sm:text-xl md:text-2xl
            leading-relaxed
          "
        >
          Empowering India’s youth with cutting-edge technology skills for a brighter future
        </p>

        {/* CTA BUTTON */}
        <div className="fade-up-delay-2 mt-8 sm:mt-10">
          <Link href="/about-us">
            <button
              className="
                hero-btn border border-white
                px-8 sm:px-10
                py-3 sm:py-4
                rounded-full
                text-base sm:text-lg
                transition-all duration-300
                hover:bg-white hover:text-[#4f6ff2]
                hover:scale-105
              "
            >
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
