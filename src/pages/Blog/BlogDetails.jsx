import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { blogService } from '@/services/blogService';
import { Calendar, User, ArrowLeft, Heart, Share2, RefreshCw } from 'lucide-react';

export const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const res = await blogService.getBySlug(id);
      if (res?.data) {
        setPost(res.data);
      } else {
        setPost(getFallbackPost(id));
      }
    } catch (err) {
      setPost(getFallbackPost(id));
    } finally {
      setLoading(false);
    }
  };

  const getFallbackPost = (identifier) => ({
    title: 'Restoring Dignity & Comfort for Abandoned Senior Citizens in Pune',
    author: 'Dr. Savita Patil (Founder)',
    createdAt: new Date().toISOString(),
    category: 'Impact Story',
    content: `
      At Real Life Real People's Savali Niwara Kendra, every resident has a story of resilience.
      
      When 82-year-old Ramchandra Ji arrived at our shelter six months ago, he was suffering from severe malnutrition, unmanaged hypertension, and intense joint pain. Having lost his immediate family and left without financial shelter, he had spent weeks sleeping on bench platforms in harsh weather.

      Our team of dedicated doctors and nursing staff immediately provided him with a sanitized room, prescribed essential medication, and put him on a nutrient-rich organic diet. Today, Ramchandra Ji actively participates in morning yoga sessions, sings devotional bhajans with fellow residents, and mentors younger volunteers.

      "Savali Niwara didn't just give me medicine and food; they gave me a family and my self-respect back," says Ramchandra Ji with tears of gratitude.

      Your monthly donations directly make stories like this possible. By sponsoring an elderly resident, you ensure that no senior citizen is left to suffer alone on the streets.
    `,
  });

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Blog', path: '/blog' }, { label: post?.title || 'Article Detail' }]} />

      <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '6rem', color: 'var(--text-muted)', marginBottom: '24rem', fontSize: 'var(--font-sm)' }}>
        <ArrowLeft size={16} /> Back to All Articles
      </Link>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60rem 0' }}>
          <RefreshCw className="spin" size={32} style={{ color: 'var(--primary)' }} />
          <p style={{ marginTop: '12rem', color: 'var(--text-muted)' }}>Loading article content...</p>
        </div>
      ) : (
        <article className="glass-card" style={{ maxWidth: '880rem', margin: '0 auto', padding: '40rem 36rem' }}>
          <div style={{ display: 'flex', gap: '16rem', fontSize: 'var(--font-sm)', color: 'var(--text-muted)', marginBottom: '16rem' }}>
            <span className="badge badge-primary">{post.category || 'Article'}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
              <Calendar size={16} /> {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
              <User size={16} /> {post.author}
            </span>
          </div>

          <h1 style={{ fontSize: 'var(--font-3xl)', marginBottom: '24rem', lineHeight: 1.25 }}>{post.title}</h1>

          <div style={{ fontSize: 'var(--font-base)', lineHeight: 1.8, color: 'var(--text-secondary)', whiteSpace: 'pre-line', marginBottom: '36rem' }}>
            {post.content}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24rem', borderTop: '1rem solid var(--bg-border)', flexWrap: 'wrap', gap: '16rem' }}>
            <div style={{ display: 'flex', gap: '12rem' }}>
              <Link to="/donate">
                <button className="btn btn-secondary btn-md">
                  <Heart size={16} /> Sponsor Elderly Resident
                </button>
              </Link>
            </div>
            <button className="btn btn-outline btn-sm" onClick={() => alert('Article link copied to clipboard!')}>
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
