import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const HeroVideoBanner = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const { darkMode } = useTheme();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className={`relative w-full min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-white' : 'bg-slate-900 text-white'
    }`}>
      {/* Background Hero Video Layer */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          src="/assets/website-main-video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 scale-105 transition-all duration-700"
          onError={(e) => {
            console.log("Video fallback preview active");
          }}
        />
        
        {/* Dark Vignette Overlay for Crisp Contrast */}
        <div className={`absolute inset-0 transition-colors duration-300 ${
          darkMode 
            ? 'bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/80' 
            : 'bg-gradient-to-t from-slate-950/90 via-slate-900/80 to-slate-900/70'
        }`} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-slate-950/90" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
        
        {/* Top Tagline Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-slate-900/90 border border-orange-500/40 text-orange-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 shadow-xl"
        >
          <i className="fa-solid fa-sparkles text-amber-400"></i>
          <span>Real Life Real People • Serving Senior Citizens Since 2010</span>
        </motion.div>

        {/* Main Quote Title - Clean typography with no text overlap */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight uppercase drop-shadow-2xl mb-6 text-center"
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-white to-amber-100">
            “TURN THE SHADOW OF POVERTY
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-amber-300 mt-1">
            INTO THE LIGHT”
          </span>
        </motion.h1>

        {/* Subtitle Description - Fixed clean single paragraph */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-base sm:text-lg max-w-3xl mx-auto font-normal leading-relaxed mb-10 drop-shadow text-center"
        >
          Dedicated to rescuing homeless elderly individuals from the streets, providing full-spectrum healthcare to destitute senior patients at YCM Hospital, and offering lifelong dignified shelter at Savali Nivara Kendra.
        </motion.p>

        {/* Hero Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          <Link
            to="/donate"
            className="gradient-button w-full sm:w-auto px-8 py-4 rounded-full text-base font-extrabold flex items-center justify-center gap-3 shadow-xl hover:shadow-orange-500/50 transform hover:-translate-y-0.5 transition-all text-white"
          >
            <i className="fa-solid fa-heart text-white animate-bounce"></i>
            <span>Donate Now</span>
          </Link>

          <a
            href="#what-we-do"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-700/90 border border-slate-600 backdrop-blur-md transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our Work</span>
            <i className="fa-solid fa-arrow-down text-orange-400 animate-bounce"></i>
          </a>
        </motion.div>

        {/* Video Controls Controls Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-3"
        >
          <button
            onClick={togglePlay}
            className="px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 backdrop-blur-md transition-all text-xs font-semibold flex items-center gap-2"
            aria-label="Toggle Video Playback"
          >
            <i className={`fa-solid ${isPlaying ? 'fa-pause text-amber-400' : 'fa-play text-orange-500'}`}></i>
            <span>{isPlaying ? 'Pause Video' : 'Play Video'}</span>
          </button>
          
          <button
            onClick={toggleMute}
            className="px-4 py-2 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 backdrop-blur-md transition-all text-xs font-semibold flex items-center gap-2"
            aria-label="Toggle Audio"
          >
            <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-slate-400' : 'fa-volume-high text-orange-400'}`}></i>
            <span>{isMuted ? 'Unmute Sound' : 'Mute Sound'}</span>
          </button>
        </motion.div>

      </div>

      {/* Bottom Scroll Prompt */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity">
        <a href="#difference-carousel" className="text-slate-300 hover:text-orange-400 text-xs font-medium flex flex-col items-center gap-1">
          <span>Scroll to Discover</span>
          <i className="fa-solid fa-chevron-down text-orange-400 animate-bounce"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroVideoBanner;
