import React from 'react';
import { Card } from '@/components/common/Card/Card';
import { Target, Eye, ShieldCheck } from 'lucide-react';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section className="about-section section-padding">
      <div className="container">
        <div className="about-grid">
          <Card>
            <div className="about-icon"><Target size={32} /></div>
            <h3>Our Mission</h3>
            <p>To uplift marginalized communities by delivering scalable interventions in education, healthcare, and livelihood support.</p>
          </Card>

          <Card>
            <div className="about-icon"><Eye size={32} /></div>
            <h3>Our Vision</h3>
            <p>A world where every individual has equal access to opportunity, dignity, and sustainable social growth.</p>
          </Card>

          <Card>
            <div className="about-icon"><ShieldCheck size={32} /></div>
            <h3>Core Values</h3>
            <p>Transparency, empathy, accountability, and sustainable community ownership in every project we execute.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
