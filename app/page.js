import Link from "next/link";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 sm:px-6">
      <section className="grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div>
          <p className="flex items-center gap-2 text-sm text-[#3f3f46] dark:text-[#d4d4d8]">
            <span
              className="h-2 w-2 rounded-full bg-[#22c55e]"
              aria-hidden="true"
            />
            Front-end student
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#4f46e5] sm:text-6xl">
            Mia Texnes
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3f3f46] dark:text-[#d4d4d8]">
            I am Mia Texnes, a front-end student, and these three projects are
            the work I would show an employer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#work"
              className="w-full rounded-full bg-[#18181b] px-5 py-3 text-center text-sm text-white no-underline sm:w-auto dark:bg-[#5b4dff]"
            >
              See the projects
            </a>
            <a
              href="https://github.com/MiaTexnes"
              className="w-full rounded-full border border-[#e4e4e7] bg-white px-5 py-3 text-center text-sm text-[#1c1c1f] no-underline sm:w-auto dark:border-white/15 dark:bg-transparent dark:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-[#e7e7ee] lg:block dark:bg-[#1a1c24]">
          <p className="absolute bottom-4 left-4 text-sm text-[#6b7280]">
            Your photo
          </p>
        </div>
      </section>

      <section id="work" className="pb-16">
        <p className="text-xs tracking-[0.16em] text-[#6b7280]">PORTFOLIO</p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Selected work
          </h2>
          <p className="text-sm text-[#6b7280]">03 projects</p>
        </div>
        <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <section className="grid gap-10 border-t border-[#ececf1] py-16 lg:grid-cols-2 dark:border-white/10">
        <div>
          <p className="text-xs tracking-[0.16em] text-[#6b7280]">
            FOR AN EMPLOYER
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            What these pages show
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#3f3f46] dark:text-[#d4d4d8]">
            Each article uses the same picture as its card, then says what the
            project is, which tools it uses, and what I would improve.
          </p>
        </div>
        <ul className="grid gap-4 lg:grid-cols-2">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/${project.slug}`}
                className="block h-full rounded-2xl border border-[#ececf1] bg-white p-5 text-[#1c1c1f] no-underline dark:border-white/10 dark:bg-[#16181e] dark:text-white"
              >
                <p className="text-xs text-[#6b7280]">{project.module}</p>
                <p className="mt-2 text-xl font-semibold">{project.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
