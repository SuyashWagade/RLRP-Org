import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card/Card';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

export const EventList = ({ events = [] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
    {events.map((event) => (
      <Card key={event.id}>
        <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', background: 'var(--primary-light)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          {event.category || 'Upcoming Event'}
        </span>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{event.title}</h3>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Calendar size={16} /> {event.date} • {event.time}
        </div>
        <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <MapPin size={16} /> {event.location}
        </div>
        <Link to={`/events/${event.id}`} style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          View Details & RSVP <ArrowRight size={16} />
        </Link>
      </Card>
    ))}
  </div>
);

export default EventList;
