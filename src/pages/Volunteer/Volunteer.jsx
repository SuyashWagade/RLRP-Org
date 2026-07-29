import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import { volunteerService } from '@/services/volunteerService';
import { UserCheck, HeartHandshake, CheckCircle2, AlertCircle, RefreshCw, Calendar, Sparkles } from 'lucide-react';

export const Volunteer = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setErrorMsg('');
      await volunteerService.register(data);
      setSubmitted(true);
      reset();
    } catch (err) {
      setErrorMsg(err.message || 'Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Volunteer' }]} />
      
      <SectionTitle
        badge="Join Our Compassionate Caregivers"
        title="Volunteer at Savali Niwara Kendra"
        subtitle="Offer your time, warmth, professional skills, or companionship to enrich the lives of senior citizens."
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320rem, 1fr))', gap: '32rem', alignItems: 'start' }}>
        {/* Volunteer Info Side */}
        <div>
          <div className="glass-card" style={{ padding: '32rem', marginBottom: '24rem' }}>
            <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '16rem', color: 'var(--primary)' }}>Why Volunteer With Us?</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16rem' }}>
              <li style={{ display: 'flex', gap: '12rem', alignItems: 'flex-start' }}>
                <Sparkles size={20} style={{ color: 'var(--secondary)', flexShrink: 0, marginTop: '2rem' }} />
                <div>
                  <strong>Bring Joy to Senior Lives:</strong> Spend quality time chatting, reading, playing games, and celebrating festivals with elderly residents.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12rem', alignItems: 'flex-start' }}>
                <HeartHandshake size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2rem' }} />
                <div>
                  <strong>Provide Professional Assistance:</strong> Doctors, nurses, physiotherapists, counselors, and artists can offer specialized care.
                </div>
              </li>
              <li style={{ display: 'flex', gap: '12rem', alignItems: 'flex-start' }}>
                <Calendar size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2rem' }} />
                <div>
                  <strong>Flexible Scheduling:</strong> Volunteer over weekends, weekdays, or remotely for administrative & media support.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Volunteer Application Form */}
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
              <h3 style={{ fontSize: 'var(--font-2xl)', marginBottom: '12rem' }}>Application Submitted!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24rem' }}>
                Thank you for offering your help to RLRP Savali Niwara Kendra. Our volunteer coordinator will contact you shortly via email/phone.
              </p>
              <button className="btn btn-primary btn-md" onClick={() => setSubmitted(false)}>
                Submit Another Application
              </button>
            </motion.div>
          ) : (
            <div className="glass-card" style={{ padding: '36rem 32rem' }}>
              <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '8rem' }}>Volunteer Application Form</h3>
              <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-muted)', marginBottom: '24rem' }}>Fill out the details below to join our volunteer network.</p>

              {errorMsg && (
                <div className="error-alert">
                  <AlertCircle size={18} />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Ananya Sharma"
                    {...register('name', { required: 'Full name is required' })}
                  />
                  {errors.name && <span className="form-error">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="ananya@example.com"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                  />
                  {errors.email && <span className="form-error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="+91 98220 12345"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <span className="form-error">{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label className="form-label">Key Skills / Domain of Support</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="e.g. Healthcare, Elderly Companion, Event Organizer"
                    {...register('skills')}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Availability</label>
                  <select className="form-select" {...register('availability')}>
                    <option value="Weekends Only">Weekends Only</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Flexible / On Call">Flexible / On Call</option>
                    <option value="Remote / Digital Support">Remote / Digital Support</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Why would you like to volunteer with RLRP?</label>
                  <textarea
                    className="form-textarea"
                    rows="3"
                    placeholder="Briefly describe your motivation..."
                    {...register('notes')}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" disabled={loading} style={{ width: '100%', marginTop: '12rem' }}>
                  {loading ? (
                    <>
                      <RefreshCw className="spin" size={18} /> Submitting Application...
                    </>
                  ) : (
                    <>
                      <UserCheck size={18} /> Submit Volunteer Application
                    </>
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
