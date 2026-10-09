import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <li className="h-full">
      <Link
        href={`/${project.slug}`}
        className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#ececf1] bg-white text-[#1c1c1f] no-underline shadow-sm dark:border-white/10 dark:bg-[#16181e] dark:text-white dark:shadow-none"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          className="h-40 w-full object-cover"
        />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <p className="text-xs tracking-wide text-[#6b7280]">
            {project.module}
          </p>
          <h2 className="text-2xl font-semibold tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm leading-6 text-[#3f3f46] dark:text-[#d4d4d8]">
            {project.description}
          </p>
          <p className="mt-auto text-sm font-medium">Open article</p>
        </div>
      </Link>
    </li>
  );
}
