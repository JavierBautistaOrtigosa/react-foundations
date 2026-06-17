// src/App.jsx
import { useState } from "react";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen bg-gray-900 text-white transition-colors"
          : "min-h-screen bg-gray-50 text-gray-900 transition-colors"
      }
    >
      {/* Toggle */}
      <div className="p-6 flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 
                     bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 
                     hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero */}
      <section className="max-w-3xl mx-auto text-center px-6 mt-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Build Modern Interfaces with{" "}
          <span className="text-blue-600 dark:text-blue-400">React</span> &{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Tailwind CSS
          </span>
        </h1>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          A clean hero section with a dark/light toggle to verify your Tailwind
          v4 setup. Style it, break it, rebuild it — this is your playground.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Get Started
          </button>

          <button
            className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 
                             text-gray-800 dark:text-gray-200 rounded-lg font-medium 
                             hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
