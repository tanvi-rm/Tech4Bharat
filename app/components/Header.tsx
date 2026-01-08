export default function Header() {
  return (
    <header className="w-full bg-[#fee4fe]">
      <div className="w-full px-8 py-4 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Tech For Bharat Logo" className="h-8 w-8 object-contain"/>
          <span
            className="font-semibold text-xl tracking-wide"
            style={{ color: "var(--brand-orchid)" }}
          >
            Tech For Bharat
          </span>
        </div>


        {/* RIGHT: Navigation */}
        <nav
          className="flex gap-10 font-medium text-[15px]"
          style={{ color: "var(--nav-lavender)" }}
        >
          <a
            href="#"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ac84b6] after:transition-all after:duration-300 hover:after:w-full">Home</a>

          <a
            href="#"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ac84b6] after:transition-all after:duration-300 hover:after:w-full">About Us</a>

          <a
            href="#"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ac84b6] after:transition-all after:duration-300 hover:after:w-full">Previous Activities</a>

          <a
            href="/our-workshop"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ac84b6] after:transition-all after:duration-300 hover:after:w-full">Our Workshops</a>

          <a
            href="#"
            className="relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#ac84b6] after:transition-all after:duration-300 hover:after:w-full">Contact Us</a>
        </nav>


      </div>
    </header>
  );
}
