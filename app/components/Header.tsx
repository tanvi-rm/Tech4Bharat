"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#fee4fe]">
      <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Tech For Bharat Logo"
            className="h-8 w-8 object-contain"
          />
          <span
  className="
    font-semibold tracking-wide
    text-lg sm:text-xl
    bg-gradient-to-r
    from-[#4b145c]
    via-[#6a1b7b]
    to-[#3f0f4a]
    bg-clip-text text-transparent
  "
>
  Tech For Bharat
</span>


        </div>

        {/* DESKTOP NAV */}
        <nav
          className="hidden md:flex gap-8 font-medium text-[15px]"
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

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-3xl"
          style={{ color: "var(--nav-lavender)" }}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#fee4fe] px-6 pb-6">
          <nav
            className="flex flex-col gap-4 font-medium text-base"
            style={{ color: "var(--nav-lavender)" }}
          >
            {[
              "Home",
              "About Us",
              "Previous Activities",
              "Our Workshops",
              "Contact Us",
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="py-2 border-b border-purple-200"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
