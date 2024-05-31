import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Button from './Button';
import ExerciseCategory from './ExerciseCategory';
import BottomNav from './BottomNav';
import SocialPage from './SocialPage'; 

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Button text="Ejercicios" />
              <div className="content">
                <ExerciseCategory
                  title="Ejercicios Pecho"
                  exercises={[
                    { name: 'Abdominales', description: '1 Ejercicio de pecho', image: "./abdomi.png" },
                    { name: 'Press inclinado', description: '1 Ejercicio de pecho', image: "./press.png" },
                  ]}
                />
                <ExerciseCategory
                  title="Ejercicios Pierna"
                  exercises={[
                    { name: 'Elevación de cadera inversa', description: '1 Ejercicio de pierna', image: "./pierna.png" },
                    { name: 'Peso muerto rumano', description: '1 Ejercicio de pierna', image: "./pierna2.png" },
                  ]}
                />
                <ExerciseCategory
                  title="Ejercicios Gluteos"
                  exercises={[
                    { name: 'Ejercicio Gluteos 1', description: '1 Ejercicio de gluteos', image: "./gluteo.png" },
                    { name: 'Ejercicio Gluteos 2', description: '1 Ejercicio de gluteos', image: "./gluteo4.png" },
                  ]}
                />
              </div>
            </>
          } />
          <Route path="/social" element={<SocialPage />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
};

export default App;
