import React from 'react';
import { experience } from '../../data';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-tag">03 // Experience</div>
        <h2 className="section-title">Work History</h2>

        <div className="timeline">
          {experience.map((job, i) => (
            <div className="timeline-item reveal" key={i}>
              <div className={`timeline-dot ${job.current ? 'current' : ''}`}>
                {job.current && <div className="timeline-dot-pulse" />}
              </div>
              <div className="exp-card nm-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-title">{job.title}</div>
                    <div className="exp-company">
                      <i className="fas fa-building" style={{ marginRight: '0.4rem', fontSize: '0.75rem' }} />
                      {job.company}
                    </div>
                  </div>
                  <div className="exp-badges">
                    {job.current && <span className="exp-badge-live">● Live</span>}
                    <span className="exp-type">{job.type}</span>
                  </div>
                </div>
                <div className="exp-date">
                  <i className="fas fa-calendar-alt" />
                  {job.date}
                </div>
                <ul className="exp-points">
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
                <div className="exp-tags-row">
                  {job.tags.map((t) => (
                    <span className="exp-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
