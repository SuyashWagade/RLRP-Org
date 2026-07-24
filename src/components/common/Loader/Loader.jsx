import React from 'react';
import './Loader.css';

export const Loader = ({ fullPage = false, text = 'Loading...' }) => {
  return (
    <div className={`loader-wrapper ${fullPage ? 'is-fullpage' : ''}`}>
      <div className="spinner"></div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;
