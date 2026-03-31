import React from 'react';
interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {label: string;}
export default function Checkbox({ label, id, className = '', ...props }: CheckboxProps) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id={id}
        className={`border border-border rounded focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none ${className}`}
        {...props}
      />
      <label htmlFor={id} className="text-text-primary text-sm select-none">{label}</label>
    </div>
  );
}
