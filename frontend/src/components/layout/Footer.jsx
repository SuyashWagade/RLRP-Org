import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';

export const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`pt-16 pb-8 border-t transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-950 text-slate-300 border-slate-800' 
        : 'bg-slate-900 text-slate-300 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 rounded-full overflow-hidden bg-white p-0.5 border-2 border-orange-500 shadow-md">
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
                <h3 className="text-white font-bold text-lg leading-snug">RLRP Savali Nivara</h3>
                <p className="text-xs text-orange-400 font-medium">Real Life Real People (Since 2010)</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-300">
              Dedicated to rescuing destitute senior citizens from the streets, providing full bedside care for patients at YCM Hospital, and running Savali Nivara Kendra old age shelter home.
            </p>
            <div className="pt-2 flex items-center space-x-2 text-xs text-emerald-400 font-semibold">
              <i className="fa-solid fa-shield-halved text-emerald-400"></i>
              <span>Registered NGO • 80G Tax Exemption Certified</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-orange-500 pl-2">
              Quick Clicks
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#who-are-we" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-orange-500 text-[10px]"></i> Who Are We
                </a>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-orange-500 text-[10px]"></i> What We Do
                </a>
              </li>
              <li>
                <a href="#stories-section" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-orange-500 text-[10px]"></i> Stories of Change
                </a>
              </li>
              <li>
                <a href="#why-trust-us" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-orange-500 text-[10px]"></i> Why Trust Us
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-orange-400 transition-colors flex items-center gap-2">
                  <i className="fa-solid fa-angle-right text-orange-500 text-[10px]"></i> Our Impact (2010–2026)
                </a>
              </li>
              <li>
                <Link to="/donate" className="hover:text-amber-400 transition-colors flex items-center gap-2 text-amber-300 font-semibold pt-1">
                  <i className="fa-solid fa-heart text-amber-400"></i> Donate Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Initiatives */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-amber-400 pl-2">
              Senior Initiatives
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/what-we-do/care-for-patients" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span>Care For Senior Patients (YCM)</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </Link>
              </li>
              <li>
                <Link to="/what-we-do/rescue-rehabilitation" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span>Homeless Senior Rescue</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </Link>
              </li>
              <li>
                <Link to="/what-we-do/elderly-care" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span>Elderly Nutrition & Dignity</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </Link>
              </li>
              <li>
                <Link to="/what-we-do/care-for-patients" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <span>Senior Medical & Wheelchair Aid</span>
                  <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-500"></i>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Matching requirement 7 & 4) */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 border-l-2 border-emerald-400 pl-2">
              Reach Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2.5">
                <i className="fa-solid fa-location-dot text-orange-400 shrink-0 mt-0.5 text-sm"></i>
                <span>Savali Nivara Kendra, Pune - Nashik Highway, Pimpri-Chinchwad, Pune, Maharashtra 411018</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fa-solid fa-phone text-amber-400 shrink-0 text-sm"></i>
                <span>+91 98765 43210 / +91 98220 00000</span>
              </li>
              <li className="flex items-center space-x-2.5">
                <i className="fa-solid fa-envelope text-emerald-400 shrink-0 text-sm"></i>
                <span>info@realliferealpeople.org</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Real Life Real People (RLRP) Savali Nivara Kendra. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-slate-400">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
