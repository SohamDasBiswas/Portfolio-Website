import React, { useState, useEffect, useRef } from 'react';
import Loader from './components/Loader/Loader';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Education from './components/Education/Education';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Terminal from './components/Terminal/Terminal';

function useCursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (curRef.current) { curRef.current.style.left = e.clientX + 'px'; curRef.current.style.top = e.clientY + 'px'; }
      if (ringRef.current) { ringRef.current.style.left = e.clientX + 'px'; ringRef.current.style.top = e.clientY + 'px'; }
    };
    const over = () => { if (ringRef.current) { ringRef.current.style.width = '52px'; ringRef.current.style.height = '52px'; ringRef.current.style.opacity = '0.5'; } };
    const out = () => { if (ringRef.current) { ringRef.current.style.width = '36px'; ringRef.current.style.height = '36px'; ringRef.current.style.opacity = '1'; } };
    document.addEventListener('mousemove', move);
    document.querySelectorAll('a, button, .nm-btn, .skill-card, .project-card, .filter-btn, .skills-tab').forEach((el) => { el.addEventListener('mouseenter', over); el.addEventListener('mouseleave', out); });
    return () => document.removeEventListener('mousemove', move);
  }, []);
  return { curRef, ringRef };
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const { curRef, ringRef } = useCursor();

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  // Dark mode
  useEffect(() => {
    document.body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

  // Scroll progress + reveal + scroll-to-top
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // IntersectionObserver for reveal animations
  useEffect(() => {
    if (loading) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [loading]);

  // Keyboard shortcut: Ctrl+` opens terminal
  useEffect(() => {
    const handler = (e) => { if ((e.ctrlKey || e.metaKey) && e.key === '`') { e.preventDefault(); setTerminalOpen((v) => !v); } };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Custom cursor */}
      <div className="cursor" ref={curRef} />
      <div className="cursor-ring" ref={ringRef} />

      <Navbar
        darkMode={darkMode}
        toggleDark={() => setDarkMode((v) => !v)}
        onTerminal={() => setTerminalOpen(true)}
      />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        id="scrollTop"
        className={showTop ? 'show' : ''}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        title="Back to top"
      >
        <i className="fas fa-chevron-up" />
      </button>

      {/* Terminal */}
      {terminalOpen && <Terminal onClose={() => setTerminalOpen(false)} />}
    </>
  );
}
