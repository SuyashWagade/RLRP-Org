import React from 'react';
import { Card } from '@/components/common/Card/Card';
import { FileText, Download } from 'lucide-react';

export const FinancialReport = ({ year, title, size }) => (
  <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <FileText size={28} style={{ color: 'var(--primary)' }} />
      <div>
        <h4 style={{ margin: 0 }}>{title} ({year})</h4>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>PDF • {size}</span>
      </div>
    </div>
    <button style={{ color: 'var(--primary)', cursor: 'pointer' }}>
      <Download size={20} />
    </button>
  </Card>
);

export default FinancialReport;
