import React from 'react';
import { Card } from '@/components/common/Card/Card';
import { Linkedin, Twitter } from 'lucide-react';

export const TeamGrid = ({ members = [] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '2rem' }}>
    {members.map((member, idx) => (
      <Card key={idx} style={{ textAlign: 'center' }}>
        <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.75rem', fontWeight: 700 }}>
          {member.name ? member.name.charAt(0) : 'T'}
        </div>
        <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{member.name}</h3>
        <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.75rem' }}>{member.role}</p>
        <p style={{ fontSize: '0.85rem', marginBottom: '1.25rem' }}>{member.bio}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem' }}>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin size={18} /></a>
          <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter size={18} /></a>
        </div>
      </Card>
    ))}
  </div>
);

export default TeamGrid;
