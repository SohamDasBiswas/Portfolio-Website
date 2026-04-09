import React, { useState, useRef } from 'react';
import { personal } from '../../data';
import './Contact.css';

// ─── EmailJS config ───────────────────────────────────────────
const EMAILJS_SERVICE_ID   = 'service_xxxxxxx';
const EMAILJS_TEMPLATE_ID  = 'template_xxxxxxx';
const EMAILJS_AUTOREPLY_ID = 'template_xxxxxxx';
const EMAILJS_PUBLIC_KEY   = 'xxxxxxxxxxxx';
// ─────────────────────────────────────────────────────────────

// ─── Country list (dial code + exact mobile digit count) ──────
const COUNTRIES = [
  { code: 'IN',  name: 'India',          dial: '+91',  digits: 10, flag: '🇮🇳' },
  { code: 'US',  name: 'United States',  dial: '+1',   digits: 10, flag: '🇺🇸' },
  { code: 'GB',  name: 'United Kingdom', dial: '+44',  digits: 10, flag: '🇬🇧' },
  { code: 'AU',  name: 'Australia',      dial: '+61',  digits: 9,  flag: '🇦🇺' },
  { code: 'CA',  name: 'Canada',         dial: '+1',   digits: 10, flag: '🇨🇦' },
  { code: 'AE',  name: 'UAE',            dial: '+971', digits: 9,  flag: '🇦🇪' },
  { code: 'SA',  name: 'Saudi Arabia',   dial: '+966', digits: 9,  flag: '🇸🇦' },
  { code: 'SG',  name: 'Singapore',      dial: '+65',  digits: 8,  flag: '🇸🇬' },
  { code: 'DE',  name: 'Germany',        dial: '+49',  digits: 11, flag: '🇩🇪' },
  { code: 'FR',  name: 'France',         dial: '+33',  digits: 9,  flag: '🇫🇷' },
  { code: 'JP',  name: 'Japan',          dial: '+81',  digits: 10, flag: '🇯🇵' },
  { code: 'CN',  name: 'China',          dial: '+86',  digits: 11, flag: '🇨🇳' },
  { code: 'BR',  name: 'Brazil',         dial: '+55',  digits: 11, flag: '🇧🇷' },
  { code: 'ZA',  name: 'South Africa',   dial: '+27',  digits: 9,  flag: '🇿🇦' },
  { code: 'NG',  name: 'Nigeria',        dial: '+234', digits: 10, flag: '🇳🇬' },
  { code: 'PK',  name: 'Pakistan',       dial: '+92',  digits: 10, flag: '🇵🇰' },
  { code: 'BD',  name: 'Bangladesh',     dial: '+880', digits: 10, flag: '🇧🇩' },
  { code: 'LK',  name: 'Sri Lanka',      dial: '+94',  digits: 9,  flag: '🇱🇰' },
  { code: 'NP',  name: 'Nepal',          dial: '+977', digits: 10, flag: '🇳🇵' },
  { code: 'MY',  name: 'Malaysia',       dial: '+60',  digits: 9,  flag: '🇲🇾' },
  { code: 'ID',  name: 'Indonesia',      dial: '+62',  digits: 11, flag: '🇮🇩' },
  { code: 'PH',  name: 'Philippines',    dial: '+63',  digits: 10, flag: '🇵🇭' },
  { code: 'TH',  name: 'Thailand',       dial: '+66',  digits: 9,  flag: '🇹🇭' },
  { code: 'KR',  name: 'South Korea',    dial: '+82',  digits: 10, flag: '🇰🇷' },
  { code: 'IT',  name: 'Italy',          dial: '+39',  digits: 10, flag: '🇮🇹' },
  { code: 'ES',  name: 'Spain',          dial: '+34',  digits: 9,  flag: '🇪🇸' },
  { code: 'RU',  name: 'Russia',         dial: '+7',   digits: 10, flag: '🇷🇺' },
  { code: 'MX',  name: 'Mexico',         dial: '+52',  digits: 10, flag: '🇲🇽' },
  { code: 'AR',  name: 'Argentina',      dial: '+54',  digits: 10, flag: '🇦🇷' },
  { code: 'EG',  name: 'Egypt',          dial: '+20',  digits: 10, flag: '🇪🇬' },
];
const DEFAULT_COUNTRY = COUNTRIES[0]; // India

// ─── Validators ───────────────────────────────────────────────
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());

const validateMobile = (number, digits) =>
  new RegExp(`^\\d{${digits}}$`).test(number.replace(/\s/g, ''));

const validateLandline = (number) =>
  /^\d{6,12}$/.test(number.replace(/[\s\-]/g, ''));
