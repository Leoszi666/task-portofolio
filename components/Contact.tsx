import { site } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/icons";

const linkClasses =
  "flex items-center justify-between gap-4 text-[16px] font-semibold text-ink hover:underline underline-offset-4 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 md:py-32"
    >
      <div className="p-8 md:p-12 border border-ink/12 rounded-[8px] bg-paper">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-7">
            <h2
              id="contact-heading"
              className="text-[26px] md:text-[32px] font-semibold tracking-[-0.02em] leading-[1.2] text-ink mb-4"
            >
              Contact
            </h2>
            <p className="text-[16px] md:text-[17px] leading-[1.6] text-ink/65 max-w-[480px]">
              {site.contactLine}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 md:border-l md:border-ink/12 md:pl-10">
            {site.contactLinks.map((link) => (
              <div key={link.label} className="flex flex-col">
                <span className="text-xs font-semibold tracking-[0.08em] uppercase text-ink/60 mb-1">
                  {link.label}
                </span>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={linkClasses}
                >
                  <span>{link.text}</span>
                  <ArrowUpRightIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
