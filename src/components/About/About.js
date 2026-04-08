import React from 'react';
import { personal } from '../../data';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">01 // About</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div className="about-grid">
          <div className="about-text reveal-left">
            <p>
              I'm a <span className="highlight">DevOps Engineer</span> with hands-on experience across
              AWS, Azure, DigitalOcean, and Interserver. I specialise in designing fault-tolerant,
              cost-optimised cloud systems that <span className="highlight">never go down</span> — backed by
              battle-tested CI/CD pipelines and SRE practices.
            </p>
            <p>
              My approach is infrastructure-as-code first: every resource is reproducible, versioned, and
              auditable. From containerising workloads with Docker and ECS to wiring up real-time
              Grafana dashboards and CloudWatch alerts, I ensure teams can ship with confidence.
            </p>
            <p>
              Off the terminal, I enjoy competitive programming, contributing to open source, and sharing
              DevOps learnings on social media.
            </p>

            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Location</div>
                <div className="info-val">Durgapur, WB, India</div>
              </div>
              <div className="info-item">
                <div className="info-label">Email</div>
                <div className="info-val">sohamdb456@gmail.com</div>
              </div>
              <div className="info-item">
                <div className="info-label">Phone</div>
                <div className="info-val">+91 8167735148</div>
              </div>
              <div className="info-item">
                <div className="info-label">Available</div>
                <div className="info-val" style={{ color: 'var(--accent)' }}>Open to Opportunities</div>
              </div>
            </div>

            <div className="about-btns">
              <a href={`mailto:${personal.email}`} className="nm-btn nm-btn-primary">
                <i className="fas fa-envelope" /> Email Me
              </a>
              <a href={personal.linkedin} className="nm-btn nm-btn-outline" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="about-right reveal-right">
            <h3 className="about-section-h">Quick Stats</h3>
            <div className="quick-stats">
              {[
                { icon: 'fa-server',     val: '15+',   lbl: 'Production Systems' },
                { icon: 'fa-dollar-sign',val: '20%',   lbl: 'Cost Reduction'     },
                { icon: 'fa-rocket',     val: '55%',   lbl: 'Faster Deployments' },
                { icon: 'fa-shield-alt', val: '99.9%', lbl: 'Uptime Achieved'    },
              ].map((s) => (
                <div className="quick-stat" key={s.lbl}>
                  <i className={`fas ${s.icon}`} />
                  <span className="qs-val">{s.val}</span>
                  <span className="qs-lbl">{s.lbl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
