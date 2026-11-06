import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectThumbnail({ image, title }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
        onError={(e) => {
          e.target.style.display = "none";
          if (e.target.nextSibling) {
            e.target.nextSibling.style.display = "flex";
          }
        }}
      />
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-950/40 via-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center space-y-2 border-b border-zinc-200 dark:border-zinc-800">
      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 shadow-lg shadow-emerald-500/10">
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17 6H7c-3.87 0-7 3.13-7 7 0 3.23 2.19 5.95 5.16 6.78.6.17 1.23-.2 1.34-.82.04-.22 0-.44-.11-.63l-1.07-2.14C5.1 15.75 5 15.39 5 15c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2 0 .39-.1.75-.32 1.19l-1.07 2.14c-.11.19-.15.41-.11.63.11.62.74.99 1.34.82 2.97-.83 5.16-3.55 5.16-6.78 0-3.87-3.13-7-7-7zm-9 6H6v-2h2v2zm7-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      </div>
      <p className="text-[11px] font-bold text-emerald-500 tracking-wider uppercase">Android App</p>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="py-8 space-y-12 max-w-6xl mx-auto">
      <div>
        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">— PORTFOLIO</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
          Engineered Systems &amp; <span className="text-emerald-600 dark:text-emerald-400">Applications.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
          Enterprise .NET portals, mobile applications, and cloud-integrated systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group border border-white/80 dark:border-zinc-800/80 rounded-3xl overflow-hidden bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-emerald-500/50 transition duration-200"
          >
            <div>
              <div className="h-48 bg-zinc-100 dark:bg-zinc-800/60 border-b border-zinc-200/80 dark:border-zinc-800 relative overflow-hidden flex items-center justify-center">
                <ProjectThumbnail image={project.image} title={project.title} />
              </div>

              <div className="p-6 space-y-3">
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                  {project.tagline}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-zinc-100 dark:border-zinc-800/60 mt-4 flex items-center justify-between">
              <Link
                to={`/projects/${project.id}`}
                className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                Case Study &rarr;
              </Link>
              <div className="flex items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                )}
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-bold px-3 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-sm"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}