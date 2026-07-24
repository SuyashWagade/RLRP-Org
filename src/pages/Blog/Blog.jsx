import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import BlogList from '@/components/blog';

export const Blog = () => {
  const posts = [
    { id: 1, title: 'How Solar Water Wells are Changing Villages', date: 'July 15, 2026', author: 'Team RLRP', excerpt: 'Clean water access has led to a 40% drop in waterborne diseases in our partner villages.' },
    { id: 2, title: 'Empowering Girls Through Coding Bootcamps', date: 'July 10, 2026', author: 'Priya Sharma', excerpt: 'Our rural tech literacy program has graduated over 500 young female developers.' },
  ];

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Blog' }]} />
      <SectionTitle
        badge="Latest Updates"
        title="Stories from the Field"
        subtitle="Insights, updates, and inspiring stories from our ongoing initiatives."
      />
      <BlogList posts={posts} />
    </div>
  );
};

export default Blog;
