import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import HeroVideoBanner from '../components/home/HeroVideoBanner';
import DifferenceSection from '../components/home/DifferenceSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import TogetherSmileSection from '../components/home/TogetherSmileSection';
import ImpactStoriesSection from '../components/home/ImpactStoriesSection';
import ImpactSection from '../components/home/ImpactSection';
import WhoWeAreSection from '../components/home/WhoWeAreSection';
import WhyTrustUsSection from '../components/home/WhyTrustUsSection';
import ContactSection from '../components/home/ContactSection';

export const HomePage = () => {
  const location = useLocation();
  const { darkMode } = useTheme();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* 1. Hero Video Banner with Quote & Video Controls */}
      <HeroVideoBanner />

      {/* 2. Difference Horizontal Carousel */}
      <DifferenceSection />

      {/* 3. What We Do Section */}
      <WhatWeDoSection />

      {/* 4. Together Smile Interactive Section (Image 3 Design) */}
      <TogetherSmileSection />

      {/* 5. 20-Second Video Showcase & 4 Impact Story Cards (Image 4 Design) */}
      <ImpactStoriesSection />

      {/* 6. Impact Statistics Grid */}
      <ImpactSection />

      {/* 7. Who Are We */}
      <WhoWeAreSection />

      {/* 8. Why Trust Us */}
      <WhyTrustUsSection />

      {/* 9. Contact Us Query Form & Details (Image 2 Design) */}
      <ContactSection />
    </div>
  );
};

export default HomePage;
