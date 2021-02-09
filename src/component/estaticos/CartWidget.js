import React, {useContext, useEffect} from 'react';
 import './CartWidget.css'; 
 import  { CartContext } from '../../Context/CartContext'; 
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



function CartWidget() {

    const   { plantasContador} =  useContext(CartContext); 

    useEffect(()=>{
         plantasContador();
      })
    

    return ( 
        <div className="cart" >
            <Link to="/carrito"   >  
              <span>
                <FontAwesomeIcon  icon={faShoppingCart} />  
              </span>
               <li> {plantasContador()} </li>
            </Link>     
          </div> 
       
    )
} 

export default CartWidget; 