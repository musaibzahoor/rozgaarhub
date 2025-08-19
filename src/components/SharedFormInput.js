import React from 'react';
export default function SharedFormInput({ label, type = "text", value, onChange }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input type={type} value={value} onChange={onChange} className="border p-2 w-full rounded" />
    </div>
  );
}