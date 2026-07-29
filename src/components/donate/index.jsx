import React, { useState } from 'react';
import { DONATION_AMOUNTS, APP_INFO } from '@/utils/constants';
import { donationService } from '@/services/donationService';
import { Heart, ShieldCheck, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const finalAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleDonate = async (e) => {
    e.preventDefault();
    if (!donorName || !donorEmail || !finalAmount) {
      setErrorMsg('Please fill in your name, email, and donation amount.');
      return;
    }

    try {
      setLoading(true);
      setErrorMsg('');
      await donationService.create({
        donorName,
        donorEmail,
        donorPhone,
        amount: finalAmount,
      });
      setSuccess(true);
    } catch (err) {
      setErrorMsg(err.message || 'Payment processing failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div 
        className="glass-card text-center" 
        style={{ maxWidth: '580rem', margin: '0 auto', padding: '40rem 32rem' }}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div style={{ width: '64rem', height: '64rem', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16rem auto' }}>
          <CheckCircle2 size={36} />
        </div>
        <h2 style={{ fontSize: 'var(--font-2xl)', marginBottom: '12rem' }}>Heartfelt Thank You!</h2>
        <p style={{ fontSize: 'var(--font-base)', marginBottom: '20rem', color: 'var(--text-secondary)' }}>
          Dear <strong>{donorName}</strong>, your generous contribution of <strong>₹{finalAmount.toLocaleString('en-IN')}</strong> will provide shelter, hot meals, and medical care to senior citizens at Savali Niwara Kendra.
        </p>
        <div style={{ background: 'var(--primary-light)', padding: '16rem', borderRadius: 'var(--radius-md)', marginBottom: '24rem', fontSize: 'var(--font-xs)', color: 'var(--primary)' }}>
          <ShieldCheck size={16} style={{ display: 'inline', marginRight: '6rem' }} />
          An official 80G tax exemption receipt has been dispatched to <strong>{donorEmail}</strong>.
        </div>
        <button 
          className="btn btn-outline btn-md" 
          onClick={() => { setSuccess(false); setDonorName(''); setDonorEmail(''); setDonorPhone(''); }}
        >
          Make Another Donation
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-card" style={{ maxWidth: '640rem', margin: '0 auto', padding: '36rem 32rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '28rem' }}>
        <h3 style={{ fontSize: 'var(--font-2xl)', marginBottom: '8rem' }}>Select Donation Amount</h3>
        <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-muted)' }}>Every contribution grants an elderly resident dignity, hot food, and medical protection.</p>
      </div>

      {errorMsg && (
        <div className="error-alert">
          <AlertCircle size={18} />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleDonate}>
        {/* Preset Amount Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12rem', marginBottom: '20rem' }}>
          {DONATION_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
              style={{
                padding: '14rem 12rem',
                borderRadius: 'var(--radius-md)',
                border: `1.5rem solid ${selectedAmount === amt && !customAmount ? 'var(--secondary)' : 'var(--bg-border)'}`,
                background: selectedAmount === amt && !customAmount ? 'var(--secondary-light)' : 'var(--bg-card)',
                color: selectedAmount === amt && !customAmount ? 'var(--secondary)' : 'var(--text-primary)',
                fontWeight: 700,
                fontSize: 'var(--font-md)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              ₹{amt.toLocaleString('en-IN')}
            </button>
          ))}
        </div>

        {/* Custom Amount Input */}
        <div className="form-group">
          <label className="form-label">Or Enter Custom Amount (₹)</label>
          <input
            type="number"
            className="form-input"
            placeholder="e.g. 15000"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
          />
        </div>

        {/* Donor Information */}
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            type="text"
            className="form-input"
            required
            placeholder="Your full name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16rem' }}>
          <div className="form-group">
            <label className="form-label">Email Address *</label>
            <input
              type="email"
              className="form-input"
              required
              placeholder="name@domain.com"
              value={donorEmail}
              onChange={(e) => setDonorEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-input"
              placeholder="+91 98220 00000"
              value={donorPhone}
              onChange={(e) => setDonorPhone(e.target.value)}
            />
          </div>
        </div>

        {/* Tax Exemption Banner */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10rem', padding: '12rem 16rem', background: 'var(--primary-light)', borderRadius: 'var(--radius-md)', margin: '16rem 0 24rem 0', fontSize: 'var(--font-xs)', color: 'var(--primary)' }}>
          <ShieldCheck size={20} style={{ flexShrink: 0 }} />
          <span><strong>Tax Benefit:</strong> Donations to RLRP Savali Niwara Kendra are 100% tax exempted under Section 80G & 12A of Income Tax Act.</span>
        </div>

        <button type="submit" className="btn btn-secondary btn-lg" disabled={loading} style={{ width: '100%' }}>
          {loading ? (
            <>
              <RefreshCw className="spin" size={18} /> Processing Contribution...
            </>
          ) : (
            <>
              <Heart size={18} /> Donate ₹{finalAmount.toLocaleString('en-IN')} Now
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default DonationForm;
