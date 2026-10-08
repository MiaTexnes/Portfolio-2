import projects from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <main id="main" className="mx-auto max-w-7xl px-6 py-12">
      <p className="mb-3 h-3 w-3 bg-[#2A9D8F]" aria-hidden="true" />
      <h1 className="font-serif text-5xl">Mia Texnes</h1>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed">
        I am Mia Texnes, a front-end student, and these three projects are the
        work I would show an employer.
      </p>
      <ul className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </main>
  );
}
