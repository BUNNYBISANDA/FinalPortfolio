export default function Certificates() {
  const certs = [
    { title: "Microsoft Power BI Mastery (Advanced) — QBITZ", issuer: "QBITZ Sri Lanka", year: "2025", file: "/certificates/powerbi.pdf" },
  ];
  return (
    <section id="certificates" className="section">
      <div className="container">
        <h2>Certificates</h2>
        <div className="grid">
          {certs.map((c) => (
            <article key={c.title} className="card">
              <div className="card-body">
                <h3 className="card-title">{c.title}</h3>
                <p className="card-text">{c.issuer} • {c.year}</p>
                <div className="card-actions">
                  <a className="btn small" href={c.file} target="_blank">View PDF</a>
                  <a className="btn small" href={c.file} download>Download</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}