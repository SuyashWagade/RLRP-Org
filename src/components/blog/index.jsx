import React, { useState, useEffect } from 'react';
import { blogService } from '@/services/blogService';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, RefreshCw, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_POSTS = [
  {
    id: 'b1',
    slug: 'restoring-dignity-for-abandoned-seniors',
    title: 'Restoring Dignity & Comfort for Abandoned Senior Citizens in Pune',
    author: 'Dr. Savita Patil (Founder)',
    createdAt: '2026-07-20T10:00:00Z',
    category: 'Impact Story',
    excerpt: 'Read how 82-year-old Ramchandra Ji found a permanent home, medical treatment, and a warm family at Savali Niwara Kendra.',
  },
  {
    id: 'b2',
    slug: 'importance-of-geriatric-mental-wellness',
    title: 'Understanding Geriatric Mental Health: Joy, Yoga & Music Therapy',
    author: 'Team RLRP Healthcare',
    createdAt: '2026-07-12T10:00:00Z',
    category: 'Healthcare & Wellness',
    excerpt: 'Exploring how weekly bhajan, laughter therapy, and community dining combat isolation in old age homes.',
  },
  {
    id: 'b3',
    slug: 'transparent-ngo-donations-80g-tax-exemption',
    title: 'How Your 80G Tax Exemption Donation Directly Funds Elderly Medical Care',
    author: 'Finance & Compliance',
    createdAt: '2026-07-02T10:00:00Z',
    category: 'Transparency',
    excerpt: 'A complete breakdown of fund allocation towards medicines, specialized beds, food preparation, and nursing staff.',
  },
];

export const BlogList = ({ posts = [] }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const res = await blogService.getAll();
      if (res?.data && res.data.length > 0) {
        setBlogPosts(res.data);
      } else {
        setBlogPosts(DEFAULT_POSTS);
      }
    } catch (err) {
      setBlogPosts(DEFAULT_POSTS);
    } finally {
      setLoading(false);
    }
  };

  const displayPosts = posts.length > 0 ? posts : blogPosts;

  return (
    <div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60rem 0' }}>
          <RefreshCw className="spin" size={32} style={{ color: 'var(--primary)' }} />
          <p style={{ marginTop: '12rem', color: 'var(--text-muted)' }}>Loading news & articles...</p>
        </div>
      ) : (
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320rem, 1fr))', gap: '24rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayPosts.map((post) => (
            <div key={post.id} className="glass-card" style={{ padding: '28rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', gap: '12rem', fontSize: 'var(--font-xs)', color: 'var(--text-muted)', marginBottom: '12rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                    <Calendar size={14} /> {new Date(post.createdAt || Date.now()).toLocaleDateString()}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                    <User size={14} /> {post.author}
                  </span>
                </div>
                <span className="badge badge-primary" style={{ marginBottom: '12rem' }}>{post.category || 'Story'}</span>
                <h3 style={{ fontSize: 'var(--font-lg)', marginBottom: '12rem', lineHeight: 1.3 }}>{post.title}</h3>
                <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginBottom: '20rem' }}>{post.excerpt || post.content?.slice(0, 120)}</p>
              </div>

              <Link to={`/blog/${post.slug || post.id}`} style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6rem', fontSize: 'var(--font-sm)' }}>
                Read Full Story <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BlogList;
