import React from 'react';
import { Card } from '@/components/common/Card/Card';

export const GalleryGrid = ({ items = [] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
    {items.map((item, idx) => (
      <Card key={idx} style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ height: '200px', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
          📸 {item.title || `Media Item #${idx + 1}`}
        </div>
        <div style={{ padding: '1rem' }}>
          <h4 style={{ fontSize: '1rem', margin: 0 }}>{item.title || `Community Project ${idx + 1}`}</h4>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.category || 'Field Action'}</span>
        </div>
      </Card>
    ))}
  </div>
);

export default GalleryGrid;
