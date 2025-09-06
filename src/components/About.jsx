import { skills } from "../data.js";
export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p>
          I’m an Information Technology undergraduate at Siam University and an
          assistant coach at Great Thailand Badminton Academy (GTBA). I enjoy
          building practical systems—like QR-based attendance, e-commerce, and
          admin dashboards—that make life easier for coaches, students, and staff.
        </p>
        <h3 className="mt-24">Skills</h3>
        <div className="chip-grid">
          {skills.map((s) => <span key={s} className="chip">{s}</span>)}
        </div>
      </div>
    </section>
  );
}