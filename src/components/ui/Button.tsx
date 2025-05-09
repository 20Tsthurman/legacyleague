"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick
}: ButtonProps) => {
  
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-md transition-all duration-200";
  
  const variantClasses = {
    primary: "bg-gradient-to-br from-blue-600 to-emerald-600 text-white hover:opacity-90 active:scale-95",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 active:scale-95",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50 active:scale-95",
    ghost: "text-blue-600 hover:bg-blue-50 active:scale-95"
  };
  
  const sizeClasses = {
    sm: "text-sm px-3 py-1.5",
    md: "text-base px-4 py-2",
    lg: "text-lg px-6 py-3"
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;