import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const Terms = () => (
  <div className="container section-padding">
    <Breadcrumb items={[{ label: 'Terms of Service' }]} />
    <SectionTitle badge="Legal" title="Terms of Service" align="left" />
    <Card>
      <p style={{ marginBottom: '1rem' }}>
        By accessing the RLRP Organization portal, you agree to comply with our code of conduct, intellectual property policies, and terms of use.
      </p>
    </Card>
  </div>
);

export default Terms;
