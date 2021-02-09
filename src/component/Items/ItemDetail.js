import { useState, useContext } from 'react'; 
import  { CartContext } from '../../Context/CartContext'; 
import Contador from '../contador/ItemCount';
import { Link } from 'react-router-dom';



export default function ItemDetail(props) {

  const [count, setCount] = useState(0);
  const {plantas, plantasContador, addItem, eliminaPlantas, totalPlantas, eraser}  =  
  useContext(CartContext); 


  function giveMeCount(c) {
    setCount(c);
  }


    return(
      <div>
        <h3>Tu Selección de Carrito es: </h3>
       <h4> {props.nombre} </h4>
       <img src={props.img} /> 
        <h3> Precio: ${props.precio}</h3>
        <h5>Comentarios de clientes: {props.comentario}</h5>
        
        <Contador func={giveMeCount} />
          <input onClick={()=>addItem(props.nombre, props.precio, count)}
           type="button"
            value={`Añadir al carrito ${count}`}/>  
      <hr></hr>
      <button> <Link to="/Carrito/">Ir al carrito</Link> </button> 
       <button><Link to="/ItemlistContainer/">Seguir Comprando</Link>  </button> 
       <button> <Link exact to={ `/category/${props.familia}`}>Más productos de {props.familia}</Link> </button> 
        
       <hr></hr>

     
      </div>
    ) 
}
