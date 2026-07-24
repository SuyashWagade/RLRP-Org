import React from 'react';
import './Card.css';

export const Card = ({ children, className = '', hoverable = true, ...props }) => {
  return (
    <div className={`card-component ${hoverable ? 'is-hoverable' : ''} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Card;
