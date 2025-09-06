export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">Hello, I’m</p>
          <h1 className="title">Bisanda Jayathilaka</h1>
          <p className="subtitle">
            IT student • Assistant Badminton Coach • Builder of useful apps.
            I love turning ideas into clean, working products.
          </p>
          <div className="cta">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href="/cv.pdf" download>Download CV</a>
          </div>
        </div>
        <div className="hero-card avatar-wrap">
          <img className="avatar" src="/images/me.jpg" alt="Bisanda Jayathilaka" width="320" height="320" loading="eager" />
          <ul className="stats">
            <li><strong>10+</strong><span>Projects</span></li>
            <li><strong>4</strong><span>Tech stacks</span></li>
            <li><strong>2</strong><span>Years coaching</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}