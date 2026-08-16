import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export const CareForPatientsPage = () => {
  const { darkMode } = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`pt-28 pb-20 transition-colors duration-300 min-h-screen ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-orange-500 hover:text-orange-400 mb-8 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Home Page</span>
        </Link>

        {/* Hero Title Header */}
        <div className={`rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden border transition-colors ${
          darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
        }`}>
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 text-xs font-bold px-3 py-1 rounded-full border border-orange-500/20 mb-4">
            <i className="fa-solid fa-hospital-user text-orange-500"></i>
            <span>What We Do Initiative • YCM Hospital Support</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Care For Elderly & Sick Patients (YCM Hospital)
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed max-w-3xl ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            No elderly patient should have to suffer alone. We support underprivileged and abandoned senior patients at YCM Hospital with daily hot meals, medical equipment, life-saving medicines, and essential bedside care.
          </p>
        </div>

        {/* Image Banner */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-slate-700/30 shadow-2xl h-80 sm:h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80" 
            alt="Care For Patients YCM Hospital" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content */}
          <div className="lg:col-span-8 space-y-8 text-sm leading-relaxed">
            <div className={`border rounded-2xl p-6 space-y-4 transition-colors ${
              darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700 shadow-md'
            }`}>
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Why Senior Hospital Patient Care Matters
              </h3>
              <p>
                Every day, helpless senior citizens arrive at government hospitals like Yashwantrao Chavan Memorial (YCM) Hospital in Pune. Many have no family members to support them, no money to buy basic prescribed medicines, and no food during their hospital stay.
              </p>
              <p>
                Since 2010, the RLRP volunteer team arrives at YCM Hospital daily to distribute free nutritious meals, hygienic drinking water, blankets, wheelchairs, and medicine supplies directly to the bedside.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Key Impact Deliverables at YCM Hospital
              </h3>
              <ul className="space-y-3">
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-bowl-rice"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>500,000+ Hospital Meals Distributed:</strong> Freshly cooked, hygienic, soft meals tailored for recovering elderly patients.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-wheelchair"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>2,900+ Provided Medical Care & Equipment:</strong> Free access to wheelchairs, walkers, oxygen support, and critical diagnostic testing.
                  </div>
                </li>
                <li className={`flex items-start space-x-3 p-4 rounded-xl border transition-colors ${
                  darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="w-9 h-9 rounded-xl bg-rose-500/20 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <i className="fa-solid fa-hands-holding-child"></i>
                  </div>
                  <div>
                    <strong className={darkMode ? 'text-white' : 'text-slate-900'}>1,200+ Dignified Last Rites:</strong> Respectful final rites for unclaimed or destitute patients who pass away without relatives.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar Action Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`border rounded-3xl p-6 sticky top-28 shadow-xl space-y-6 transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className={`text-lg font-bold flex items-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <i className="fa-solid fa-shield-heart text-orange-500"></i>
                <span>Support Hospital Patients</span>
              </h4>

              <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                Your donation directly funds daily meal distribution and medicine aid for senior patients at YCM Hospital.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>1 Patient Meal:</span>
                  <span className="font-bold text-amber-500">₹50</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Monthly Medicine Kit:</span>
                  <span className="font-bold text-sky-500">₹1,500</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-700/50">
                  <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Tax Benefit:</span>
                  <span className="font-bold text-emerald-500">50% Exemption (80G)</span>
                </div>
              </div>

              <Link
                to="/donate"
                className="gradient-button w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 text-white shadow-lg"
              >
                <i className="fa-solid fa-heart"></i>
                <span>Donate For Patient Care</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default CareForPatientsPage;
