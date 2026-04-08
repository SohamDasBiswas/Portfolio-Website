import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    icon: '🎮',
    title: 'Gaming',
    subtitle: 'CASUAL & COMPETITIVE',
    desc: 'Passionate gamer who enjoys both single-player story-driven experiences and competitive multiplayer. Gaming fuels my problem-solving mindset and keeps my reflexes sharp — skills that translate directly into debugging production incidents.',
    tags: ['PC Gaming', 'Multiplayer', 'Strategy', 'FPS', 'RPG'],
    links: [],
  },
  {
    icon: '📺',
    title: 'Gaming Live Stream',
    subtitle: 'CONTENT CREATOR',
    desc: 'I live stream gaming sessions, giving commentary, interacting with viewers, and building a community. Running a stream also means managing OBS, stream servers, alerts, and bots — a surprisingly DevOps-heavy hobby.',
    tags: ['Live Streaming', 'OBS', 'Community', 'Discord', 'Content'],
    links: [
      { label: 'YouTube', icon: 'fab fa-youtube', href: 'https://www.youtube.com/@sdb_darkninja' },
    ],
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">07 // Hobbies</span>
          <h2 className="section-title">Beyond the Terminal</h2>
          <div className="section-line" />
        </div>

        <div className="hobbies-grid">
          {hobbies.map((h) => (
            <div className="hobby-card reveal" key={h.title}>
              <div className="hobby-card-top">
                <div className="hobby-icon-wrap">{h.icon}</div>
                <div>
                  <div className="hobby-title">{h.title}</div>
                  <div className="hobby-subtitle">{h.subtitle}</div>
                </div>
              </div>

              <p className="hobby-desc">{h.desc}</p>

              <div className="hobby-tags">
                {h.tags.map((t) => (
                  <span key={t} className="hobby-tag">{t}</span>
                ))}
              </div>

              {h.links.length > 0 && (
                <div className="hobby-links">
                  {h.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="hobby-link-btn">
                      <i className={l.icon} />
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
