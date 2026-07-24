import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ContactForm from '@/components/contact';

export const Contact = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Contact' }]} />
      <SectionTitle
        badge="Get in Touch"
        title="We Would Love to Hear From You"
        subtitle="Have questions about our programs, partnership opportunities, or donations? Contact our team."
      />
      <ContactForm />
    </div>
  );
};

export default Contact;
