import { site } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/Timeline";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 md:py-32 border-b border-ink/12"
    >
      <SectionHeader id="about-heading" title="About" />
      <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink max-w-[65ch] mb-12">
        {site.bio}
      </p>
      <Timeline entries={site.timeline} />
    </section>
  );
}
