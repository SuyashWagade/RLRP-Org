import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const WhoWeAreSection = () => {
  const { darkMode } = useTheme();

  return (
    <section id="who-are-we" className={`py-24 relative transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className={`relative rounded-3xl overflow-hidden border-2 shadow-2xl group ${
              darkMode ? 'border-slate-800 bg-slate-900' : 'border-slate-200 bg-slate-100 shadow-slate-200'
            }`}>
              <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=800&q=80" 
                alt="RLRP Savali Nivara Senior Care Volunteers" 
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-xl text-white">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-black text-sm">
                    16+
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Years of Dedicated Senior Service</h4>
                    <p className="text-xs text-slate-300">Founded in 2010 • Pune, Maharashtra</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 hidden sm:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-2xl shadow-xl border border-orange-400/40 text-xs font-bold">
              <i className="fa-solid fa-shield-halved text-sm"></i>
              <span>Government Registered NGO</span>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20">
              <i className="fa-solid fa-users mr-1"></i> Who We Are
            </div>
            
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Real Life Real People (RLRP) — Savali Nivara Kendra
            </h2>

            <p className={`text-base leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Established in 2010, Real Life Real People (RLRP) is a non-profit humanitarian organization dedicated to rescuing, caring for, and rehabilitating abandoned elderly citizens and destitute hospital patients across Pune.
            </p>

            <p className={`text-sm leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              We operate daily bedside care for helpless elderly patients at YCM Hospital, run Savali Nivara Kendra shelter home for homeless seniors rescued from the streets, and ensure dignity for every elderly soul.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className={`flex items-center space-x-2 text-xs font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                <span>Daily Warm Nutrition & Medicines</span>
              </div>
              <div className={`flex items-center space-x-2 text-xs font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                <span>Savali Senior Care Shelter Home</span>
              </div>
              <div className={`flex items-center space-x-2 text-xs font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                <span>Street-to-Family Reunification</span>
              </div>
              <div className={`flex items-center space-x-2 text-xs font-semibold ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <i className="fa-solid fa-circle-check text-emerald-500 text-sm"></i>
                <span>Dignified Geriatric & End-of-Life Care</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/who-we-are"
                className="gradient-button px-6 py-3 rounded-full text-xs font-extrabold text-white flex items-center space-x-2 shadow-lg hover:shadow-orange-500/40 transition-all"
              >
                <span>Read Our Full Story</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAreSection;
