"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";
import ThemeToggle from "@/components/ThemeToggle";
import Logo from "@/components/Logo";
import { CloseIcon, MenuIcon } from "@/components/icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClasses = (href: string) => {
    const isActive = activeId === href.slice(1);
    return [
      "py-1 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
      isActive
        ? "text-ink font-semibold underline underline-offset-4"
        : "text-ink/65 hover:text-ink",
    ].join(" ");
  };

  const linkProps = (href: string) => ({
    href,
    className: linkClasses(href),
    "aria-current": (activeId === href.slice(1) ? "true" : undefined) as
      | "true"
      | undefined,
    onClick: () => setOpen(false),
  });

  return (
    <header className="sticky top-0 z-40 w-full bg-paper border-b border-ink/12">
      <div className="max-w-[1080px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#home"
          aria-label={site.name}
          className="flex items-center text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <Logo className="h-6 w-auto" />
        </a>

        <div className="flex items-center gap-4">
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8 text-[14px]"
          >
            {site.navLinks.map((link) => (
              <a key={link.href} {...linkProps(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />

          <div className="flex md:hidden items-center">
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={
                open ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setOpen((value) => !value)}
              className="p-1.5 text-ink border border-ink/12 rounded-[8px] hover:bg-ink/[0.06] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={
          open ? "md:hidden border-t border-ink/12 bg-paper" : "hidden"
        }
      >
        <nav
          aria-label="Mobile"
          className="px-6 py-4 flex flex-col gap-3 text-sm"
        >
          {site.navLinks.map((link) => (
            <a key={link.href} {...linkProps(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
