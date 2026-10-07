import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon, DownloadIcon } from "@/components/icons";

// Build-time check: the photo zone only renders when public/me.jpg exists.
const hasPhoto = existsSync(path.join(process.cwd(), "public", "me.jpg"));

// Rotation lives on the inner link, float on the middle span, reveal on the
// outer element — three layers so the transforms never fight.
const wordLinkClasses =
  "inline-block underline-offset-4 hover:text-ink hover:underline transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="py-20 md:py-32"
    >
      {hasPhoto && (
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <p className="reveal reveal-1 relative z-0 flex justify-center text-right md:justify-end md:-mr-10 text-[24px] md:text-[28px] lg:text-[34px] font-semibold tracking-[-0.01em] leading-[1.15] text-ink/65">
            <span
              className="drift"
              style={{ animationDuration: "6s", animationDelay: "-2s" }}
            >
              <a href="#about" className={`${wordLinkClasses} md:-rotate-6`}>
                {site.heroWords[0].text}
              </a>
            </span>
          </p>

          <div className="reveal reveal-2 relative z-10 mx-auto w-[280px] h-[380px] md:w-[320px] md:h-[450px] rounded-full overflow-hidden border border-ink/12">
            <Image
              src="/me.jpg"
              alt={site.name}
              fill
              priority
              draggable={false}
              sizes="(min-width: 768px) 320px, 280px"
              className="object-cover object-top grayscale select-none"
            />
          </div>

          <div className="flex flex-col gap-8 md:gap-12 md:-ml-8 relative z-0 my-1 md:my-0">
            <p className="reveal reveal-3 flex justify-center md:justify-start text-[24px] md:text-[28px] lg:text-[34px] font-semibold tracking-[-0.01em] leading-[1.15] text-ink/65">
              <span
                className="drift"
                style={{ animationDuration: "7s", animationDelay: "-3.5s" }}
              >
                <a
                  href="#skills"
                  className={`${wordLinkClasses} md:rotate-3`}
                >
                  {site.heroWords[1].text}
                </a>
              </span>
            </p>
            <p className="reveal reveal-4 flex justify-center md:justify-start text-[24px] md:text-[28px] lg:text-[34px] font-semibold tracking-[-0.01em] leading-[1.15] text-ink/65">
              <span
                className="drift"
                style={{ animationDuration: "5.5s", animationDelay: "-1.2s" }}
              >
                <a
                  href="#skills"
                  className={`${wordLinkClasses} md:-rotate-2`}
                >
                  {site.heroWords[2].text}
                </a>
              </span>
            </p>
          </div>
        </div>
      )}

      <div className={`${hasPhoto ? "mt-12" : ""} max-w-[780px]`}>
        <h1
          id="hero-heading"
          className={`${hasPhoto ? "reveal reveal-5" : "reveal reveal-1"} uppercase text-[44px] md:text-[88px] font-bold tracking-[-0.02em] leading-[1.02] text-ink mb-6`}
        >
          {site.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <div
          className={`${hasPhoto ? "reveal reveal-6" : "reveal reveal-5"} flex flex-wrap items-center gap-3`}
        >
          <Button variant="primary" href="#projects">
            View Projects
            <ArrowDownIcon />
          </Button>
          <Button variant="secondary" href={site.cvPath} download>
            Download CV
            <DownloadIcon />
          </Button>
        </div>
      </div>
    </section>
  );
}
