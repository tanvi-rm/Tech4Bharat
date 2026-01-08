export default function Footer() {
  return (
    <footer className="relative mt-20 sm:mt-28">

      {/* BACKGROUND GRADIENT */}
      <div
        className="absolute inset-0
                   bg-gradient-to-br
                   from-[#ac84b6]/40
                   via-[#d476c6]/35
                   to-[#9b6fb0]/40
                   backdrop-blur-xl"
      />

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto
                   px-6 sm:px-10 lg:px-12
                   py-14 sm:py-16"
      >

        {/* TOP GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4
                     gap-10 text-sm text-[#5e226d]
                     text-center sm:text-left"
        >

          {/* ABOUT */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Tech For Bharat
            </h3>
            <p className="leading-relaxed text-[#5e226d]/80">
              An initiative empowering youth with cutting-edge technology
              skills and training programs across critical domains.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* PROGRAMS */}
          <div>
            <h4 className="font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>Past Workshop</li>
              <li>Past Internship</li>
              <li>Upcoming Workshop</li>
            </ul>
          </div>

          {/* UPCOMING EVENT */}
          <div>
            <h4 className="font-semibold mb-4">Upcoming Event</h4>
            <ul className="space-y-2">
              <li>🎓 Digital & Tech Policy Workshop</li>
              <li>📅 18–23 December 2025</li>
              <li>📍 COEP TECH UNIVERSITY</li>
              <li>🤝 University Collaboration</li>
            </ul>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-[#5e226d]/20" />

        {/* BOTTOM BAR */}
        <div
          className="flex flex-col md:flex-row
                     items-center justify-between
                     gap-4 md:gap-6
                     text-sm text-[#5e226d]/80
                     text-center md:text-left"
        >
          <p>© 2025 Tech For Bharat. All rights reserved.</p>

          <p>
            Supporting <span className="font-medium">Innovation</span> in Technology
          </p>

          <p>
            Made with <span className="text-pink-500">❤</span> for Tech Future
          </p>
        </div>

      </div>
    </footer>
  );
}
