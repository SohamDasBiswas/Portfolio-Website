import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Python App on Azure VMSS',
    desc: 'Launched a Python web app on VMSS with load balancer, health probes, and rolling Auto Scaling for zero-downtime deployments.',
    tags: ['Python', 'Azure', 'DevOps'],
    icon: '🐍',
    date: 'Mar 2024',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Full-Stack CI/CD on AWS',
    desc: 'React.js on S3/CloudFront; Node.js on ECS with containerized backend; ALB and scaling monitored via Grafana and CloudWatch.',
    tags: ['AWS', 'Docker', 'DevOps'],
    icon: '☁️',
    date: 'Jan 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Azure Microservices Architecture',
    desc: 'Containerized services on Azure Container Apps behind Application Gateway; continuous delivery via GitHub Actions with CDN, PostgreSQL, and Slack.',
    tags: ['Azure', 'Docker', 'DevOps'],
    icon: '🔷',
    date: 'Mar 2024',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Static Angular App on Azure',
    desc: 'Application hosted on Azure Static Web Apps with a GitHub Actions YAML pipeline for automated builds on every commit.',
    tags: ['Azure', 'DevOps'],
    icon: '⚡',
    date: 'Apr 2024',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Jenkins VMSS Pipeline',
    desc: 'Automated delivery pipeline to Azure VMSS using Jenkins, with Slack alerts and failure-triggered rollback.',
    tags: ['Azure', 'DevOps'],
    icon: '🤖',
    date: 'Feb 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'EC2 Instance Lifecycle Automation',
    desc: 'Event-driven AWS Lambda system to automatically start, stop, and tag EC2 instances on schedule — reducing idle compute costs and enforcing tagging compliance across environments.',
    tags: ['AWS', 'Python', 'DevOps'],
    icon: '🖥️',
    date: 'Apr 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'AWS S3 File Processing Pipeline',
    desc: 'Serverless file ingestion pipeline triggered on S3 uploads — Lambda parses, validates, and routes files to downstream services with dead-letter queue handling for failures.',
    tags: ['AWS', 'Python', 'DevOps'],
    icon: '📂',
    date: 'Mar 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Automated Email Processing on AWS',
    desc: 'Event-driven email ingestion workflow using SES, S3, and Lambda — automatically parses inbound emails, extracts attachments, and triggers downstream processing, boosting pipeline reliability by 30%.',
    tags: ['AWS', 'Python', 'DevOps'],
    icon: '📨',
    date: 'Apr 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'AWS Cost Alerts to Microsoft Teams',
    desc: 'Automated cost governance pipeline using AWS Budgets, SNS, and Lambda — sends real-time spend alerts and threshold breach notifications directly to a Microsoft Teams channel.',
    tags: ['AWS', 'Python', 'DevOps'],
    icon: '💰',
    date: 'Mar 2025',
    github: 'https://github.com/SohamDasBiswas',
    live: null,
  },
  {
    title: 'Portfolio Website',
    desc: 'Personal portfolio website built with React.js, HTML and CSS showcasing projects and skills.',
    tags: ['React.js', 'HTML/CSS'],
    icon: '🌐',
    date: 'Apr 2022',
    github: 'https://github.com/SohamDasBiswas/Portfolio-Website',
    live: null,
  },
  {
    title: 'Hand Gesture Car',
    desc: 'IoT car controlled by hand gestures using NodeMCU and Platform IO (C++). Wireless gesture-based control system.',
    tags: ['C++', 'IoT', 'NodeMCU'],
    icon: '🚗',
    date: 'Dec 2021',
    github: 'https://github.com/SohamDasBiswas/Fire-IOT-Car',
    live: null,
  },
  {
    title: 'Hand Gesture Car (Hand Only)',
    desc: 'Arduino-based variant of the gesture car using only hand movement for control via Platform IO.',
    tags: ['C++', 'IoT', 'Arduino'],
    icon: '✋',
    date: 'Mar 2022',
    github: 'https://github.com/SohamDasBiswas/Hand-Gesture-Car-Hand-only-',
    live: null,
  },
  {
    title: 'Fire IoT Car',
    desc: 'Fire-fighting IoT car built on NodeMCU with remote control capability using Platform IO and C++.',
    tags: ['C++', 'IoT', 'NodeMCU'],
    icon: '🔥',
    date: 'Dec 2021',
    github: 'https://github.com/SohamDasBiswas/Fire-IOT-Car',
    live: null,
  },
  {
    title: 'Fire IoT Car Mobile App',
    desc: 'Android companion app for the Fire IoT Car, enabling wireless control from a smartphone via Bluetooth/WiFi.',
    tags: ['Java', 'Android', 'IoT'],
    icon: '📱',
    date: 'Dec 2021',
    github: 'https://github.com/SohamDasBiswas/Fire-IoT-Car-Application',
    live: null,
  },
  {
    title: '3×3×3 LED Cube',
    desc: 'Arduino-powered 3D LED cube with custom C++ animations. 27 LEDs multiplexed and sequenced.',
    tags: ['C++', 'Arduino'],
    icon: '💡',
    date: 'Sept 2021',
    github: 'https://github.com/SohamDasBiswas/3x3x3-led-cube',
    live: null,
  },
  {
    title: 'NinjuBot',
    desc: 'Full-featured Discord bot built with Python and discord.py — music playback, economy system, XP/levelling, AI chat, moderation, anti-nuke, server backups, Twitch alerts, and a REST API powering the web dashboard.',
    tags: ['Python', 'Bot', 'Discord'],
    icon: '🥷',
    date: 'Mar 2024',
    github: 'https://github.com/SohamDasBiswas/NinjuBot',
    live: null,
  },
  {
    title: 'NinjuBot Dashboard',
    desc: 'Web dashboard for NinjuBot — Discord OAuth2 login, per-server settings editor, economy & XP leaderboards, audit log viewer, server backup manager, and real-time bot stats.',
    tags: ['React.js', 'Bot', 'Discord', 'JavaScript'],
    icon: '🖥️',
    date: 'Mar 2024',
    github: 'https://github.com/SohamDasBiswas/NinjuBot-dashboard',
    live: null,
  },
  {
    title: 'Buddy Telegram Bot',
    desc: 'Multifunctional Telegram chatbot built in Python with automated responses and utility commands.',
    tags: ['Python', 'Bot'],
    icon: '🤖',
    date: 'Aug 2021',
    github: 'https://github.com/SohamDasBiswas/Buddy-telegram-bot',
    live: null,
  },
  {
    title: 'Buddy Discord Bot',
    desc: 'Feature-rich Discord bot written in Python with chat commands, moderation tools and automation.',
    tags: ['Python', 'Bot'],
    icon: '🎮',
    date: 'Jul 2021',
    github: 'https://github.com/SohamDasBiswas/Buddy-discord-bot',
    live: null,
  },
  {
    title: 'Arsenal Discord Bot',
    desc: 'Discord music and chat bot in Python — plays music, manages queues and handles chat commands.',
    tags: ['Python', 'Bot'],
    icon: '🎵',
    date: 'Jul 2021',
    github: 'https://github.com/SohamDasBiswas/Arsenal-discord-bot',
    live: null,
  },
  {
    title: 'Music Player',
    desc: 'Desktop music player application with a custom Python UI for browsing and playing local audio files.',
    tags: ['Python', 'UI'],
    icon: '🎶',
    date: 'Mar 2021',
    github: 'https://github.com/SohamDasBiswas/SOHAM-MUSIC-PLAYER',
    live: null,
  },
  {
    title: 'Minecraft AFK Bot',
    desc: 'JavaScript bot that keeps a Minecraft account active on servers by simulating player movement.',
    tags: ['JavaScript'],
    icon: '⛏️',
    date: 'Mar 2021',
    github: 'https://github.com/SohamDasBiswas/Minecraft-afk-Bot',
    live: null,
  },
  {
    title: 'PDF Audiobook',
    desc: 'Python desktop app that converts PDF documents to audio, reading them aloud with a text-to-speech engine.',
    tags: ['Python', 'UI'],
    icon: '📖',
    date: 'Jan 2021',
    github: 'https://github.com/SohamDasBiswas/Soham-PDF-AUDIOBOOK',
    live: null,
  },
  {
    title: 'Email AI Bot',
    desc: 'Python automation bot that uses AI to compose and send context-aware emails on your behalf.',
    tags: ['Python', 'AI'],
    icon: '📧',
    date: 'Dec 2020',
    github: 'https://github.com/SohamDasBiswas/SOHAM-EMAIL-AI-BOT',
    live: null,
  },
  {
    title: 'Text Editor',
    desc: 'Lightweight desktop text editor built with Python UI featuring syntax highlighting and file management.',
    tags: ['Python', 'UI'],
    icon: '📝',
    date: 'Oct 2020',
    github: 'https://github.com/SohamDasBiswas/SOHAM-TEXT-EDITOR',
    live: null,
  },
];

