import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import GalleryGrid from '@/components/gallery';

export const Gallery = () => {
  const sampleMedia = [
    { title: 'School Digital Lab Launch', category: 'Education' },
    { title: 'Medical Camp in Sector 4', category: 'Healthcare' },
    { title: 'Clean Water Installation', category: 'Water & Sanitation' },
    { title: 'Women Skill Workshop', category: 'Livelihood' },
    { title: 'Tree Plantation Drive', category: 'Environment' },
    { title: 'Community Youth Meetup', category: 'Youth Empowerment' },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Gallery' }]} />
      <SectionTitle
        badge="Moments of Impact"
        title="Field Operations Media Gallery"
        subtitle="Visual highlights of our ground-level initiatives and community moments."
      />
      <GalleryGrid items={sampleMedia} />
    </div>
  );
};

export default Gallery;
