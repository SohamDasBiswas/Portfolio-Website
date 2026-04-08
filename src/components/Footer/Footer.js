import React from 'react';
import './Footer.css';

const socials = [
  { icon: 'fab fa-github',   href: 'https://github.com',   label: 'GitHub'   },
  { icon: 'fab fa-linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: 'fab fa-twitter',  href: 'https://twitter.com',  label: 'Twitter'  },
  { icon: 'fab fa-instagram',href: '#',                    label: 'Instagram'},
  { icon: 'fab fa-youtube',  href: '#',                    label: 'YouTube'  },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">SDB</div>
        <p className="footer-tagline">DevOps Engineer &amp; Cloud Architect</p>

        <div className="footer-socials">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="footer-social-btn">
              <i className={s.icon} />
            </a>
          ))}
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          Designed &amp; Built with <span className="footer-heart">♥</span> by{' '}
          <span className="footer-name">Soham Das Biswas</span>
        </p>
        <p className="footer-rights">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
