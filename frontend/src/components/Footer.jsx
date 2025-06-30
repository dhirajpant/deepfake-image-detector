import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();

  // Agar about#contact pe aaye toh scroll kar de contact section pe
  useEffect(() => {
    if (location.pathname === "/about" && location.hash === "#contact") {
      const el = document.getElementById("contact");
      if (el) {
        // thoda delay de smooth scrolling ke liye
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
        <div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            © {new Date().getFullYear()} <span className="font-semibold">Deepfake Detector</span>. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Built with ❤️ by <span className="font-medium">Dhiraj</span>.
          </p>
        </div>

        <div className="flex gap-4 text-slate-600 dark:text-slate-400 text-sm">
          <Link
            to="/about"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            About
          </Link>
          <Link
            to="/#faqs"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            FAQs
          </Link>
          <Link
            to="/about#contact"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
