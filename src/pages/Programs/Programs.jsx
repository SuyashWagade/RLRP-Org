import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import ProgramCard from '@/components/programs';
import { programService } from '@/services/programService';
import { Search, RefreshCw, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const DEFAULT_PROGRAMS = [
  {
    id: 'p1',
    title: 'Savali Elderly Shelter & Assisted Living',
    category: 'Shelter',
    description: 'Providing a warm home, clean bed, 24/7 nursing, and loving companionship for homeless senior citizens.',
    targetAmount: 500000,
    raisedAmount: 385000,
    status: 'ACTIVE',
  },
  {
    id: 'p2',
    title: 'Geriatric Healthcare & Emergency Response',
    category: 'Healthcare',
    description: 'Free medical consultations, regular health checkups, prescription medicines, and emergency hospital care.',
    targetAmount: 300000,
    raisedAmount: 240000,
    status: 'ACTIVE',
  },
  {
    id: 'p3',
    title: 'Senior Citizen Nutrition & Meals Program',
    category: 'Nutrition',
    description: 'Serving fresh, balanced, dietitian-approved meals three times a day to destitute elderly residents.',
    targetAmount: 250000,
    raisedAmount: 195000,
    status: 'ACTIVE',
  },
  {
    id: 'p4',
    title: 'Mental Health & Joyful Living Circle',
    category: 'Wellness',
    description: 'Organizing group yoga, bhajan sessions, mental health counseling, and recreational outings for seniors.',
    targetAmount: 150000,
    raisedAmount: 110000,
    status: 'ACTIVE',
  },
];

export const Programs = () => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterCategory, setFilterCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    setLoading(true);
    try {
      const res = await programService.getAll();
      if (res?.data && res.data.length > 0) {
        setPrograms(res.data);
      } else {
        setPrograms(DEFAULT_PROGRAMS);
      }
    } catch (err) {
      console.log('Using default programs fallback');
      setPrograms(DEFAULT_PROGRAMS);
    } finally {
      setLoading(false);
    }
  };

  const filteredPrograms = programs.filter((p) => {
    const matchesCat = filterCategory === 'ALL' || p.category?.toUpperCase() === filterCategory.toUpperCase();
    const matchesQuery = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Programs' }]} />
      
      <SectionTitle
        badge="Our Core Initiatives"
        title="Compassionate Programs Restoring Elder Dignity"
        subtitle="Explore our ongoing care projects, medical services, shelter programs, and nutrition drives for senior citizens."
      />

      {/* Filter and Search Toolbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16rem', marginBottom: '32rem' }}>
        <div style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap' }}>
          {['ALL', 'Shelter', 'Healthcare', 'Nutrition', 'Wellness'].map((cat) => (
            <button
              key={cat}
              className={`btn ${filterCategory === cat ? 'btn-primary' : 'btn-outline'} btn-sm`}
              onClick={() => setFilterCategory(cat)}
            >
              {cat === 'ALL' ? 'All Initiatives' : cat}
            </button>
          ))}
        </div>

        <div className="input-icon-wrapper" style={{ minWidth: '260rem' }}>
          <Search className="input-icon" size={18} />
          <input
            type="text"
            className="form-input with-icon"
            placeholder="Search programs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60rem 0' }}>
          <RefreshCw className="spin" size={32} style={{ color: 'var(--primary)' }} />
          <p style={{ marginTop: '12rem', color: 'var(--text-muted)' }}>Loading care programs...</p>
        </div>
      ) : filteredPrograms.length === 0 ? (
        <div className="glass-card text-center" style={{ padding: '60rem 20rem' }}>
          <HeartHandshake size={48} style={{ color: 'var(--text-muted)', marginBottom: '16rem' }} />
          <h3>No Matching Programs Found</h3>
          <p style={{ marginTop: '8rem', marginBottom: '20rem' }}>Try adjusting your search criteria or explore all initiatives.</p>
          <button className="btn btn-outline btn-md" onClick={() => { setFilterCategory('ALL'); setSearchQuery(''); }}>
            Reset Filters
          </button>
        </div>
      ) : (
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320rem, 1fr))', gap: '24rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredPrograms.map((prog) => {
            const progress = prog.targetAmount ? Math.min(100, Math.round((prog.raisedAmount / prog.targetAmount) * 100)) : 75;
            return (
              <div key={prog.id} className="glass-card" style={{ padding: '24rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12rem' }}>
                    <span className="badge badge-primary">{prog.category}</span>
                    <span className="badge badge-secondary">{prog.status || 'ACTIVE'}</span>
                  </div>
                  <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '12rem' }}>{prog.title}</h3>
                  <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)', marginBottom: '20rem' }}>{prog.description}</p>
                </div>

                <div>
                  <div style={{ marginBottom: '16rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 'var(--font-xs)', marginBottom: '6rem', color: 'var(--text-muted)' }}>
                      <span>Raised: ₹{(prog.raisedAmount || 0).toLocaleString()}</span>
                      <span>Goal: ₹{(prog.targetAmount || 0).toLocaleString()} ({progress}%)</span>
                    </div>
                    <div style={{ height: '8rem', background: 'var(--bg-border)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                      <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)', borderRadius: 'var(--radius-full)' }}></div>
                    </div>
                  </div>

                  <Link to="/donate">
                    <button className="btn btn-primary btn-md" style={{ width: '100%' }}>
                      Sponsor This Program
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
};

export default Programs;
