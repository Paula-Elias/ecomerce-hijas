import React,  { useEffect, useContext } from 'react'; 
import { Link } from "react-router-dom";
import  { CartContext } from '../../Context/CartContext'; 



function Cart() {
    const { plantas, totalPlantas, eraser } =  useContext(CartContext); 

    useEffect(()=>{
        console.log('')
      })

    return (
        <div>
        {plantas.map((planta) => (
          <div>
          <hr></hr>
            <p>Producto: {planta.nombre}</p>
            <p>Cantidad: {planta.cantidad}</p>
            <p>Precio:  ${planta.precio}</p>
            <input type="button" value={'eliminar'}
            onClick={()=>eraser()}  />
          </div>
        ))}
         <h5>Total:</h5>
        <h5>${totalPlantas()}</h5>
        <hr></hr>
           <button> <Link to="/ItemlistContainer/">Volver</Link> </button>
           <button> <Link to="/OrdenFinal/" >Finalizar Compra </Link></button>
            
           
        </div>
      );
} 

export default Cart; 