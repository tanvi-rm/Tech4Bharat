import Link from "next/link";

export default function Hero() {
  return (
    <section
  className="
    relative overflow-hidden
    min-h-[52vh]
    sm:min-h-[62vh]
    md:min-h-[72vh]
    lg:min-h-[78vh]
  "
>

      {/* ===============================
         HERO BACKGROUND IMAGE
      =============================== */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/15" />

      {/* ===============================
         BLEND LAYER (HERO → PAGE BG)
      =============================== */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          h-40 sm:h-48 md:h-56
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
    px-4 sm:px-6 lg:px-1
    pt-20 sm:pt-28 md:pt-32
    pb-20 sm:pb-28 md:pb-32
    text-white
  "
>

        {/* HEADING */}
        <h1
          className="
            fade-up font-extrabold
            leading-[1.08]
            max-w-4xl
            text-center sm:text-left
            text-[clamp(2.2rem,6vw,4.5rem)]
          "
        >
          Tech For Bharat
        </h1>

        {/* SUBTEXT */}
        <p
          className="
            fade-up-delay-1 mt-5 sm:mt-7
            max-w-3xl
            text-white/90
            leading-relaxed
            text-center sm:text-left
            text-[clamp(1rem,3.8vw,1.5rem)]
          "
        >
          Empowering India’s youth with cutting-edge technology skills for a brighter future
        </p>

        {/* CTA BUTTON */}
        <div
          className="
            fade-up-delay-2 mt-8 sm:mt-10
            flex justify-center sm:justify-start
          "
        >
          <Link href="/about-us">
            <button
              className="
                hero-btn border border-white
                px-7 sm:px-10
                py-3 sm:py-4
                rounded-full
                text-[clamp(0.95rem,3.5vw,1.1rem)]
                transition-all duration-300
                hover:bg-white hover:text-[#4f6ff2]
                hover:scale-105
                w-full sm:w-auto
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
