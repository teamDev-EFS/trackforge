import React from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {label: string;options: {value:string;label:string}[];}
export default function Select({ label, id, options, className = '', ...props }: SelectProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-text-tertiary font-medium text-[11px] uppercase tracking-widest">{label}</label>
      <select
        id={id}
        className={`border border-border rounded-lg px-3 py-2 placeholder:text-text-tertiary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
