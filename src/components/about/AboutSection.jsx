import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, HeartPulse, Home, Award } from 'lucide-react';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-grid">
        <motion.div 
          className="glass-card about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="about-icon primary"><Target size={32} /></div>
          <h3>Our Core Mission</h3>
          <p>
            To provide safe shelter, compassionate geriatric care, nutritious food, and medical assistance to homeless, destitute, and abandoned senior citizens, ensuring they live with grace and dignity.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="about-icon secondary"><Eye size={32} /></div>
          <h3>Our Vision</h3>
          <p>
            A society where no elderly individual suffers from neglect, isolation, or hunger, and where every senior citizen receives the respect, love, and professional healthcare they deserve in their golden years.
          </p>
        </motion.div>

        <motion.div 
          className="glass-card about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="about-icon accent"><ShieldCheck size={32} /></div>
          <h3>Core Values & Trust</h3>
          <p>
            Unconditional empathy, 100% financial transparency, 80G tax certification, round-the-clock medical care, and family-like community warmth for all senior residents.
          </p>
        </motion.div>
      </div>

      {/* Story & Background Box */}
      <motion.div 
        className="glass-card about-story-box"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="story-content">
          <span className="badge badge-primary" style={{ marginBottom: '12rem' }}>Established With Compassion</span>
          <h2>The Journey of Real Life Real People's Savali Niwara Kendra</h2>
          <p>
            Founded to address the growing vulnerability of abandoned elderly individuals, RLRP's Savali Niwara Kendra operates a state-of-the-art residential old age home equipped with dedicated nursing care, emergency medical ties with local hospitals, and wholesome organic dietary support.
          </p>
          <p>
            Over the years, our organization has rescued hundreds of senior citizens off the streets, restored their physical health through specialized medical care, and re-ignited joy in their lives through community celebrations, yoga, music therapy, and spiritual sessions.
          </p>
        </div>

        <div className="story-highlights">
          <div className="highlight-item">
            <Home className="highlight-icon" size={24} />
            <div>
              <h4>24/7 Assisted Living Shelter</h4>
              <p>Clean, airy rooms, geriatric beds, wheelchair accessibility, and sanitized living quarters.</p>
            </div>
          </div>

          <div className="highlight-item">
            <HeartPulse className="highlight-icon" size={24} />
            <div>
              <h4>Specialized Doctors & Nursing</h4>
              <p>On-call medical specialists, daily vitals tracking, and emergency ambulance access.</p>
            </div>
          </div>

          <div className="highlight-item">
            <Award className="highlight-icon" size={24} />
            <div>
              <h4>Govt Registered & 80G Tax Exempt</h4>
              <p>Fully compliant non-profit institution with transparent audit reports and donor receipts.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
