import React, { useState } from 'react';
import { Card } from '@/components/common/Card/Card';
import { Button } from '@/components/common/Button/Button';
import { DONATION_AMOUNTS } from '@/utils/constants';
import { Heart } from 'lucide-react';

export const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = (e) => {
    e.preventDefault();
    const amount = customAmount || selectedAmount;
    alert(`Thank you for choosing to donate $${amount}! (Integration backend ready)`);
  };

  return (
    <Card style={{ maxWidth: '540px', margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Choose Donation Amount</h3>
      <form onSubmit={handleDonate}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {DONATION_AMOUNTS.map((amt) => (
            <button
              key={amt}
              type="button"
              onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
              style={{
                padding: '0.75rem',
                borderRadius: 'var(--radius-md)',
                border: `1.5px solid ${selectedAmount === amt && !customAmount ? 'var(--primary)' : 'var(--bg-border)'}`,
                background: selectedAmount === amt && !customAmount ? 'var(--primary-light)' : 'transparent',
                color: selectedAmount === amt && !customAmount ? 'var(--primary)' : 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              ${amt}
            </button>
          ))}
        </div>

        <input
          type="number"
          placeholder="Custom Amount ($)"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--bg-border)',
            background: 'var(--bg-main)',
            color: 'var(--text-primary)',
            marginBottom: '1.5rem'
          }}
        />

        <Button variant="secondary" size="lg" icon={Heart} style={{ width: '100%' }} type="submit">
          Proceed to Donate
        </Button>
      </form>
    </Card>
  );
};

export default DonationForm;
