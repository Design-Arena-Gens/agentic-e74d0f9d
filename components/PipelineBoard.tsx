import clsx from "clsx";

type Stage = {
  id: string;
  title: string;
  metrics: { items: number; owners: string[]; eta: string };
  highlights: string[];
  priority: "low" | "medium" | "high";
};

const priorityStyles: Record<Stage["priority"], string> = {
  low: "bg-emerald-50 text-emerald-700 border-emerald-100",
  medium: "bg-amber-50 text-amber-700 border-amber-100",
  high: "bg-rose-50 text-rose-700 border-rose-100"
};

export function PipelineBoard({ stages }: { stages: Stage[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Workflow Pulse</h2>
          <p className="text-sm text-slate-500">Agent keeps every stage synced with compliance SLAs.</p>
        </div>
        <div className="hidden items-center gap-2 text-xs text-slate-500 md:flex">
          <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" /> Stable
          <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" /> Watch
          <span className="inline-flex h-2 w-2 rounded-full bg-rose-500" /> Action
        </div>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stages.map((stage) => (
          <article
            key={stage.id}
            className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-slate-900">{stage.title}</h3>
              <span
                className={clsx(
                  "rounded-full border px-3 py-1 text-xs font-medium",
                  priorityStyles[stage.priority]
                )}
              >
                {stage.metrics.items} items
              </span>
            </div>
            <dl className="flex flex-col gap-1 text-xs text-slate-500">
              <div className="flex justify-between">
                <dt>Owners</dt>
                <dd className="font-medium text-slate-700">{stage.metrics.owners.join(", ")}</dd>
              </div>
              <div className="flex justify-between">
                <dt>Next SLA</dt>
                <dd className="font-medium text-slate-700">{stage.metrics.eta}</dd>
              </div>
            </dl>
            <ul className="flex flex-col gap-1 text-sm text-slate-600">
              {stage.highlights.map((highlight, index) => (
                <li key={index} className="rounded-lg bg-white px-3 py-2 text-xs shadow-sm">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
