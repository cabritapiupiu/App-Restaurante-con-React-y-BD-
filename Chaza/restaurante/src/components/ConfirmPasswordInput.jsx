import React from 'react';

export default function ConfirmPasswordInput({ value, onChange }) {
  return (
    <div className="box-input">
      <input
        type="password"
        id="confirmPassword"
        required
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label htmlFor="confirmPassword">Confirmar Password</label>
    </div>
  );
}
