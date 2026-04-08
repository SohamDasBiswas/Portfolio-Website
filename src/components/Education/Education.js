import React from 'react';
import './Education.css';

const education = [
  {
    icon: '🎓',
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Kalyani Government Engineering College',
    period: '2020 — 2024',
    grade: 'CGPA: 8.62',
    gradeColor: 'accent',
  },
  {
    icon: '📐',
    degree: 'Higher Secondary (12th) — Science',
    institution: 'Bidhan Chandra Institution, Durgapur',
    period: '2018 — 2020',
    grade: 'Percentage: 73.6%',
    gradeColor: 'purple',
  },
  {
    icon: '🏫',
    degree: 'Secondary (10th)',
    institution: 'MAMC Modern High School, Durgapur',
    period: '2006 — 2018',
    grade: 'Percentage: 59.43%',
    gradeColor: 'purple',
  },
];

export default function Education() {
  return (
    <section id="education">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">05 // Education</span>
          <h2 className="section-title">Academic Background</h2>
          <div className="section-line" />
        </div>

        <div className="edu-grid">
          {education.map((edu, i) => (
            <div className="edu-nm-card reveal" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Top row: icon + period */}
              <div className="edu-nm-top">
                <div className="edu-nm-icon">{edu.icon}</div>
                <div className="edu-nm-period">
                  <i className="fas fa-calendar-alt" /> {edu.period}
                </div>
              </div>

              {/* Divider */}
              <div className="edu-nm-divider" />

              {/* Degree */}
              <h3 className="edu-nm-degree">{edu.degree}</h3>

              {/* Institution */}
              <p className="edu-nm-institution">
                <i className="fas fa-map-marker-alt" /> {edu.institution}
              </p>

              {/* Grade badge — inset pill */}
              <div className={`edu-nm-grade${edu.gradeColor === 'purple' ? ' purple' : ''}`}>
                {edu.grade}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
