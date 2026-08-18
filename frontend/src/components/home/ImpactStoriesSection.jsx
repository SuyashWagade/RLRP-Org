import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const ImpactStoriesSection = () => {
  const { darkMode } = useTheme();
  const [selectedStory, setSelectedStory] = useState(null);

  const stories = [
    {
      id: 1,
      title: "“He Had Nowhere To Go. Now He Has A Family.”",
      icon: "fa-solid fa-person-cane",
      iconBg: "bg-blue-500/20 text-blue-600 border-blue-200",
      subtitle: "A short story about an elderly grandfather rescued from the streets.",
      fullStory: "Baburao, a 74-year-old grandfather, was found lying sick and abandoned outside a train station in winter. RLRP team rescued him, provided immediate hospital treatment, and gave him permanent shelter at Savali Nivara Kendra. Today, he enjoys warm meals, daily medical checks, and a loving community of fellow elders.",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      actionText: "READ HIS STORY"
    },
    {
      id: 2,
      title: "“She Came To Us From The Streets. Today, She Is Safe.”",
      icon: "fa-solid fa-heart-pulse",
      iconBg: "bg-rose-500/20 text-rose-600 border-rose-200",
      subtitle: "A rescue and rehabilitation story.",
      fullStory: "Kamalbai, 68, suffered from severe memory loss and wandered the city streets for weeks without food. Following an alert from local citizens, our 24/7 rescue vehicle brought her to Savali. After months of medical care, therapy, and continuous effort, we re-established contact with her family and reunited them with tears of joy.",
      photo: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
      actionText: "READ HER STORY"
    },
    {
      id: 3,
      title: "“From A Hospital Bed To A New Life.”",
      icon: "fa-solid fa-hospital-user",
      iconBg: "bg-emerald-500/20 text-emerald-600 border-emerald-200",
      subtitle: "A YCM Hospital patient story.",
      fullStory: "Shantaram was admitted to YCM Hospital Pune with broken legs and no relatives to purchase medicines or feed him. RLRP's hospital helpdesk adopted his entire treatment expense, supplied daily nutritious porridge and fruits, and provided post-surgical rehabilitation at Savali Nivara.",
      photo: "https://images.unsplash.com/photo-1581579438747-1dc8d1e05fec?auto=format&fit=crop&w=600&q=80",
      actionText: "READ THE STORY"
    },
    {
      id: 4,
      title: "“From Savali To Standing On His Own Feet.”",
      icon: "fa-solid fa-person-walking-with-cane",
      iconBg: "bg-amber-500/20 text-amber-600 border-amber-200",
      subtitle: "A rehabilitation success story.",
      fullStory: "Ramesh, 62, lost his home after a tragic accident. After receiving physical rehabilitation, vocational guidance, and emotional counseling at Savali Kendra, he gained full mobility and now manages organic vegetable gardening at our elder care center.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
      actionText: "READ HIS STORY"
    }
  ];

  return (
    <section id="stories-section" className={`py-24 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 text-xs font-extrabold px-3.5 py-1 rounded-full border border-orange-500/20 mb-4">
            <i className="fa-solid fa-quote-left"></i> Real Transformations & Stories
          </span>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-blue-950'
          }`}>
            Life-Changing Senior Rehabilitation
          </h2>
          <p className={`text-base sm:text-lg ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Every elderly citizen at Savali Kendra has a story of survival, hope, and restored dignity.
          </p>
        </div>

        {/* 4 Story Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: story.id * 0.1 }}
              className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-1.5 ${
                darkMode 
                  ? 'bg-slate-800/80 border-slate-700 hover:border-orange-500/50 hover:bg-slate-800' 
                  : 'bg-white border-slate-200/80 hover:border-blue-300 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Photo Top Card */}
                <div className="w-full h-44 rounded-xl overflow-hidden mb-6 relative bg-slate-200">
                  <img 
                    src={story.photo} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-full flex items-center justify-center border shadow-md ${story.iconBg}`}>
                    <i className={`${story.icon} text-sm`}></i>
                  </div>
                </div>

                <h3 className={`text-base font-extrabold mb-2 leading-snug group-hover:text-blue-600 transition-colors ${
                  darkMode ? 'text-white group-hover:text-orange-400' : 'text-blue-950'
                }`}>
                  {story.title}
                </h3>
                
                <p className={`text-xs leading-relaxed mb-6 ${
                  darkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {story.subtitle}
                </p>
              </div>

              <button
                onClick={() => setSelectedStory(story)}
                className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 flex items-center justify-between border ${
                  darkMode 
                    ? 'bg-orange-500/10 text-orange-400 border-orange-500/20 hover:bg-orange-500 hover:text-white' 
                    : 'bg-blue-50 text-blue-900 border-blue-200 hover:bg-blue-800 hover:text-white'
                }`}
              >
                <span>{story.actionText}</span>
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Story Details Modal Popup */}
      <AnimatePresence>
        {selectedStory && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className={`max-w-lg w-full rounded-3xl p-6 sm:p-8 border shadow-2xl relative ${
                darkMode ? 'bg-slate-900 border-slate-700 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <button
                onClick={() => setSelectedStory(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-800 text-white hover:bg-orange-500 transition-colors flex items-center justify-center text-sm"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="w-full h-48 rounded-2xl overflow-hidden mb-6">
                <img src={selectedStory.photo} alt={selectedStory.title} className="w-full h-full object-cover" />
              </div>

              <h3 className="text-xl font-black mb-3">{selectedStory.title}</h3>
              <p className={`text-xs leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {selectedStory.fullStory}
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedStory(null)}
                  className="px-5 py-2.5 rounded-full bg-slate-700 text-white text-xs font-bold hover:bg-slate-600"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedStory(null)}
                  className="gradient-button px-6 py-2.5 rounded-full text-white text-xs font-bold"
                >
                  Help More Seniors
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactStoriesSection;
