import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <div className="py-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">MILESTONES</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
          Experience &amp; <span className="text-emerald-600 dark:text-emerald-400">Hackathons.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
          An overview of collaborative sprint teams, hackathons, and technical development programs[cite: 6, 7].
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className={`p-6 sm:p-8 rounded-3xl border transition duration-200 ${
              exp.isOngoing
                ? "bg-emerald-500/[0.04] dark:bg-emerald-500/[0.03] border-emerald-500/40 shadow-lg shadow-emerald-500/5"
                : "bg-white/70 dark:bg-zinc-900/50 border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/50 shadow-sm"
            } backdrop-blur-md`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {exp.organization}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mt-0.5">
                  {exp.role}
                </h2>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{exp.period}</p>
              </div>
              <span
                className={`self-start px-3.5 py-1 rounded-full text-xs font-bold border ${
                  exp.isOngoing
                    ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
                    : "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40"
                }`}
              >
                {exp.badge}
              </span>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mt-4">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/60">
              {exp.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="text-xs px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}