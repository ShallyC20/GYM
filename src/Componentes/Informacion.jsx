import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Informacion.css';

function Informacion() {
    return (
        <div className="containerI">
            <div className="inf-card">
                <h1>Informacion</h1>
                <div className="Tarjeta">
                    <Link to="/historial">
                        <button className="inf-button">Historial de entrenamiento</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Etapas de aumentar peso</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Dieta</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Dieta de masa y volumen</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Rutina de ejercicios</button>
                    </Link>
                    <Link to="/casa">
                        <button className="inf-button">Rutinas personalizadas para ti</button>
                    </Link>
                </div>
                <div className="BotonNav">
                    <NavItem to="/amigos"><i className="fas fa-users"></i></NavItem>
                    <NavItem to="/casa"><i className="fas fa-home"></i></NavItem>
                    <NavItem to="/informacion"><i className="fas fa-chart-bar"></i></NavItem>
                    <NavItem to="/notificacion"><i className="fas fa-bell"></i></NavItem>
                    <NavItem to="/perfil"><i className="fas fa-user"></i></NavItem>
                </div>
            </div>
        </div>
    );
}

export default Informacion;

const NavItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;