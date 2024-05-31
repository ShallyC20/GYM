import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="home-card">
                <div className="Imagen">
                </div>
                <Link to="/login">
                    <button>Iniciar Sesión</button>
                </Link>
                <Link to="/register">
                    <button >Registrarse</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;