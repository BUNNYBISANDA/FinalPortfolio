import { useEffect, useState } from "react";
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem("theme", theme); }, [theme]);
  return <button className="btn theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} title="Toggle theme">{theme === "light" ? "🌙" : "☀️"}</button>;
}