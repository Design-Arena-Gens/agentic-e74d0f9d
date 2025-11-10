import type { ReactNode } from "react";
import clsx from "clsx";

type Kpi = {
  id: string;
  label: string;
  value: string;
  delta: string;
  sentiment: "good" | "great" | "warn";
  narrative: string;
};

const sentimentConfig: Record<Kpi["sentiment"], { label: string; icon: ReactNode; color: string }> = {
  good: {
    label: "Improving",
    icon: "↗︎",
    color: "text-emerald-600"
  },
  great: {
    label: "Accelerated",
    icon: "⚡",
    color: "text-brand-600"
  },
  warn: {
    label: "Watchlist",
    icon: "⏳",
    color: "text-amber-600"
  }
};

export function KpiGrid({ kpis }: { kpis: Kpi[] }) {
  return (
    <section className="grid gap-4 lg:grid-cols-4">
      {kpis.map((kpi) => {
        const config = sentimentConfig[kpi.sentiment];
        return (
          <article
            key={kpi.id}
            className="group rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
              <span>{kpi.label}</span>
              <span className={clsx("flex items-center gap-1 font-medium", config.color)}>
                <span className="text-base">{config.icon}</span>
                {config.label}
              </span>
            </div>
            <p className="mt-6 text-3xl font-semibold text-slate-900">{kpi.value}</p>
            <p className="mt-1 text-xs font-medium text-emerald-600">{kpi.delta} vs last week</p>
            <p className="mt-4 text-sm text-slate-600">{kpi.narrative}</p>
          </article>
        );
      })}
    </section>
  );
}
