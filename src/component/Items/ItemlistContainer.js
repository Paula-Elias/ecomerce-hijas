import React from 'react'; 
import '../contador/ItemCount.css';
import ItemList from './ItemList';


function ItemListContainer(props) {
    return (
        
            <div>
                 
                <h3>
                    Bienvenido {props.nombre} a nuestra exclusiva tienda de naturaleza viva
                </h3>
                
                <hr></hr>
                
                <ItemList />
                </div>
    )
   
}



export default ItemListContainer; 