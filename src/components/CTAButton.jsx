import React from 'react';
import { motion } from 'framer-motion';

const CTAButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-harvest-gold text-dark-slate hover:bg-yellow-500 focus:ring-harvest-gold shadow-lg hover:shadow-xl',
    secondary: 'bg-transparent border-2 border-harvest-gold text-harvest-gold hover:bg-harvest-gold hover:text-dark-slate focus:ring-harvest-gold',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark-slate focus:ring-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default CTAButton;