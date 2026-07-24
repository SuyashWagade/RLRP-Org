import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

// Page Imports
import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Transparency from '@/pages/Transparency/Transparency';
import Programs from '@/pages/Programs/Programs';
import ProgramDetails from '@/pages/Programs/ProgramDetails';
import Impact from '@/pages/Impact/Impact';
import Donate from '@/pages/Donate/Donate';
import Volunteer from '@/pages/Volunteer/Volunteer';
import CSR from '@/pages/CSR/CSR';
import Fundraise from '@/pages/Fundraise/Fundraise';
import Gallery from '@/pages/Gallery/Gallery';
import Blog from '@/pages/Blog/Blog';
import BlogDetails from '@/pages/Blog/BlogDetails';
import Events from '@/pages/Events/Events';
import EventDetails from '@/pages/Events/EventDetails';
import Team from '@/pages/Team/Team';
import Contact from '@/pages/Contact/Contact';
import PrivacyPolicy from '@/pages/PrivacyPolicy/PrivacyPolicy';
import Terms from '@/pages/Terms/Terms';
import RefundPolicy from '@/pages/RefundPolicy/RefundPolicy';
import FAQ from '@/pages/FAQ/FAQ';
import Sitemap from '@/pages/Sitemap/Sitemap';
import NotFound from '@/pages/NotFound/NotFound';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="transparency" element={<Transparency />} />
        
        <Route path="programs" element={<Programs />} />
        <Route path="programs/:id" element={<ProgramDetails />} />

        <Route path="impact" element={<Impact />} />
        <Route path="donate" element={<Donate />} />
        <Route path="volunteer" element={<Volunteer />} />
        <Route path="csr" element={<CSR />} />
        <Route path="fundraise" element={<Fundraise />} />
        <Route path="gallery" element={<Gallery />} />

        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetails />} />

        <Route path="events" element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />

        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />

        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms" element={<Terms />} />
        <Route path="refund-policy" element={<RefundPolicy />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="sitemap" element={<Sitemap />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
