import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const DifferenceSection = () => {
  const { darkMode } = useTheme();

  const cards = [
    {
      id: 'care-for-patients',
      icon: 'fa-solid fa-bed-pulse',
      iconBg: 'bg-blue-500/10 text-blue-600 border-blue-200',
      title: 'Senior Patient Hospital Care',
      subtitle: 'YCM Hospital Ward Support',
      desc: 'Nutritious meals, medicine supplies, and bedside care for abandoned elderly hospital patients.',
      link: '/what-we-do/care-for-patients',
    },
    {
      id: 'rescue-rehabilitation',
      icon: 'fa-solid fa-house-chimney-medical',
      iconBg: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      title: 'Homeless Senior Rescue',
      subtitle: 'Savali Nivara Shelter',
      desc: 'Rescuing vulnerable destitute seniors from streets, providing housing, medical recovery & family reunion.',
      link: '/what-we-do/rescue-rehabilitation',
    },
    {
      id: 'elderly-nutrition',
      icon: 'fa-solid fa-hand-holding-heart',
      iconBg: 'bg-amber-500/10 text-amber-600 border-amber-200',
      title: 'Senior Wellness & Nutrition',
      subtitle: 'Savali Elder Care Center',
      desc: 'Daily fresh diet-controlled meals, protein supplements, and geriatric healthcare for aging residents.',
      link: '/what-we-do/elderly-care',
    },
    {
      id: 'medical-equipment',
      icon: 'fa-solid fa-wheelchair',
      iconBg: 'bg-purple-500/10 text-purple-600 border-purple-200',
      title: 'Wheelchairs & Medical Aid',
      subtitle: 'Free Senior Mobility Kits',
      desc: 'Free access to wheelchairs, walkers, diagnostic tests, and surgical support for needy elderly patients.',
      link: '/what-we-do/care-for-patients',
    },
    {
      id: 'dignified-rites',
      icon: 'fa-solid fa-hands-holding-child',
      iconBg: 'bg-rose-500/10 text-rose-600 border-rose-200',
      title: 'Dignified Last Rites',
      subtitle: 'Humanitarian Honor',
      desc: 'Ensuring respectful, dignified final rites for unclaimed or homeless destitute seniors with utmost honor.',
      link: '/what-we-do/care-for-patients',
    },
  ];

  return (
    <section id="difference-carousel" className={`py-20 transition-colors duration-300 border-t border-b ${
      darkMode 
        ? 'bg-slate-900 text-white border-slate-800' 
        : 'bg-blue-50/40 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 text-xs font-extrabold px-3 py-1 rounded-full border border-orange-500/20 mb-3">
              <i className="fa-solid fa-heart-pulse"></i>
              <span>Core Initiatives</span>
            </div>
            <h2 className={`text-2xl sm:text-4xl font-black tracking-tight ${
              darkMode ? 'text-white' : 'text-blue-950'
            }`}>
              How Would You Like To Make A Difference?
            </h2>
            <p className={`text-xs sm:text-sm mt-3 leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Your small contribution provides hot meals, medicines, and shelter for abandoned senior citizens in Pune.
            </p>
          </div>

          <Link
            to="/donate"
            className="gradient-button px-6 py-3 rounded-full text-xs font-extrabold flex items-center justify-center gap-2 text-white shadow-lg shrink-0 self-start md:self-auto"
          >
            <i className="fa-solid fa-heart"></i>
            <span>Support All Initiatives</span>
          </Link>
        </div>

        {/* ── Responsive CSS Grid: auto-fit so ALL cards fit without overflow ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
            gap: '1.5rem',
            alignItems: 'stretch',
          }}
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-md hover:shadow-xl hover:-translate-y-1.5 group ${
                darkMode 
                  ? 'bg-slate-950/80 hover:bg-slate-950 border-slate-800 hover:border-orange-500/40' 
                  : 'bg-white hover:bg-white border-slate-200/80 hover:border-blue-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center border text-lg shadow-sm ${card.iconBg}`}>
                    <i className={card.icon}></i>
                  </div>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                    darkMode ? 'bg-orange-500/10 text-orange-400 border-orange-500/20' : 'bg-blue-50 text-blue-800 border-blue-200'
                  }`}>
                    Senior Care
                  </span>
                </div>

                <h3 className={`text-base font-extrabold leading-snug mb-1 transition-colors group-hover:text-blue-600 ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-blue-950'
                }`}>
                  {card.title}
                </h3>
                
                <p className="text-[11px] text-orange-500 font-semibold mb-3">
                  {card.subtitle}
                </p>
                
                <p className={`text-xs leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {card.desc}
                </p>
              </div>

              <Link
                to={card.link}
                className={`inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all duration-200 border ${
                  darkMode 
                    ? 'bg-slate-900 text-slate-200 group-hover:bg-orange-500 group-hover:text-white border-slate-800 group-hover:border-orange-500' 
                    : 'bg-slate-50 text-blue-900 group-hover:bg-blue-800 group-hover:text-white border-slate-200 group-hover:border-blue-800'
                }`}
              >
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;
