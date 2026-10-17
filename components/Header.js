import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header
      id="top"
      className="border-b border-[#ececf1] bg-[#f5f5f7] dark:border-white/10 dark:bg-[#0e1014]"
    >
      <div className="relative mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="no-underline">
          <span className="block text-lg font-medium text-[#1c1c1f] dark:text-white">
            Mia Texnes
          </span>
          <span className="block text-sm dark:text-[#e3e3e8] text-[#4b5563]">
            Portfolio 2
          </span>
        </Link>
        <p className="hidden text-xs dark:text-[#e3e3e8] tracking-[0.22em] text-[#4b5563] md:absolute md:left-1/2 md:block md:-translate-x-1/2">
          FRONTEND DEVELOPMENT
        </p>
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:gap-8">
          <nav aria-label="On this page">
            <ul className="flex gap-6">
              <li>
                <Link
                  href="/#work"
                  className="text-base text-[#9d174d] no-underline dark:text-[#f9a8d4]"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#approach"
                  className="text-base text-[#9d174d] no-underline dark:text-[#f9a8d4]"
                >
                  Approach
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-base text-[#9d174d] no-underline dark:text-[#f9a8d4]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
