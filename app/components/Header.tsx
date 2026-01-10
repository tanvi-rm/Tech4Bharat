"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full
        bg-[#acc5fe]/70 backdrop-blur-md
        animate-header
        sticky top-0 z-50
      "
    >
      <div className="w-full px-6 md:px-8 py-4 flex items-center justify-between">

        {/* LEFT: Logo + Name */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <img
            src="/logo.png"
            alt="Tech For Bharat Logo"
            className="
              h-8 w-8 object-contain
              transition-transform duration-300
              group-hover:scale-110
            "
          />

          {/* WEBSITE NAME – BLUE GRADIENT */}
          <span
            className="
              font-semibold tracking-wide
              text-lg sm:text-xl
              bg-gradient-to-r
              from-[#020024]
              via-[#090979]
              to-[#00D4FF]
              bg-clip-text text-transparent
              transition-all duration-300
              group-hover:brightness-110
            "
          >
            Tech For Bharat
          </span>
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-medium text-[15px]">
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Previous Activities", href: "/previous-activities" },
            { name: "Latest Workshop", href: "/our-workshop" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                relative
                text-[#1e3a8a]
                transition-all duration-300
                hover:text-[#2563eb]
                hover:-translate-y-0.5
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-gradient-to-r
                after:from-[#020024]
                after:via-[#090979]
                after:to-[#00D4FF]
                after:transition-all after:duration-300
                hover:after:w-full
              "
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="
            md:hidden text-3xl
            text-[#1e3a8a]
            transition-transform duration-300
            hover:scale-110
          "
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden overflow-hidden
          transition-all duration-500 ease-out
          ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <nav
          className="
            flex flex-col gap-4
            px-6 pb-6
            font-medium text-base
            bg-[#eaf0ff]/95
            backdrop-blur-md
            shadow-lg
            animate-mobileMenu
          "
        >
          {[
            { name: "Home", href: "/" },
            { name: "About Us", href: "/about-us" },
            { name: "Previous Activities", href: "/previous-activities" },
            { name: "Our Workshops", href: "/our-workshop" },
            { name: "Contact Us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
                py-2 border-b border-blue-200
                text-[#1e3a8a]
                transition-all duration-300
                hover:pl-2 hover:text-[#2563eb]
              "
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
