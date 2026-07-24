import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button/Button';
import { ArrowRight, Heart } from 'lucide-react';
import './HomeBanner.css';

export const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="container banner-container">
        <div className="banner-content">
          <span className="banner-badge">Empowering Tomorrow, Today</span>
          <h1 className="banner-title">
            Driving Sustainable <span className="text-gradient">Social Impact</span> Across Global Communities
          </h1>
          <p className="banner-subtitle">
            RLRP Organization works at the grassroots to empower underprivileged communities through education, healthcare, and sustainable livelihood programs.
          </p>
          <div className="banner-actions">
            <Link to="/donate">
              <Button variant="secondary" size="lg" icon={Heart}>
                Donate Now
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="outline" size="lg" icon={ArrowRight}>
                Explore Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
