import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const DifferenceSection = () => {
  const scrollRef = useRef(null);
  const { darkMode } = useTheme();

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const cards = [
    {
      id: 'care-for-patients',
      icon: 'fa-solid fa-bed-pulse',
      iconBg: 'bg-blue-500/20 text-sky-500 border-blue-500/30',
      title: 'Senior Patient Hospital Care',
      subtitle: 'YCM Hospital Ward Support',
      desc: 'Nutritious meals, medicine supplies, and compassionate bedside care for abandoned elderly hospital patients.',
      link: '/what-we-do/care-for-patients',
    },
    {
      id: 'rescue-rehabilitation',
      icon: 'fa-solid fa-house-chimney-medical',
      iconBg: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30',
      title: 'Homeless Senior Rescue',
      subtitle: 'Savali Nivara Shelter',
      desc: 'Rescuing vulnerable destitute seniors from streets, providing housing, medical recovery & family reunion.',
      link: '/what-we-do/rescue-rehabilitation',
    },
    {
      id: 'elderly-nutrition',
      icon: 'fa-solid fa-hand-holding-heart',
      iconBg: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
      title: 'Senior Wellness & Nutrition',
      subtitle: 'Savali Elder Care Center',
      desc: 'Daily fresh diet-controlled meals, protein supplements, and geriatric healthcare for aging residents.',
      link: '/what-we-do/elderly-care',
    },
    {
      id: 'medical-equipment',
      icon: 'fa-solid fa-wheelchair',
      iconBg: 'bg-purple-500/20 text-purple-500 border-purple-500/30',
      title: 'Wheelchairs & Medical Aid',
      subtitle: 'Free Senior Mobility Kits',
      desc: 'Free access to wheelchairs, walkers, diagnostic tests, and surgical support for needy elderly patients.',
      link: '/what-we-do/care-for-patients',
    },
    {
      id: 'dignified-rites',
      icon: 'fa-solid fa-hands-holding-child',
      iconBg: 'bg-rose-500/20 text-rose-500 border-rose-500/30',
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
        : 'bg-slate-100/80 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block */}
          <div className={`lg:col-span-4 p-8 rounded-2xl border flex flex-col justify-between shadow-xl transition-colors ${
            darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
          }`}>
            <div>
              <div className="inline-block bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 mb-4">
                <i className="fa-solid fa-heart-pulse mr-1"></i> Make An Impact Today
              </div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold leading-tight mb-4 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                How would you like to make a difference for our elders?
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Your small contribution can mean a hot meal for an abandoned grandfather or vital medicines for a sick elderly patient. Your kindness restores dignity and hope.
              </p>
            </div>

            {/* Scroll Controls */}
            <div className={`pt-4 border-t flex items-center justify-between ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <span className={`text-xs font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Explore 5 core senior initiatives
              </span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => scroll('left')}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-orange-500 hover:text-white' 
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-orange-500 hover:text-white'
                  }`}
                  aria-label="Scroll left"
                >
                  <i className="fa-solid fa-chevron-left text-sm"></i>
                </button>
                <button
                  onClick={() => scroll('right')}
                  className={`w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                    darkMode 
                      ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-orange-500 hover:text-white' 
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-orange-500 hover:text-white'
                  }`}
                  aria-label="Scroll right"
                >
                  <i className="fa-solid fa-chevron-right text-sm"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Right Horizontal Carousel */}
          <div className="lg:col-span-8 overflow-hidden">
            <div
              ref={scrollRef}
              className="flex space-x-5 overflow-x-auto no-scrollbar py-2 px-1 snap-x snap-mandatory"
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`w-72 sm:w-80 shrink-0 snap-start border rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1 ${
                    darkMode 
                      ? 'bg-slate-800/60 hover:bg-slate-800 border-slate-700 hover:border-orange-500/50' 
                      : 'bg-white hover:bg-white border-slate-200 hover:border-orange-500/50 hover:shadow-xl'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border text-lg ${card.iconBg}`}>
                        <i className={card.icon}></i>
                      </div>
                      <span className="text-xs font-semibold text-orange-500 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
                        Senior Care
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold transition-colors mb-1 group-hover:text-orange-500 ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {card.title}
                    </h3>
                    <p className="text-xs text-orange-500 font-medium mb-3">
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
                    className={`inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl font-semibold text-xs transition-all duration-200 border ${
                      darkMode 
                        ? 'bg-slate-900 text-slate-200 group-hover:bg-orange-500 group-hover:text-white border-slate-700 group-hover:border-orange-500' 
                        : 'bg-slate-100 text-slate-800 group-hover:bg-orange-500 group-hover:text-white border-slate-300 group-hover:border-orange-500'
                    }`}
                  >
                    <span>Learn more</span>
                    <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default DifferenceSection;
