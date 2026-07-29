import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { APP_INFO } from '@/utils/constants';
import { contactService } from '@/services/contactService';
import { Send, Mail, Phone, MapPin, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg('');
      await contactService.submit(data);
      setSubmitted(true);
      reset();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320rem, 1fr))', gap: '32rem' }}>
      {/* Contact Information Card */}
      <div>
        <div className="glass-card" style={{ padding: '36rem 32rem', height: '100%' }}>
          <h3 style={{ fontSize: 'var(--font-2xl)', marginBottom: '16rem', color: 'var(--primary)' }}>Contact Information</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32rem' }}>
            We welcome inquiries from donors, volunteers, corporate CSR partners, and families seeking elderly shelter care.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24rem' }}>
            <div style={{ display: 'flex', gap: '16rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12rem', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary)' }}>
                <MapPin size={22} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--font-base)', marginBottom: '4rem' }}>Shelter & Registered Office</strong>
                <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)' }}>{APP_INFO.ADDRESS}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12rem', borderRadius: 'var(--radius-md)', background: 'var(--secondary-light)', color: 'var(--secondary)' }}>
                <Phone size={22} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--font-base)', marginBottom: '4rem' }}>24/7 Helpline & Phone</strong>
                <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)' }}>{APP_INFO.PHONE}</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12rem', borderRadius: 'var(--radius-md)', background: 'var(--accent-light)', color: 'var(--accent)' }}>
                <Mail size={22} />
              </div>
              <div>
                <strong style={{ display: 'block', fontSize: 'var(--font-base)', marginBottom: '4rem' }}>Email Inquiries</strong>
                <span style={{ fontSize: 'var(--font-sm)', color: 'var(--text-secondary)' }}>{APP_INFO.EMAIL}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Message Form */}
      <div>
        {submitted ? (
          <motion.div 
            className="glass-card text-center" 
            style={{ padding: '40rem 32rem' }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div style={{ width: '64rem', height: '64rem', borderRadius: '50%', background: 'var(--secondary-light)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16rem auto' }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: 'var(--font-2xl)', marginBottom: '12rem' }}>Message Sent!</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24rem' }}>
              Thank you for reaching out to RLRP Savali Niwara Kendra. Our administrative staff will reply to your email within 24 hours.
            </p>
            <button className="btn btn-primary btn-md" onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </motion.div>
        ) : (
          <div className="glass-card" style={{ padding: '36rem 32rem' }}>
            <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '8rem' }}>Send Us a Message</h3>
            <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-muted)', marginBottom: '24rem' }}>Please fill out the details below.</p>

            {errorMsg && (
              <div className="error-alert">
                <AlertCircle size={18} />
                <span>{errorMsg}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Rajesh Kumar"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <span className="form-error">{errors.name.message}</span>}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16rem' }}>
                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="rajesh@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98220 00000"
                    {...register('phone')}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="e.g. Admission Inquiry for Senior Citizen"
                  {...register('subject', { required: 'Subject is required' })}
                />
                {errors.subject && <span className="form-error">{errors.subject.message}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  placeholder="Write your query or message here..."
                  {...register('message', { required: 'Message content is required' })}
                ></textarea>
                {errors.message && <span className="form-error">{errors.message.message}</span>}
              </div>

              <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%', marginTop: '12rem' }}>
                {loading ? (
                  <>
                    <RefreshCw className="spin" size={18} /> Transmitting Message...
                  </>
                ) : (
                  <>
                    <Send size={18} /> Transmit Message
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
