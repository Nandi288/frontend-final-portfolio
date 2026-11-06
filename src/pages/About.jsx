import { Link } from "react-router-dom";

export default function About() {
  const skillCategories = [
    {
      title: "Backend & Architecture",
      skills: ["C#", "ASP.NET Core MVC", "ASP.NET MVC", ".NET 8", "Entity Framework Core", "REST APIs", "MVC Architecture"],
    },
    {
      title: "Frontend Engineering",
      skills: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Bootstrap 5", "HTML5", "CSS3"],
    },
    {
      title: "Cloud & Databases",
      skills: ["SQL Server", "Microsoft Azure", "Azure Cosmos DB", "Azure Blob Storage", "Azure Cognitive Services"],
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git & GitHub", "Agile / Scrum Sprints", "SOLID Principles", "AI Prompt Engineering", "Netlify Deployment"],
    },
  ];

  const educationHistory = [
    {
      institution: "Durban University of Technology",
      qualification: "Diploma in ICT: Application Development",
      period: "2024 – 2026",
      status: "Final Year Student",
      details:
        "Comprehensive focus on full-stack application development, software architecture patterns, relational database modeling, cloud services, and object-oriented programming with C# and .NET.",
    },
    {
      institution: "J.G. Zuma High School",
      qualification: "National Senior Certificate (Matric)",
      period: "2017 – 2021",
      status: "Completed",
      details:
        "Secondary education foundation completed in Durban, KwaZulu-Natal, leading to formal studies in Information and Communication Technology.",
    },
  ];

  return (
    <div className="py-8 space-y-16 max-w-5xl mx-auto">
      
  
      <section className="relative rounded-[32px] border border-white/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl p-8 sm:p-12 shadow-xl shadow-zinc-200/50 dark:shadow-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
         
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 rounded-3xl p-2 bg-gradient-to-tr from-emerald-500/30 via-white/40 dark:via-zinc-800 to-teal-400/30 shadow-2xl border border-white/80 dark:border-zinc-700">
              <img
                src="/images/nandi-1.jpg"
                alt="Nandi-Gabriella Shandu"
                className="w-full h-full object-cover object-top rounded-2xl shadow-inner"
              />
              <div className="absolute -bottom-3 -right-3 px-3.5 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-[11px] shadow-lg shadow-emerald-600/30">
                DUT ICT '26
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
              ABOUT ME
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
              Building Resilient Web Systems &amp; <span className="text-emerald-600 dark:text-emerald-400">Impactful Software.</span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              I am an Information and Communication Technology undergraduate completing my diploma in <strong>Application Development</strong> at the <strong>Durban University of Technology</strong>. My primary engineering focus is designing and deploying scalable, secure full-stack software systems utilizing <strong>C#, ASP.NET Core MVC, Entity Framework Core, SQL Server</strong>, and <strong>Microsoft Azure</strong>.
            </p>
            <p className="text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed">
              I thrive in sprint teams and fast-paced hackathons. I have engineered real-world products ranging from <em>Indlela</em> (a youth learning-to-employment pathway with integrated CV generation) to <em>HerCycle</em> (a digital B2B marketplace supporting female micro-entrepreneurs).
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm font-medium">
              <strong>Professional Mission:</strong> To engineer maintainable, secure backend logic and intuitive interfaces that bridge community needs with production-ready software.
            </div>
          </div>

        </div>
      </section>

      {/* Metrics Row */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center shadow-sm">
          <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">4+</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Hackathons Competed</p>
        </div>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center shadow-sm">
          <p className="text-3xl font-extrabold text-zinc-900 dark:text-white">5+</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Full-Stack Systems</p>
        </div>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center shadow-sm">
          <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">1st</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Place Incubation Award</p>
        </div>
        <div className="p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 backdrop-blur-md text-center shadow-sm">
          <p className="text-3xl font-extrabold text-zinc-900 dark:text-white">100%</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold mt-1">Dedicated Problem Solver</p>
        </div>
      </section>

    
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
            Education
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Formal qualifications and academic milestones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationHistory.map((edu) => (
            <div
              key={edu.institution}
              className="p-6 sm:p-8 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md space-y-3 shadow-sm hover:border-emerald-500/50 transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    {edu.institution}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">
                    {edu.qualification}
                  </h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500">{edu.period}</p>
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50">
                  {edu.status}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-2">
                {edu.details}
              </p>
            </div>
          ))}
        </div>
      </section>


      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            CORE COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
            Technologies &amp; Methodologies
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-3"
            >
              <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800/90 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200/60 dark:border-zinc-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    
      <div className="flex flex-wrap items-center justify-between p-6 sm:p-8 rounded-3xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800">
        <div>
          <h3 className="font-bold text-zinc-900 dark:text-white text-base">Explore My Hackathons &amp; Industry Sprints</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Review live demos, 1st place award milestones, and sprint deliverables.</p>
        </div>
        <Link
          to="/experience"
          className="mt-3 sm:mt-0 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition shadow-md shadow-emerald-600/20"
        >
          View Experience &rarr;
        </Link>
      </div>

    </div>
  );
}