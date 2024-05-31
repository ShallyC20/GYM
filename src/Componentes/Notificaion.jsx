import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Notificacion.css';

function Notificaion() {
    const [selectedTab, setSelectedTab] = useState('Promociones');

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <div className="notifications">
            <div className="not-card">
                <h2>Notificaciones</h2>
                <div className="tabs">
                    <button
                        className={`tab ${selectedTab === 'Nuevo' ? 'active' : ''}`}
                        onClick={() => handleTabChange('Nuevo')}>Nuevo
                    </button>
                    <button
                        className={`tab ${selectedTab === 'Promociones' ? 'active' : ''}`}
                        onClick={() => handleTabChange('Promociones')}>Promociones
                    </button>
                    <button
                        className={`tab ${selectedTab === 'Todo' ? 'active' : ''}`}
                        onClick={() => handleTabChange('Todo')}>Todo
                    </button>
                </div>
                <div className="notifications-list">
                    {selectedTab === 'Promociones' && (
                        <>
                            <div className="notification">
                                <span className="time">9:45 AM</span>
                                <h3>Especial año nuevo</h3>
                                <p>Inscríbete en enero y obtén un 40% de descuento en tus primeros tres meses de membresía.</p>
                            </div>
                            <div className="notification">
                                <span className="time">9:38 AM</span>
                                <h3>Promocion</h3>
                                <p>Esta semana, todos los miércoles son Día de Invitado en nuestro gimnasio. ¡Trae a un amigo y ambos recibirán un pase de un día GRATIS!</p>
                            </div>
                        </>
                    )}
                    {selectedTab === 'Nuevo' && (
                        <div className="notification">
                            <span className="time">8:25 AM</span>
                            <h3>Atencion!!</h3>
                            <p>Participa en nuestro desafío de 30 días y gana grandes premios.</p>
                        </div>
                    )}
                    {selectedTab === 'Todo' && (
                        <>
                            <div className="notification">
                                <span className="time">9:45 AM</span>
                                <h3>Especial año nuevo</h3>
                                <p>Inscríbete en enero y obtén un 40% de descuento en tus primeros tres meses de membresía.</p>
                            </div>
                            <div className="notification">
                                <span className="time">9:38 AM</span>
                                <h3>Promocion</h3>
                                <p>Esta semana, todos los miércoles son Día de Invitado en nuestro gimnasio. ¡Trae a un amigo y ambos recibirán un pase de un día GRATIS!</p>
                            </div>
                            <div className="notification">
                                <span className="time">8:25 AM</span>
                                <h3>Atencion!!</h3>
                                <p>Participa en nuestro desafío de 30 días y gana grandes premios.</p>
                            </div>
                        </>
                    )}
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

export default Notificaion

const NavItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;