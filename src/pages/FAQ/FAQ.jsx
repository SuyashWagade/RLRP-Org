import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const FAQ = () => {
  const faqs = [
    { q: 'How are donations utilized?', a: 'Over 90% of all contributions directly fund ground execution, supplies, and community programs.' },
    { q: 'Are donations tax-deductible?', a: 'Yes, RLRP Organization is a registered non-profit and all eligible donations receive tax exemption certificates.' },
    { q: 'How can I become a volunteer?', a: 'Visit our Volunteer page and submit your details. Our volunteer coordinator will reach out to you.' },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'FAQ' }]} />
      <SectionTitle
        badge="Help Center"
        title="Frequently Asked Questions"
        subtitle="Find quick answers to common queries regarding donations, programs, and volunteering."
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '720px', margin: '0 auto' }}>
        {faqs.map((faq, idx) => (
          <Card key={idx}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>{faq.q}</h4>
            <p>{faq.a}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
