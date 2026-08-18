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
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Who are we',       id: 'who-are-we' },
    { label: 'What we do',       id: 'what-we-do' },
    { label: 'Stories of Change',id: 'stories-section' },
    { label: 'Why Trust Us',     id: 'why-trust-us' },
    { label: 'Impact',           id: 'impact' },
    { label: 'Contact',          id: 'contact' },
  ];

  /* ─── Navbar bg logic:
     • At top of hero (not scrolled) → fully transparent, white text (video shows through)
     • Scrolled → solid glass bg, appropriate text colors for current theme
  ─── */
  const navBg = isScrolled
    ? darkMode
      ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl'
      : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md'
    : 'bg-transparent border-b border-white/10';   // transparent over hero video

  // When transparent (over video) → always white text so it's readable
  const linkColor = isScrolled
    ? darkMode
      ? 'text-slate-200 hover:text-orange-400'
      : 'text-slate-700 hover:text-blue-800'
    : 'text-white/90 hover:text-orange-400';

  const logoTextColor = isScrolled
    ? darkMode ? 'text-white' : 'text-blue-900'
    : 'text-white';

  const logoSubColor = isScrolled
    ? darkMode ? 'text-slate-400' : 'text-slate-500'
    : 'text-white/70';

  const toggleBtnCls = isScrolled
    ? darkMode
      ? 'bg-slate-800 border-slate-700 text-amber-400 hover:bg-slate-700'
      : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
    : 'bg-white/10 border-white/20 text-white hover:bg-white/20';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">

      {/* ── Top Utility Strip: tagline + socials ── */}
      <div
        className={`py-1.5 px-4 transition-all duration-300 ${
          isScrolled
            ? darkMode
              ? 'bg-slate-950 border-b border-slate-800'
              : 'bg-blue-900 border-b border-blue-800'
            : 'bg-slate-950/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Tagline */}
          <div className="flex items-center gap-2 text-[11px] font-medium tracking-wide text-blue-100">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse inline-block"></span>
            <span>Real Life Real People • Savali Nivara Kendra (Since 2010)</span>
          </div>
          {/* Social Icons only */}
          <div className="flex items-center gap-1.5">
            {[
              { href: 'https://facebook.com',  icon: 'fa-facebook-f',  label: 'Facebook'  },
              { href: 'https://instagram.com', icon: 'fa-instagram',   label: 'Instagram' },
              { href: 'https://twitter.com',   icon: 'fa-x-twitter',   label: 'Twitter'   },
              { href: 'https://youtube.com',   icon: 'fa-youtube',     label: 'YouTube'   },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-6 h-6 rounded-full bg-white/10 hover:bg-orange-500 text-white transition-all flex items-center justify-center text-[10px]"
              >
                <i className={`fa-brands ${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Navigation Bar ── */}
      <nav className={`transition-all duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-orange-500 shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform">
              <img
                src="/assets/rlrp-logo.jpg"
                alt="RLRP Logo"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => { e.target.src = 'https://placehold.co/80x80?text=RLRP'; }}
              />
            </div>
            <div>
              <div className={`font-black text-base tracking-tight flex items-center gap-1.5 transition-colors ${logoTextColor}`}>
                RLRP
                <span className="text-[10px] font-bold bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                  Since 2010
                </span>
              </div>
              <div className={`text-[10px] font-medium tracking-wide transition-colors ${logoSubColor}`}>
                Real Life Real People • Savali Nivara Kendra
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-semibold transition-colors ${linkColor}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions: theme toggle + donate */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Single theme toggle icon */}
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${toggleBtnCls}`}
              title={darkMode ? 'Switch to Light' : 'Switch to Dark'}
              aria-label="Toggle theme"
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            </button>

            <Link
              to="/donate"
              className="gradient-button px-5 py-2.5 rounded-full text-sm font-extrabold flex items-center gap-2 text-white"
            >
              <i className="fa-solid fa-heart animate-pulse"></i>
              <span>Donate Now</span>
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${toggleBtnCls}`}
            >
              <i className={`fa-solid ${darkMode ? 'fa-sun' : 'fa-moon'} text-sm`}></i>
            </button>
            <Link
              to="/donate"
              className="gradient-button px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 text-white sm:hidden"
            >
              <i className="fa-solid fa-heart"></i>
              <span>Donate</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all ${toggleBtnCls}`}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-1 animate-fadeIn ${
              darkMode
                ? 'bg-slate-900/95 border-slate-800 backdrop-blur-md'
                : 'bg-white/95 border-slate-200 backdrop-blur-md'
            }`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2.5 px-3 rounded-lg font-semibold text-sm transition-colors ${
                  darkMode
                    ? 'text-slate-200 hover:bg-slate-800 hover:text-orange-400'
                    : 'text-slate-800 hover:bg-blue-50 hover:text-blue-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-3">
              <Link
                to="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="gradient-button w-full py-3 rounded-xl text-center font-extrabold text-sm flex items-center justify-center gap-2 text-white"
              >
                <i className="fa-solid fa-heart"></i>
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
