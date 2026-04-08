import React, { useState, useRef, useEffect } from 'react';
import { terminalCommands } from '../../data';
import './Terminal.css';

const BOOT_LINES = [
  'SDB.DEV terminal v1.0.0',
  'Connecting to cloud infrastructure...',
  'All systems operational ✓',
  'Type "help" to see available commands.',
  '',
];

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

    if (trimmed === 'clear') {
      setHistory([]);
      return;
    }
    if (trimmed === '') {
      setHistory(newHistory);
      return;
    }

    const response = terminalCommands[trimmed];
    if (response) {
      response.split('\n').forEach((line) => newHistory.push({ type: 'output', text: line }));
    } else {
      newHistory.push({ type: 'error', text: `Command not found: ${trimmed}. Type "help" for available commands.` });
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
