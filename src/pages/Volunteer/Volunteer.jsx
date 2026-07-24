import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { UserCheck } from 'lucide-react';

export const Volunteer = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Volunteer' }]} />
      <SectionTitle
        badge="Join Our Team"
        title="Become a Volunteer"
        subtitle="Offer your skills, time, and passion to empower communities on the ground or remotely."
      />
      <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => { e.preventDefault(); alert('Volunteer application received!'); }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Full Name</label>
            <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Email</label>
            <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }} />
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Skillset / Interest Area</label>
            <input type="text" placeholder="e.g. Teaching, Healthcare, Tech, Media" required style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }} />
          </div>
          <Button variant="primary" icon={UserCheck} type="submit" style={{ marginTop: '0.5rem' }}>
            Submit Application
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Volunteer;
