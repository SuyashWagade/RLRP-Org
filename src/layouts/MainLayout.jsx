import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/common/Navbar/Navbar';
import Footer from '@/components/common/Footer/Footer';
import { useScrollTop } from '@/hooks/useScrollTop';

export const MainLayout = () => {
  useScrollTop();

  return (
    <div className="app-layout" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="app-main-content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
