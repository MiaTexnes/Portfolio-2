import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Article from "@/components/Article";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Not found" };
  return { title: `${project.title} | Mia Texnes` };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return <Article project={project} />;
}
