import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Componentes/Home';
import Login from '../Componentes/Login';
import Register from '../Componentes/Register';


function Navegacion() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/*" element={<p>Error 404 Recurso no encontrado</p>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Navegacion