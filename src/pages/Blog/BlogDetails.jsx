import React from 'react';
import { useParams } from 'react-router-dom';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { Card } from '@/components/common/Card/Card';

export const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Blog', path: '/blog' }, { label: `Article #${id}` }]} />
      <SectionTitle
        badge="Article Detail"
        title={`Blog Post #${id || 'Story'}`}
        align="left"
      />
      <Card>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Full article content for post ID {id}. Detailed narrative, quote cards, and field reports are rendered here.
        </p>
      </Card>
    </div>
  );
};

export default BlogDetails;
