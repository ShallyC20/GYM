import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import Imagen1 from "../assets/Logo1.png";

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registrando:', { email, password, confirmPassword });
    }
    return (
        <div className="containerR">
            <div className="register-card">
                <div className="ImagenReg">
                    <div className="register-header">
                        <Link to="/login" className="access">Acceso</Link>
                        <Link to="/register" className="signup">Inscribirse</Link>
                        <img className="Logo" src={Imagen1} alt="Logo de del GYM" />
                    </div>
                    <div className="welcome-message">
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
                        <h1>Bienvenido novato,</h1>
                        <p>Ingrese su información a continuación o</p>
                        <p>esta será corroborada por el administrador del gimnasio</p>
                    </div>
                </div>
                <form className="register-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña de nuevo"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Link to="/casa">
                        <button className="register-button">Registrarse</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register