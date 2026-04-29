import ScrollFade from "./ScrollFade";

const projects = [
  {
    title: "Chore Keeper",
    description:
      "A full stack web app with authentication, real-time updates, responsive design for managing household chores and tasks.",
    tags: ["React", "TypeScript", "PostgreSQL"],
    badge: "Fullstack",
    badgeColor: "cyan",
    github: "#",
    live: "#",
  },
   {
    title: "Tome",
    description:
      "A full stack web app for consumers of media to track, review, and share their favorite books, movies, and TV shows.",
    tags: ["Angular", "TypeScript", "Node.js", "MongoDB"],
    badge: "Fullstack",
    badgeColor: "violet",
    github: "#",
    live: null,
  },
  // {
  //   title: "Tome",
  //   description:
  //     "A command-line tool for automating developer workflows and scaffolding new projects with one command.",
  //   tags: ["Node.js", "TypeScript", "Commander"],
  //   badge: "Tool",
  //   badgeColor: "violet",
  //   github: "#",
  //   live: null,
  // },
  // {
  //   title: "UI Kit",
  //   description:
  //     "A responsive component library with full dark mode support, accessibility baked in, and Storybook docs.",
  //   tags: ["React", "Tailwind", "Storybook"],
  //   badge: "Frontend",
  //   badgeColor: "violet",
  //   github: "#",
  //   live: "#",
  // },
  // {
  //   title: "Auth API",
  //   description:
  //     "Secure REST API with JWT authentication, rate limiting, refresh token rotation, and comprehensive test coverage.",
  //   tags: ["Express", "PostgreSQL", "Redis", "JWT"],
  //   badge: "Backend",
  //   badgeColor: "cyan",
  //   github: "#",
  //   live: null,
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="font-heading text-4xl font-bold mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 mb-14" />
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollFade key={project.title} delay={i * 80}>
              <div className="group bg-[#11111A] border border-white/5 rounded-2xl p-7 h-full flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-500/20 hover:shadow-[0_8px_40px_rgba(139,92,246,0.12)]">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl font-semibold text-slate-100">
                    {project.title}
                  </h3>
                  <span
                    className={`font-mono text-xs px-2.5 py-1 rounded-full border shrink-0 ml-3 ${
                      project.badgeColor === "cyan"
                        ? "border-cyan-400/50 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                        : "border-violet-500/50 text-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.2)]"
                    }`}
                  >
                    {project.badge}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2.5 py-1 bg-white/5 rounded text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="font-mono text-xs text-slate-400 hover:text-violet-400 transition-colors duration-200"
                  >
                    GitHub →
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      className="font-mono text-xs text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
