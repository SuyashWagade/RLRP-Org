import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-950 text-slate-100 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4 space-y-6">
        <div className="text-7xl font-black text-sky-400">404</div>
        <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        <p className="text-slate-300 text-xs leading-relaxed">
          The page you are looking for might have been moved, renamed, or does not exist.
        </p>
        <Link
          to="/"
          className="gradient-button inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
