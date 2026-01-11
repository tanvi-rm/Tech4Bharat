import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">

      {/* DARK BLUE GRADIENT BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#1e2a78]
          via-[#2f4fd8]
          to-[#1b1f4b]
        "
      />

      {/* SOFT OVERLAY FOR DEPTH */}
      <div className="absolute inset-0 bg-black/10" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-14 sm:py-16">

        {/* TOP GRID */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-3
            gap-10 text-sm
            text-white/90
            text-center sm:text-center
          "
        >

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Tech For Bharat
            </h3>
            <p className="leading-relaxed text-white/80">
              An initiative empowering youth with cutting-edge technology
              skills and training programs across critical domains.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about-us" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="
                      text-white/80
                      hover:text-white
                      hover:underline
                      underline-offset-4
                      transition
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="font-semibold mb-4 text-white">
              Programs
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/our-workshop"
                  className="
                    text-white/80
                    hover:text-white
                    hover:underline
                    underline-offset-4
                    transition
                  "
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link
                  href="/previous-activities#internship"
                  className="
                    text-white/80
                    hover:text-white
                    hover:underline
                    underline-offset-4
                    transition
                  "
                >
                  Internship
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-white/20" />

        {/* BOTTOM BAR */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-4 text-sm
            text-white/75
            text-center md:text-left
          "
        >
          <p>© 2025 Tech For Bharat. All rights reserved.</p>

          <p>
            Supporting <span className="font-medium text-white">Innovation</span> in Technology
          </p>

          <p className="flex items-center gap-1">
            Made with
            <span className="text-red-400 animate-pulse inline-block">❤</span>
            for Tech For Bharat
          </p>
        </div>

      </div>
    </footer>
  );
}
