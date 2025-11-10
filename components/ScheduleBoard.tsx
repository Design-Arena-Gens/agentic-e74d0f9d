import clsx from "clsx";

type ScheduleItem = {
  time: string;
  title: string;
  owner: string;
  status: "Published" | "Queued" | "Monitoring" | "Scheduled";
};

const statusStyles: Record<ScheduleItem["status"], string> = {
  Published: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Queued: "bg-sky-50 text-sky-700 border-sky-100",
  Monitoring: "bg-amber-50 text-amber-700 border-amber-100",
  Scheduled: "bg-indigo-50 text-indigo-700 border-indigo-100"
};

export function ScheduleBoard({ schedule }: { schedule: ScheduleItem[] }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/95 p-6 shadow-sm">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Today&apos;s Deployment</h2>
          <p className="text-sm text-slate-500">Agent automates orchestration and monitors live interactions.</p>
        </div>
        <span className="rounded-full bg-brand-500/10 px-3 py-1 text-xs font-medium text-brand-600">
          IST synced
        </span>
      </div>
      <ul className="mt-6 space-y-3">
        {schedule.map((item) => (
          <li
            key={item.time}
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-slate-50/80 px-4 py-3"
          >
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-slate-700">{item.time}</span>
              <div>
                <p className="text-sm font-medium text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">Owner: {item.owner}</p>
              </div>
            </div>
            <span className={clsx("rounded-full border px-3 py-1 text-xs font-medium", statusStyles[item.status])}>
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
