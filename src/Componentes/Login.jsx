import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import Imagen1 from "../assets/Logo1.png";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${email}, Password: ${password}`);
    }
    return (

        <div>
            <div className="containerL">
                <div className="login-card">
                    <div className="ImagenLog">
                        <div className="login-header">
                            <Link to="/login" className="access">Acceso</Link>
                            <Link to="/register" className="signup">Inscribirse</Link>
                            <img className="Logo" src={Imagen1} alt="Logo de del GYM" />
                        </div>
                        <div className="Mensaje">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>Bienvenido de nuevo</h1>
                        </div>
                    </div>
                    <form className="login-form" onSubmit={handleSubmit}>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />

                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                        <Link to="/casa">
                            <button className="login-button">Acceso</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login