import Image from "next/image";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 sm:px-6">
      <section className="grid grid-cols-[1fr_5.5rem] items-center gap-4 py-10 sm:grid-cols-[1fr_7rem] sm:gap-6 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div>
          <p className="text-sm text-[#3f3f46] dark:text-[#e3e3e8]">
            Noroff Vocational College
          </p>
          <h1 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#9d174d] sm:text-6xl dark:text-[#f472b6]">
            Mia Texnes
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#3f3f46] dark:text-[#e3e3e8]">
            Portfolio 2 is my last assignment in Frontend Development. These
            three course projects each open on their own article page.
          </p>
        </div>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:mx-auto lg:max-w-sm lg:rounded-3xl">
          <Image
            src="/images/thisIsMe.jpg"
            alt="Mia Texnes"
            fill
            className="object-cover object-center"
            sizes="400px"
          />
        </div>
      </section>

      <section id="work" className="pb-16">
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Course projects
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-sm dark:text-[#e3e3e8] leading-6 text-[#4b5563]">
          CSS Frameworks, JavaScript Frameworks, and Semester Project 2. Each
          card opens an article with the same image, the live site, the GitHub
          README, and one improvement.
        </p>
        <ul className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </section>

      <section
        id="approach"
        className="grid gap-10 border-t border-[#ececf1] py-16 lg:grid-cols-2 dark:border-white/10"
      >
        <div>
          <p className="text-xs dark:text-[#e3e3e8] tracking-[0.16em] text-[#4b5563]">
            APPROACH
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            One improvement each
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-[#3f3f46] dark:text-[#e3e3e8]">
            Next.js and Tailwind run this site. The three course projects each
            open on their own page.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-[#3f3f46] dark:text-[#e3e3e8]">
            The ConnectSphere profile now shows the username @janedoe. Loot
            Locker shows the rating with stars, and no longer uses a ½ mark. On
            Pink Gavel, the carousel and the phone menu fit the screen, and the
            profile text is readable in dark mode.
          </p>
        </div>
        <div>
          <p className="text-xs dark:text-[#e3e3e8] tracking-[0.16em] text-[#4b5563]">
            TOOLS
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Frameworks on this site
          </h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Next.js", "This portfolio and Loot Locker"],
              [
                "Tailwind CSS",
                "This portfolio, ConnectSphere, Loot Locker, and Pink Gavel",
                ,
              ],
              ["JavaScript", "Pink Gavel Auctions"],
              ["HTML and CSS", "Pink Gavel Auctions"],
              ["GitHub", "A public README for each project"],
            ].map(([name, detail]) => (
              <li
                key={name}
                className="rounded-2xl border border-[#ececf1] bg-white p-4 dark:border-white/10 dark:bg-[#16181e]"
              >
                <p className="font-semibold">{name}</p>
                <p className="mt-1 text-sm dark:text-[#e3e3e8] text-[#4b5563]">
                  {detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="contact"
        className="border-t border-[#ececf1] py-16 text-center dark:border-white/10"
      >
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Contact</h2>
        <p className="mx-auto mt-4 max-w-lg text-[#3f3f46] dark:text-[#e3e3e8]">
          The code is public if you want a look. If you want to talk, LinkedIn
          and Discord are open, and miatexnes.com is a temporary website I made.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://github.com/MiaTexnes"
            className="inline-flex items-center gap-2 rounded-full bg-[#18181b] px-4 py-3 text-sm text-white no-underline dark:bg-[#9d174d]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mia-texnes-847b28bb/"
            className="inline-flex items-center gap-2 rounded-full bg-[#18181b] px-4 py-3 text-sm text-white no-underline dark:bg-[#9d174d]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.79-2.1 4.05 0 4.8 2.67 4.8 6.14V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.06V24h-4V8.5z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/275629086708072449"
            className="inline-flex items-center gap-2 rounded-full bg-[#18181b] px-4 py-3 text-sm text-white no-underline dark:bg-[#9d174d]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-current"
            >
              <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.1.05c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.74 0c-.14-.34-.36-.76-.54-1.09-.02-.04-.06-.05-.1-.05-1.5.26-2.93.71-4.27 1.33-.02 0-.04.01-.05.03C2.2 9.05 1.5 12.66 1.82 16.22c0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.02.03.05.03.08.02 1.72-.53 3.45-1.33 5.24-2.65.02-.01.03-.03.03-.05.41-4.16-.68-7.74-2.88-10.86-.01-.02-.03-.03-.05-.03zM8.52 14.14c-1.03 0-1.89-.95-1.89-2.11 0-1.17.84-2.12 1.89-2.12 1.06 0 1.9.96 1.89 2.12 0 1.16-.84 2.11-1.89 2.11zm6.97 0c-1.03 0-1.89-.95-1.89-2.11 0-1.17.84-2.12 1.89-2.12 1.06 0 1.9.96 1.89 2.12 0 1.16-.83 2.11-1.89 2.11z" />
            </svg>
            Discord
          </a>
          <a
            href="https://miatexnes.com"
            className="inline-flex items-center gap-2 rounded-full bg-[#18181b] px-4 py-3 text-sm text-white no-underline dark:bg-[#9d174d]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-5 w-5 fill-none stroke-current"
              strokeWidth="1.8"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.8 3.8 5.8 3.8 9s-1.3 6.2-3.8 9c-2.5-2.8-3.8-5.8-3.8-9s1.3-6.2 3.8-9z" />
            </svg>
            miatexnes.com
          </a>
        </div>
      </section>
    </main>
  );
}
