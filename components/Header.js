import Link from "next/link";
import projects from "@/data/projects";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  return (
    <header className="border-b-2 border-[#2A9D8F]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-serif text-xl text-[#2A9D8F] underline underline-offset-4"
        >
          Mia Texnes
        </Link>
        <nav aria-label="Projects">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {projects.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/${project.slug}`}
                  className="text-[#2A9D8F] underline underline-offset-4"
                >
                  {project.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
