import React from 'react';
import './ExerciseCard.css';

const ExerciseCard = ({ name, description, image }) => {
  return React.createElement(
    'div',
    { className: 'exercise-card' },
    React.createElement('img', { src: image, alt: name }),
    React.createElement(
      'div',
      { className: 'exercise-info' },
      React.createElement('h3', null, name),
      React.createElement('p', null, description)
    )
  );
};

export default ExerciseCard;