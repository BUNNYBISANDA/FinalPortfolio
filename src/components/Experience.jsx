import { experience } from "../data.js";

function byStartDesc(a, b) {
  const da = a.start ? new Date(a.start) : new Date(0);
  const db = b.start ? new Date(b.start) : new Date(0);
  return db - da;
}

export default function Experience() {
  const it = [...experience].filter(e => e.type === "IT").sort(byStartDesc);
  const coaching = [...experience].filter(e => e.type === "Coaching").sort(byStartDesc);

  const Timeline = ({ items }) => (
    <ol className="timeline">
      {items.map((e) => (
        <li key={`${e.title}-${e.org}-${e.period}`} className="timeline-item">
          <div className="time">{e.period}</div>
          <div className="content">
            <h3>{e.title}</h3>
            <p className="muted">{e.org}</p>
            <ul className="bullet">
              {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="exp-split">
          <div className="exp-col">
            <h3>IT</h3>
            <Timeline items={it} />
          </div>
          <div className="exp-col">
            <h3>Badminton Coaching</h3>
            <Timeline items={coaching} />
          </div>
        </div>
      </div>
    </section>
  );
}