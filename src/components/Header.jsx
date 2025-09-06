import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  const NavLinks = ({ onClick }) => (
    <ul className="nav">
      <li><a href="#home" onClick={onClick}>Home</a></li>
      <li><a href="#about" onClick={onClick}>About</a></li>
      <li><a href="#projects" onClick={onClick}>Projects</a></li>
      <li><a href="#experience" onClick={onClick}>Experience</a></li>
      <li><a href="#certificates" onClick={onClick}>Certificates</a></li>
      <li><a href="#contact" onClick={onClick}>Contact</a></li>
      <li><a href="/cv.pdf" download onClick={onClick}>CV</a></li>
    </ul>
  );

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home">BNJ<span className="accent">.</span></a>
        <nav className="desktop-only"><NavLinks /></nav>
        <div className="header-actions">
          <ThemeToggle />
          <button className="hamburger mobile-only" aria-label="Menu" onClick={() => setOpen(!open)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
      {open && (
        <div className="mobile-menu">
          <NavLinks onClick={() => setOpen(false)} />
        </div>
      )}
    </header>
  );
}