import { useState } from "react";

export default function Certificates() {
  const [filter, setFilter] = useState("all");

  const credentials = [
    {
      id: "cybersecurity",
      category: "security",
      provider: "Security",
      title: "Cybersecurity Certification",
      subtitle: "Foundations & Threat Defense",
      pdfUrl: "/certificates/cybersecurity-certificate.pdf",
      downloadName: "Nandi_Shandu_Cybersecurity_Certificate.pdf",
    },
    {
      id: "fnb-academy",
      category: "dev",
      provider: "FNB Academy",
      title: "FNB Academy Technical Training",
      subtitle: "Industry Preparation & App Development (FNB App of the Year Track)",
      pdfUrl: "/certificates/fnb-academy-certificate.pdf",
      downloadName: "Nandi_Shandu_FNB_Academy_Certificate.pdf",
    },
    {
      id: "linux",
      category: "dev",
      provider: "Operating Systems",
      title: "Introduction to Linux",
      subtitle: "System Administration & CLI",
      pdfUrl: "/certificates/linux-certificate.pdf",
      downloadName: "Nandi_Shandu_Linux_Certificate.pdf",
    },
    {
      id: "cisco",
      category: "security",
      provider: "Cisco / Networking",
      title: "Cisco Packet Tracer",
      subtitle: "Network Architecture & Routing",
      pdfUrl: "/certificates/packet-tracer-certificate.pdf",
      downloadName: "Nandi_Shandu_Packet_Tracer_Certificate.pdf",
    },
    {
      id: "geekedon",
      category: "awards",
      provider: "Geekulcha",
      title: "Geeked-On Incubation Program",
      subtitle: "1st Place Award · Annual Geekulcha Hackathon 2026",
      pdfUrl: "/images/geekedon-certificate.jpeg",
      downloadName: "Nandi_Shandu_GeekedOn_Certificate.jpeg",
    },
    {
      id: "techbridge",
      category: "awards",
      provider: "Tech Mentorship Program",
      title: "Front-End Track Mentorship",
      subtitle: "3-Month Intensive Front-End Development",
      inProgress: true,
    },
  ];

  const filtered =
    filter === "all"
      ? credentials
      : credentials.filter((c) => c.category === filter);

  return (
    <div className="py-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">— CREDENTIALS</p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
          Verified <span className="text-emerald-600 dark:text-emerald-400">Certificates &amp; Awards.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
          Continuous technical training, networking credentials, and hackathon honors.
        </p>
      </div>

      
      <div className="flex flex-wrap gap-2">
        {[
          { label: "All", value: "all" },
          { label: "Security & Networking", value: "security" },
          { label: "Development & Systems", value: "dev" },
          { label: "Programs & Awards", value: "awards" },
        ].map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
              filter === tab.value
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                : "bg-white/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-emerald-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md flex flex-col justify-between shadow-sm hover:border-emerald-500/50 transition"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                {item.provider}
              </span>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white leading-snug">
                {item.title}
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.subtitle}
              </p>
            </div>

            <div className="pt-4 mt-2 border-t border-zinc-100 dark:border-zinc-800/60">
              {item.inProgress ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  In Progress · Concluding Mid-Nov 2026
                </span>
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href={item.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 transition shadow-sm"
                  >
                    View
                  </a>
                  <a
                    href={item.pdfUrl}
                    download={item.downloadName}
                    className="text-xs font-semibold px-4 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 transition shadow-sm"
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}