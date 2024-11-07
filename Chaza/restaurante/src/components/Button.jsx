import React from 'react';

export default function Button({ text, onClick, className }) {
  return (
    <div className={`box-btn ${className || ''}`}>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
