import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-techno-primary disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-techno-primary text-white hover:bg-indigo-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5",
    outline: "border-2 border-slate-200 text-techno-dark bg-transparent hover:border-techno-primary hover:text-techno-primary",
    ghost: "text-techno-dark hover:text-techno-primary bg-transparent hover:bg-indigo-50",
    white: "bg-white text-techno-primary hover:bg-indigo-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};