import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
      <label>Email<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
      <label>Message<textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a little about your project" /></label>
      <button className="button button-primary" type="submit">Send message <span>→</span></button>
      {submitted && <p className="form-success" role="status">Thanks — your message is ready. Please email Mian directly to send it.</p>}
    </form>
  );
}
