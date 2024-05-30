import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Bienvenido a la Aplicación del gym</h1>
            <p>Esta es la pantalla de inicio.</p>
            <Link to="/login">
                <button onClick={() => alert('Navegar a Login')}>Iniciar Sesión</button>
            </Link>
            <Link to="/register">
                <button onClick={() => alert('Navegar a Registro')}>Registrarse</button>
            </Link>
        </div>
    );
}

export default Home;