import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const HeroVideoBanner = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted]     = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoReady, setVideoReady] = useState(false);
  const { darkMode } = useTheme();

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(p => !p);
    }
  };
  const togglePlay = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(p => !p);
    }
  };

  return (
    /*
     * Section fills 100 vh from the very top of the page.
     * The fixed navbar overlays this section transparently.
     * Text + buttons are anchored to the BOTTOM-LEFT
     * (similar to 66degrees / modern enterprise hero style).
     */
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',   /* content sits at the bottom */
        overflow: 'hidden',
      }}
    >
      {/* ── Full-bleed background video ── */}
      <div style={{ position: 'absolute', inset: 0, background: '#050d1a' }}>
        <video
          ref={videoRef}
          src="/assets/website-main-video.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onCanPlay={() => setVideoReady(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: videoReady ? 1 : 0,
            transition: 'opacity 1s ease',
          }}
        />

        {/* Gradient overlay — stronger at bottom for text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(5,13,26,0.25) 0%, rgba(5,13,26,0.15) 40%, rgba(5,13,26,0.75) 100%)',
          }}
        />

        {/* Fallback gradient before video loads */}
        {!videoReady && (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #050d1a 0%, #0f2040 50%, #1a0a30 100%)',
            }}
          />
        )}
      </div>

      {/* ── Hero text content (bottom-left anchored) ── */}
      <div
        className="relative z-10 w-full"
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 2rem 5rem 2rem',   /* bottom padding so text clears video controls */
        }}
      >
        {/* Tagline badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            backdropFilter: 'blur(8px)',
            borderRadius: '9999px',
            padding: '0.375rem 1rem',
            marginBottom: '1.25rem',
          }}
        >
          <i className="fa-solid fa-hand-holding-heart" style={{ color: '#fb923c' }}></i>
          <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Real Life Real People • Serving Senior Citizens Since 2010
          </span>
        </motion.div>

        {/* ── Main Heading — single clean instance, no drop-shadow filter ── */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          style={{
            color: '#ffffff',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            /* Fluid type: 2rem → 4rem */
            fontSize: 'clamp(2rem, 5.5vw, 4rem)',
            /* CSS text-shadow avoids filter ghosting */
            textShadow: '0 2px 20px rgba(0,0,0,0.6)',
            maxWidth: '50rem',
            marginBottom: '1rem',
          }}
        >
          "Turn The Shadow Of Poverty
          <br />
          <span style={{ color: '#fb923c' }}>Into The Light"</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
            lineHeight: 1.65,
            maxWidth: '38rem',
            marginBottom: '2rem',
            textShadow: '0 1px 8px rgba(0,0,0,0.4)',
          }}
        >
          Dedicated to rescuing homeless elderly individuals from the streets,
          providing full-spectrum healthcare to destitute senior patients at YCM
          Hospital, and offering lifelong dignified shelter at Savali Nivara Kendra.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}
        >
          <Link
            to="/donate"
            className="gradient-button"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.9375rem',
              fontWeight: 800,
              color: '#fff',
            }}
          >
            <i className="fa-solid fa-heart animate-pulse"></i>
            Donate Now
          </Link>

          <a
            href="#what-we-do"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              fontSize: '0.9375rem',
              fontWeight: 700,
              color: '#fff',
              border: '1.5px solid rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              transition: 'background 0.2s ease, border-color 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.18)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
          >
            Explore Our Work
            <i className="fa-solid fa-arrow-down text-orange-400 animate-bounce"></i>
          </a>
        </motion.div>
      </div>

      {/* ── Small stats strip at bottom ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10"
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '0',
          background: 'rgba(255,255,255,0.06)',
          backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {[
          { num: '1,000+', label: 'Seniors Rescued' },
          { num: '24 / 7',  label: 'Medical Care' },
          { num: '500,000+', label: 'Meals Served' },
          { num: '80G',     label: 'Tax Certified' },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              flex: '1',
              padding: '1rem 1.25rem',
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.1)' : 'none',
              textAlign: 'center',
            }}
          >
            <div style={{ color: '#fb923c', fontWeight: 900, fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', lineHeight: 1 }}>
              {item.num}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.25rem' }}>
              {item.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Video Controls — bottom right, unobtrusive ── */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          zIndex: 20,
          display: 'flex',
          gap: '0.5rem',
        }}
      >
        <button
          onClick={togglePlay}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.375rem 0.875rem',
            borderRadius: '9999px',
            background: 'rgba(0,0,0,0.55)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: '0.6875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          aria-label="Toggle Video"
        >
          <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} text-amber-400`}></i>
          <span>{isPlaying ? 'Pause' : 'Play'}</span>
        </button>
        <button
          onClick={toggleMute}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.375rem',
            padding: '0.375rem 0.875rem',
            borderRadius: '9999px',
            background: 'rgba(0,0,0,0.55)',
            border: '1px solid rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            fontSize: '0.6875rem',
            fontWeight: 600,
            cursor: 'pointer',
          }}
          aria-label="Toggle Sound"
        >
          <i className={`fa-solid ${isMuted ? 'fa-volume-xmark text-slate-400' : 'fa-volume-high text-orange-400'}`}></i>
          <span>{isMuted ? 'Sound Off' : 'Sound On'}</span>
        </button>
      </div>
    </section>
  );
};

export default HeroVideoBanner;
