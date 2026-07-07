"use client";

/**
 * Flips :root[data-theme] between light/dark, overriding the OS preference.
 * No SSR state (avoids hydration mismatch) — reads the effective theme on click.
 */
export default function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    let cur = root.getAttribute("data-theme");
    if (!cur) {
      cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    root.setAttribute("data-theme", cur === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggle}
      title="Toggle light / dark"
      aria-label="Toggle theme"
    >
      ◐
    </button>
  );
}
