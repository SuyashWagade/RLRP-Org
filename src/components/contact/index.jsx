import React, { useState } from 'react';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Your message has been sent to RLRP Team.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1.5rem' }}>Send Us a Message</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Your Name</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Email Address</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Subject</label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>Message</label>
          <textarea
            rows="5"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--bg-border)', background: 'var(--bg-main)', color: 'var(--text-primary)', fontFamily: 'inherit' }}
          ></textarea>
        </div>

        <Button variant="primary" size="lg" icon={Send} type="submit">
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;
