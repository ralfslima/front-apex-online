// Importações
import React, {useState, useEffect} from 'react';

// Componente
const Componente08 = () => {

    // UseState
    //const [texto, setTexto] = useState('Hello UseState!');
    const [postagens, setPostagens] = useState([]);

    // UseEffect (Executa após o componente efetuar o render)
    useEffect(() => {
        // setTimeout(() => {
        //     setTexto('Hello UseEffect!'); 
        // }, 3000);

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(requisicao => requisicao.json())
        .then(dados => setPostagens(dados));
    });

    // Render
    return(
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>

            <tbody>
                {postagens.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{obj.id}</td>
                        <td>{obj.title}</td>
                        <td>{obj.body}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

}

// Exportar componente
export default Componente08;