import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const TogetherSmileSection = () => {
  const { darkMode } = useTheme();
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section className={`py-20 transition-colors duration-300 border-t border-b ${
      darkMode 
        ? 'bg-slate-950 text-white border-slate-800' 
        : 'bg-gradient-to-b from-amber-50/40 via-white to-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading (Matching Image 3) */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-10 max-w-4xl mx-auto leading-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}
        >
          Together, We Can Give Someone A Reason To Smile Again.
        </motion.h2>

        {/* Interactive Emotional Picture / Before-After Box (Matching Image 3 Frame) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 shadow-2xl transition-colors ${
            darkMode 
              ? 'border-emerald-500/40 bg-slate-900 shadow-emerald-950/40' 
              : 'border-emerald-600/50 bg-white shadow-slate-300'
          }`}
        >
          {/* Top Banner Tag */}
          <div className="bg-emerald-600 text-white py-2 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2">
            <i className="fa-solid fa-arrows-left-right animate-pulse"></i>
            <span>Slide to reveal transformation: Before Rescue vs Today at Savali Kendra</span>
          </div>

          {/* Interactive Before & After Image Slider */}
          <div className="relative h-80 sm:h-[420px] w-full select-none overflow-hidden">
            {/* After Image (Right side - Healthy & Happy Senior) */}
            <img 
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80" 
              alt="Elderly Person Smiling Safe" 
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Before Image Clip (Left side - Rescued from suffering) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden border-r-4 border-amber-400 shadow-2xl transition-all"
              style={{ width: `${sliderPosition}%` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80" 
                alt="Elderly Person Destitute Before" 
                className="absolute inset-y-0 left-0 h-full max-w-none object-cover"
                style={{ width: '100%', height: '100%' }}
              />
              <span className="absolute top-4 left-4 bg-slate-950/80 text-amber-400 border border-amber-400/40 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                Before: Abandoned on Streets
              </span>
            </div>

            <span className="absolute top-4 right-4 bg-slate-950/80 text-emerald-400 border border-emerald-400/40 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
              After: Dignity & Care at Savali
            </span>

            {/* Slider Range Controller */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />

            {/* Handle Bar Indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `calc(${sliderPosition}% - 20px)` }}
            >
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white text-sm font-bold">
                <i className="fa-solid fa-code-compare"></i>
              </div>
            </div>
          </div>

          {/* Subtitle & CTA inside Box (Matching Image 3 layout) */}
          <div className={`p-8 flex flex-col items-center justify-center space-y-6 ${
            darkMode ? 'bg-slate-900/90' : 'bg-slate-50'
          }`}>
            <p className={`text-xl sm:text-2xl font-bold tracking-wide ${
              darkMode ? 'text-amber-300' : 'text-slate-800'
            }`}>
              One hand. One heart. One change.
            </p>

            <Link
              to="/donate"
              className="gradient-button px-10 py-4 rounded-full text-base font-extrabold flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/50 transform hover:scale-105 transition-all text-white"
            >
              <i className="fa-solid fa-heart-pulse text-white animate-bounce text-lg"></i>
              <span>DONATE NOW</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TogetherSmileSection;
