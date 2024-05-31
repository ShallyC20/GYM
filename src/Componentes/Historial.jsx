import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Historial.css';
import Imagen1 from "../assets/Gluteos.jpg";
import Imagen2 from "../assets/Pecho.jpg";

function Historial() {
    return (
        <div className="containerH">
            <div className="his-card">
                <div className="his-header">
                    <Link to="/informacion" >
                        <span className="arrow1">⬅</span>
                    </Link>
                    <h1>Historial de entrenamiento</h1>
                </div>
                <div className="workout-card" >
                    <img className="Gluteos" src={Imagen1} alt="Ejercicio GYM" />
                    <div>
                        <h2>Ejercicio de gluteos</h2>
                    </div>
                    <Link to="/informacion" >
                        <span className="arrow">➡</span>
                    </Link>
                </div>
                <div className="workout-card" >
                    <img className="Gluteos" src={Imagen2} alt="Ejercicio GYM" />
                    <div>
                        <h2>Ejercicio de pecho</h2>
                    </div>
                    <Link to="/informacion" >
                        <span className="arrow">➡</span>
                    </Link>
                </div>
                <div className="workout-card" >
                    <img className="Gluteos" src={Imagen2} alt="Ejercicio GYM" />
                    <div>
                        <h2>Ejercicio de espalda</h2>
                    </div>
                    <Link to="/informacion" >
                        <span className="arrow">➡</span>
                    </Link>
                </div>
                <div className="workout-card" >
                    <img className="Gluteos" src={Imagen2} alt="Ejercicio GYM" />
                    <div>
                        <h2>Ejercicio de abdomen</h2>
                    </div>
                    <Link to="/informacion" >
                        <span className="arrow">➡</span>
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
    )
}

export default Historial

const NavItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;