// ─────────────────────────────────────────────────────────────

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', subject: '', message: '',
  });

  // ── Phone sub-state ──────────────────────────────────────────
  const [phoneType,   setPhoneType]   = useState('mobile');   // 'mobile' | 'landline'
  const [country,     setCountry]     = useState(DEFAULT_COUNTRY);
  const [phoneNumber, setPhoneNumber] = useState('');

  const [touched, setTouched] = useState({});
  const [status,  setStatus]  = useState(null);
  const formRef = useRef(null);

  // ── Derived phone error ───────────────────────────────────────
  const phoneErrorMsg = () => {
    if (!phoneNumber.trim()) return null; // optional — blank is always fine
    if (phoneType === 'mobile' && !validateMobile(phoneNumber, country.digits))
      return `${country.name} mobile numbers must be exactly ${country.digits} digits.`;
    if (phoneType === 'landline' && !validateLandline(phoneNumber))
      return 'Enter a valid landline number (6–12 digits).';
    return null;
  };

  // ── Derived field errors (only shown after field is touched) ──
  const errors = {
    name:    touched.name    && !form.name.trim()          ? 'Name is required.'            : null,
    email:   touched.email   && !form.email.trim()         ? 'Email is required.'
           : touched.email   && !validateEmail(form.email) ? 'Enter a valid email address.' : null,
    phone:   touched.phone   ? phoneErrorMsg()             : null,
    message: touched.message && !form.message.trim()       ? 'Message is required.'         : null,
  };

  // ── Handlers ─────────────────────────────────────────────────
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (status === 'validation' || status === 'error') setStatus(null);
  };
  const handleBlur = (e) => setTouched((p) => ({ ...p, [e.target.name]: true }));

  const handlePhoneTypeChange = (e) => {
    setPhoneType(e.target.value);
    setPhoneNumber('');
    setTouched((p) => ({ ...p, phone: false }));
  };

  const handleCountryChange = (e) => {
    const selected = COUNTRIES.find(c => c.code === e.target.value) || DEFAULT_COUNTRY;
    setCountry(selected);
    setPhoneNumber('');
    setTouched((p) => ({ ...p, phone: false }));
  };

  const handlePhoneNumberChange = (e) => {
    if (phoneType === 'mobile') {
      // Strip non-digits, hard-cap at country's required digit count
      const raw = e.target.value.replace(/\D/g, '').slice(0, country.digits);
      setPhoneNumber(raw);
    } else {
      // Landline: allow digits, spaces, dashes
      const raw = e.target.value.replace(/[^\d\s\-]/g, '').slice(0, 15);
      setPhoneNumber(raw);
    }
    if (status === 'validation' || status === 'error') setStatus(null);
  };

  // ── Validity ──────────────────────────────────────────────────
  const isFormValid = () =>
    form.name.trim() &&
    form.email.trim() && validateEmail(form.email) &&
    !phoneErrorMsg() &&
    form.message.trim();

  // Full phone string for EmailJS
  const fullPhone = phoneNumber.trim()
    ? (phoneType === 'mobile'
        ? `${country.dial} ${phoneNumber}`
        : `Landline: ${phoneNumber}`)
    : 'Not provided';

  // ── Submit ────────────────────────────────────────────────────
  const handleSubmit = async () => {
    setTouched({ name: true, email: true, phone: true, message: true });
    if (!isFormValid()) { setStatus('validation'); return; }

    setStatus('sending');
    try {
      if (!window.emailjs) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
          script.onload = resolve; script.onerror = reject;
          document.head.appendChild(script);
        });
      }
      window.emailjs.init(EMAILJS_PUBLIC_KEY);

      const params = {
        from_name:    form.name,
        from_email:   form.email,
        from_phone:   fullPhone,
        from_company: form.company || 'Not provided',
        subject:      form.subject || 'Portfolio Contact',
        message:      form.message,
        reply_to:     form.email,
        to_name:      form.name,
      };

      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_AUTOREPLY_ID, params)
        .catch(err => console.warn('Auto-reply failed:', err));

      setStatus('success');
      setForm({ name: '', email: '', company: '', subject: '', message: '' });
      setPhoneNumber('');
      setPhoneType('mobile');
      setCountry(DEFAULT_COUNTRY);
      setTouched({});
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  // ── CSS helpers ───────────────────────────────────────────────
  const inputClass = (field) => {
    const base = 'form-input';
    if (!touched[field]) return base;
    return errors[field] ? `${base} form-input--error` : `${base} form-input--valid`;
  };

  const phoneInputClass = () => {
    const base = 'form-input phone-number-input';
    if (!touched.phone || !phoneNumber.trim()) return base;
    return errors.phone ? `${base} form-input--error` : `${base} form-input--valid`;
  };

  // Left-pad the number input so digits never overlap the dial-code badge
  // badge content: "{flag} {dial}" — flag is ~2ch, space, dial code chars
  const dialBadgeWidth = `calc(${country.flag.length + 1 + country.dial.length}ch + 2.4rem)`;

  // ─────────────────────────────────────────────────────────────

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

          {/* ── Left column ── */}
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
                <a key={s.label} href={s.href} className="social-btn"
                  target="_blank" rel="noreferrer" title={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Right column — Form ── */}
          <div className="contact-form nm-card reveal-right" ref={formRef}>

            {/* Row 1 — Name + Email */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <div className="input-wrapper">
                  <input className={inputClass('name')} name="name" type="text"
                    placeholder="John Doe" value={form.name}
                    onChange={handleChange} onBlur={handleBlur}
                    disabled={status === 'sending'} />
                  {touched.name && (
                    <span className={`input-icon ${errors.name ? 'input-icon--error' : 'input-icon--valid'}`}>
                      <i className={`fas ${errors.name ? 'fa-times-circle' : 'fa-check-circle'}`} />
                    </span>
                  )}
                </div>
                {errors.name && <span className="field-error"><i className="fas fa-exclamation-triangle" /> {errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <div className="input-wrapper">
                  <input className={inputClass('email')} name="email" type="email"
                    placeholder="you@example.com" value={form.email}
                    onChange={handleChange} onBlur={handleBlur}
                    disabled={status === 'sending'} />
                  {touched.email && (
                    <span className={`input-icon ${errors.email ? 'input-icon--error' : 'input-icon--valid'}`}>
                      <i className={`fas ${errors.email ? 'fa-times-circle' : 'fa-check-circle'}`} />
                    </span>
                  )}
                </div>
                {errors.email && <span className="field-error"><i className="fas fa-exclamation-triangle" /> {errors.email}</span>}
              </div>
            </div>

            {/* ══ Phone Section ══════════════════════════════════════════ */}
            <div className="form-group">
              <label className="form-label">
                Phone Number
                <span className="form-label-optional"> (optional)</span>
              </label>

              {/* Row A: Type toggle + Country selector */}
              <div className="phone-controls">

                {/* 📱 Mobile / ☎️ Landline */}
                <div className="select-wrapper phone-type-wrapper">
                  <select className="form-select" value={phoneType}
                    onChange={handlePhoneTypeChange} disabled={status === 'sending'}>
                    <option value="mobile">📱 Mobile</option>
                    <option value="landline">☎️ Landline</option>
                  </select>
                  <i className="fas fa-chevron-down select-arrow" />
                </div>

                {/* Country — only for mobile */}
                {phoneType === 'mobile' && (
                  <div className="select-wrapper country-wrapper">
                    <select className="form-select" value={country.code}
                      onChange={handleCountryChange} disabled={status === 'sending'}>
                      {COUNTRIES.map(c => (
                        <option key={c.code} value={c.code}>
                          {c.flag}  {c.name}  ({c.dial})
                        </option>
                      ))}
                    </select>
                    <i className="fas fa-chevron-down select-arrow" />
                  </div>
                )}
              </div>

              {/* Row B: Dial-code badge + number input + digit counter */}
              <div className="input-wrapper phone-input-row">

                {/* Auto dial-code badge — updates instantly on country change */}
                {phoneType === 'mobile' && (
                  <span className="dial-code-badge">
                    {country.flag} {country.dial}
                  </span>
                )}

                <input
                  className={phoneInputClass()}
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder={
                    phoneType === 'mobile'
                      ? `${country.digits}-digit number`
                      : 'Area code + number'
                  }
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
                  disabled={status === 'sending'}
                  maxLength={phoneType === 'mobile' ? country.digits : 15}
                  style={phoneType === 'mobile' ? { paddingLeft: dialBadgeWidth } : {}}
                />

                {/* Digit counter pill — mobile only */}
                {phoneType === 'mobile' && (
                  <span className={`digit-counter ${phoneNumber.length === country.digits ? 'digit-counter--full' : ''}`}>
                    {phoneNumber.length}/{country.digits}
                  </span>
                )}

                {/* Validation icon */}
                {touched.phone && phoneNumber.trim() !== '' && (
                  <span
                    className={`input-icon ${errors.phone ? 'input-icon--error' : 'input-icon--valid'}`}
                    style={{ right: phoneType === 'mobile' ? '3.4rem' : '0.85rem' }}
                  >
                    <i className={`fas ${errors.phone ? 'fa-times-circle' : 'fa-check-circle'}`} />
                  </span>
                )}
              </div>

              {errors.phone && (
                <span className="field-error">
                  <i className="fas fa-exclamation-triangle" /> {errors.phone}
                </span>
              )}
            </div>
            {/* ══ End Phone Section ══════════════════════════════════════ */}

            {/* Company */}
            <div className="form-group">
              <label className="form-label">Company / Organisation</label>
              <input className="form-input" name="company" type="text"
                placeholder="Acme Corp" value={form.company}
                onChange={handleChange} disabled={status === 'sending'} />
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
              <div className="input-wrapper">
                <textarea className={inputClass('message')} name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message} onChange={handleChange} onBlur={handleBlur}
                  disabled={status === 'sending'} />
                {touched.message && (
                  <span className={`input-icon input-icon--textarea ${errors.message ? 'input-icon--error' : 'input-icon--valid'}`}>
                    <i className={`fas ${errors.message ? 'fa-times-circle' : 'fa-check-circle'}`} />
                  </span>
                )}
              </div>
              {errors.message && <span className="field-error"><i className="fas fa-exclamation-triangle" /> {errors.message}</span>}
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
                <i className="fas fa-exclamation-circle" /> Please fix the errors above before sending.
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
