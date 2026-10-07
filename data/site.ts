export type NavLink = { label: string; href: string };

export type TimelineEntry = {
  type: string;
  title: string;
  date?: string;
  descriptor?: string;
};

export type SkillGroup = { name: string; tags: string[] };

export type HeroWord = { text: string; href: string };

export type ContactLink = {
  label: string;
  text: string;
  href: string;
  external?: boolean;
};

export const site = {
  name: "Teguh Ilham Saputra",
  nameLines: ["Teguh Ilham", "Saputra"],
  heroWords: [
    { text: "Computer Science", href: "#about" },
    { text: "Cloud", href: "#skills" },
    { text: "Network Operations", href: "#skills" },
  ] satisfies HeroWord[],
  bio: "I am a Computer Science student at BINUS University, eager to grow in cloud and network operations, with ongoing self-directed projects deploying workloads on Proxmox VE, AWS, and Google Cloud Platform and building hybrid cloud architectures.",
  timeline: [
    {
      type: "Education",
      title: "BINUS University",
      date: "Sept 2024 to Present",
      descriptor: "Computer Science, GPA 3.45",
    },
    {
      type: "Experience",
      title: "AWS re/START Program",
      descriptor: "AWS Cloud Services, Network, and Operations",
    },
    {
      type: "Certification",
      title: "Google Cloud Computing Foundations",
    },
  ] satisfies TimelineEntry[],
  skillGroups: [
    { name: "Cloud & Virtualization", tags: ["AWS", "GCP", "Proxmox VE"] },
    { name: "Networking", tags: ["VPC Management", "Cloud Routing"] },
    { name: "Programming", tags: ["C++", "Java", "PHP", "Kotlin"] },
    {
      name: "Web / Database",
      tags: ["Next.js", "Laravel", "MySQL", "PostgreSQL"],
    },
  ] satisfies SkillGroup[],
  contactLine: "Open to internship opportunities and project collaboration.",
  contactLinks: [
    {
      label: "Email",
      text: "teguh4930@gmail.com",
      href: "mailto:teguh4930@gmail.com",
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/teguhilhamsaputra",
      href: "https://linkedin.com/in/teguhilhamsaputra",
      external: true,
    },
    {
      label: "GitHub",
      text: "github.com/Leoszi666",
      href: "https://github.com/Leoszi666",
      external: true,
    },
  ] satisfies ContactLink[],
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavLink[],
  cvPath: "/cv/Teguh-Ilham-Saputra-CV.pdf",
  copyright: "© 2026 Teguh Ilham Saputra",
  backToTop: { label: "Back to top", href: "#home" },
};
