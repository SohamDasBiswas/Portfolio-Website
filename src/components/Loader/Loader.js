import React from 'react';
import './Loader.css';

export default function Loader() {
  return (
    <div id="loader">
      <div className="loader-text">SDB.DEV</div>
      <div className="loader-bar">
        <div className="loader-fill" />
      </div>
      <div className="loader-subtitle">Initializing systems...</div>
    </div>
  );
}
