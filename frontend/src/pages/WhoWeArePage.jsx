import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export const WhoWeArePage = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { icon: 'fa-solid fa-heart', label: 'Compassion', desc: 'Every senior citizen deserves unconditional dignity, love, and warmth.', color: 'text-rose-500 bg-rose-500/10 border-rose-500/20' },
    { icon: 'fa-solid fa-shield-halved', label: 'Integrity', desc: 'Complete transparency in donations, spending, and governance.', color: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { icon: 'fa-solid fa-people-roof', label: 'Community', desc: 'Building a family for those abandoned — volunteers, donors, and seniors together.', color: 'text-sky-500 bg-sky-500/10 border-sky-500/20' },
    { icon: 'fa-solid fa-stethoscope', label: 'Healthcare First', desc: 'Immediate medical attention, physiotherapy, and nutrition before anything else.', color: 'text-amber-500 bg-amber-500/10 border-amber-500/20' },
    { icon: 'fa-solid fa-handshake-angle', label: 'Empowerment', desc: 'Restoring independence, self-worth, and agency in every elderly resident.', color: 'text-purple-500 bg-purple-500/10 border-purple-500/20' },
    { icon: 'fa-solid fa-leaf', label: 'Sustainability', desc: 'Long-term impact programs, not one-time relief — building lasting change.', color: 'text-teal-500 bg-teal-500/10 border-teal-500/20' },
  ];

  const timeline = [
    { year: '2010', title: 'RLRP Founded', desc: 'A group of local citizens in Pimpri-Chinchwad began daily tiffin distribution to abandoned patients at YCM Hospital, Pune.' },
    { year: '2012', title: 'YCM Hospital Helpdesk', desc: 'A dedicated in-hospital volunteer desk was established, providing medicines, meals, and bedside support daily.' },
    { year: '2014', title: 'Street Rescue Operations', desc: 'RLRP launched 24/7 emergency rescue vehicles to identify and shelter destitute elderly from city streets.' },
    { year: '2017', title: 'Savali Nivara Kendra Opens', desc: 'The flagship elder care shelter home opened, providing permanent residential care, food, and medical services.' },
    { year: '2019', title: '80G Tax Exemption Certified', desc: 'RLRP received official 80G certification, enabling donors to claim 50% income tax exemption on contributions.' },
    { year: '2022', title: 'Physiotherapy & Wellness Wing', desc: 'A dedicated physiotherapy room, yoga hall, and recreational area added to the shelter home complex.' },
    { year: '2025', title: 'Digital Transparency Portal', desc: 'Launched online annual reports, real-time fund tracking, and digital receipts for all donors.' },
    { year: '2026', title: 'Expanding Impact', desc: 'Serving 100+ residents at Savali Kendra, with 5,000+ lifetime rescues and 500,000+ hospital meals served.' },
  ];

  const team = [
    { name: 'Founder & President', role: 'RLRP Savali Nivara Kendra', icon: 'fa-solid fa-user-tie', color: 'from-orange-500 to-amber-600' },
    { name: 'Medical Director', role: 'Senior Healthcare Advisor', icon: 'fa-solid fa-user-doctor', color: 'from-sky-500 to-blue-600' },
    { name: 'Head of Rescue Ops', role: '24/7 Emergency Response', icon: 'fa-solid fa-truck-medical', color: 'from-rose-500 to-pink-600' },
    { name: 'Finance & Compliance', role: 'Accounts & 80G Reporting', icon: 'fa-solid fa-user-gear', color: 'from-emerald-500 to-teal-600' },
    { name: 'Volunteer Coordinator', role: 'Volunteer Programs & CSR', icon: 'fa-solid fa-people-group', color: 'from-purple-500 to-violet-600' },
    { name: 'Welfare & Nutrition', role: 'Resident Wellness & Diet', icon: 'fa-solid fa-bowl-food', color: 'from-amber-500 to-yellow-500' },
  ];

  const card = `rounded-2xl border p-6 sm:p-8 shadow-lg transition-all duration-300 ${
    darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-slate-100'
  }`;

  return (
    <div className={`pt-28 pb-20 transition-colors duration-300 min-h-screen ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link to="/" className="inline-flex items-center space-x-2 text-xs font-semibold text-orange-500 hover:text-orange-400 mb-8 transition-colors">
          <i className="fa-solid fa-arrow-left" />
          <span>Back to Home</span>
        </Link>

        {/* ── Hero Banner ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate="visible"
          className={`relative rounded-3xl p-8 sm:p-14 mb-12 overflow-hidden border shadow-2xl ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 mb-5">
              <i className="fa-solid fa-users" />
              <span>About RLRP • Established 2010</span>
            </div>

            <h1 className={`text-4xl sm:text-6xl font-black tracking-tight leading-tight mb-5 ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Real Life Real People<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500">
                Savali Nivara Kendra
              </span>
            </h1>

            <p className={`text-base sm:text-xl leading-relaxed max-w-3xl ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              A non-profit trust based in Pune, Maharashtra, dedicated since 2010 to restoring human dignity,
              love, and full-spectrum healthcare to destitute homeless senior citizens and abandoned elderly hospital patients.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border ${
                darkMode ? 'bg-emerald-950/60 text-emerald-400 border-emerald-700/50' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
              }`}>
                <i className="fa-solid fa-shield-halved text-emerald-500" />
                80G Tax Certified NGO
              </div>
              <div className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border ${
                darkMode ? 'bg-orange-950/60 text-orange-400 border-orange-700/50' : 'bg-orange-50 text-orange-700 border-orange-200'
              }`}>
                <i className="fa-solid fa-house-heart text-orange-500" />
                100+ Residents at Savali Kendra
              </div>
              <div className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border ${
                darkMode ? 'bg-sky-950/60 text-sky-400 border-sky-700/50' : 'bg-sky-50 text-sky-700 border-sky-200'
              }`}>
                <i className="fa-solid fa-heart-circle-check text-sky-500" />
                5,000+ Senior Citizens Rescued
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Mission & Vision ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {[
            {
              icon: 'fa-solid fa-bullseye',
              color: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
              label: 'Our Mission',
              text: 'To rescue, rehabilitate, and restore dignity to every destitute, homeless, or abandoned senior citizen in Pune — through immediate medical care, nutritious meals, shelter, and emotional support at Savali Nivara Kendra.'
            },
            {
              icon: 'fa-solid fa-eye',
              color: 'text-sky-500 bg-sky-500/10 border-sky-500/20',
              label: 'Our Vision',
              text: 'A society where no elderly citizen suffers alone — where every abandoned grandfather and grandmother finds a home, a family, healthcare, and a life of dignity until their last breath.'
            }
          ].map((item, i) => (
            <motion.div key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={card}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border text-lg mb-5 ${item.color}`}>
                <i className={item.icon} />
              </div>
              <h2 className={`text-xl font-black mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.label}</h2>
              <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Core Values ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 mb-4">
              <i className="fa-solid fa-star" />
              <span>What We Stand For</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`${card} flex items-start gap-4 hover:-translate-y-1 transition-transform`}
              >
                <div className={`w-11 h-11 rounded-xl shrink-0 flex items-center justify-center border text-base ${v.color}`}>
                  <i className={v.icon} />
                </div>
                <div>
                  <h3 className={`text-sm font-extrabold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{v.label}</h3>
                  <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Founding Story ── */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`${card} mb-16`}>
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/20 mb-5">
            <i className="fa-solid fa-book-open" />
            <span>The Founding Story</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-black mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            How RLRP Began: A Simple Act of Compassion
          </h2>
          <div className={`space-y-4 text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            <p>
              Founded in 2010 by a group of passionate local citizens in Pimpri-Chinchwad, Pune, RLRP began with a simple — yet deeply moving — observation: dozens of destitute elderly patients admitted to YCM Hospital were spending days without food, without family, and without basic care.
            </p>
            <p>
              What started as a small daily tiffin distribution initiative quickly expanded as volunteers witnessed the scale of abandonment. Senior citizens — some in their 70s and 80s — were arriving at government hospitals with broken bones, malnourishment, and severe illness, only to find themselves completely alone.
            </p>
            <p>
              The founding team established a full hospital helpdesk, then launched emergency street rescue teams. By 2017, <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Savali Nivara Kendra</strong> — a state-of-the-art elder rescue shelter home — had been built and inaugurated, providing permanent residential care, food, medical services, physiotherapy, and emotional support to up to 120 residents at a time.
            </p>
            <p>
              Today, RLRP operates with a 80G-certified trust, a team of dedicated volunteers, doctors, social workers, and supporters — united by one purpose: <em className={darkMode ? 'text-amber-300' : 'text-amber-700'}>ensuring no elder dies alone and abandoned</em>.
            </p>
          </div>
        </motion.div>

        {/* ── Journey / Timeline ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 text-sky-500 text-xs font-bold px-3 py-1 rounded-full border border-sky-500/20 mb-4">
              <i className="fa-solid fa-timeline" />
              <span>Milestones Since 2010</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Journey of Impact
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className={`absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 ${
              darkMode ? 'bg-slate-700' : 'bg-slate-200'
            }`} />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className={`relative flex items-start gap-6 sm:gap-0 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                >
                  {/* Year dot on center line */}
                  <div className="sm:w-1/2 flex sm:justify-end sm:pr-10 pl-14 sm:pl-0 relative">
                    <div className={`absolute left-0 sm:left-auto sm:right-[-2.25rem] sm:translate-x-0 top-1 w-9 h-9 rounded-full flex items-center justify-center text-xs font-extrabold border-2 shadow-lg ${
                      darkMode ? 'bg-slate-950 border-orange-500 text-orange-400' : 'bg-white border-orange-500 text-orange-600'
                    }`}>
                      <span className="text-[10px] font-black">{item.year.slice(2)}</span>
                    </div>
                    {i % 2 === 0 ? (
                      <div className={`${card} max-w-sm hover:-translate-y-1 transition-transform`}>
                        <div className="text-xs font-extrabold text-orange-500 mb-1">{item.year}</div>
                        <h3 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                      </div>
                    ) : <div className="hidden sm:block" />}
                  </div>

                  <div className="sm:w-1/2 sm:pl-10 pl-14">
                    {i % 2 !== 0 ? (
                      <div className={`${card} max-w-sm hover:-translate-y-1 transition-transform`}>
                        <div className="text-xs font-extrabold text-orange-500 mb-1">{item.year}</div>
                        <h3 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                        <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{item.desc}</p>
                      </div>
                    ) : <div className="hidden sm:block" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Leadership Team ── */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-500 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/20 mb-4">
              <i className="fa-solid fa-users-gear" />
              <span>The People Behind the Mission</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-black ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Our Leadership Team
            </h2>
            <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
              Compassionate professionals and lifelong volunteers dedicated to elder welfare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {team.map((member, i) => (
              <motion.div
                key={i} custom={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className={`${card} text-center hover:-translate-y-1 transition-transform group`}
              >
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <i className={member.icon} />
                </div>
                <h3 className={`text-sm font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{member.name}</h3>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-10 sm:p-14 text-center"
          style={{ background: 'linear-gradient(135deg, #f97316, #d97706, #ea580c)' }}
        >
          <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
          <div className="relative z-10">
            <i className="fa-solid fa-heart text-white text-4xl mb-4 block" />
            <h2 className="text-2xl sm:text-4xl font-black text-white mb-3">Join Our Mission Today</h2>
            <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Whether you donate, volunteer, or spread the word — every action saves a senior citizen's life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/donate" className="bg-white text-orange-600 font-extrabold px-8 py-3.5 rounded-full hover:bg-orange-50 transition-all shadow-lg flex items-center justify-center gap-2 text-sm">
                <i className="fa-solid fa-heart" />
                Donate Now
              </Link>
              <Link to="/volunteer" className="bg-white/10 border border-white/40 text-white font-extrabold px-8 py-3.5 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 text-sm backdrop-blur-sm">
                <i className="fa-solid fa-hand-holding-heart" />
                Become a Volunteer
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default WhoWeArePage;
