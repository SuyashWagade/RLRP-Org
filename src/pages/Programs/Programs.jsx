import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ProgramCard from '@/components/programs';

export const Programs = () => {
  const samplePrograms = [
    { title: 'Rural Digital Literacy Drive', category: 'Education', description: 'Equipping village schools with digital infrastructure and trained mentors.', progress: 75 },
    { title: 'Clean Water Initiative', category: 'Healthcare', description: 'Installing solar-powered water filtration units in drought-prone regions.', progress: 90 },
    { title: 'Women Entrepreneurship Fund', category: 'Livelihood', description: 'Micro-grants and vocational training for women starting micro-enterprises.', progress: 60 },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Programs' }]} />
      <SectionTitle
        badge="Our Initiatives"
        title="Programs Driving Scalable Change"
        subtitle="Explore our ongoing projects across education, healthcare, and economic empowerment."
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {samplePrograms.map((prog, idx) => (
          <ProgramCard key={idx} {...prog} />
        ))}
      </div>
    </div>
  );
};

export default Programs;
