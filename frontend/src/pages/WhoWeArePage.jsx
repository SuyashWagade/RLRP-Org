import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const WhoWeArePage = () => {
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

        {/* Header Banner */}
        <div className={`rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl border transition-colors ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 mb-4">
            <i className="fa-solid fa-users text-orange-500"></i>
            <span>Established 2010</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Real Life Real People (RLRP)
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Real Life Real People (RLRP) Savali Nivara Kendra is a non-profit trust based in Pune, dedicated to restoring human dignity, love, and healthcare to homeless senior citizens and abandoned patients.
          </p>
        </div>

        {/* Narrative */}
        <div className={`border rounded-3xl p-8 space-y-6 leading-relaxed text-sm transition-colors ${
          darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-md'
        }`}>
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Our Founding Journey for Senior Citizens
          </h2>
          <p>
            Founded in 2010 by passionate local citizens in Pimpri-Chinchwad, Pune, RLRP began with a simple observation: dozens of destitute elderly patients at YCM Hospital were abandoned without family support or daily food.
          </p>
          <p>
            What started as a small daily tiffin distribution expanded into building <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Savali Nivara Kendra</strong> — a state-of-the-art elder rescue shelter home that rescues homeless elderly individuals from the streets, provides medical care, and re-integrates them with their families or provides lifelong shelter.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhoWeArePage;
