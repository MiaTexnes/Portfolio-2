import Link from "next/link";
import projects from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b border-[#ececf1] bg-[#f5f5f7] dark:border-white/10 dark:bg-[#0e1014]">
      <div className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="no-underline">
            <span className="block text-sm font-medium text-[#1c1c1f] dark:text-white">
              Mia Texnes
            </span>
            <span className="block text-xs text-[#6b7280]">
              Front-end student
            </span>
          </Link>
          <ThemeToggle />
        </div>
        <nav aria-label="Projects" className="mt-3 lg:mt-0">
          <ul className="flex gap-5 overflow-x-auto lg:justify-end">
            {projects.map((project) => (
              <li key={project.slug} className="shrink-0">
                <Link
                  href={`/${project.slug}`}
                  className="text-sm text-[#3f3f46] no-underline dark:text-[#d4d4d8]"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
