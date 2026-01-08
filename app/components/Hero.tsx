export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#ac84b6] via-[#d476c6] to-[#9b6fb0]">



      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      />

      {/* Dark overlay for text readability (can be adjusted later) */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
    <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32 pb-40 text-white">

        <h1 className="fade-up text-5xl md:text-7xl lg:text-6.7xl font-extrabold leading-[1.1] max-w-5xl">
            Tech For Bharat
        </h1>

        <p className="fade-up-delay-1 mt-8 max-w-3xl text-white/90 text-xl md:text-2xl leading-relaxed">
            Empowering India’s youth with cutting-edge technology skills for a brighter future
        </p>

        <div className="fade-up-delay-2 mt-10">
            <button className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#ac84b6] transition">
            Explore Workshops
            </button>
        </div>

    </div>

    
      {/* Wave at bottom */}
        {/* Bottom curved divider */}
{/* Hero bottom wave */}
<svg
  className="absolute bottom-0 left-0 w-full"
  viewBox="0 0 1440 200"
  preserveAspectRatio="none"
>
<defs>
    <pattern
      id="wavePattern"
      patternUnits="userSpaceOnUse"
      width="1440"
      height="120"
    >
      <image
        href="/bg-waves.png"
        x="0"
        y="0"
        width="1440"
        height="120"
        preserveAspectRatio="xMidYMid slice"
      />
    </pattern>
  </defs>

  <path
    fill="url(#wavePattern)"
    d="
      M0,120
      C120,160 360,200 720,200
      C1080,200 1320,160 1440,120
      L1440,200
      L0,200
      Z
    "
  />


  

</svg>

        
    </section>
  );
}
