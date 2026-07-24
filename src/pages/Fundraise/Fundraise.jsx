import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { Rocket } from 'lucide-react';

export const Fundraise = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Fundraise' }]} />
      <SectionTitle
        badge="Community Champion"
        title="Start Your Own Campaign"
        subtitle="Host a fundraiser for your birthday, marathon, or community event to support RLRP projects."
      />
      <Card style={{ textAlign: 'center', maxWidth: '540px', margin: '0 auto' }}>
        <Rocket size={48} style={{ color: 'var(--primary)', marginBottom: '1rem' }} />
        <h3>Peer-to-Peer Fundraising</h3>
        <p style={{ marginBottom: '1.5rem' }}>Create a personalized fundraising page in minutes and share it with your network.</p>
        <Button variant="primary" icon={Rocket} onClick={() => alert('Fundraiser creation portal ready for setup!')}>
          Launch a Campaign
        </Button>
      </Card>
    </div>
  );
};

export default Fundraise;
