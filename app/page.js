import Image from "next/image";
import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-5 sm:px-6">
      <section className="grid items-center gap-8 py-10 sm:py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
        <div>
          <p className="flex items-center gap-2 text-sm text-[#3f3f46] dark:text-[#e3e3e8]">
            <span
              className="h-2 w-2 rounded-full bg-[#22c55e]"
              aria-hidden="true"
            />
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
        <div className="relative mx-auto hidden aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl lg:block">
          <Image
            src="/images/miaai.jpg"
            alt="Illustration of Mia Texnes"
            fill
            className="object-cover object-top"
            sizes="400px"
          />
        </div>
      </section>

      <section id="work" className="pb-16">
        <p className="text-xs dark:text-[#e3e3e8] tracking-[0.16em] text-[#4b5563]">
          PORTFOLIO
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Course projects
          </h2>
          <p className="text-sm dark:text-[#e3e3e8] text-[#4b5563]">
            03 projects
          </p>
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
            The ConnectSphere profile now shows the username @janedoe. The
            follow button and the follower counts were already there. Loot
            Locker shows the rating with stars, and no longer uses a ½ mark. On
            Pink Gavel, the carousel and the phone menu fit the screen, and the
            profile text is readable in dark mode.
          </p>
          <p className="mt-6 max-w-md rounded-2xl border border-[#ececf1] bg-white p-4 text-sm leading-6 text-[#3f3f46] dark:border-white/10 dark:bg-[#16181e] dark:text-[#e3e3e8]">
            The card and the article use the same picture. The article is where
            the longer description and the improvement are written.
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
                "This portfolio, ConnectSphere, and Loot Locker",
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
        <p className="text-xs dark:text-[#e3e3e8] tracking-[0.16em] text-[#4b5563]">
          CONTACT
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">GitHub</h2>
        <p className="mx-auto mt-4 max-w-lg text-[#3f3f46] dark:text-[#e3e3e8]">
          The profile, the three project repositories, and this portfolio are
          public. The three live projects are linked from each article.
        </p>
        <a
          href="https://github.com/MiaTexnes"
          className="mt-8 inline-block rounded-full bg-[#18181b] px-5 py-3 text-sm text-white no-underline dark:bg-[#9d174d]"
        >
          https://github.com/MiaTexnes
        </a>
      </section>
    </main>
  );
}
