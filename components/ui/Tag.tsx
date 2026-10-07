import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[8px] border border-ink/12 px-3 py-1 text-[14px] text-ink">
      {children}
    </span>
  );
}
