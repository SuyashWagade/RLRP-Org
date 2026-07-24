import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import TeamGrid from '@/components/team';

export const Team = () => {
  const members = [
    { name: 'Dr. Anita Roy', role: 'Executive Director', bio: '20+ years of grassroots community development experience.' },
    { name: 'Marcus Vance', role: 'Head of Field Operations', bio: 'Specialist in rural infrastructure and disaster relief logistics.' },
    { name: 'Sarah Lin', role: 'Chief Financial Officer', bio: 'Former corporate audit lead dedicated to NGO financial transparency.' },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Our Team' }]} />
      <SectionTitle
        badge="Leadership & Passion"
        title="Meet Our Leadership Team"
        subtitle="The dedicated professionals driving our strategy, operations, and social impact."
      />
      <TeamGrid members={members} />
    </div>
  );
};

export default Team;
