import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, UtensilsCrossed, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';

export const NutritionTribalPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-20 bg-slate-950 text-slate-100 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-xs font-semibold text-sky-400 hover:text-sky-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home Page</span>
        </Link>

        {/* Hero Title Header */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center space-x-2 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full border border-amber-500/20 mb-4">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amber-400" />
            <span>What We Do Initiative #3</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Nutrition For Tribal Children
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            We provide specialized high-nutrition kits to children from tribal and semi-tribal areas to combat severe malnutrition, support their physical growth, and empower their school education.
          </p>
        </div>

        {/* Image Banner */}
        <div className="rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl h-80 sm:h-96 relative">
          <img 
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=1200&q=80" 
            alt="Nutrition For Tribal Children" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>

        {/* Content Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8 text-slate-300 leading-relaxed text-sm">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">Eradicating Child Malnutrition</h3>
              <p>
                In tribal hamlets surrounding Pune and Western Maharashtra, child malnutrition remains a grave concern leading to stunted growth, low immunity, and school dropout rates.
              </p>
              <p>
                RLRP delivers monthly nutrition kits containing protein mixes, dates, jaggery, pulses, vitamins, and hygiene essentials directly to tribal schools and hamlets.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Key Impact Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  <UtensilsCrossed className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Monthly Nutrition Kits:</strong> Essential nutrient-rich food distributed to over 500 tribal kids every month.
                  </div>
                </li>
                <li className="flex items-start space-x-3 bg-slate-900/40 p-4 rounded-xl border border-slate-800">
                  <GraduationCap className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">50+ Students Supported:</strong> Educational scholarships, school uniforms, and books throughout the academic year.
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sticky top-28 shadow-xl space-y-6">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Support Tribal Children</span>
              </h4>

              <p className="text-xs text-slate-300 leading-relaxed">
                Sponsor a monthly nutrition kit or child education fund today.
              </p>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">1 Nutrition Kit:</span>
                  <span className="font-bold text-amber-400">₹800</span>
                </div>
                <div className="flex justify-between items-center text-xs py-2 border-b border-slate-800">
                  <span className="text-slate-400">Child Education (Annual):</span>
                  <span className="font-bold text-indigo-400">₹5,000</span>
                </div>
              </div>

              <Link
                to="/donate"
                className="gradient-button w-full py-3.5 rounded-xl font-bold text-xs flex items-center justify-center space-x-2"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Support Tribal Children</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default NutritionTribalPage;
