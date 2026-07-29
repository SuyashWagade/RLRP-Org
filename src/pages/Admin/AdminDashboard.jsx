import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '@/services/authService';
import { donationService } from '@/services/donationService';
import { programService } from '@/services/programService';
import { volunteerService } from '@/services/volunteerService';
import { contactService } from '@/services/contactService';
import { 
  Shield, LogOut, LayoutDashboard, HeartHandshake, Users, 
  BookOpen, Plus, Trash2, CheckCircle, RefreshCw, Mail, Layers
} from 'lucide-react';
import './Admin.css';

export const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({ totalRaised: 0, totalDonors: 0, totalPrograms: 0, totalVolunteers: 0 });
  const [programs, setPrograms] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const [donations, setDonations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // New program modal form state
  const [showProgramModal, setShowProgramModal] = useState(false);
  const [newProgram, setNewProgram] = useState({ title: '', category: 'Elderly Care', description: '', targetAmount: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    setUser(currentUser);
    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      const [statsRes, progRes, volRes, donRes, msgRes] = await Promise.allSettled([
        donationService.getStats(),
        programService.getAll(),
        volunteerService.getAll(),
        donationService.getAll(),
        contactService.getAll(),
      ]);

      if (statsRes.status === 'fulfilled' && statsRes.value?.stats) {
        setStats(statsRes.value.stats);
      }
      if (progRes.status === 'fulfilled' && progRes.value?.data) {
        setPrograms(progRes.value.data);
      }
      if (volRes.status === 'fulfilled' && volRes.value?.data) {
        setVolunteers(volRes.value.data);
      }
      if (donRes.status === 'fulfilled' && donRes.value?.data) {
        setDonations(donRes.value.data);
      }
      if (msgRes.status === 'fulfilled' && msgRes.value?.data) {
        setMessages(msgRes.value.data);
      }
    } catch (err) {
      console.error('Error loading dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  const handleCreateProgram = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', newProgram.title);
      formData.append('category', newProgram.category);
      formData.append('description', newProgram.description);
      formData.append('targetAmount', newProgram.targetAmount);

      await programService.create(formData);
      setShowProgramModal(false);
      setNewProgram({ title: '', category: 'Elderly Care', description: '', targetAmount: '' });
      loadDashboardData();
    } catch (err) {
      alert(err.message || 'Failed to create program');
    }
  };

  const handleDeleteProgram = async (id) => {
    if (window.confirm('Are you sure you want to delete this program?')) {
      try {
        await programService.delete(id);
        loadDashboardData();
      } catch (err) {
        alert('Failed to delete program');
      }
    }
  };

  const handleVolunteerStatus = async (id, newStatus) => {
    try {
      await volunteerService.updateStatus(id, newStatus);
      loadDashboardData();
    } catch (err) {
      alert('Failed to update volunteer status');
    }
  };

  return (
    <div className="admin-dashboard-page">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <div className="brand-logo-icon">R</div>
          <div>
            <h3>RLRP Admin</h3>
            <span className="badge badge-primary">{user?.role || 'ADMIN'}</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`sidebar-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={18} /> Overview
          </button>
          <button 
            className={`sidebar-nav-item ${activeTab === 'programs' ? 'active' : ''}`}
            onClick={() => setActiveTab('programs')}
          >
            <Layers size={18} /> Programs ({programs.length})
          </button>
          <button 
            className={`sidebar-nav-item ${activeTab === 'volunteers' ? 'active' : ''}`}
            onClick={() => setActiveTab('volunteers')}
          >
            <Users size={18} /> Volunteers ({volunteers.length})
          </button>
          <button 
            className={`sidebar-nav-item ${activeTab === 'donations' ? 'active' : ''}`}
            onClick={() => setActiveTab('donations')}
          >
            <HeartHandshake size={18} /> Donations ({donations.length})
          </button>
          <button 
            className={`sidebar-nav-item ${activeTab === 'messages' ? 'active' : ''}`}
            onClick={() => setActiveTab('messages')}
          >
            <Mail size={18} /> Messages ({messages.length})
          </button>
        </nav>

        <div className="sidebar-footer">
          <button className="btn btn-outline btn-sm" onClick={handleLogout} style={{ width: '100%' }}>
            <LogOut size={16} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-topbar">
          <div>
            <h2>Dashboard Control Panel</h2>
            <p>Welcome back, <strong>{user?.name || 'Administrator'}</strong></p>
          </div>
          <button className="btn btn-outline btn-sm" onClick={loadDashboardData} disabled={loading}>
            <RefreshCw size={16} className={loading ? 'spin' : ''} /> Refresh Data
          </button>
        </header>

        {loading ? (
          <div className="dashboard-loading">
            <div className="spinner"></div>
            <p>Loading dashboard records...</p>
          </div>
        ) : (
          <div className="admin-content-body">
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="overview-grid">
                <div className="glass-card stat-box">
                  <div className="stat-icon primary"><HeartHandshake size={24} /></div>
                  <div>
                    <h3>₹{stats.totalRaised.toLocaleString('en-IN')}</h3>
                    <p>Total Funds Raised</p>
                  </div>
                </div>

                <div className="glass-card stat-box">
                  <div className="stat-icon secondary"><Users size={24} /></div>
                  <div>
                    <h3>{stats.totalVolunteers || volunteers.length}</h3>
                    <p>Registered Volunteers</p>
                  </div>
                </div>

                <div className="glass-card stat-box">
                  <div className="stat-icon accent"><Layers size={24} /></div>
                  <div>
                    <h3>{programs.length}</h3>
                    <p>Active Programs</p>
                  </div>
                </div>

                <div className="glass-card stat-box">
                  <div className="stat-icon primary"><Mail size={24} /></div>
                  <div>
                    <h3>{messages.length}</h3>
                    <p>Contact Inquiries</p>
                  </div>
                </div>
              </div>
            )}

            {/* PROGRAMS TAB */}
            {activeTab === 'programs' && (
              <div className="tab-section">
                <div className="tab-section-header">
                  <h3>Elderly Care Programs</h3>
                  <button className="btn btn-primary btn-sm" onClick={() => setShowProgramModal(true)}>
                    <Plus size={16} /> Add Program
                  </button>
                </div>

                <div className="data-table-container glass-card">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Target Amount</th>
                        <th>Raised</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {programs.length === 0 ? (
                        <tr><td colSpan="6" className="text-center">No programs created yet.</td></tr>
                      ) : (
                        programs.map((prog) => (
                          <tr key={prog.id}>
                            <td><strong>{prog.title}</strong></td>
                            <td><span className="badge badge-primary">{prog.category}</span></td>
                            <td>₹{prog.targetAmount.toLocaleString()}</td>
                            <td>₹{prog.raisedAmount.toLocaleString()}</td>
                            <td><span className="badge badge-secondary">{prog.status}</span></td>
                            <td>
                              <button className="icon-btn danger" onClick={() => handleDeleteProgram(prog.id)}>
                                <Trash2 size={16} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* VOLUNTEERS TAB */}
            {activeTab === 'volunteers' && (
              <div className="tab-section">
                <div className="tab-section-header">
                  <h3>Volunteer Applications</h3>
                </div>

                <div className="data-table-container glass-card">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email & Phone</th>
                        <th>Skills</th>
                        <th>Availability</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {volunteers.length === 0 ? (
                        <tr><td colSpan="6" className="text-center">No volunteer applications yet.</td></tr>
                      ) : (
                        volunteers.map((vol) => (
                          <tr key={vol.id}>
                            <td><strong>{vol.name}</strong></td>
                            <td>{vol.email}<br /><small>{vol.phone}</small></td>
                            <td>{vol.skills || 'General Support'}</td>
                            <td>{vol.availability || 'Weekends'}</td>
                            <td>
                              <span className={`badge ${vol.status === 'APPROVED' ? 'badge-secondary' : 'badge-primary'}`}>
                                {vol.status}
                              </span>
                            </td>
                            <td>
                              {vol.status !== 'APPROVED' && (
                                <button className="btn btn-secondary btn-sm" onClick={() => handleVolunteerStatus(vol.id, 'APPROVED')}>
                                  <CheckCircle size={14} /> Approve
                                </button>
                              )}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* DONATIONS TAB */}
            {activeTab === 'donations' && (
              <div className="tab-section">
                <div className="tab-section-header">
                  <h3>Donation Records</h3>
                </div>

                <div className="data-table-container glass-card">
                  <table className="data-table">
                    <thead>
                      <tr>
                        <th>Donor Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Transaction ID</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {donations.length === 0 ? (
                        <tr><td colSpan="5" className="text-center">No donation records found.</td></tr>
                      ) : (
                        donations.map((don) => (
                          <tr key={don.id}>
                            <td><strong>{don.donorName}</strong></td>
                            <td>{don.donorEmail}</td>
                            <td><strong style={{ color: 'var(--secondary)' }}>₹{don.amount.toLocaleString()}</strong></td>
                            <td><code>{don.transactionId || 'N/A'}</code></td>
                            <td>{new Date(don.createdAt).toLocaleDateString()}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* MESSAGES TAB */}
            {activeTab === 'messages' && (
              <div className="tab-section">
                <div className="tab-section-header">
                  <h3>Contact Inquiries</h3>
                </div>

                <div className="messages-list">
                  {messages.length === 0 ? (
                    <div className="glass-card text-center" style={{ padding: '32rem' }}>
                      <p>No messages received yet.</p>
                    </div>
                  ) : (
                    messages.map((msg) => (
                      <div key={msg.id} className="glass-card message-card" style={{ padding: '20rem', marginBottom: '16rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8rem' }}>
                          <h4>{msg.subject}</h4>
                          <small>{new Date(msg.createdAt).toLocaleString()}</small>
                        </div>
                        <p style={{ marginBottom: '8rem' }}>{msg.message}</p>
                        <small className="text-muted">From: <strong>{msg.name}</strong> ({msg.email} | {msg.phone || 'N/A'})</small>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Modal for adding program */}
      {showProgramModal && (
        <div className="admin-modal-overlay">
          <div className="glass-card admin-modal-content">
            <h3>Create New Elderly Care Program</h3>
            <form onSubmit={handleCreateProgram} style={{ marginTop: '16rem' }}>
              <div className="form-group">
                <label className="form-label">Program Title</label>
                <input
                  type="text"
                  className="form-input"
                  required
                  placeholder="e.g. Free Geriatric Medical Camp"
                  value={newProgram.title}
                  onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Target Funding Amount (₹)</label>
                <input
                  type="number"
                  className="form-input"
                  required
                  placeholder="100000"
                  value={newProgram.targetAmount}
                  onChange={(e) => setNewProgram({ ...newProgram, targetAmount: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  required
                  placeholder="Describe program goals and deliverables..."
                  value={newProgram.description}
                  onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                ></textarea>
              </div>

              <div style={{ display: 'flex', gap: '12rem', justifyContent: 'flex-end', marginTop: '20rem' }}>
                <button type="button" className="btn btn-outline btn-md" onClick={() => setShowProgramModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary btn-md">
                  Create Program
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
