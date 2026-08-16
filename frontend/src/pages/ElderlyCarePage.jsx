import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const ElderlyCarePage = () => {
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
          className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-500 hover:text-sky-400 mb-8 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home Page</span>
        </Link>

        {/* Hero Title Header */}
        <div className={`rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden border transition-colors duration-300 ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-500 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 mb-4">
            <i className="fa-solid fa-hand-holding-heart text-amber-500"></i>
            <span>What We Do Initiative • Elderly Dignity & Care</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Elderly Care & Senior Wellness
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Providing full-spectrum medical aid, nutritious diet, emotional support, and round-the-clock shelter for destitute, abandoned, and sick elderly citizens at Savali Nivara Kendra.
          </p>
        </div>

        {/* Banner Section */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-slate-700/30 shadow-2xl h-80 sm:h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=1200&q=80" 
            alt="Elderly Care & Senior Wellness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="text-xl font-bold">"Every senior citizen deserves to live with warmth, honor, and loving care."</p>
          </div>
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 text-sm leading-relaxed">
            <div className={`border rounded-2xl p-6 space-y-4 transition-colors duration-300 ${
              darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Restoring Dignity to Abandoned Elderly
              </h3>
              <p>
                In Pune and surrounding areas, hundreds of senior citizens are left without shelter, medical treatment, or family assistance. Many suffer from severe chronic illnesses, dementia, or paralysis with no one to care for them.
              </p>
              <p>
                At Savali Nivara Kendra, RLRP welcomes homeless and destitute elderly individuals with open arms, offering free shelter, doctor visits, physiotherapy, daily hot nutritious meals, and compassionate companionship.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Key Impact Highlights
              </h3>
              <ul className="space-y-3">
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors duration-300 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-bed-pulse"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>24/7 Assisted Senior Care:</strong> Continuous physical, medical, and emotional care for elderly residents.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors duration-300 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-bowl-food"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Specialized Senior Nutrition:</strong> Fresh, diet-controlled meals and health supplements tailored for aging bodies.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors duration-300 ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-heart-circle-check"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Family Reconciliation:</strong> Reconnecting lost senior citizens with their families wherever possible.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`border rounded-3xl p-6 sticky top-28 shadow-xl space-y-6 transition-colors duration-300 ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className={`text-lg font-bold flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <i className="fa-solid fa-shield-heart text-amber-500"></i>
                <span>Sponsor Senior Care</span>
              </h4>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Help us care for abandoned grandmothers and grandfathers by sponsoring their monthly food and medical needs.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>1 Month Meals & Medicines:</span>
                  <span className="font-bold text-amber-500">₹1,500</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Senior Medical Equipment:</span>
                  <span className="font-bold text-sky-500">₹3,500</span>
                </div>
              </div>

              <Link
                to="/donate"
                className="gradient-button w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-lg"
              >
                <i className="fa-solid fa-heart text-white"></i>
                <span>Support Elderly Care</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ElderlyCarePage;
