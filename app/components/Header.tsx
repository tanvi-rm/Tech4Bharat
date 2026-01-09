"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        w-full bg-[#fee4fe]/70 backdrop-blur-md
        animate-header sticky top-0 z-50
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
          <span
            className="
              font-semibold tracking-wide
              text-lg sm:text-xl
              bg-gradient-to-r
              from-[#4b145c]
              via-[#6a1b7b]
              to-[#3f0f4a]
              bg-clip-text text-transparent
              transition-all duration-300
              group-hover:brightness-110
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
                relative
                transition-all duration-300
                hover:-translate-y-0.5
                after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:w-0
                after:bg-[#ac84b6]
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
          className="md:hidden text-3xl transition-transform duration-300 hover:scale-110"
          style={{ color: "var(--nav-lavender)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU (Animated) */}
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
    bg-[#fee4fe]/90
    backdrop-blur-md
    shadow-lg
    animate-mobileMenu
  "
  style={{ color: "var(--nav-lavender)" }}
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
                py-2 border-b border-purple-200
                transition-all duration-300
                hover:pl-2 hover:text-[#ac84b6]
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
