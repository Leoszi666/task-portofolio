import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 md:py-32 border-b border-ink/12"
    >
      <SectionHeader id="skills-heading" title="Skills" />
      <div className="flex flex-col gap-8">
        {site.skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="text-xs font-semibold tracking-[0.08em] uppercase text-ink/60 mb-3">
              {group.name}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <li key={tag}>
                  <Tag>{tag}</Tag>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
