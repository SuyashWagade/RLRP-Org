import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import EventList from '@/components/events';

export const Events = () => {
  const events = [
    { id: 101, title: 'Annual Social Impact Summit 2026', category: 'Conference', date: 'August 12, 2026', time: '10:00 AM - 4:00 PM', location: 'City Convention Center' },
    { id: 102, title: 'Community Health Awareness Drive', category: 'Health Camp', date: 'August 20, 2026', time: '9:00 AM - 2:00 PM', location: 'Sector 5 Community Hall' },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Events' }]} />
      <SectionTitle
        badge="Community Gatherings"
        title="Upcoming Events & Workshops"
        subtitle="Join our upcoming summits, awareness drives, and volunteer meetups."
      />
      <EventList events={events} />
    </div>
  );
};

export default Events;
