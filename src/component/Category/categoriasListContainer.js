import React from 'react'; 
import { Link } from 'react-router-dom';



function CategoriasListContainer() {

    return (
        <div>
            <h3> Nuestros productos por categorias:</h3><br />
            <h5>Kokedamas:</h5>
            <button><Link exact to={ `/category/Kokedamas`}>Productos exclsuivamente sobre Kokedamas</Link> </button><br /><br />
            <h5>Cuadros Vivos:</h5>
            <button><Link exact to={ `/category/Cuadros%20Vivos`}>Toda la variedad de Cuadros Vivos del mercado está acá</Link> </button><br /><br />
            <h5>Ecosistemas Verticales:</h5>
            <button><Link exact to={ `/category/Ecosistemas%20Verticales`}>Los mejores jardines y ecosistemas verticales</Link> </button><br /><br />
            <h5>Rosedales:</h5>
            <button><Link exact to={ `/category/Rosedales`}>¿Queres más variedades de rosas y su familia? Hace click acá</Link> </button><br /><br />
       
        </div>
    )
    
        

   
} 

export default CategoriasListContainer; 
