import React, { useState } from 'react';
import { personal } from '../../data';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: '⚠ Please fill in all required fields.' });
      return;
    }
    const mailto = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setStatus({ type: 'success', text: '✓ Opening your email client...' });
  };

  const socials = [
    { icon: 'fab fa-github', href: personal.github, label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: personal.linkedin, label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: personal.twitter, label: 'Twitter' },
    { icon: 'fab fa-instagram', href: personal.instagram, label: 'Instagram' },
    { icon: 'fab fa-youtube', href: personal.youtube, label: 'YouTube' },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="section-tag">06 // Contact</div>
        <h2 className="section-title">Let's Connect</h2>

        <div className="contact-grid">
          <div className="contact-info reveal-left">
            <h3>Open to Opportunities</h3>
            <p>
              Whether you have a DevOps challenge, want to discuss cloud architecture, or just want to
              say hi — my inbox is always open. Let's build something reliable together.
            </p>

            <a href={`mailto:${personal.email}`} className="contact-item">
              <div className="contact-item-icon"><i className="fas fa-envelope" /></div>
              <div className="contact-item-text">
                <div className="contact-item-label">Email</div>
                {personal.email}
              </div>
            </a>
            <a href={`tel:${personal.phone}`} className="contact-item">
              <div className="contact-item-icon"><i className="fas fa-phone" /></div>
              <div className="contact-item-text">
                <div className="contact-item-label">Phone</div>
                {personal.phone}
              </div>
            </a>
            <div className="contact-item" style={{ cursor: 'default' }}>
              <div className="contact-item-icon"><i className="fas fa-map-marker-alt" /></div>
              <div className="contact-item-text">
                <div className="contact-item-label">Location</div>
                {personal.location}
              </div>
            </div>

            <div className="social-strip">
              {socials.map((s) => (
                <a key={s.label} href={s.href} className="social-btn" target="_blank" rel="noreferrer" title={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form nm-card reveal-right">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input className="form-input" name="name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" name="subject" type="text" placeholder="DevOps Opportunity / Project Inquiry" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea className="form-input" name="message" placeholder="Tell me about your project or opportunity..." value={form.message} onChange={handleChange} />
            </div>
            <button className="nm-btn nm-btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSubmit}>
              <i className="fas fa-paper-plane" /> Send Message
            </button>
            {status && (
              <div className="form-status" style={{ color: status.type === 'error' ? '#f87171' : 'var(--accent)' }}>
                {status.text}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
