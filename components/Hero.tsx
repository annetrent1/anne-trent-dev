import ScrollFade from "./ScrollFade";

function CodeCard() {
  return (
    <div className="relative z-10 bg-[#11111A] border border-violet-500/20 rounded-2xl 
      p-4 w-full max-w-sm shadow-[0_0_60px_rgba(139,92,246,0.12)]">
      <div className="flex gap-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
      </div>
      <pre className="font-mono text-[13px] leading-7 overflow-x-auto">
        <span className="text-slate-500">{"// about me\n"}</span>
        <span className="text-violet-400">{"const "}</span>
        <span className="text-slate-200">{"anne "}</span>
        <span className="text-slate-400">{"= {\n"}</span>
        {"  "}
        <span className="text-cyan-300">{"roles"}</span>
        <span className="text-slate-400">{": ["}</span>
        <span className="text-green-400">{"\"Frontend Dev\""}</span>
        <span className="text-slate-400">{", "}</span>
        <span className="text-green-400">{"\"Full-Stack Dev\""}</span>
        <span className="text-slate-400">{"],\n"}</span>
        {"  "}
        <span className="text-cyan-300">{"stack"}</span>
        <span className="text-slate-400">{": ["}</span>
        <span className="text-green-400">{"\"Angular\""}</span>
        <span className="text-slate-400">{", "}</span>
        <span className="text-green-400">{"\"React\""}</span>
        <span className="text-slate-400">{", "}</span>
        <span className="text-green-400">{"\"Node\""}</span>
        <span className="text-slate-400">{"]\n"}</span>
        {"  "}
        <span className="text-cyan-300">{"status"}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-amber-300">{"\"open to work ✦\""}</span>
        <span className="text-slate-400">{",\n"}</span>
        {"  "}
        {/* <span className="text-cyan-300">{"coffee"}</span>
        <span className="text-slate-400">{": "}</span>
        <span className="text-orange-400">{"true"}</span>
        <span className="text-slate-400">{",\n"}</span> */}
        <span className="text-slate-400">{"}"}</span>
      </pre>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Faint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Text */}
        <div>
          <ScrollFade delay={0}>
            <p className="font-mono text-sm text-violet-400 mb-4 tracking-widest uppercase">
              Hello there — I'm
            </p>
          </ScrollFade>
          <ScrollFade delay={100}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight mb-6">
              Anne{" "}
              <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                Trent
              </span>
              .
            </h1>
          </ScrollFade>
          <ScrollFade delay={200}>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              Frontend developer growing into fullstack. I enjoy building clean, fast, and thoughtful web apps.
            </p>
          </ScrollFade>
          <ScrollFade delay={300}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)]"
              >
                View Personal Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-white/20 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-400 font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>
          </ScrollFade>
        </div>

        {/* Right: Blobs + Code Card */}
        <div className="relative flex items-center justify-center min-h-80 lg:justify-end">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-500/25 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/15 rounded-full blur-3xl animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/3 w-56 h-56 bg-violet-700/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
          <CodeCard />
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A0A0F]" />
    </section>
  );
}
