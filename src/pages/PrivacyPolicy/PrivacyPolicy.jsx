import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const PrivacyPolicy = () => (
  <div className="container section-padding">
    <Breadcrumb items={[{ label: 'Privacy Policy' }]} />
    <SectionTitle badge="Legal" title="Privacy Policy" align="left" />
    <Card>
      <p style={{ marginBottom: '1rem' }}>
        RLRP Organization respects your privacy. We collect minimal donor and visitor information solely for transaction processing and program updates.
      </p>
      <p>We do not sell, rent, or share personal data with third-party advertisers.</p>
    </Card>
  </div>
);

export default PrivacyPolicy;
