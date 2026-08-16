import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Who are we', id: 'who-are-we' },
    { label: 'What we do', id: 'what-we-do' },
    { label: 'Stories of Change', id: 'stories-section' },
    { label: 'Why Trust Us', id: 'why-trust-us' },
    { label: 'Impact', id: 'impact' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className={`py-1.5 px-4 text-xs border-b transition-colors duration-300 ${
        darkMode 
          ? 'bg-slate-950 text-slate-300 border-slate-800/80' 
          : 'bg-slate-900 text-slate-200 border-slate-800'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-2">
          {/* Left Contact Icons without labels */}
          <div className="flex items-center space-x-4">
            <a 
              href="tel:+919876543210" 
              className="flex items-center space-x-1.5 hover:text-sky-400 transition-colors"
              title="Call Us: +91 98765 43210"
            >
              <i className="fa-solid fa-phone text-sky-400"></i>
              <span className="font-semibold text-xs sm:text-xs">+91 98765 43210</span>
            </a>

            <a 
              href="mailto:info@realliferealpeople.org" 
              className="hidden sm:flex items-center space-x-1.5 hover:text-amber-400 transition-colors"
              title="Email Us: info@realliferealpeople.org"
            >
              <i className="fa-solid fa-envelope text-amber-400"></i>
              <span className="font-semibold text-xs">info@realliferealpeople.org</span>
            </a>

            <span className="hidden lg:inline-flex items-center text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-700/50 text-[11px] font-medium">
              <i className="fa-solid fa-shield-halved mr-1.5"></i> 80G Tax Exemption Certified
            </span>
          </div>

          {/* Right Social Icons + Theme Switch (NO "Connect with us:" text label as requested) */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2.5">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-sky-600 hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <i className="fa-brands fa-facebook-f text-xs"></i>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-pink-600 hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-sky-500 hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <i className="fa-brands fa-x-twitter text-xs"></i>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="YouTube" 
                className="w-7 h-7 rounded-full bg-slate-800/80 hover:bg-red-600 hover:text-white transition-all flex items-center justify-center text-slate-300"
              >
                <i className="fa-brands fa-youtube text-xs"></i>
              </a>
            </div>

            {/* Dark / Light Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme Mode"
              className="ml-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-400/30 transition-all text-xs font-semibold"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? (
                <>
                  <i className="fa-solid fa-sun text-amber-400"></i>
                  <span className="hidden sm:inline text-slate-200">Light</span>
                </>
              ) : (
                <>
                  <i className="fa-solid fa-moon text-sky-300"></i>
                  <span className="hidden sm:inline text-slate-200">Dark</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        darkMode
          ? isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-md shadow-xl py-2.5 border-b border-slate-800' 
            : 'bg-slate-900/85 backdrop-blur-md py-3.5 border-b border-slate-800/50'
          : isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-md py-3.5 border-b border-slate-200/80'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border-2 border-orange-500 shadow-md group-hover:scale-105 transition-transform">
              <img 
                src="/assets/rlrp-logo.jpg" 
                alt="RLRP Logo" 
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/100x100?text=RLRP";
                }}
              />
            </div>
            <div>
              <div className={`font-extrabold text-lg sm:text-xl tracking-tight transition-colors flex items-center gap-1.5 ${
                darkMode ? 'text-white group-hover:text-sky-400' : 'text-slate-900 group-hover:text-orange-600'
              }`}>
                RLRP <span className="text-[11px] bg-orange-500/20 text-orange-500 px-2 py-0.5 rounded-full border border-orange-500/30">Since 2010</span>
              </div>
              <div className={`text-[11px] font-medium tracking-wide ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Real Life Real People • Savali Nivara Kendra
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-colors relative py-1 hover:text-orange-500 ${
                  darkMode ? 'text-slate-200 hover:text-orange-400' : 'text-slate-700 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors border ${
                darkMode 
                  ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700' 
                  : 'bg-slate-100 border-slate-300 text-amber-600 hover:bg-slate-200'
              }`}
              title={darkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-base`}></i>
            </button>

            <Link
              to="/donate"
              className="gradient-button px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold flex items-center gap-2 shadow-lg hover:shadow-orange-500/40 transition-all text-white"
            >
              <i className="fa-solid fa-heart text-white animate-pulse"></i>
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center space-x-2 sm:space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg text-xs ${
                darkMode ? 'bg-slate-800 text-amber-400' : 'bg-slate-200 text-amber-600'
              }`}
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>

            <Link
              to="/donate"
              className="gradient-button px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 sm:hidden text-white"
            >
              <i className="fa-solid fa-heart text-white"></i>
              <span>Donate</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className={`p-2 rounded-lg focus:outline-none border ${
                darkMode ? 'bg-slate-800 text-slate-200 border-slate-700' : 'bg-slate-100 text-slate-800 border-slate-300'
              }`}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 animate-fadeIn transition-colors ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2.5 px-3 rounded-lg font-medium transition-colors ${
                  darkMode 
                    ? 'text-slate-200 hover:bg-slate-800 hover:text-orange-400' 
                    : 'text-slate-800 hover:bg-slate-100 hover:text-orange-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-button w-full py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2 text-white"
              >
                <i className="fa-solid fa-heart text-white"></i>
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
