import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import './Breadcrumb.css';

export const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="breadcrumb-nav" aria-label="Breadcrumb">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <Link to="/">
            <Home size={14} /> Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            <ChevronRight size={14} className="separator" />
            {item.path ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span className="active">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
