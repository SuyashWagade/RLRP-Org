import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import AboutSection from '@/components/about/AboutSection';

export const About = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'About Us' }]} />
      <SectionTitle
        badge="About RLRP Organization"
        title="Dedicated to Transformative Social Growth"
        subtitle="Founded with a mission to empower underserved populations through sustainable development."
      />
      <AboutSection />
    </div>
  );
};

export default About;
