import React, { useState, useEffect, useRef } from 'react';
import { personal } from '../../data';
import './Hero.css';

function useTypewriter(phrases) {
  const [text, setText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const word = phrases[phraseIdx];

    const tick = () => {
      if (!deleting) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          timeoutRef.current = setTimeout(() => setDeleting(true), 2000);
        } else {
          timeoutRef.current = setTimeout(tick, 100);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === '') {
          setDeleting(false);
          setPhraseIdx((i) => (i + 1) % phrases.length);
        } else {
          timeoutRef.current = setTimeout(tick, 60);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, deleting ? 60 : 100);
    return () => clearTimeout(timeoutRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, phraseIdx]);

  return text;
}

function useCounter(target, duration = 1500, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const numTarget = parseFloat(target.replace(/[^0-9.]/g, ''));
    if (isNaN(numTarget)) { setCount(target); return; }
    let start = 0;
    const step = numTarget / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numTarget) { setCount(target); clearInterval(timer); }
      else setCount(target.includes('.') ? start.toFixed(1) + (target.match(/[^0-9.]+$/) || [''])[0] : Math.floor(start) + (target.match(/[^0-9.]+$/) || [''])[0]);
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target, duration]);
  return count;
}

function StatItem({ stat, trigger }) {
  const val = useCounter(stat.num, 1500, trigger);
  return (
    <div className="stat-item">
      <span className="stat-num">{val || stat.num}</span>
      <span className="stat-label">{stat.label}</span>
    </div>
  );
}

export default function Hero() {
  const typed = useTypewriter(personal.typewriterPhrases);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true); }, { threshold: 0.5 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid" />
      <div className="hero-glow-1" />
      <div className="hero-glow-2" />
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-pre">
            <span /> Hello, World! I'm
          </div>
          <h1 className="hero-name">Soham Das Biswas</h1>
          <p className="hero-role">DevOps Engineer &amp; Cloud Architect</p>
          <div className="typing-wrapper">
            {'>'} {typed}<span className="cursor-blink" />
          </div>
          <p className="hero-desc">{personal.bio}</p>
          <div className="hero-btns">
            <a href="#contact" className="nm-btn nm-btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); }}>
              <i className="fas fa-paper-plane" /> Hire Me
            </a>
            <a href={personal.github} className="nm-btn nm-btn-outline" target="_blank" rel="noreferrer">
              <i className="fab fa-github" /> GitHub
            </a>
            <a href={personal.linkedin} className="nm-btn nm-btn-outline" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" /> LinkedIn
            </a>
            <a href="/resume.pdf" className="nm-btn nm-btn-resume" target="_blank" rel="noreferrer" download>
              <i className="fas fa-download" /> Resume
            </a>
          </div>
          <div className="hero-stats" ref={statsRef}>
            {personal.stats.map((s) => (
              <StatItem key={s.label} stat={s} trigger={statsVisible} />
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit-ring"><div className="orbit-dot" /></div>
          <div className="orbit-ring"><div className="orbit-dot" /></div>
          <div className="hero-avatar-ring">
            <div className="hero-avatar-inner">SDB</div>
          </div>
          <div className="tech-badge" style={{ top: '8%', right: '-5%' }}>☁️ AWS</div>
          <div className="tech-badge" style={{ top: '32%', left: '-12%' }}>🔷 Azure</div>
          <div className="tech-badge" style={{ bottom: '18%', right: '-8%' }}>🐳 Docker</div>
          <div className="tech-badge" style={{ bottom: '5%', left: '10%' }}>⚙️ CI/CD</div>
        </div>
      </div>
    </section>
  );
}
