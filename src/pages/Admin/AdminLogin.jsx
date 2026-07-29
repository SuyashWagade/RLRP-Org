import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { authService } from '@/services/authService';
import { Shield, Lock, Mail, AlertCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Admin.css';

export const AdminLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setErrorMsg('');
      await authService.login(data);
      navigate('/admin/dashboard');
    } catch (err) {
      setErrorMsg(err.message || 'Login failed. Please check credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="container admin-login-container">
        <div className="glass-card admin-login-card">
          <Link to="/" className="back-link">
            <ArrowLeft size={16} /> Back to Public Site
          </Link>

          <div className="admin-login-header">
            <div className="admin-icon-circle">
              <Shield size={28} />
            </div>
            <h2>RLRP Admin Portal</h2>
            <p>Sign in to manage Savali Niwara Kendra content and operations.</p>
          </div>

          {errorMsg && (
            <div className="error-alert">
              <AlertCircle size={18} />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="admin-login-form">
            <div className="form-group">
              <label className="form-label">Admin Email</label>
              <div className="input-icon-wrapper">
                <Mail className="input-icon" size={18} />
                <input
                  type="email"
                  className="form-input with-icon"
                  placeholder="admin@rlrpsavaliniwara.org"
                  {...register('email', { required: 'Email is required' })}
                />
              </div>
              {errors.email && <span className="form-error">{errors.email.message}</span>}
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-icon-wrapper">
                <Lock className="input-icon" size={18} />
                <input
                  type="password"
                  className="form-input with-icon"
                  placeholder="••••••••"
                  {...register('password', { required: 'Password is required' })}
                />
              </div>
              {errors.password && <span className="form-error">{errors.password.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-lg" disabled={isLoading} style={{ width: '100%', marginTop: '12rem' }}>
              {isLoading ? 'Authenticating...' : 'Sign In To Dashboard'}
            </button>
          </form>

          <div className="demo-credentials-note">
            <p><strong>Default Admin Demo:</strong></p>
            <code>Email: admin@rlrpsavaliniwara.org | Password: admin123</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
