export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Bisanda Jayathilaka</p>
        <ul className="social">
          <li><a href="https://github.com/" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/" target="_blank">LinkedIn</a></li>
          <li><a href="https://www.instagram.com/" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}