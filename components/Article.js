import Image from "next/image";
import Link from "next/link";
import CopyLinkButton from "@/components/CopyLinkButton";

export default function Article({ project }) {
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-12">
      <Link href="/" className="text-[#2A9D8F] underline underline-offset-4">
        Back home
      </Link>

      <p className="mt-8 flex items-center gap-2 text-sm">
        <span
          className="inline-block h-2 w-2 bg-[#2A9D8F]"
          aria-hidden="true"
        />
        {project.module}
      </p>
      <h1 className="mt-2 font-serif text-4xl">{project.title}</h1>
      <p className="mt-4 leading-6">{project.description}</p>

      <div className="mt-6">
        <CopyLinkButton />
      </div>

      <figure className="mt-8">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          className="h-auto w-full"
        />
        <figcaption className="mt-2 text-sm">{project.caption}</figcaption>
      </figure>

      <p className="mt-6 flex flex-wrap gap-6">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2A9D8F] underline underline-offset-4"
        >
          Live site
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          href={project.readme}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#2A9D8F] underline underline-offset-4"
        >
          GitHub README
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </p>

      <div className="mt-10 space-y-4 leading-relaxed">
        <h2 className="font-serif text-2xl">The project</h2>
        <p>{project.about}</p>
        <h2 className="font-serif text-2xl">Tools</h2>
        <p>{project.tools}</p>
        <h2 className="font-serif text-2xl">What I would improve</h2>
        <p>{project.improvement}</p>
      </div>
    </main>
  );
}
