import React from 'react';
import { Link } from 'react-router-dom';
import { APP_INFO } from '@/utils/constants';
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="brand-logo-icon">R</div>
              <span>{APP_INFO.NAME}</span>
            </div>
            <p className="footer-desc">{APP_INFO.SLOGAN}</p>
            <div className="social-links">
              <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Our Programs</Link></li>
              <li><Link to="/impact">Social Impact</Link></li>
              <li><Link to="/transparency">Transparency</Link></li>
              <li><Link to="/team">Our Team</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="footer-col">
            <h4>Get Involved</h4>
            <ul>
              <li><Link to="/donate">Make a Donation</Link></li>
              <li><Link to="/volunteer">Become a Volunteer</Link></li>
              <li><Link to="/csr">CSR Partnerships</Link></li>
              <li><Link to="/fundraise">Start a Fundraiser</Link></li>
              <li><Link to="/events">Upcoming Events</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col contact-col">
            <h4>Contact Us</h4>
            <div className="contact-item">
              <MapPin size={18} /> <span>{APP_INFO.ADDRESS}</span>
            </div>
            <div className="contact-item">
              <Mail size={18} /> <span>{APP_INFO.EMAIL}</span>
            </div>
            <div className="contact-item">
              <Phone size={18} /> <span>{APP_INFO.PHONE}</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {APP_INFO.NAME}. All rights reserved.</p>
          <div className="legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund-policy">Refund Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
