import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'hobbies', 'contact'];
const labels = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Hobbies', 'Contact'];

export default function Navbar({ darkMode, toggleDark, onTerminal }) {
  const [active, setActive] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(links[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav style={{ boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none' }}>
        <div className="nav-logo" onClick={() => scrollTo('hero')} style={{ cursor: 'pointer' }}>
          SDB
        </div>
        <ul className="nav-links">
          {links.map((id, i) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`nav-nm-btn${active === id ? ' active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollTo(id); }}
              >
                {labels[i]}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="terminal-btn" title="Open Terminal" onClick={onTerminal}>
            <i className="fas fa-terminal" />
          </button>
          <button className="theme-btn" title="Toggle theme" onClick={toggleDark}>
            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`} />
          </button>
          <button className="nav-mobile-btn" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((id, i) => (
          <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
            {labels[i]}
          </a>
        ))}
      </div>
    </>
  );
}
