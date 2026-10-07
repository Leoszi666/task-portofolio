import type { ReactNode } from "react";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

type ButtonProps = {
  variant: Variant;
  size?: Size;
  /** Renders as <a href>; every current use is a navigation/download action */
  href: string;
  download?: boolean;
  external?: boolean;
  children: ReactNode;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/90",
  secondary: "border border-ink text-ink hover:bg-ink/[0.06]",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[13px]",
  sm: "h-9 px-3 text-[11px]",
};

export function Button({
  variant,
  size = "md",
  href,
  download,
  external,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]}`;
  const externalProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} download={download} className={classes} {...externalProps}>
      {children}
    </a>
  );
}
