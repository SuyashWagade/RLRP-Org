import React from 'react';
import { useParams } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { CalendarCheck } from 'lucide-react';

export const EventDetails = () => {
  const { id } = useParams();

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Events', path: '/events' }, { label: `Event #${id}` }]} />
      <SectionTitle
        badge="Event Schedule & Details"
        title={`Event #${id || 'Overview'}`}
        align="left"
      />
      <Card>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          Schedule, speaker details, venue map, and registration form for event ID {id}.
        </p>
        <Button variant="primary" icon={CalendarCheck} onClick={() => alert('RSVP confirmed!')}>
          Register / RSVP Now
        </Button>
      </Card>
    </div>
  );
};

export default EventDetails;
