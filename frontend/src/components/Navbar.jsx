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
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide text-indigo-600 dark:text-indigo-400 cursor-pointer select-none">
          Deepfake Detector
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10 font-medium text-gray-700 dark:text-gray-300">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                : "hover:text-indigo-500 dark:hover:text-indigo-300 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/detector"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                : "hover:text-indigo-500 dark:hover:text-indigo-300 transition"
            }
          >
            Detector
          </NavLink>
          <NavLink
            to="/samples"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                : "hover:text-indigo-500 dark:hover:text-indigo-300 transition"
            }
          >
            Samples
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600 dark:border-indigo-400 pb-1"
                : "hover:text-indigo-500 dark:hover:text-indigo-300 transition"
            }
          >
            About Me
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4 font-medium">
          <button className="px-5 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Login
          </button>
          <button className="px-5 py-2 rounded-md border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-shadow shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400">
            Register
          </button>
        </div>

        {/* Dark Mode Toggle - Absolute top right */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle Dark Mode"
          className="absolute right-6 top-4 p-2 rounded-md bg-gray-200 dark:bg-gray-700 text-xl hover:bg-gray-300 dark:hover:bg-gray-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
