import React from 'react';
import { useParams } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const ProgramDetails = () => {
  const { id } = useParams();

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Programs', path: '/programs' }, { label: `Program #${id || 'Details'}` }]} />
      <SectionTitle
        badge="Program Overview"
        title={`Program Detailed View (${id || 'Default'})`}
        align="left"
      />
      <Card>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
          Detailed view for program ID: <strong>{id}</strong>. This section contains comprehensive project scope, target beneficiaries, financial requirements, and execution timelines.
        </p>
      </Card>
    </div>
  );
};

export default ProgramDetails;
