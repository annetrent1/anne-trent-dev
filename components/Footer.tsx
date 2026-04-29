export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} Anne Trent. Built with Next.js & Tailwind.
        </p>
        <p className="font-mono text-xs text-slate-600">
          designed & coded with ♥
        </p>
      </div>
    </footer>
  );
}
