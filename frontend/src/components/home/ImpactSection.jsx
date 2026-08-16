import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ImpactSection = () => {
  const { darkMode } = useTheme();

  const stats = [
    {
      number: '100+',
      label: 'Senior citizens currently living at Savali Nivara',
      icon: 'fa-solid fa-users-line',
      color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
    },
    {
      number: '1,000+',
      label: 'Homeless seniors given admission & shelter',
      icon: 'fa-solid fa-house-chimney-user',
      color: 'text-amber-500 bg-amber-500/10 border-amber-500/20',
    },
    {
      number: '422+',
      label: 'Elderly citizens reunited with their families',
      icon: 'fa-solid fa-people-roof',
      color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
    },
    {
      number: '122',
      label: 'Rehabilitated seniors now working independently',
      icon: 'fa-solid fa-user-check',
      color: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    },
    {
      number: '500,000+',
      label: 'Meals distributed to hospital patients',
      icon: 'fa-solid fa-bowl-rice',
      color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    },
    {
      number: '2,900+',
      label: 'Elderly provided medical care & wheelchairs',
      icon: 'fa-solid fa-wheelchair',
      color: 'text-teal-500 bg-teal-500/10 border-teal-500/20',
    },
    {
      number: '1,200+',
      label: 'Dignified last rites of unknown hospital deceased',
      icon: 'fa-solid fa-hands-holding-child',
      color: 'text-rose-500 bg-rose-500/10 border-rose-500/20',
    },
    {
      number: '250+',
      label: 'Elderly health camps & diagnostic drives',
      icon: 'fa-solid fa-stethoscope',
      color: 'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
    },
    {
      number: '5,000+',
      label: 'Senior rescue operations & family reconciliations',
      icon: 'fa-solid fa-heart-circle-check',
      color: 'text-cyan-500 bg-cyan-500/10 border-cyan-500/20',
    },
  ];

  return (
    <section id="impact" className={`py-24 transition-colors duration-300 border-t border-b ${
      darkMode 
        ? 'bg-slate-900 text-white border-slate-800' 
        : 'bg-slate-100 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold border border-orange-500/20 mb-4">
            <i className="fa-solid fa-trophy text-amber-400"></i>
            <span>Proven Track Record • 2010 to 2026</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            This is the impact we have created together from 2010 to 2026.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* 9 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`border rounded-2xl p-6 sm:p-8 flex items-center space-x-5 shadow-lg transition-all duration-300 hover:-translate-y-1 group ${
                darkMode 
                  ? 'bg-slate-950/70 border-slate-800 hover:border-orange-500/40' 
                  : 'bg-white border-slate-200 hover:border-orange-500/40 hover:shadow-xl'
              }`}
            >
              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center border text-xl ${item.color} group-hover:scale-110 transition-transform`}>
                <i className={item.icon}></i>
              </div>

              {/* Number & Label */}
              <div>
                <div className={`text-2xl sm:text-3xl font-black tracking-tight group-hover:text-orange-500 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.number}
                </div>
                <div className={`text-xs sm:text-sm leading-snug mt-1 font-medium ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
