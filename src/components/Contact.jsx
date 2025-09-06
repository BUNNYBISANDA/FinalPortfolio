import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  function submit(e) {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Inquiry");
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  }
  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2>Contact</h2>
        <form className="form" onSubmit={submit}>
          <label>Name
            <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" />
          </label>
          <label>Email
            <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
          </label>
          <label className="full">Message
            <textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="How can I help?" />
          </label>
          <div className="form-actions">
            <button className="btn primary" type="submit">Send</button>
            <a className="btn" href="/cv.pdf" download>Download CV</a>
          </div>
        </form>
      </div>
    </section>
  );
}