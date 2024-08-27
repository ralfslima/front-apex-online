// Importar o pacote React
import React from 'react';

// Importar Link
import { Link } from 'react-router-dom';

// Componente
const BarraNavegacao = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                
                <a className="navbar-brand" href="#">Navbar</a>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Início</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/sobre' className='nav-link'>Sobre</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/produto/1' className='nav-link'>Produto 1</Link>
                        </li>

                        <li className='nav-item'>
                            <Link to='/produto/2' className='nav-link'>Produto 2</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

// Exportar
export default BarraNavegacao;