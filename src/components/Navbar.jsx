import { NavLink } from "react-router-dom";

export default function Navbar({ theme, toggleTheme }) {
  const linkClasses = ({ isActive }) =>
    `px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${
      isActive
        ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40"
        : "text-zinc-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#0b0f17]/85 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Nandi<span className="text-emerald-500">.</span>
        </NavLink>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <NavLink to="/" className={linkClasses} end>Home</NavLink>
          <NavLink to="/about" className={linkClasses}>About</NavLink>
          <NavLink to="/experience" className={linkClasses}>Experience &amp; Hackathons</NavLink>
          <NavLink to="/projects" className={linkClasses}>Projects</NavLink>
          <NavLink to="/certificates" className={linkClasses}>Certificates</NavLink>
          <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Light and Dark Mode"
            className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 flex items-center justify-center hover:border-emerald-500 dark:hover:border-emerald-500 transition shadow-sm"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-emerald-600 fill-current" viewBox="0 0 24 24">
                <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1z" />
              </svg>
            )}
          </button>
          <NavLink
            to="/contact"
            className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs tracking-wide transition shadow-lg shadow-emerald-600/25 active:scale-95"
          >
            Get In Touch
          </NavLink>
        </div>
      </div>
    </header>
  );
}