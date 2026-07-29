import React from 'react';
import SectionTitle from '@/components/common/SectionTitle/SectionTitle';
import Breadcrumb from '@/components/common/Breadcrumb/Breadcrumb';
import FinancialReport from '@/components/transparency';
import { ShieldCheck, PieChart, CheckCircle2, Award, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Transparency = () => {
  return (
    <div className="container section-padding">
      <Breadcrumb items={[{ label: 'Transparency' }]} />
      
      <SectionTitle
        badge="100% Financial Integrity & Governance"
        title="Audited Reports & Tax Certificates"
        subtitle="Every rupee donated to Real Life Real People's Savali Niwara Kendra is meticulously accounted for and independently audited."
      />

      {/* Fund Utilization Breakdown */}
      <motion.div 
        className="glass-card" 
        style={{ padding: '36rem 32rem', marginBottom: '40rem' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12rem', marginBottom: '20rem' }}>
          <PieChart size={28} style={{ color: 'var(--primary)' }} />
          <div>
            <h3 style={{ fontSize: 'var(--font-xl)' }}>Annual Fund Utilization Breakdown</h3>
            <p style={{ fontSize: 'var(--font-sm)', color: 'var(--text-muted)' }}>Distribution of funds across field operations and shelter management.</p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200rem, 1fr))', gap: '20rem' }}>
          <div style={{ background: 'var(--primary-light)', padding: '20rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--font-3xl)', color: 'var(--primary)', marginBottom: '4rem' }}>88%</h2>
            <strong style={{ fontSize: 'var(--font-sm)', display: 'block', color: 'var(--text-primary)' }}>Direct Elderly Care & Shelter</strong>
            <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Food, medicines, nursing salaries, shelter utilities</span>
          </div>

          <div style={{ background: 'var(--secondary-light)', padding: '20rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--font-3xl)', color: 'var(--secondary)', marginBottom: '4rem' }}>8%</h2>
            <strong style={{ fontSize: 'var(--font-sm)', display: 'block', color: 'var(--text-primary)' }}>Administrative & Operations</strong>
            <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Compliance, auditing, legal & office maintenance</span>
          </div>

          <div style={{ background: 'var(--accent-light)', padding: '20rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'var(--font-3xl)', color: 'var(--accent)', marginBottom: '4rem' }}>4%</h2>
            <strong style={{ fontSize: 'var(--font-sm)', display: 'block', color: 'var(--text-primary)' }}>Fundraising & Community Outreach</strong>
            <span style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Awareness drives and donor reporting</span>
          </div>
        </div>
      </motion.div>

      {/* Tax Exemption Badges */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280rem, 1fr))', gap: '24rem', marginBottom: '40rem' }}>
        <div className="glass-card" style={{ padding: '24rem', display: 'flex', gap: '16rem', alignItems: 'center' }}>
          <ShieldCheck size={36} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: 'var(--font-md)', marginBottom: '4rem' }}>Section 80G Certification</h4>
            <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Donors are entitled to 50% tax deduction under Indian Income Tax Act.</p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24rem', display: 'flex', gap: '16rem', alignItems: 'center' }}>
          <FileCheck size={36} style={{ color: 'var(--primary)', flexShrink: 0 }} />
          <div>
            <h4 style={{ fontSize: 'var(--font-md)', marginBottom: '4rem' }}>Section 12A Registration</h4>
            <p style={{ fontSize: 'var(--font-xs)', color: 'var(--text-muted)' }}>Official tax-exempt non-profit status granted by Income Tax Dept.</p>
          </div>
        </div>
      </div>

      {/* Audit Downloads */}
      <h3 style={{ fontSize: 'var(--font-xl)', marginBottom: '20rem' }}>Audited Statements & Filings</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16rem', maxWidth: '800rem' }}>
        <FinancialReport year="FY 2025-2026" title="Independent Auditor Financial Statement & Balance Sheet" size="3.2 MB" />
        <FinancialReport year="FY 2024-2025" title="Annual Report & Field Operational Expenses" size="2.8 MB" />
        <FinancialReport year="FY 2023-2024" title="80G Registration Renewal & FCRA Declaration" size="1.9 MB" />
      </div>
    </div>
  );
};

export default Transparency;
