import ScrollFade from "./ScrollFade";

const stack = ["Angular", "React", "Next.js", "TypeScript", "Node.js", "SQL"];
const interests = ["AI", "Open Source", "UI/UX Design", "Developer Tools", "Learning"];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="font-heading text-4xl font-bold mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-400 mb-14" />
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <ScrollFade delay={100}>
            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              I'm a developer who loves the technical creativity of software—turning ideas into something interactive, 
              usable, and thoughtfully designed. I enjoy working at the intersection of design and engineering, 
              where clean code, fast interfaces, and real product thinking all come together to create things that
               actually feel good to use.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              Outside of work, I'm currently exploring the full stack through side projects and continuous learning. When I'm not coding, I
               like to step away and read, explore different creative mediums, and just reset.
            </p>
          </ScrollFade>

          <ScrollFade delay={200}>
            <div className="bg-[#11111A] border border-white/5 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="font-mono text-xs text-violet-400 uppercase tracking-widest mb-4">
                  Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-3 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-mono text-xs text-cyan-400 uppercase tracking-widest mb-4">
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-xs px-3 py-1.5 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}
