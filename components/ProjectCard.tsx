import Image from "next/image";
import type { ProjectCardProps } from "@/data/projects";
import { Tag } from "@/components/ui/Tag";
import { ArrowUpRightIcon } from "@/components/icons";

const mediaSlotClasses =
  "w-full aspect-video rounded-[8px] overflow-hidden bg-ink/[0.04]";

export default function ProjectCard(props: ProjectCardProps) {
  if (props.placeholder === true) {
    return (
      <article className="flex flex-col p-6 md:p-8 border border-ink/12 rounded-[8px] bg-paper">
        <div className="w-full aspect-video border border-dashed border-ink/12 rounded-[8px] flex items-center justify-center bg-ink/[0.04]">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-ink/60">
            Coming soon
          </span>
        </div>
      </article>
    );
  }

  const { media, category, title, description, stack, repoUrl, demoUrl } = props;

  return (
    <article className="flex flex-col gap-4 p-6 md:p-8 border border-ink/12 rounded-[8px] bg-paper">
      <div className={`${mediaSlotClasses} relative border border-ink/12`}>
        {media && (
          <Image
            src={media.src}
            alt={media.alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <p className="text-xs font-semibold tracking-[0.08em] uppercase text-ink/60">
        {category}
      </p>
      <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.01em] leading-[1.3] text-ink">
        {title}
      </h3>
      <p className="text-[16px] leading-[1.6] text-ink/65 line-clamp-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
      <div className="flex items-center gap-6 pt-4 border-t border-ink/12 text-[14px]">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub: ${title}`}
          className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-ink/65 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          GitHub
          <ArrowUpRightIcon />
        </a>
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo: ${title}`}
            className="inline-flex items-center gap-1.5 font-semibold text-ink hover:text-ink/65 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Live Demo
            <ArrowUpRightIcon />
          </a>
        )}
      </div>
    </article>
  );
}
