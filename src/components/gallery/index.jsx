import React, { useState, useEffect } from 'react';
import { galleryService } from '@/services/galleryService';
import { motion } from 'framer-motion';
import { RefreshCw, Image as ImageIcon, Maximize2, X } from 'lucide-react';

const FALLBACK_GALLERY = [
  { id: 'g1', title: 'Senior Citizens Medical Health Checkup Camp', category: 'Healthcare', imageUrl: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop', caption: 'Doctors examining elderly residents at Savali Niwara.' },
  { id: 'g2', title: 'Diwali Festival Celebrations & Meals', category: 'Events', imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&auto=format&fit=crop', caption: 'Lighting lamps and distributing sweets with our senior residents.' },
  { id: 'g3', title: 'Daily Organic Meals & Dining Hall', category: 'Nutrition', imageUrl: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&auto=format&fit=crop', caption: 'Nutritious lunch served fresh daily in clean dining area.' },
  { id: 'g4', title: 'Yoga & Morning Wellness Session', category: 'Wellness', imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop', caption: 'Elderly citizens engaging in light morning stretch and breathing exercises.' },
  { id: 'g5', title: 'Comfortable Residential Shelter Rooms', category: 'Shelter', imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop', caption: 'Well-ventilated and sanitized room facilities for residents.' },
  { id: 'g6', title: 'Volunteer Interaction & Storytelling Hour', category: 'Volunteers', imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop', caption: 'Volunteers sharing stories and laughter with senior citizens.' },
];

export const GalleryGrid = ({ items = [] }) => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await galleryService.getAll();
      if (res?.data && res.data.length > 0) {
        setGalleryItems(res.data);
      } else {
        setGalleryItems(FALLBACK_GALLERY);
      }
    } catch (err) {
      setGalleryItems(FALLBACK_GALLERY);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = (items.length > 0 ? items : galleryItems).filter(
    (item) => activeCategory === 'ALL' || item.category?.toUpperCase() === activeCategory.toUpperCase()
  );

  return (
    <div>
      {/* Category Tabs */}
      <div style={{ display: 'flex', gap: '8rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32rem' }}>
        {['ALL', 'Healthcare', 'Events', 'Nutrition', 'Wellness', 'Shelter'].map((cat) => (
          <button
            key={cat}
            className={`btn ${activeCategory === cat ? 'btn-primary' : 'btn-outline'} btn-sm`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat === 'ALL' ? 'All Media' : cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '60rem 0' }}>
          <RefreshCw className="spin" size={32} style={{ color: 'var(--primary)' }} />
          <p style={{ marginTop: '12rem', color: 'var(--text-muted)' }}>Loading media gallery...</p>
        </div>
      ) : (
        <motion.div 
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300rem, 1fr))', gap: '24rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              className="glass-card"
              style={{ overflow: 'hidden', cursor: 'pointer', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedImage(item)}
            >
              <div style={{ height: '220rem', position: 'relative', overflow: 'hidden', background: 'var(--primary-light)' }}>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&auto=format&fit=crop'; }}
                />
                <div style={{ position: 'absolute', top: '12rem', right: '12rem', background: 'rgba(0,0,0,0.6)', padding: '6rem', borderRadius: 'var(--radius-sm)', color: '#fff' }}>
                  <Maximize2 size={16} />
                </div>
              </div>
              <div style={{ padding: '20rem' }}>
                <span className="badge badge-primary" style={{ marginBottom: '8rem' }}>{item.category || 'Elderly Care'}</span>
                <h4 style={{ fontSize: 'var(--font-md)', margin: 0, color: 'var(--text-primary)' }}>{item.title}</h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Image Preview Modal */}
      {selectedImage && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8rem)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3000, padding: '20rem' }}
          onClick={() => setSelectedImage(null)}
        >
          <div className="glass-card" style={{ maxWidth: '800rem', width: '100%', padding: '24rem', position: 'relative' }} onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              style={{ position: 'absolute', top: '16rem', right: '16rem', color: 'var(--text-primary)', background: 'var(--bg-border)', padding: '8rem', borderRadius: '50%' }}
            >
              <X size={20} />
            </button>
            <img 
              src={selectedImage.imageUrl} 
              alt={selectedImage.title} 
              style={{ width: '100%', maxHeight: '480rem', objectFit: 'cover', borderRadius: 'var(--radius-md)', marginBottom: '16rem' }} 
            />
            <h3>{selectedImage.title}</h3>
            {selectedImage.caption && <p style={{ color: 'var(--text-secondary)', marginTop: '8rem' }}>{selectedImage.caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
