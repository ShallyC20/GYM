import React from 'react';
import './Button.css';

const Button = ({ text }) => {
  return React.createElement(
    'button',
    { className: 'exercise-button' },
    text
  );
};

export default Button;