import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <li className="h-full">
      <Link
        href={`/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececf1] bg-white text-[#1c1c1f] no-underline shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#9d174d] hover:shadow-md dark:border-white/10 dark:bg-[#16181e] dark:text-white dark:shadow-none dark:hover:border-[#f472b6]"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          className="h-40 w-full object-cover object-top"
        />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <p className="text-xs tracking-wide dark:text-[#e3e3e8] text-[#4b5563]">
            {project.module}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm leading-6 text-[#3f3f46] dark:text-[#e3e3e8]">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[#ececf1] px-2 py-1 text-xs dark:text-[#e3e3e8] text-[#4b5563] dark:border-white/10"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-auto text-sm font-medium">Open article</p>
        </div>
      </Link>
    </li>
  );
}
