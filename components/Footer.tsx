import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="w-full border-t border-ink/12 py-8">
      <div className="max-w-[1080px] mx-auto px-6 md:px-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px]">
        <p className="text-ink/65">{site.copyright}</p>
        <a
          href={site.backToTop.href}
          className="font-medium text-ink hover:text-ink/65 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {site.backToTop.label}
        </a>
      </div>
    </footer>
  );
}
