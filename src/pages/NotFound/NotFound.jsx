import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button/Button';
import { Home } from 'lucide-react';

export const NotFound = () => (
  <div className="container section-padding" style={{ textAlign: 'center', padding: '8rem 1.5rem' }}>
    <h1 className="text-gradient" style={{ fontSize: '6rem', marginBottom: '1rem' }}>404</h1>
    <h2 style={{ marginBottom: '1rem' }}>Page Not Found</h2>
    <p style={{ marginBottom: '2rem' }}>The page you are looking for might have been moved or does not exist.</p>
    <Link to="/">
      <Button variant="primary" icon={Home}>
        Return to Home Page
      </Button>
    </Link>
  </div>
);

export default NotFound;
