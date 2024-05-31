import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';

import Imagen1 from "../assets/Carrucel1.jpg";
import Imagen2 from "../assets/Carrucel2.jpg";
import Imagen3 from "../assets/Carrucel3.jpg";
import './Casa.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function Casa() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <div className="containerC">
            <div className="Casa-card">
                <div className="Cabeza">
                    <h1>Hola Gabriela!</h1>
                    <p>No te olvides que el día de hoy entrenas: <strong>PIERNA</strong></p>
                </div>
                <Slider {...settings}>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen1} alt="Carrucel_1" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen2} alt="Carrucel_1" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="Carrucel1" src={Imagen3} alt="Carrucel_1" />
                    </CarouselItem>
                </Slider>
                <div className="BotonNav">
                    <NavItem  to="/amigos"><i className="fas fa-users"></i></NavItem>
                    <NavItem to="/casa"><i className="fas fa-home"></i></NavItem>
                    <NavItem to="/informacion"><i className="fas fa-chart-bar"></i></NavItem>
                    <NavItem to="/notificacion"><i className="fas fa-bell"></i></NavItem>
                    <NavItem to="/perfil"><i className="fas fa-user"></i></NavItem>
                </div>
            </div>

        </div>
    )
}

export default Casa


const CarouselItem = styled.div`
img {
    width: 100%;
    height: auto;
}
`;



const NavItem = styled(Link)`
    cursor: pointer;
    text-decoration: none;
    color: inherit;

    &:hover {
        color: inherit;
    }
`;