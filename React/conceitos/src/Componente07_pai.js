// Importar componente filho
import Componente07_filho from "./Componente07_filho";

// Componente
const Componente07_pai = () => {

    // Constante de nomes
    const nomes = ['André', 'Bianca', 'Carla', 'Danilo'];

    // Render
    return(
        <div>
            <h1>Lista de nomes</h1>
            <Componente07_filho dados={nomes}/>
        </div>
    );

}

// Exportar componente
export default Componente07_pai;