import type { TimelineEntry } from "@/data/site";

export default function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="flex flex-col gap-8">
      {entries.map((entry) => (
        <li
          key={entry.title}
          className="relative grid grid-cols-[16px_1fr] gap-4 before:absolute before:left-[3.5px] before:top-[9px] before:-bottom-8 before:w-px before:bg-ink/12 last:before:hidden"
        >
          <span
            aria-hidden="true"
            className="w-2 h-2 rounded-full bg-ink mt-1"
          />
          <div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-xs font-semibold tracking-[0.08em] uppercase text-ink/60">
                {entry.type}
              </span>
              {entry.date && (
                <span className="text-[14px] text-ink/65">{entry.date}</span>
              )}
            </div>
            <h3 className="text-[18px] md:text-[20px] font-semibold tracking-[-0.01em] leading-[1.3] text-ink mb-1">
              {entry.title}
            </h3>
            {entry.descriptor && (
              <p className="text-[14px] leading-[1.5] text-ink/65">
                {entry.descriptor}
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
