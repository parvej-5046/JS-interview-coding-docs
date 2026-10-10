export const siteConfig = {
  name: "JS Coding Docs",
  description:
    "Personal reference of solved JavaScript and React problems, for quick lookup during job tasks.",
  navLinks: [
    {
      label: "JavaScript",
      href: "/javascript",
      description: "Core JS concepts and solved coding problems.",
    },
    {
      label: "React",
      href: "/react",
      description: "Hooks, patterns and solved React tasks.",
    },
    {
      label: "Problems",
      href: "/problems",
      description: "Every solved problem in one searchable list.",
    },
  ],
} as const;
