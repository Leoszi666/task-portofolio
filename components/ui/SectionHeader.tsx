type SectionHeaderProps = {
  /** id for the <h2>, referenced by the section's aria-labelledby */
  id: string;
  title: string;
  /** Section labels like "01 / HOME" are intentionally not used */
  label?: string;
};

export default function SectionHeader({ id, title, label }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {label && (
        <span className="block text-xs font-semibold tracking-[0.08em] uppercase text-ink/60 mb-3">
          {label}
        </span>
      )}
      <h2
        id={id}
        className="text-[26px] md:text-[32px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink"
      >
        {title}
      </h2>
    </div>
  );
}
