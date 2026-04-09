import React, { useState, useRef } from 'react';
import { personal } from '../../data';
import './Contact.css';

// ─── EmailJS config ───────────────────────────────────────────

const EMAILJS_SERVICE_ID   = 'service_xxxxxxx';  // from Email Services tab
const EMAILJS_TEMPLATE_ID  = 'template_xxxxxxx'; // Contact Us template ID
const EMAILJS_AUTOREPLY_ID = 'template_xxxxxxx'; // Auto-Reply template ID
const EMAILJS_PUBLIC_KEY   = 'xxxxxxxxxxxx';      // from Account → API Keys
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null);
  const formRef = useRef(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('validation');
      return;
    }
    setStatus('sending');
    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      window.emailjs.init(EMAILJS_PUBLIC_KEY);

      const params = {
        from_name:    form.name,
        from_email:   form.email,
        from_phone:   form.phone   || 'Not provided',
        from_company: form.company || 'Not provided',
        subject:      form.subject || 'Portfolio Contact',
        message:      form.message,
        reply_to:     form.email,
        to_name:      form.name,
      };

      // Send main notification to you
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

      // Send auto-reply to sender (won't break form if it fails)
      window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_ID, params)
        .catch(err => console.warn('Auto-reply failed:', err));

      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  const socials = [
    { icon: 'fab fa-github',      href: personal.github,    label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: personal.linkedin,  label: 'LinkedIn' },
    { icon: 'fab fa-twitter',     href: personal.twitter,   label: 'Twitter' },
    { icon: 'fab fa-instagram',   href: personal.instagram, label: 'Instagram' },
    { icon: 'fab fa-youtube',     href: personal.youtube,   label: 'YouTube' },
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

          <div className="contact-form nm-card reveal-right" ref={formRef}>

            {/* Row 1 — Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input className="form-input" name="name" type="text"
                  placeholder="John Doe" value={form.name}
                  onChange={handleChange} disabled={status === 'sending'} />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input className="form-input" name="email" type="email"
                  placeholder="you@example.com" value={form.email}
                  onChange={handleChange} disabled={status === 'sending'} />
              </div>
            </div>

            {/* Row 2 — Phone + Company */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input className="form-input" name="phone" type="tel"
                  placeholder="+91 98765 43210" value={form.phone}
                  onChange={handleChange} disabled={status === 'sending'} />
              </div>
              <div className="form-group">
                <label className="form-label">Company / Organisation</label>
                <input className="form-input" name="company" type="text"
                  placeholder="Acme Corp" value={form.company}
                  onChange={handleChange} disabled={status === 'sending'} />
              </div>
            </div>

            {/* Subject */}
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input className="form-input" name="subject" type="text"
                placeholder="DevOps Opportunity / Project Inquiry" value={form.subject}
                onChange={handleChange} disabled={status === 'sending'} />
            </div>

            {/* Message */}
            <div className="form-group">
              <label className="form-label">Message *</label>
              <textarea className="form-input" name="message"
                placeholder="Tell me about your project or opportunity..."
                value={form.message} onChange={handleChange}
                disabled={status === 'sending'} />
            </div>

            <button
              className="nm-btn nm-btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={handleSubmit}
              disabled={status === 'sending'}
            >
              {status === 'sending'
                ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                : <><i className="fas fa-paper-plane" /> Send Message</>}
            </button>

            {status === 'validation' && (
              <div className="form-status form-status--error">
                <i className="fas fa-exclamation-circle" /> Please fill in all required fields.
              </div>
            )}
            {status === 'success' && (
              <div className="form-status form-status--success">
                <i className="fas fa-check-circle" /> Message sent! I'll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="form-status form-status--error">
                <i className="fas fa-times-circle" /> Something went wrong. Please email me directly at {personal.email}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
