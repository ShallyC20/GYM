import React from 'react';
import './ExerciseCategory.css';

const ExerciseCategory = ({ title, exercises }) => {
  return (
    <div className="exercise-category">
      <h2>{title}</h2>
      <div className="exercise-list">
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <div className="exercise-info">
              <h3>{exercise.name}</h3>
              <p>{exercise.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseCategory;
