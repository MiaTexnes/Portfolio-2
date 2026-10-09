"use client";

import { useSyncExternalStore } from "react";

function subscribe(callback) {
  window.addEventListener("theme-change", callback);
  return () => window.removeEventListener("theme-change", callback);
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  function onToggle() {
    const next = !isDark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    window.dispatchEvent(new Event("theme-change"));
  }

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isDark}
      className="rounded-full border border-[#e4e4e7] bg-white px-4 py-2 text-sm text-[#1c1c1f] dark:border-white/15 dark:bg-transparent dark:text-white"
    >
      {isDark ? "Light version" : "Dark version"}
    </button>
  );
}
