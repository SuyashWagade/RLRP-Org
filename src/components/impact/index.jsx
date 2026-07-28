import React from 'react';

export const ImpactStats = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
    <div>
      <h2 className="text-gradient" style={{ fontSize: '3rem' }}>50,000+</h2>
      <p>Lives Impacted</p>
    </div>
    <div>
      <h2 className="text-gradient" style={{ fontSize: '3rem' }}>120+</h2>
      <p>Villages Empowered</p>
    </div>
    <div>
      <h2 className="text-gradient" style={{ fontSize: '3rem' }}>95%</h2>
      <p>Fund Efficiency</p>
    </div>
    <div>
      <h2 className="text-gradient" style={{ fontSize: '3rem' }}>35+</h2>
      <p>Active Programs</p>
    </div>
  </div>
);

export default ImpactStats;
