import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-20 py-6">
      <section className="relative rounded-[32px] border border-white/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-8 sm:p-14 shadow-xl shadow-zinc-200/50 dark:shadow-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/10 dark:bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for tech-related opportunities
            </div>

            <div className="space-y-1">
              <p className="text-zinc-500 dark:text-zinc-400 font-medium text-base sm:text-lg">
                Hi I am
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
                Nandi-Gabriella Shandu
              </h1>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-emerald-600 dark:text-emerald-400 tracking-tight leading-tight pt-1">
                Full-Stack &amp; .NET Developer
              </p>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              Final-year ICT Application Development student at Durban University of Technology specializing in C#, ASP.NET Core MVC, Entity Framework Core, SQL Server, and Microsoft Azure cloud solutions.
            </p>

         
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="px-7 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition shadow-lg shadow-emerald-600/25 active:scale-95"
              >
                Hire Me
              </Link>
              <a
                href="/Nandi_Gabriella_Shandu_Resume.pdf"
                download
                className="px-7 py-3 rounded-2xl border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 hover:border-emerald-500 text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition shadow-sm active:scale-95"
              >
                Download CV
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border border-white/80 dark:border-zinc-700/60 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">4+</p>
                <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Hackathons</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border border-white/80 dark:border-zinc-700/60 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white">5+</p>
                <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Systems Built</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-800/50 border border-white/80 dark:border-zinc-700/60 shadow-sm text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">1st</p>
                <p className="text-[11px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Place Award</p>
              </div>
            </div>
          </div>

        
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-emerald-500/40 via-white/50 dark:via-zinc-800 to-teal-400/40 shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Nandi-Gabriella Shandu"
                className="w-full h-full object-cover object-top rounded-full shadow-inner"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Hackathons Section */}
      <section className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
          <div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">TRACK RECORD</p>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
              Experience &amp; Hackathons
            </h2>
          </div>
          <Link to="/experience" className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            View Detailed Timeline &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className={`p-6 rounded-3xl border transition duration-200 flex flex-col justify-between ${
                exp.isOngoing
                  ? "bg-emerald-500/[0.04] dark:bg-emerald-500/[0.03] border-emerald-500/40 shadow-md shadow-emerald-500/5"
                  : "bg-white/70 dark:bg-zinc-900/50 border-white/80 dark:border-zinc-800/80 hover:border-emerald-500/50 shadow-sm"
              } backdrop-blur-md`}
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                      {exp.organization}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                      {exp.role}
                    </h3>
                    <p className="text-xs text-zinc-400 dark:text-zinc-500">{exp.period}</p>
                  </div>
                  <span
                    className={`shrink-0 px-3 py-1 rounded-full text-[11px] font-bold border ${
                      exp.isOngoing
                        ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800"
                        : "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/40"
                    }`}
                  >
                    {exp.badge}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Milestone & Event Deliverable Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/60">
                {exp.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="text-[11px] px-2.5 py-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-medium"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-zinc-200/80 dark:border-zinc-800 pb-4">
          <div>
            <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">PORTFOLIO</p>
            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
              Featured Systems
            </h2>
          </div>
          <Link to="/projects" className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline">
            View All Projects &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group border border-white/80 dark:border-zinc-800/80 rounded-3xl overflow-hidden bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md flex flex-col justify-between shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition duration-200"
            >
              <div>
                <div className="h-44 bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200/80 dark:border-zinc-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-5 space-y-2">
                  <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    {project.tagline}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0">
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  Case Study &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}