import React from 'react';
import './Header.css';

const Header = () => {
  return React.createElement(
    'header',
    { className: 'header' },
    React.createElement('h1', null, 'Rutinas personalizadas'),
    React.createElement('p', null, '¡Elabora tu rutina personal y unica!')
  );
};

export default Header;