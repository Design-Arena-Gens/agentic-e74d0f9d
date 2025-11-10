import { spotlightCampaigns } from "@/lib/data";
import clsx from "clsx";

const statusColors: Record<string, string> = {
  "On Track": "bg-emerald-500/10 text-emerald-700",
  "Needs Attention": "bg-amber-500/10 text-amber-700",
  default: "bg-slate-500/10 text-slate-700"
};

export function CampaignSpotlight() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Campaign Spotlight</h2>
          <p className="text-sm text-slate-500">
            Agent optimizes objectives, channel mix, and next actions for every live initiative.
          </p>
        </div>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600">
          Updated 15 mins ago
        </span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {spotlightCampaigns.map((campaign) => (
          <article key={campaign.id} className="rounded-2xl border border-slate-200 bg-slate-50/90 p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">{campaign.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{campaign.objective}</p>
              </div>
              <span
                className={clsx(
                  "rounded-full px-3 py-1 text-xs font-medium",
                  statusColors[campaign.status] ?? statusColors.default
                )}
              >
                {campaign.status}
              </span>
            </div>
            <div className="mt-3 text-xs text-slate-500">
              <p className="font-medium uppercase tracking-wide">Platforms</p>
              <p className="mt-1 text-sm text-slate-700">{campaign.platforms.join(" • ")}</p>
            </div>
            <div className="mt-3 rounded-2xl bg-white p-3 text-sm text-slate-700 shadow-sm">
              <p className="font-semibold text-slate-800">Next Action</p>
              <p>{campaign.nextAction}</p>
            </div>
            <dl className="mt-3 grid grid-cols-3 gap-2 text-xs text-slate-500">
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <dt className="font-semibold uppercase tracking-wide text-slate-400">Reach</dt>
                <dd className="text-sm font-medium text-slate-800">
                  {campaign.performance.reach.toLocaleString("en-IN")}
                </dd>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <dt className="font-semibold uppercase tracking-wide text-slate-400">Engagement</dt>
                <dd className="text-sm font-medium text-slate-800">
                  {(campaign.performance.engagement * 100).toFixed(1)}%
                </dd>
              </div>
              <div className="rounded-xl bg-white p-3 shadow-sm">
                <dt className="font-semibold uppercase tracking-wide text-slate-400">Leads</dt>
                <dd className="text-sm font-medium text-slate-800">{campaign.performance.leads}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
