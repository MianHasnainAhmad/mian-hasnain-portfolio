import { useState } from 'react';
import { links } from '../data';

export default function ContactForm() {
  const [opened, setOpened] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = `Portfolio message from ${form.name}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>Name<input required autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
      <label>Email<input required type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" /></label>
      <label>Message<textarea required rows="5" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me about the role or project" /></label>
      <button className="button button-primary" type="submit">Write email <span>→</span></button>
      <p className="form-hint">This opens your email app with the message ready to send.</p>
      {opened && (
        <p className="form-success" role="status">
          If nothing opened, please email me directly at <a href={`mailto:${links.email}`}>{links.email}</a>.
        </p>
      )}
    </form>
  );
}
