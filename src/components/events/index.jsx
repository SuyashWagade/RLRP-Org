import React, { useState, useEffect } from 'react';
import { eventService } from '@/services/eventService';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, RefreshCw, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_EVENTS = [
  {
    id: 'e1',
    title: 'Free Geriatric Health & Vision Screening Camp',
    category: 'Medical Camp',
    date: '2026-08-15T09:00:00Z',
    time: '9:00 AM - 2:00 PM',
    location: 'Savali Niwara Kendra Premises, Pune',
    description: 'Free eye checkups, cataract screenings, blood pressure & sugar monitoring, and distribution of prescription glasses for seniors.',
  },
  {
    id: 'e2',
    title: 'Senior Citizens Cultural Fest & Musical Evening',
    category: 'Cultural Event',
    date: '2026-08-28T16:00:00Z',
    time: '4:00 PM - 7:30 PM',
    location: 'Savali Community Hall, Pune',
    description: 'An evening of classical music performances, bhajan singing, storytelling, and special feast for our elderly residents.',
  },
  {
    id: 'e3',
    title: 'Volunteer Orientation & Elder Care Workshop',
    category: 'Workshop',
    date: '2026-09-05T10:30:00Z',
    time: '10:30 AM - 1:00 PM',
    location: 'Main Conference Room / Online Hybrid',
    description: 'Training session for new volunteers on geriatric care best practices, emotional support techniques, and safety protocols.',
  },
];

export const EventList = ({ events = [] }) => {
  const [eventList, setEventList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rsvped, setRsvped] = useState({});

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const res = await eventService.getAll();
      if (res?.data && res.data.length > 0) {
        setEventList(res.data);
      } else {
        setEventList(DEFAULT_EVENTS);
      }
    } catch (err) {
      setEventList(DEFAULT_EVENTS);
    } finally {
      setLoading(false);
    }
  };

  const handleRSVP = (eventId) => {
    setRsvped((prev) => ({ ...prev, [eventId]: true }));
    alert('RSVP confirmed! We look forward to welcoming you to the event.');
  };

  const displayEvents = events.length > 0 ? events : eventList;

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60rem 0' }}>
          <RefreshCw className="spin" size={32} style={{ color: 'var(--primary)' }} />
          <p style={{ marginTop: '12rem', color: 'var(--text-muted)' }}>Loading upcoming events...</p>
        </div>
      ) : (
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320rem, 1fr))', gap: '24rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayEvents.map((evt) => (
            <div key={evt.id} className="glass-card" style={{ padding: '28rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span className="badge badge-secondary" style={{ marginBottom: '12rem' }}>{evt.category || 'Event'}</span>
                <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '12rem', lineHeight: 1.3 }}>{evt.title}</h3>
                
                <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginBottom: '20rem' }}>{evt.description}</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginBottom: '24rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
                    <Calendar size={16} style={{ color: 'var(--primary)' }} />
                    <span>{new Date(evt.date).toLocaleDateString()} • {evt.time || '10:00 AM'}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6rem' }}>
                    <MapPin size={16} style={{ color: 'var(--secondary)' }} />
                    <span>{evt.location}</span>
                  </div>
                </div>
              </div>

              <div>
                {rsvped[evt.id] ? (
                  <button className="btn btn-outline btn-md" disabled style={{ width: '100%', color: 'var(--secondary)', borderColor: 'var(--secondary)' }}>
                    <CheckCircle size={16} /> RSVP Confirmed
                  </button>
                ) : (
                  <button className="btn btn-primary btn-md" onClick={() => handleRSVP(evt.id)} style={{ width: '100%' }}>
                    Confirm Attendance / RSVP
                  </button>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default EventList;
