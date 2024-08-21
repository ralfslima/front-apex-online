// Componente
const Componente07_filho = ({dados}) => {

    // Render
    return(
        <ul>
            {dados.map((nome, indice) => (<li key={indice}>{nome}</li>))}
        </ul>
    );

}

// Exportar o componente
export default Componente07_filho;