import React, { useState } from 'react';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica para manejar el registro
        console.log('Registrando:', { email, password, confirmPassword });
    }
    return (
        <div className="register-container">
            <div className="register-header">
                <div className="access">Acceso</div>
                <div className="signup">Inscribirse</div>
            </div>
            <div className="welcome-message">
                <h1>Bienvenido novato,</h1>
                <p>Ingrese su información a continuación o esta será corroborada por el administrador del gimnasio</p>
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
                <button type="submit" className="register-button">Registrarse</button>
            </form>
        </div>
    )
}

export default Register