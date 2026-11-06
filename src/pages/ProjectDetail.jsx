import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">Project Not Found</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">The project you are looking for does not exist or has been moved.</p>
        <Link
          to="/projects"
          className="inline-block px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition"
        >
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-8 space-y-12 max-w-4xl mx-auto">
      
      {/* Top Breadcrumb & Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
        >
          <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to all projects
        </Link>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
          {project.tagline}
        </span>
      </div>

      {/* Main Hero Card */}
      <div className="p-8 sm:p-12 rounded-[32px] border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl shadow-zinc-200/50 dark:shadow-none space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Case Study &amp; Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide transition shadow-lg shadow-emerald-600/25 active:scale-95"
            >
              <span>Launch Live Deployment</span>
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-xs hover:border-emerald-500 transition shadow-sm active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Repository Source</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-2xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 text-xs font-medium">
              🔒 Private Enterprise Repo
            </span>
          )}
        </div>
      </div>

      {/* Media Screenshot / Placeholder Frame */}
      <div className="rounded-[32px] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-xl shadow-zinc-200/30 dark:shadow-none">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[500px] object-cover object-top"
          />
        ) : (
          <div className="py-24 px-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-xl shadow-emerald-500/10">
              <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24">
                <path d="M17 6H7c-3.87 0-7 3.13-7 7 0 3.23 2.19 5.95 5.16 6.78.6.17 1.23-.2 1.34-.82.04-.22 0-.44-.11-.63l-1.07-2.14C5.1 15.75 5 15.39 5 15c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2 0 .39-.1.75-.32 1.19l-1.07 2.14c-.11.19-.15.41-.11.63.11.62.74.99 1.34.82 2.97-.83 5.16-3.55 5.16-6.78 0-3.87-3.13-7-7-7zm-9 6H6v-2h2v2zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Mobile System Architecture</h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 max-w-sm">
                Native Java and XML client codebase running with an embedded SQLite persistence layer.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Detailed Technical Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Full Narrative */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
            System Overview &amp; Execution
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.fullDescription || project.description}
          </p>
        </div>

        {/* Tech Stack Sidebar */}
        <div className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md space-y-4 h-fit">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
            Technologies Used
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}