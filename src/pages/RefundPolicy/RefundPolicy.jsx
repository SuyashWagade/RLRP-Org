import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const RefundPolicy = () => (
  <div className="container section-padding">
    <Breadcrumb items={[{ label: 'Refund Policy' }]} />
    <SectionTitle badge="Legal" title="Donation & Refund Policy" align="left" />
    <Card>
      <p style={{ marginBottom: '1rem' }}>
        Donations made to RLRP Organization are non-refundable except in cases of technical duplicate transactions or unauthorized charges.
      </p>
    </Card>
  </div>
);

export default RefundPolicy;
