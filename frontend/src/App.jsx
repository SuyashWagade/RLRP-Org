import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import CareForPatientsPage from './pages/CareForPatientsPage';
import RescueRehabPage from './pages/RescueRehabPage';
import ElderlyCarePage from './pages/ElderlyCarePage';
import DonatePage from './pages/DonatePage';
import WhoWeArePage from './pages/WhoWeArePage';
import NotFoundPage from './pages/NotFoundPage';

const AppContent = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen font-sans selection:bg-orange-500 selection:text-white transition-colors duration-300 ${
      darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Persistent Top Navigation Bar */}
      <Navbar />

      {/* Dynamic Route Viewports */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/what-we-do/care-for-patients" element={<CareForPatientsPage />} />
          <Route path="/what-we-do/rescue-rehabilitation" element={<RescueRehabPage />} />
          <Route path="/what-we-do/elderly-care" element={<ElderlyCarePage />} />
          <Route path="/what-we-do/nutrition-tribal-children" element={<ElderlyCarePage />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
