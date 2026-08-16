import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const RescueRehabPage = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-28 pb-20 transition-colors duration-300 min-h-screen ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home Page</span>
        </Link>

        {/* Hero Title Header */}
        <div className={`rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden border transition-colors ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-500 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/20 mb-4">
            <i className="fa-solid fa-house-chimney-medical text-emerald-500"></i>
            <span>What We Do Initiative • Savali Nivara Shelter</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Homeless Senior Rescue & Rehabilitation
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We rescue vulnerable, destitute elderly individuals from the streets of Pune and bring them to Savali Nivara Kendra. We provide shelter, food, geriatric medical care, and work towards reuniting them with their families.
          </p>
        </div>

        {/* Image Banner */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-slate-700/30 shadow-2xl h-80 sm:h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" 
            alt="Savali Nivara Rescue & Rehabilitation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 text-sm leading-relaxed">
            <div className={`border rounded-2xl p-6 space-y-4 transition-colors ${
              darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                The Mission of Savali Nivara Kendra
              </h3>
              <p>
                Savali Nivara Kendra serves as a permanent safe haven for destitute, elderly, or memory-loss senior citizens wandering the streets. Many have been abandoned by relatives or left stranded without care.
              </p>
              <p>
                Our 24/7 rescue team provides medical evaluation, warm clothing, hot meals, physical therapy, and continuous care until they regain health, dignity, and peace of mind.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Our Senior Care Achievements (2010 – 2026)
              </h3>
              <ul className="space-y-3">
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-users-line"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>100+ Senior Resident Inmates:</strong> Currently living happily at Savali Nivara Kendra receiving 24/7 shelter and medical care.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-house-chimney-user"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>1,000+ Senior Shelter Admissions:</strong> Homeless elderly individuals rescued from streets and provided emergency lodging.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-people-roof"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>5,000+ Family Reunifications:</strong> Elderly citizens traced back home and reunited with loved ones across India.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`border rounded-3xl p-6 sticky top-28 shadow-xl space-y-6 transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className={`text-lg font-bold flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <i className="fa-solid fa-shield-heart text-emerald-500"></i>
                <span>Support Savali Shelter</span>
              </h4>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Help us keep our senior shelter running and rescue more abandoned grandfathers and grandmothers.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Sponsor 1 Senior (Monthly):</span>
                  <span className="font-bold text-emerald-500">₹3,000</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Senior Rescue & Medical:</span>
                  <span className="font-bold text-sky-500">₹2,000</span>
                </div>
              </div>

              <Link
                to="/donate"
                className="gradient-button w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 text-white shadow-lg"
              >
                <i className="fa-solid fa-heart"></i>
                <span>Donate For Senior Rescue</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default RescueRehabPage;
