import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const WhatWeDoSection = () => {
  const { darkMode } = useTheme();

  const initiatives = [
    {
      id: 'care-for-patients',
      title: 'Care For Senior Patients',
      category: 'Hospital Support',
      desc: 'No elderly patient should suffer alone. We support underprivileged seniors at YCM Hospital with warm meals, life-saving medicines, and essential bedside care.',
      slug: '/what-we-do/care-for-patients',
      icon: 'fa-solid fa-hospital-user',
      badgeColor: 'bg-blue-500/20 text-sky-500 border-blue-500/30',
      imgPlaceholder: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'rescue-rehabilitation',
      title: 'Homeless Senior Rescue',
      category: 'Shelter & Restoration',
      desc: 'We rescue abandoned elderly individuals from the streets of Pune and welcome them to Savali Nivara Kendra for continuous medical recovery and family reunion.',
      slug: '/what-we-do/rescue-rehabilitation',
      icon: 'fa-solid fa-house-chimney-medical',
      badgeColor: 'bg-emerald-500/20 text-emerald-500 border-emerald-500/30',
      imgPlaceholder: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 'elderly-care',
      title: 'Elderly Nutrition & Dignity',
      category: 'Senior Care',
      desc: 'Providing specialized geriatric nutrition, physical therapy, and permanent dignified shelter to destitute senior citizens with utmost warmth.',
      slug: '/what-we-do/elderly-care',
      icon: 'fa-solid fa-hand-holding-heart',
      badgeColor: 'bg-amber-500/20 text-amber-500 border-amber-500/30',
      imgPlaceholder: 'https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="what-we-do" className={`py-24 relative overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Background Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-1.5 rounded-full text-xs font-bold border border-orange-500/20 mb-4">
            <i className="fa-solid fa-sparkles text-amber-400"></i>
            <span>Our Core Work</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What We Do...
          </h2>
          <p className={`text-base sm:text-lg font-normal leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Every destitute senior citizen who reaches us receives immediate medical care, wholesome food, and lifelong dignified shelter.
          </p>
        </div>

        {/* 3 Main Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border rounded-3xl overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-300 group hover:-translate-y-1 ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800 hover:border-orange-500/40' 
                  : 'bg-white border-slate-200 hover:border-orange-500/40 hover:shadow-2xl'
              }`}
            >
              <div>
                {/* Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img 
                    src={item.imgPlaceholder} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute bottom-4 left-6 w-12 h-12 rounded-2xl flex items-center justify-center border backdrop-blur-md shadow-lg text-lg ${item.badgeColor}`}>
                    <i className={item.icon}></i>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  <span className="text-xs font-bold tracking-wider uppercase text-orange-500 block mb-2">
                    {item.category}
                  </span>
                  <h3 className={`text-xl font-extrabold transition-colors mb-3 group-hover:text-orange-500 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-6 ${
                    darkMode ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 sm:px-8 pb-8 pt-0">
                <Link
                  to={item.slug}
                  className="inline-flex items-center space-x-2 text-sm font-bold text-orange-500 hover:text-amber-500 transition-colors"
                >
                  <span>Learn More</span>
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1.5 transition-transform"></i>
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeDoSection;