const filterCategories = [
  { label: 'All',      match: null },
  { label: 'DevOps',   match: ['DevOps', 'AWS', 'Azure', 'Docker'] },
  { label: 'Bots',     match: ['Bot', 'Discord'] },
  { label: 'IoT',      match: ['IoT', 'Arduino', 'NodeMCU', 'C++'] },
  { label: 'Web',      match: ['React.js', 'HTML/CSS', 'JavaScript', 'UI'] },
  { label: 'Python',   match: ['Python', 'AI'] },
  { label: 'Android',  match: ['Android', 'Java'] },
];

export default function Projects() {
  const [active, setActive] = useState('All');
  const [animKey, setAnimKey] = useState(0);
  const gridRef = useRef(null);

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => {
        const cat = filterCategories.find((c) => c.label === active);
        return cat && p.tags.some((t) => cat.match.includes(t));
      });

  const handleFilter = (label) => {
    setActive(label);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  }, [animKey, filtered.length]);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">04 // Projects</span>
          <h2 className="section-title">Featured Work</h2>
          <div className="section-line" />
        </div>

        <div className="project-filters reveal">
          {filterCategories.map(({ label }) => (
            <button
              key={label}
              className={`filter-btn${active === label ? ' active' : ''}`}
              onClick={() => handleFilter(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="projects-grid" ref={gridRef} key={animKey}>
          {filtered.map((p) => (
            <div className="project-card" key={p.title}>
              <div className="project-card-top">
                <div className="project-icon-wrap">
                  <span className="project-icon">{p.icon}</span>
                </div>
                <div className="project-card-actions">
                  <span className="project-date"><i className="fas fa-calendar-alt" /> {p.date}</span>
                  <a href={p.github} target="_blank" rel="noreferrer" title="GitHub" className="project-link-btn">
                    <i className="fab fa-github" />
                  </a>
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" title="Live" className="project-link-btn">
                      <i className="fas fa-external-link-alt" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
