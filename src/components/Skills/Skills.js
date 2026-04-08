import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../../data';
import './Skills.css';

function SkillBar({ name, level, visible }) {
  return (
    <div className="skill-bar-item">
      <div className="skill-bar-header">
        <span className="skill-bar-name">{name}</span>
        <span className="skill-bar-pct">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => { setVisible(false); setTimeout(() => setVisible(true), 50); }, [activeTab]);

  return (
    <section id="skills">
      <div className="container">
        <div className="section-tag">02 // Skills</div>
        <h2 className="section-title">Technical Arsenal</h2>

        <div className="skills-tabs">
          {skills.map((cat, i) => (
            <button
              key={cat.category}
              className={`skills-tab ${activeTab === i ? 'active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              <i className={`fas ${cat.icon}`} />
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        <div className="skills-panel reveal" ref={ref}>
          <div className="skills-panel-inner">
            <div className="skills-grid-cards">
              {skills[activeTab].items.map((sk) => (
                <div className="skill-card" key={sk.name}>
                  <span className="skill-icon">{sk.icon}</span>
                  <div className="skill-name">{sk.name}</div>
                  <div className="skill-level-badge">{sk.level}%</div>
                </div>
              ))}
            </div>
            <div className="skills-bars-col">
              <h3 className="skills-bars-title">// Proficiency</h3>
              {skills[activeTab].items.map((sk) => (
                <SkillBar key={sk.name} name={sk.name} level={sk.level} visible={visible} />
              ))}
            </div>
          </div>
        </div>

        <div className="skills-cloud reveal">
          <h3 className="skills-cloud-title">// All Technologies</h3>
          <div className="skills-tags-wrap">
            {skills.flatMap((cat) => cat.items).map((sk) => (
              <span key={sk.name} className="skills-cloud-tag">{sk.icon} {sk.name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
