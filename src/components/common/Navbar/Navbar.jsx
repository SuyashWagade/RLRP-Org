import logo from "../../../assets/rlrp-logo.jpg";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, APP_INFO } from '@/utils/constants';
import { useTheme } from '@/context/ThemeContext';
import { Sun, Moon, Menu, X, Heart, Shield } from 'lucide-react';
import './Navbar.css';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo-icon">
           <img src={logo} alt="RLRP Logo" />
          </div>
          <span className="brand-text">{APP_INFO.NAME}</span>
        </Link>

        <nav className={`navbar-nav ${isOpen ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}

          <div className="navbar-actions-mobile">
            <Link to="/admin" className="btn-admin" onClick={() => setIsOpen(false)}>
              <Shield size={16} /> Admin Portal
            </Link>
            <Link to="/donate" className="btn-donate" onClick={() => setIsOpen(false)}>
              <Heart size={16} /> Donate Now
            </Link>
          </div>
        </nav>

        <div className="navbar-actions">
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link to="/admin" className="btn-admin desktop-only">
            <Shield size={16} /> Admin Portal
          </Link>

          <Link to="/donate" className="btn-donate desktop-only">
            <Heart size={16} /> Donate Now
          </Link>

          <button
            className="menu-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
