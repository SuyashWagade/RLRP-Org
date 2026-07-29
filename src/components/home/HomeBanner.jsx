import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/common/Button/Button';
import { ArrowRight, Heart, Home, ShieldCheck, HeartPulse, PhoneCall } from 'lucide-react';
import './HomeBanner.css';

export const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="container banner-container">
        <motion.div 
          className="banner-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="banner-badge">
            <ShieldCheck size={16} /> Real Life Real People's Savali Niwara Kendra
          </div>

          <h1 className="banner-title">
            Restoring <span className="text-gradient-primary">Dignity</span>, Comfort & Loving Care for Our Senior Citizens
          </h1>

          <p className="banner-subtitle">
            Providing 24/7 medical shelter, nutritious food, healthcare, and a loving home to abandoned and destitute elderly individuals.
          </p>

          <div className="banner-actions">
            <Link to="/donate">
              <Button variant="secondary" size="lg" icon={Heart}>
                Donate & Save A Life
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" size="lg" icon={HeartPulse}>
                Become A Volunteer
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg" icon={PhoneCall}>
                Emergency Helpline
              </Button>
            </Link>
          </div>

          <div className="banner-stats-mini">
            <div className="mini-stat-card">
              <h3>500+</h3>
              <p>Elderly Lives Nurtured</p>
            </div>
            <div className="mini-stat-card">
              <h3>24/7</h3>
              <p>Medical & Nursing Care</p>
            </div>
            <div className="mini-stat-card">
              <h3>100%</h3>
              <p>Transparent & Verified</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeBanner;
