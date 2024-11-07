import React from 'react';

export default function EmailInput({ value, onChange, placeholder }) {
  return (
    <div className="box-input">
      <input
        type="email"
        id="email"
        required
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label htmlFor="email">{placeholder || 'Ingresar Email'}</label>
    </div>
  );
}
