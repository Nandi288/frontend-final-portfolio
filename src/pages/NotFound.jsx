import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-20 text-center space-y-3">
      <h1 className="text-4xl font-extrabold text-zinc-900">404 - Page Not Found</h1>
      <p className="text-sm text-zinc-500">The requested page does not exist.</p>
      <Link to="/" className="inline-block px-4 py-2 bg-brand-600 text-white text-xs font-semibold rounded-lg mt-2">
        Return Home
      </Link>
    </div>
  );
}
