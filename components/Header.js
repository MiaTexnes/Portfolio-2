"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  ["/#work", "Projects"],
  ["/#approach", "Approach"],
  ["/#contact", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="top"
      className="border-b border-[#ececf1] bg-[#f5f5f7] dark:border-white/10 dark:bg-[#0e1014]"
    >
      <div className="relative mx-auto max-w-6xl px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image
              src="/images/logo.png"
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 rounded-full"
            />
            <span>
              <span className="block text-lg font-medium text-[#1c1c1f] dark:text-white">
                Mia Texnes
              </span>
              <span className="block text-sm dark:text-[#e3e3e8] text-[#4b5563]">
                Portfolio 2
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3 md:gap-8">
            <nav className="hidden md:block" aria-label="On this page">
              <ul className="flex gap-6">
                {links.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-base text-[#9d174d] no-underline dark:text-[#f9a8d4]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="block h-0.5 w-6 bg-[#1c1c1f] dark:bg-white" />
              <span className="block h-0.5 w-6 bg-[#1c1c1f] dark:bg-white" />
              <span className="block h-0.5 w-6 bg-[#1c1c1f] dark:bg-white" />
            </button>
          </div>
        </div>

        <nav
          id="site-menu"
          aria-label="On this page"
          className={open ? "mt-4 md:hidden" : "hidden"}
        >
          <ul className="flex flex-col items-center gap-4">
            {links.map(([href, label]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-base text-[#9d174d] no-underline dark:text-[#f9a8d4]"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center">
            <ThemeToggle />
          </div>
        </nav>
      </div>
      <p className="mt-4 text-center text-xs tracking-[0.22em] text-[#4b5563] dark:text-[#e3e3e8]">
        FRONTEND DEVELOPMENT
      </p>
    </header>
  );
}
