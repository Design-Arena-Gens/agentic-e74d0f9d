import { brandVoice } from "@/lib/data";

export function BrandVoicePanel() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Brand Voice Alignment</h2>
          <p className="text-sm text-slate-500">Guardrails to ensure every asset reflects Bharat Life Care DNA.</p>
        </div>
        <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Updated daily</span>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {brandVoice.pillars.map((pillar) => (
          <article key={pillar.title} className="rounded-2xl bg-slate-50 p-4 shadow-sm">
            <h3 className="text-base font-semibold text-slate-800">{pillar.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{pillar.tone}</p>
            <h4 className="mt-4 text-xs uppercase tracking-wide text-slate-500">Formats</h4>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              {pillar.formats.map((format) => (
                <li key={format} className="rounded-xl bg-white px-3 py-1 shadow-sm">
                  {format}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-5 rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-4 text-sm text-brand-700">
        <p className="font-semibold uppercase tracking-wide">Consistency Protocol</p>
        <ul className="mt-2 space-y-1">
          {brandVoice.messagingPrinciples.map((principle) => (
            <li key={principle} className="rounded-xl bg-white/80 px-3 py-2 text-brand-800 shadow-sm">
              {principle}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
