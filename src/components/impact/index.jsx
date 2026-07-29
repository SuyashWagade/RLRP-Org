import React from 'react';
import { motion } from 'framer-motion';

export const ImpactStats = () => {
  const stats = [
    { value: '500+', label: 'Senior Residents Rescued & Sheltered', color: 'var(--primary)' },
    { value: '180,000+', label: 'Nutritious Hot Meals Served', color: 'var(--secondary)' },
    { value: '24/7', label: 'On-Site Medical & Geriatric Nursing', color: 'var(--accent)' },
    { value: '100%', label: 'Tax Exemption (80G & 12A Certified)', color: 'var(--primary)' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220rem, 1fr))', gap: '32rem', textAlign: 'center' }}>
      {stats.map((stat, idx) => (
        <motion.div 
          key={idx}
          className="glass-card"
          style={{ padding: '32rem 20rem' }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          viewport={{ once: true }}
        >
          <h2 style={{ fontSize: 'var(--font-4xl)', color: stat.color, fontWeight: 900, marginBottom: '8rem' }}>
            {stat.value}
          </h2>
          <p style={{ fontSize: 'var(--font-base)', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ImpactStats;
