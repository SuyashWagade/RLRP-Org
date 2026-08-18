import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const TogetherSmileSection = () => {
  const { darkMode } = useTheme();
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  // Generate 16 real before/after photo pairs from PDF extracted assets
  const photoPairs = Array.from({ length: 16 }, (_, i) => {
    const num = i + 1;
    return {
      id: num,
      before: `/assets/pairs/before_${num}_clean.png`,
      after: `/assets/pairs/after_${num}_clean.png`,
      label: `Real Rescue Case #${num}`,
      description: `Rescued from suffering & brought to Savali Nivara Kendra for permanent care.`,
    };
  });

  const handleNext = () => {
    setCurrentPairIndex((prev) => (prev + 1) % photoPairs.length);
    setSliderPosition(50);
  };

  const handlePrev = () => {
    setCurrentPairIndex((prev) => (prev - 1 + photoPairs.length) % photoPairs.length);
    setSliderPosition(50);
  };

  const activePair = photoPairs[currentPairIndex];

  return (
    <section id="transformation-section" className={`py-24 transition-colors duration-300 border-t border-b ${
      darkMode 
        ? 'bg-slate-950 text-white border-slate-800' 
        : 'bg-gradient-to-b from-blue-50/30 via-white to-slate-50 text-slate-900 border-slate-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 text-xs font-black px-4 py-1.5 rounded-full border border-orange-500/20 mb-4">
            <i className="fa-solid fa-code-compare"></i>
            <span>Real Lives Transformed • 16 Case Stories</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
            darkMode ? 'text-white' : 'text-blue-950'
          }`}>
            Together, We Can Give Someone A Reason To Smile Again.
          </h2>
          <p className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Slide back and forth on the photos below to reveal the actual before and after rescue transformations of elderly citizens at Savali Nivara.
          </p>
        </motion.div>

        {/* ── Main Interactive Before/After Frame ── */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`relative max-w-4xl mx-auto rounded-3xl overflow-hidden border-2 shadow-2xl transition-colors ${
            darkMode 
              ? 'border-emerald-500/40 bg-slate-900 shadow-emerald-950/40' 
              : 'border-blue-600/40 bg-white shadow-blue-950/10'
          }`}
        >
          {/* Top Banner Tag + Case Navigation Info */}
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-2.5 px-4 text-xs font-extrabold uppercase tracking-wider flex items-center justify-between">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-arrows-left-right text-amber-400 animate-pulse"></i>
              <span>Slide to reveal transformation (Case {currentPairIndex + 1} of 16)</span>
            </div>

            {/* Case Navigation Buttons */}
            <div className="flex items-center space-x-2">
              <button 
                onClick={handlePrev}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white hover:text-blue-900 text-white transition-all flex items-center justify-center text-xs"
                title="Previous Case"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <span className="text-[11px] font-mono font-bold bg-white/10 px-2 py-0.5 rounded">
                {currentPairIndex + 1} / 16
              </span>
              <button 
                onClick={handleNext}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white hover:text-blue-900 text-white transition-all flex items-center justify-center text-xs"
                title="Next Case"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          {/* Interactive Drag Slider Frame */}
          <div className="relative h-80 sm:h-[450px] w-full select-none overflow-hidden bg-slate-950">
            
            {/* After Image (Right side - Healthy & Safe Senior) */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={`after-${activePair.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={activePair.after} 
                alt="After Rescue - Dignity & Care at Savali" 
                className="absolute inset-0 w-full h-full object-contain bg-slate-900"
              />
            </AnimatePresence>

            {/* Before Image Clip (Left side - Abandoned on Streets) */}
            <div 
              className="absolute inset-y-0 left-0 overflow-hidden border-r-4 border-amber-400 shadow-2xl transition-all"
              style={{ width: `${sliderPosition}%` }}
            >
              <AnimatePresence mode="wait">
                <motion.img 
                  key={`before-${activePair.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={activePair.before} 
                  alt="Before Rescue - Destitute on Streets" 
                  className="absolute inset-y-0 left-0 h-full max-w-none object-contain bg-slate-950"
                  style={{ width: '100%', height: '100%' }}
                />
              </AnimatePresence>
              <span className="absolute top-4 left-4 bg-slate-950/85 text-amber-400 border border-amber-400/50 text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-lg">
                <i className="fa-solid fa-triangle-exclamation mr-1.5"></i>
                Before: Abandoned on Streets
              </span>
            </div>

            <span className="absolute top-4 right-4 bg-slate-950/85 text-emerald-400 border border-emerald-400/50 text-[11px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider backdrop-blur-md shadow-lg">
              <i className="fa-solid fa-circle-check mr-1.5"></i>
              After: Dignity & Care at Savali
            </span>

            {/* Range Drag Controller Input */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPosition} 
              onChange={(e) => setSliderPosition(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Drag slider to reveal before and after transformation"
            />

            {/* Slider Handle Indicator */}
            <div 
              className="absolute top-1/2 -translate-y-1/2 pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `calc(${sliderPosition}% - 20px)` }}
            >
              <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 shadow-2xl flex items-center justify-center border-2 border-white text-sm font-bold animate-pulse">
                <i className="fa-solid fa-code-compare"></i>
              </div>
            </div>
          </div>

          {/* Subtitle & Action inside Box */}
          <div className={`p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 ${
            darkMode ? 'bg-slate-900' : 'bg-slate-50'
          }`}>
            <div className="text-center sm:text-left">
              <span className="text-xs font-bold text-orange-500 uppercase tracking-wider block mb-1">
                Real Transformation Case #{activePair.id}
              </span>
              <p className={`text-base sm:text-xl font-bold tracking-tight ${
                darkMode ? 'text-white' : 'text-blue-950'
              }`}>
                One hand. One heart. One life transformed.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                className={`flex-1 sm:flex-none px-4 py-3 rounded-full text-xs font-bold border transition-colors ${
                  darkMode ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700' : 'bg-white text-blue-900 border-slate-300 hover:bg-blue-50'
                }`}
              >
                <i className="fa-solid fa-arrow-left mr-1"></i> Prev Case
              </button>

              <button
                onClick={handleNext}
                className={`flex-1 sm:flex-none px-4 py-3 rounded-full text-xs font-bold border transition-colors ${
                  darkMode ? 'bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700' : 'bg-white text-blue-900 border-slate-300 hover:bg-blue-50'
                }`}
              >
                Next Case <i className="fa-solid fa-arrow-right ml-1"></i>
              </button>

              <Link
                to="/donate"
                className="gradient-button px-6 py-3 rounded-full text-xs font-extrabold flex items-center justify-center gap-2 shadow-lg hover:shadow-orange-500/40 text-white shrink-0"
              >
                <i className="fa-solid fa-heart"></i>
                <span>Donate Now</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* ── 16 Case Thumbnails Selector Grid ── */}
        <div className="mt-10 max-w-4xl mx-auto">
          <span className={`text-xs font-bold tracking-wider uppercase block mb-4 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Browse All 16 Rescued Elder Transformations:
          </span>

          <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
            {photoPairs.map((pair, idx) => (
              <button
                key={pair.id}
                onClick={() => {
                  setCurrentPairIndex(idx);
                  setSliderPosition(50);
                }}
                className={`relative rounded-xl overflow-hidden border-2 h-16 transition-all duration-200 ${
                  currentPairIndex === idx 
                    ? 'border-orange-500 ring-2 ring-orange-500/50 scale-105 shadow-md' 
                    : darkMode ? 'border-slate-800 opacity-60 hover:opacity-100' : 'border-slate-300 opacity-70 hover:opacity-100'
                }`}
                title={`View Rescue Case #${pair.id}`}
              >
                <img src={pair.after} alt={`Case ${pair.id}`} className="w-full h-full object-cover" />
                <span className="absolute bottom-0 right-0 bg-slate-950/80 text-amber-400 font-mono text-[9px] font-bold px-1 rounded-tl">
                  #{pair.id}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TogetherSmileSection;
