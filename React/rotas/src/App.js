// Importações
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Form} from "react-router-dom"
import Inicio from './paginas/Inicio';
import Sobre from './paginas/Sobre';
import BarraNavegacao from './componentes/BarraNavegacao';
import Produto from './paginas/Produto';

// Componente
const App = () => {
    return(
        <Router>

            <BarraNavegacao />

            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/produto/:id' element={<Produto />} />
            </Routes>

        </Router>
    );

    
}

// Exportar
export default App;