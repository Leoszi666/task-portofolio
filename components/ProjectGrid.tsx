import { projects, type ProjectCardProps } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ProjectGrid() {
  const cards: ProjectCardProps[] =
    projects.length > 0
      ? projects
      : [{ placeholder: true }, { placeholder: true }];

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 md:py-32 border-b border-ink/12"
    >
      <SectionHeader id="projects-heading" title="Projects" />
      <div className="flex flex-col gap-6">
        {cards.map((props, index) => (
          <div
            key={props.placeholder ? `placeholder-${index}` : props.title}
            className="bento-card"
            style={{ top: `${64 + index * 16}px` }}
          >
            <ProjectCard {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
