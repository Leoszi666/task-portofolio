export type ProjectCardProps =
  | { placeholder: true }
  | {
      placeholder?: false;
      media: { src: string; alt: string } | null;
      category: string;
      title: string;
      description: string;
      stack: string[];
      repoUrl: string;
      demoUrl?: string;
    };

/**
 * Add your projects here — the grid and sticky-deck effect update automatically.
 * Mix real cards and "coming soon" cards in any order. Leave the array empty
 * to show two coming-soon cards.
 *
 * Copy this template for each real project:
 *
 * {
 *   media: { src: "/projects/my-screenshot.png", alt: "Screenshot of my project" },
 *   category: "Web App",
 *   title: "My Project",
 *   description: "The problem it solves, then how it solves it. Max 3 lines.",
 *   stack: ["Next.js", "PostgreSQL"],
 *   repoUrl: "https://github.com/username/my-project",
 *   demoUrl: "https://my-project.example.com", // optional — link hidden if omitted
 * }
 *
 * A "coming soon" card is just: { placeholder: true },
 */
export const projects: ProjectCardProps[] = [];
