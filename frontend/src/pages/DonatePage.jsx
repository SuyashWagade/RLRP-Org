import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export const DonatePage = () => {
  const { darkMode } = useTheme();
  const [amount, setAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [donorPan, setDonorPan] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopyUPI = () => {
    navigator.clipboard.writeText('rlrp.savali@upi');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const selectedFinalAmount = customAmount ? parseFloat(customAmount) : amount;

  return (
    <div className={`pt-28 pb-20 transition-colors duration-300 min-h-screen ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 text-xs font-bold px-4 py-1.5 rounded-full border border-orange-500/20 mb-4">
            <i className="fa-solid fa-shield-halved text-emerald-500"></i>
            <span>80G Tax Exemption Certified (50% Tax Savings)</span>
          </div>
          <h1 className={`text-3xl sm:text-5xl font-black tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Support Elderly Citizens & Hospital Patients
          </h1>
          <p className={`text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Your generous contribution directly funds senior hospital meals, abandoned elder rescue operations, and Savali Nivara shelter care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Donation Form Column */}
          <div className={`lg:col-span-7 border rounded-3xl p-6 sm:p-8 shadow-2xl transition-colors ${
            darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
          }`}>
            
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/30 flex items-center justify-center mx-auto text-3xl">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Thank You for Supporting Senior Care!
                </h3>
                <p className={`text-xs sm:text-sm max-w-md mx-auto ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  You have chosen to donate <strong className="text-orange-500">₹{selectedFinalAmount}</strong>. Please complete the transfer using the UPI QR / Bank details on the right, and your 80G Tax Exemption Receipt will be emailed to <strong>{donorEmail}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="gradient-button px-6 py-2.5 rounded-xl font-bold text-xs text-white"
                >
                  Make Another Contribution
                </button>
              </div>
            ) : (
              <form onSubmit={handleDonateSubmit} className="space-y-6">
                
                {/* Amount Selector */}
                <div>
                  <label className={`block text-xs font-extrabold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    1. Select Contribution Amount (INR)
                  </label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {[500, 1000, 2500, 5000, 10000].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => { setAmount(val); setCustomAmount(''); }}
                        className={`py-3 rounded-xl text-xs font-bold border transition-all ${
                          amount === val && !customAmount
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/30'
                            : darkMode
                              ? 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                              : 'bg-slate-100 text-slate-800 border-slate-300 hover:border-slate-400'
                        }`}
                      >
                        ₹{val}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    placeholder="Enter Custom Amount (₹)"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className={`w-full border rounded-xl px-4 py-3 text-xs outline-none transition-colors ${
                      darkMode 
                        ? 'bg-slate-950 border-slate-800 text-white focus:border-orange-500' 
                        : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                    }`}
                  />
                </div>

                {/* Donor Information */}
                <div>
                  <label className={`block text-xs font-extrabold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    2. Your Details (Required for 80G Receipt)
                  </label>
                  
                  <div className="space-y-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-2.5 text-xs outline-none transition-colors ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-orange-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                      }`}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={donorEmail}
                        onChange={(e) => setDonorEmail(e.target.value)}
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs outline-none transition-colors ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-orange-500' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                        }`}
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Mobile Phone *"
                        value={donorPhone}
                        onChange={(e) => setDonorPhone(e.target.value)}
                        className={`w-full border rounded-xl px-4 py-2.5 text-xs outline-none transition-colors ${
                          darkMode 
                            ? 'bg-slate-950 border-slate-800 text-white focus:border-orange-500' 
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                        }`}
                      />
                    </div>

                    <input
                      type="text"
                      placeholder="PAN Card Number (Optional for 80G Tax Receipt)"
                      value={donorPan}
                      onChange={(e) => setDonorPan(e.target.value)}
                      className={`w-full border rounded-xl px-4 py-2.5 text-xs outline-none uppercase transition-colors ${
                        darkMode 
                          ? 'bg-slate-950 border-slate-800 text-white focus:border-orange-500' 
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-orange-500'
                      }`}
                    />
                  </div>
                </div>

                {/* Payment Mode */}
                <div>
                  <label className={`block text-xs font-extrabold uppercase tracking-wider mb-3 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    3. Select Payment Gateway / UPI Mode
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'upi'
                          ? 'bg-orange-500/20 text-orange-500 border-orange-500'
                          : darkMode
                            ? 'bg-slate-950 text-slate-400 border-slate-800'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      <i className="fa-solid fa-qrcode text-lg"></i>
                      <span>UPI / QR</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'bank'
                          ? 'bg-orange-500/20 text-orange-500 border-orange-500'
                          : darkMode
                            ? 'bg-slate-950 text-slate-400 border-slate-800'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      <i className="fa-solid fa-building-columns text-lg"></i>
                      <span>Bank NEFT/RTGS</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-3 rounded-xl text-xs font-bold border flex flex-col items-center gap-1 transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-orange-500/20 text-orange-500 border-orange-500'
                          : darkMode
                            ? 'bg-slate-950 text-slate-400 border-slate-800'
                            : 'bg-slate-100 text-slate-600 border-slate-300'
                      }`}
                    >
                      <i className="fa-solid fa-credit-card text-lg"></i>
                      <span>Card / NetBanking</span>
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="gradient-button w-full py-4 rounded-xl font-extrabold text-sm flex items-center justify-center space-x-2 text-white shadow-xl hover:shadow-orange-500/40 transition-all"
                >
                  <i className="fa-solid fa-heart"></i>
                  <span>Proceed to Pay ₹{selectedFinalAmount || 0}</span>
                </button>

              </form>
            )}

          </div>

          {/* Bank / QR Payment Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* UPI QR Box */}
            <div className={`border rounded-3xl p-6 shadow-xl text-center space-y-4 transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              <h3 className={`text-lg font-bold flex items-center justify-center gap-2 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                <i className="fa-solid fa-qrcode text-amber-500"></i>
                <span>Direct Scan & Pay (GPay / PhonePe / Paytm)</span>
              </h3>

              <div className="w-48 h-48 mx-auto bg-white p-3 rounded-2xl border-4 border-orange-500/40 shadow-inner flex items-center justify-center">
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=rlrp.savali@upi&pn=RLRP%20Savali%20Nivara" 
                  alt="RLRP UPI QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>

              <div className={`p-3 rounded-xl border flex items-center justify-between ${
                darkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
              }`}>
                <div className="text-left text-xs">
                  <span className="text-slate-500 block text-[10px]">Official UPI ID:</span>
                  <strong className="text-orange-500 font-mono">rlrp.savali@upi</strong>
                </div>
                <button
                  type="button"
                  onClick={handleCopyUPI}
                  className="p-2 bg-orange-500 text-white rounded-lg text-xs flex items-center gap-1 font-bold"
                >
                  <i className={`fa-solid ${copied ? 'fa-check' : 'fa-copy'}`}></i>
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Bank Details Box */}
            <div className={`border rounded-3xl p-6 shadow-xl space-y-3 text-xs transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-slate-200'
            }`}>
              <h4 className={`text-sm font-bold flex items-center gap-2 border-b pb-3 ${
                darkMode ? 'text-white border-slate-800' : 'text-slate-900 border-slate-200'
              }`}>
                <i className="fa-solid fa-building-columns text-orange-500"></i>
                <span>Direct Bank Account Details</span>
              </h4>
              
              <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Account Name:</span>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Real Life Real People Trust</span>
              </div>
              <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Bank Name:</span>
                <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>State Bank of India (SBI)</span>
              </div>
              <div className={`flex justify-between py-1 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Account Number:</span>
                <span className="font-mono text-orange-500 font-bold">39840192834</span>
              </div>
              <div className="flex justify-between py-1">
                <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>IFSC Code:</span>
                <span className="font-mono text-orange-500 font-bold">SBIN0001234</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default DonatePage;
