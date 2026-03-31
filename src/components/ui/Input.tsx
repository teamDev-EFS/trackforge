import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {label: string;}
export default function Input({ label, id, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1 text-text-tertiary font-medium text-[11px] uppercase tracking-widest">{label}</label>
      <input
        id={id}
        className={`border border-border rounded-lg px-3 py-2 placeholder:text-text-tertiary focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${className}`}
        {...props}
      />
    </div>
  );
}
