import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); 
  const emailAddress = "nandishandu51@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-8 space-y-12 max-w-5xl mx-auto">
      <div>
        <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
          GET IN TOUCH
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mt-1">
          Let’s Build Something <span className="text-emerald-600 dark:text-emerald-400">Exceptional.</span>
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 mt-2">
          Available for software engineering roles, hackathon teams, and technical collaborations.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info & Quick Copy */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-3xl border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
              Direct Contact
            </span>
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white">Email Address</h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-mono break-all">
              {emailAddress}
            </p>

            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex-1 py-2.5 px-4 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-emerald-500 text-zinc-800 dark:text-zinc-200 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-sm active:scale-95"
              >
                {copied ? (
                  <>
                    <svg className="w-4 h-4 text-emerald-500 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                    </svg>
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition flex items-center justify-center shadow-md shadow-emerald-600/20 active:scale-95"
              >
                Send Mail
              </a>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-4">
            <h2 className="text-sm font-bold text-zinc-900 dark:text-white uppercase tracking-wider">
              Connect Online
            </h2>

            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/nandi-gabriella-shandu-079231384"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/70 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-emerald-500 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.54a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">LinkedIn</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">Professional Profile</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-emerald-500 transition">&rarr;</span>
              </a>

              <a
                href="https://github.com/Nandi288"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-zinc-800/70 border border-zinc-200/70 dark:border-zinc-700/60 hover:border-emerald-500 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-900 dark:text-white">GitHub</p>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400">@Nandi288</p>
                  </div>
                </div>
                <span className="text-xs text-zinc-400 group-hover:text-emerald-500 transition">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/40 text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Based in Durban, KwaZulu-Natal, South Africa
          </div>
        </div>

      
        <div className="lg:col-span-7 p-8 sm:p-10 rounded-[32px] border border-white/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl shadow-xl shadow-zinc-200/50 dark:shadow-none">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-widest uppercase">
            Send a Message
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-1">
            Let's start a conversation
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Fill in the details below to send a message directly to my inbox.
          </p>

          {status === "success" ? (
            <div className="mt-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Message Received!</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 max-w-sm mx-auto">
                Thank you for reaching out. Your message has been sent, and I will get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-3 text-xs font-bold text-emerald-600 dark:text-emerald-400 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don’t fill this out if you're human: <input name="bot-field" />
                </label>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Software Developer Opportunity / Collaboration"
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Hi Nandi, I came across your portfolio..."
                  className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800/80 text-zinc-900 dark:text-white text-xs placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition resize-none"
                ></textarea>
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500 font-semibold">
                  Something went wrong delivering your message. Please email me directly at {emailAddress}.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold text-xs tracking-wide transition shadow-lg shadow-emerald-600/25 active:scale-98"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}