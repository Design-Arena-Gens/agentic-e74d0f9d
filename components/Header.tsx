export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div>
        <p className="text-xs uppercase tracking-[0.35em] text-brand-500">Command Center</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-900">
          Bharat Life Care Social Media AI Agent
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-600">
          Orchestrate end-to-end content, automate workflows, and keep the medical compliance team in the loop —
          all from a single agentic hub.
        </p>
      </div>
      <div className="flex items-center gap-3 rounded-2xl bg-brand-50 px-5 py-3 text-sm text-brand-700">
        <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
        Agent status: Fully synchronized
      </div>
    </header>
  );
}
