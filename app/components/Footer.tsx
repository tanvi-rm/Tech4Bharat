import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 sm:mt-28">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ac84b6]/40 via-[#d476c6]/35 to-[#9b6fb0]/40 backdrop-blur-xl" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3
             gap-10 text-sm text-[#5e226d]
             text-center sm:text-centre">

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tech For Bharat</h3>
            <p className="leading-relaxed text-[#5e226d]/80">
              An initiative empowering youth with cutting-edge technology
              skills and training programs across critical domains.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#8b3fae] hover:underline underline-offset-4 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-[#8b3fae] hover:underline underline-offset-4 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#8b3fae] hover:underline underline-offset-4 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/our-workshop" className="hover:text-[#8b3fae] hover:underline underline-offset-4 transition">
                  Workshops
                </Link>
              </li>
              <li>
                <Link href="/previous-activities#internship" className="hover:text-[#8b3fae] hover:underline underline-offset-4 transition">
                  Internship
                </Link>
              </li>
            </ul>
          </div>

          

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-[#5e226d]/20" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#5e226d]/80 text-center md:text-left">
          <p>© 2025 Tech For Bharat. All rights reserved.</p>
          <p>Supporting <span className="font-medium">Innovation</span> in Technology</p>
          <p className="flex items-center gap-1">
        Made with
        <span className="text-red-500 animate-pulse inline-block">
          ❤
        </span>
        for Tech Bharat
      </p>


        </div>

      </div>
    </footer>
  );
}
