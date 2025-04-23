import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = "primary", size = "md" }) => {
  // Get the variant of class (if not found put primary as default)
  const variantClass = styles[variant] || styles.primary;

  // Get the size of class (if not found put md as default)
  const sizeClass = styles[size] || styles.md;

  // Concat all classes
  const concatClasses = `${styles.button} ${variantClass} ${sizeClass}`;

  return (
    <button className={concatClasses}>
      {children}
    </button>
  );
};

export default Button;
