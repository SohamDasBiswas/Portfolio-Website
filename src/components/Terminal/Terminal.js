import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../../data';
import './Terminal.css';

const BOOT_LINES = [
  'SDB.DEV terminal v2.0.0',
  'Connecting to cloud infrastructure...',
  'EmailJS service initialized ✓',
  'All systems operational ✓',
  'Type "help" to see available commands.',
  '',
];

// ─── Built-in commands ─────────────────────────────────────────
const BUILTIN = {
  help: `
┌─────────────────────────────────────────────────┐
│              AVAILABLE COMMANDS                 │
├─────────────────────────────────────────────────┤
│  about        →  who is soham                   │
│  skills       →  tech stack & tools             │
│  experience   →  work history                   │
│  projects     →  featured projects              │
│  education    →  academic background            │
│  hobbies      →  interests beyond work          │
│  contact      →  get in touch                   │
│  email        →  send a quick message           │
│  social       →  social media links             │
│  whoami       →  current user info              │
│  date         →  current date & time            │
│  clear        →  clear terminal                 │
│  exit         →  close terminal                 │
└─────────────────────────────────────────────────┘`.trim(),

  hobbies: `
┌─────────────────────────────────────────────────┐
│             BEYOND THE TERMINAL                 │
├─────────────────────────────────────────────────┤
│  🎮  Gaming                                     │
│      CASUAL & COMPETITIVE                       │
│      Story-driven & multiplayer games that      │
│      fuel problem-solving and sharp reflexes.   │
│      Tags: PC Gaming · FPS · RPG · Strategy     │
│                                                 │
│  📺  Gaming Live Stream                         │
│      CONTENT CREATOR                            │
│      Live streams with OBS, bots & community   │
│      management — a surprisingly DevOps hobby.  │
│      Tags: Live Stream · OBS · Discord          │
│      ▶   youtube.com/@sdb_darkninja             │
└─────────────────────────────────────────────────┘`.trim(),

  contact: `
┌─────────────────────────────────────────────────┐
│               CONTACT SOHAM                     │
├─────────────────────────────────────────────────┤
│  📧  sohamdb456@gmail.com                       │
│  📞  +91 81677 35148                            │
│  📍  Durgapur, West Bengal, India               │
│                                                 │
│  💬  Use the contact form on the website or     │
│      type "email" to send a quick message.      │
│                                                 │
│  ⚡  Response time: 24–48 hours                 │
└─────────────────────────────────────────────────┘`.trim(),

  email: `
┌─────────────────────────────────────────────────┐
│            EMAILJS INTEGRATION                  │
├─────────────────────────────────────────────────┤
│  ✅  Contact form powered by EmailJS            │
│  ✅  Instant notification to Soham              │
│  ✅  Auto-reply sent to sender                  │
│                                                 │
│  → Scroll to the Contact section and fill in   │
│    the form to send a message directly.         │
│                                                 │
│  Service ID   : service_l8g863j                 │
│  Template     : Contact Us                      │
│  Auto-Reply   : Enabled ✓                       │
└─────────────────────────────────────────────────┘`.trim(),

  social: `
┌─────────────────────────────────────────────────┐
│              SOCIAL LINKS                       │
├─────────────────────────────────────────────────┤
│  GitHub    →  github.com/SohamDasBiswas         │
│  LinkedIn  →  linkedin.com/in/sohamdasbiswas    │
│  Twitter   →  twitter.com/SOHAMDASBISWAS1       │
│  Instagram →  instagram.com/soham_das_biswas    │
│  YouTube   →  youtube.com/@sdb_darkninja        │
└─────────────────────────────────────────────────┘`.trim(),

  whoami: `guest@sdb.dev — You are browsing Soham's portfolio.
Role     : Visitor
Access   : Read-only
Host     : SohamDasBiswas.github.io`,

  exit: '__EXIT__',
};

export default function Terminal({ onClose }) {
  const [history, setHistory] = useState(BOOT_LINES.map((l) => ({ type: 'output', text: l })));
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIdx, setCmdIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const run = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    const newHistory = [...history, { type: 'input', text: `guest@sdb.dev:~$ ${cmd}` }];

    if (trimmed === 'clear') { setHistory([]); return; }
    if (trimmed === '')      { setHistory(newHistory); return; }
    if (trimmed === 'exit')  { onClose(); return; }

    if (trimmed === 'date') {
      newHistory.push({ type: 'output', text: new Date().toUTCString() });
      setHistory(newHistory);
      setCmdHistory((prev) => [cmd, ...prev]);
      setCmdIdx(-1);
      return;
    }

    // Built-ins first, then data.js fallback
    const response = BUILTIN[trimmed] || terminalCommands[trimmed];

    if (response) {
      response.split('\n').forEach((line) => newHistory.push({ type: 'output', text: line }));
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: ${trimmed}. Type "help" for available commands.`,
      });
    }

    setHistory(newHistory);
    setCmdHistory((prev) => [cmd, ...prev]);
    setCmdIdx(-1);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') { run(input); setInput(''); }
    else if (e.key === 'ArrowUp') {
      const idx = Math.min(cmdIdx + 1, cmdHistory.length - 1);
      setCmdIdx(idx);
      setInput(cmdHistory[idx] || '');
    } else if (e.key === 'ArrowDown') {
      const idx = Math.max(cmdIdx - 1, -1);
      setCmdIdx(idx);
      setInput(idx === -1 ? '' : cmdHistory[idx]);
    }
  };

  return (
    <div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="terminal-window nm-card">
        <div className="terminal-titlebar">
          <div className="terminal-dots">
            <span className="dot red" onClick={onClose} title="Close" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="terminal-title">
            <i className="fas fa-terminal" /> guest@sdb.dev — bash
          </div>
          <button className="terminal-close" onClick={onClose}><i className="fas fa-times" /></button>
        </div>

        <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className={`terminal-line terminal-${line.type}`}>
              {line.text}
            </div>
          ))}
          <div className="terminal-input-row">
            <span className="terminal-prompt">guest@sdb.dev:~$</span>
            <input
              ref={inputRef}
              className="terminal-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
}
