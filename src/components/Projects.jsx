import { useMemo, useState } from "react";
import { projects, categories } from "../data.js";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => (active === "All" ? projects : projects.filter((p) => p.category === active)), [active]);

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
          <div className="tabs">
            {["All", ...categories].map((c) => (
              <button key={c} className={`tab ${c === active ? "active" : ""}`} onClick={() => setActive(c)}>{c}</button>
            ))}
          </div>
        </div>
        <div className="grid">
          {filtered.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>
      </div>
    </section>
  );
}