import { automationPlaybooks } from "@/lib/data";

export function AutomationPlaybooks() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Automation Playbooks</h2>
          <p className="text-sm text-slate-500">
            Agent keeps these workflows on autopilot; tweak cadence or impact as needed.
          </p>
        </div>
        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600">
          Running
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {automationPlaybooks.map((playbook) => (
          <article key={playbook.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-slate-800">{playbook.title}</h3>
              <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600">
                {playbook.cadence}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{playbook.description}</p>
            <p className="mt-3 text-xs font-medium uppercase tracking-wide text-emerald-600">
              Impact: {playbook.impact}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
