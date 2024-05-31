import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Componentes/Home';
import Login from '../Componentes/Login';
import Register from '../Componentes/Register';
import Casa from '../Componentes/Casa';
import Informacion from '../Componentes/Informacion';
import Historial from '../Componentes/Historial';
import Notificaion from '../Componentes/Notificaion';

function Navegacion() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/GYM/" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/casa" element={<Casa />} />
                    <Route path="/informacion" element={<Informacion />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/notificacion" element={<Notificaion/>} />
                    <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navegacion