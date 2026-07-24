import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';
import { NAV_LINKS } from '@/utils/constants';

export const Sitemap = () => (
  <div className="container section-padding">
    <Breadcrumb items={[{ label: 'Sitemap' }]} />
    <SectionTitle badge="Navigation Tree" title="Site Index & Map" align="left" />
    <Card style={{ maxWidth: '600px' }}>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {NAV_LINKS.map((link) => (
          <li key={link.path}>
            <Link to={link.path} style={{ color: 'var(--primary)', fontWeight: 600 }}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  </div>
);

export default Sitemap;
