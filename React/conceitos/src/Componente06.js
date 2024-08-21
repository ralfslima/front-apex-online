// Importar arquivo CSS
import './estilos.css';

// Componente
const Componente06 = () => {

    // Objeto CSS
    const obj = {
        color:'blue',
        backgroundColor:'orange',
        width:'300px'
    }

    // Render
    return(
        <div>
            <h1 style={{color:'green', backgroundColor:'yellow'}}>Hello CSS!</h1>
            <h1 style={obj}>Hello Objeto CSS</h1>
            <h1 className='texto'>Hello Classe CSS</h1>
        </div>
    );

}

// Exportar componente
export default Componente06;