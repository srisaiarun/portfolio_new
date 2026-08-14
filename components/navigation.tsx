"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationLinks, personalInfo } from "@/lib/data";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navigationLinks.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const onNavClick = () => setIsOpen(false);

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 backdrop-blur-md transition-all md:px-6 ${
          isScrolled
            ? "border-white/10 bg-black/70"
            : "border-white/5 bg-black/30"
        }`}
        aria-label="Primary"
      >
        <Link
          href="#home"
          className="font-display text-xl uppercase tracking-wider text-white"
          onClick={onNavClick}
        >
          {personalInfo.name}
        </Link>

        <button
          type="button"
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-2 md:flex">
          {navigationLinks.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-xs tracking-[0.2em] transition-colors ${
                    isActive ? "bg-white text-black" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-black/90 p-4 backdrop-blur-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <li key={`mobile-${item.href}`}>
                  <Link
                    href={item.href}
                    onClick={onNavClick}
                    className={`block rounded-2xl px-4 py-3 text-xs tracking-[0.2em] ${
                      isActive
                        ? "bg-white text-black"
                        : "text-zinc-200 hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </motion.header>
  );
}
