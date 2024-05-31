import React from 'react';
import { Route, Routes } from "react-router-dom";
import Casa from './Casa';
import Informacion from './Informacion';

function BarraDeNavegacion() {
    return (
        <Routes>
            <Route path="/casa" element={<Casa />} />
            <Route path="/informacion" element={<Informacion />} />
        </Routes>
    )
}

export default BarraDeNavegacion;