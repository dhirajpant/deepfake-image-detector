import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <nav className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold tracking-tight">
          Deepfake Detector
        </div>
        <div className="space-x-6 text-base font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/detector"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition"
            }
          >
            Detector
          </NavLink>
          <NavLink
            to="/samples"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition"
            }
          >
            Samples
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 underline underline-offset-4"
                : "hover:text-blue-500 dark:hover:text-blue-300 transition"
            }
          >
            About
          </NavLink>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="ml-4 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-xl rounded p-2 transition"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
