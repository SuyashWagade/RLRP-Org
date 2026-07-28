import React from 'react';
import { Card } from '@/components/common/Card/Card';

export const ProgramCard = ({ title, category, description, progress }) => (
  <Card className="program-card">
    <span className="program-badge">{category}</span>
    <h3>{title}</h3>
    <p>{description}</p>
    {progress !== undefined && (
      <div className="progress-bar-wrapper" style={{ marginTop: '1rem' }}>
        <div className="progress-bar" style={{ height: '8px', background: 'var(--bg-border)', borderRadius: '4px', overflow: 'hidden' }}>
          <div style={{ width: `${progress}%`, height: '100%', background: 'var(--primary)' }}></div>
        </div>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem', display: 'block' }}>{progress}% Funded</span>
      </div>
    )}
  </Card>
);

export default ProgramCard;
