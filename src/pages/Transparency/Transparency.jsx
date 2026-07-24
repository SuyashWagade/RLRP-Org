import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import FinancialReport from '@/components/transparency';

export const Transparency = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Transparency' }]} />
      <SectionTitle
        badge="Financial Integrity"
        title="100% Accountability & Open Governance"
        subtitle="We believe in full transparency. Review our audited financial reports and annual statements."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '700px', margin: '0 auto' }}>
        <FinancialReport year="2025" title="Annual Financial Audit Report" size="2.4 MB" />
        <FinancialReport year="2024" title="Annual Financial Audit Report" size="2.1 MB" />
        <FinancialReport year="2023" title="Impact & Spending Declaration" size="1.8 MB" />
      </div>
    </div>
  );
};

export default Transparency;
