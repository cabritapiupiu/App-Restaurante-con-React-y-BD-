import React from 'react';

export default function PasswordInput({ value, onChange }) {
  return (
    <div className="box-input">
      <input
        type="password"
        id="password"
        required
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label htmlFor="password">Contraseña</label>
    </div>
  );
}
