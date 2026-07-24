import React from 'react';
import './SectionTitle.css';

export const SectionTitle = ({
  badge,
  title,
  subtitle,
  align = 'center', // left, center, right
  className = '',
}) => {
  return (
    <div className={`section-title-wrapper align-${align} ${className}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-main-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
