import ScrollFade from "./ScrollFade";

const categories = [
  {
    label: "Frontend",
    accent: "violet",
    skills: ["Angular", "React", "Next.js", "TypeScript", "Tailwind CSS", "HTML / CSS", "JavaScript"],
  },
  {
    label: "Backend",
    accent: "cyan",
    skills: ["Node.js", "SQL", "Python ", "REST APIs", "GraphQL"],
  },
  {
    label: "Tools",
    accent: "slate",
    skills: ["Git", "Docker", "Azure", "Jira", "Figma", "Agile"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="font-heading text-4xl font-bold mb-3">
            Tech{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 mb-14" />
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <ScrollFade key={cat.label} delay={i * 100}>
              <div className="bg-[#11111A] border border-white/5 rounded-2xl p-7 h-full">
                <h3
                  className={`font-mono text-xs uppercase tracking-widest mb-5 ${
                    cat.accent === "violet"
                      ? "text-violet-400"
                      : cat.accent === "cyan"
                      ? "text-cyan-400"
                      : "text-slate-400"
                  }`}
                >
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-colors duration-200 ${
                        cat.accent === "violet"
                          ? "bg-violet-500/10 border-violet-500/20 text-violet-300 hover:border-violet-400/40"
                          : cat.accent === "cyan"
                          ? "bg-cyan-400/10 border-cyan-400/20 text-cyan-300 hover:border-cyan-400/40"
                          : "bg-white/5 border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  );
}
