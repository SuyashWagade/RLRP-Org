import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/common/Card/Card';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogList = ({ posts = [] }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
    {posts.map((post) => (
      <Card key={post.id}>
        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><Calendar size={14} /> {post.date}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}><User size={14} /> {post.author}</span>
        </div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{post.title}</h3>
        <p style={{ marginBottom: '1.25rem', fontSize: '0.95rem' }}>{post.excerpt}</p>
        <Link to={`/blog/${post.id}`} style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
          Read Full Story <ArrowRight size={16} />
        </Link>
      </Card>
    ))}
  </div>
);

export default BlogList;
