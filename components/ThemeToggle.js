"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function onToggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      className="rounded-sm bg-[#264653] px-4 py-2 text-white dark:bg-[#F3D6DC] dark:text-[#264653]"
    >
      {isDark ? "Light version" : "Dark version"}
    </button>
  );
}
