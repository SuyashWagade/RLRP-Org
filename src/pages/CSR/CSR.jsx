import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';
import { Building2 } from 'lucide-react';

export const CSR = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'CSR Partnerships' }]} />
      <SectionTitle
        badge="Corporate Social Responsibility"
        title="Partner With Us for Sustainable ESG Goals"
        subtitle="We collaborate with corporate partners to execute impactful CSR initiatives aligned with UN SDGs."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <Card>
          <Building2 size={32} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
          <h3>Customized CSR Programs</h3>
          <p>Tailored social initiatives matching corporate values in education, environment, and healthcare.</p>
        </Card>
        <Card>
          <Building2 size={32} style={{ color: 'var(--secondary)', marginBottom: '1rem' }} />
          <h3>Impact Reporting</h3>
          <p>Audited quarterly SDG impact assessment reports for corporate compliance and board reporting.</p>
        </Card>
      </div>
    </div>
  );
};

export default CSR;
