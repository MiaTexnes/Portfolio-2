import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <li className="h-full">
      <Link
        href={`/${project.slug}`}
        className="flex h-full flex-col border border-transparent bg-white text-[#264653] dark:border-[#E9C46A] dark:bg-[#264653] dark:text-white"
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={960}
          height={600}
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-1 flex-col gap-3 p-5">
          <h2 className="font-serif text-2xl">{project.title}</h2>
          <p className="text-sm leading-6">{project.description}</p>
        </div>
      </Link>
    </li>
  );
}
