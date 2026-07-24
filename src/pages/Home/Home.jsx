import React from 'react';
import HomeBanner from '@/components/home/HomeBanner';
import AboutSection from '@/components/about/AboutSection';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import ImpactStats from '@/components/impact';

export const Home = () => {
  return (
    <div className="page-home">
      <HomeBanner />
      
      <div className="container section-padding">
        <SectionTitle
          badge="What We Stand For"
          title="Building Hope & Sustainable Communities"
          subtitle="Our core pillars address pressing social challenges through sustainable models."
        />
        <AboutSection />
      </div>

      <div className="container section-padding" style={{ background: 'var(--glass-bg)', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem' }}>
        <SectionTitle
          badge="Our Impact in Numbers"
          title="Real Change, Verified Results"
        />
        <ImpactStats />
      </div>
    </div>
  );
};

export default Home;
