import React from 'react';
import { FileText, Download, CheckCircle } from 'lucide-react';

export const FinancialReport = ({ year, title, size }) => {
  const handleDownload = () => {
    alert(`Downloading ${title} (${year})... PDF report file initialized.`);
  };

  return (
    <div className="glass-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20rem 24rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16rem' }}>
        <div style={{ padding: '12rem', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary)' }}>
          <FileText size={26} />
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: 'var(--font-base)', color: 'var(--text-primary)' }}>{title} ({year})</h4>
          <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Official PDF • {size} • Verified Audit</span>
        </div>
      </div>
      <button className="btn btn-outline btn-sm" onClick={handleDownload}>
        <Download size={16} /> Download PDF
      </button>
    </div>
  );
};

export default FinancialReport;
