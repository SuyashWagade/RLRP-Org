import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import DonationForm from '@/components/donate';

export const Donate = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Donate' }]} />
      <SectionTitle
        badge="Support Our Cause"
        title="Make a Difference Today"
        subtitle="Your contributions directly fuel field programs, providing education, healthcare, and shelter."
      />
      <DonationForm />
    </div>
  );
};

export default Donate;
