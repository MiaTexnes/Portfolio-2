import Image from "next/image";
import Link from "next/link";
import CopyLinkButton from "@/components/CopyLinkButton";

export default function Article({ project }) {
  return (
    <main
      id="main"
      className="mx-auto my-10 max-w-3xl rounded-3xl bg-white px-6 py-12 text-[#1c1c1f] shadow-sm dark:border dark:border-white/10 dark:bg-[#16181e] dark:text-white dark:shadow-none"
    >
      <Link
        href="/"
        className="text-sm text-[#4f46e5] underline underline-offset-4"
      >
        Back home
      </Link>

      <p className="mt-8 flex items-center gap-2 text-sm text-[#6b7280]">
        <span
          className="inline-block h-2 w-2 rounded-full bg-[#22c55e]"
          aria-hidden="true"
        />
        {project.module}
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mt-4 leading-6 text-[#3f3f46] dark:text-[#d4d4d8]">
        {project.description}
      </p>

      <div className="mt-6">
        <CopyLinkButton />
      </div>

      <figure className="mt-8">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          className="h-auto w-full rounded-2xl"
        />
        <figcaption className="mt-2 text-sm text-[#6b7280]">
          {project.caption}
        </figcaption>
      </figure>

      <p className="mt-6 flex flex-wrap gap-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#4f46e5] underline underline-offset-4"
        >
          Live site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={project.readme}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[#4f46e5] underline underline-offset-4"
        >
          GitHub README
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>

      <div className="mt-10 space-y-4 leading-relaxed">
        <h2 className="text-2xl font-semibold tracking-tight">The project</h2>
        <p>{project.about}</p>
        <h2 className="text-2xl font-semibold tracking-tight">Tools</h2>
        <p>{project.tools}</p>
        <h2 className="text-2xl font-semibold tracking-tight">
          What I would improve
        </h2>
        <p>{project.improvement}</p>
      </div>
    </main>
  );
}
