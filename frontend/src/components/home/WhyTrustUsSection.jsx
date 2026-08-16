import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const WhyTrustUsSection = () => {
  const { darkMode } = useTheme();

  const pillars = [
    {
      icon: 'fa-solid fa-shield-halved',
      title: '80G Tax Exemption',
      desc: 'All donations to RLRP are eligible for 50% tax exemption under Section 80G of the Indian Income Tax Act.',
      color: 'text-emerald-500 border-emerald-500/30 bg-emerald-500/10',
    },
    {
      icon: 'fa-solid fa-file-invoice-dollar',
      title: '100% Direct Field Utilization',
      desc: 'Every single rupee donated goes directly towards elderly hospital meals, medical supplies, and Savali Kendra shelter upkeep.',
      color: 'text-sky-500 border-sky-500/30 bg-sky-500/10',
    },
    {
      icon: 'fa-solid fa-award',
      title: 'Government & Hospital Recognized',
      desc: 'Recognized and commended by municipal authorities, YCM Hospital administration, and senior welfare departments.',
      color: 'text-amber-500 border-amber-500/30 bg-amber-500/10',
    },
    {
      icon: 'fa-solid fa-lock',
      title: 'Transparent Financial Audits',
      desc: 'Audited annually by certified chartered accountants with transparent public reports and instant tax receipt generation.',
      color: 'text-purple-500 border-purple-500/30 bg-purple-500/10',
    },
  ];

  return (
    <section id="why-trust-us" className={`py-24 transition-colors duration-300 border-t ${
      darkMode ? 'bg-slate-900 text-white border-slate-800' : 'bg-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 text-emerald-500 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/20 mb-4">
            <i className="fa-solid fa-shield-heart text-emerald-500"></i>
            <span>Integrity & Accountability</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Trust Us
          </h2>
          <p className={`text-base sm:text-lg ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            We hold ourselves to the highest standards of financial transparency and field impact for senior citizens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`border rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                darkMode 
                  ? 'bg-slate-950/80 border-slate-800 hover:border-emerald-500/40' 
                  : 'bg-white border-slate-200 hover:border-emerald-500/40 hover:shadow-2xl'
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border mb-6 text-lg ${p.color}`}>
                  <i className={p.icon}></i>
                </div>
                <h3 className={`text-lg font-extrabold mb-2 ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>{p.title}</h3>
                <p className={`text-xs leading-relaxed ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>{p.desc}</p>
              </div>
              <div className={`mt-6 pt-4 border-t flex items-center text-xs text-emerald-500 font-semibold space-x-1.5 ${
                darkMode ? 'border-slate-800' : 'border-slate-200'
              }`}>
                <i className="fa-solid fa-circle-check text-emerald-500"></i>
                <span>Verified NGO Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUsSection;
