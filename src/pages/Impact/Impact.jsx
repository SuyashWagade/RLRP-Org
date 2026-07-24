import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ImpactStats from '@/components/impact';

export const Impact = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Impact' }]} />
      <SectionTitle
        badge="Measuring Progress"
        title="Our Measured Social Impact"
        subtitle="Empirical metrics and community outcomes generated through our field initiatives."
      />
      <ImpactStats />
    </div>
  );
};

export default Impact;
