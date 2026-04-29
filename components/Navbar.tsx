"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#11111A]/80 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-heading font-bold text-xl bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent"
        >
          AT.
        </a>
        <div className="hidden sm:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
