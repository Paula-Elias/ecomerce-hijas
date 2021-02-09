import React, { useState } from 'react';

export const CartContext = React.createContext([]);

 const CartContextProvider = (props) => {
     
            const [plantas, setPlantas] = useState([]); 
            

            function addItem(product, precio, cantidad) {
                setPlantas([...plantas,  {nombre: product,  precio: precio, cantidad: cantidad} ] )
               // console.log(addItem);
            }

            function plantasContador() {
                return plantas.reduce((acc, planta) => (acc += planta.cantidad), 0);
              };

              const eliminaPlantas = id => {
                plantas.splice(plantas.findIndex(planta => planta.id === id), 1);
                setPlantas([...plantas]);
              };
            
              const totalPlantas = () => {
                return plantas.reduce((acc, planta) => (acc += planta.precio * planta.cantidad), 0);
              }; 
               //console.log(setPlantas)


              function eraser(){
                plantasContador(); 
                eliminaPlantas() 
              }
              
 
              return (
                <CartContext.Provider
                  value=   { { plantas, plantasContador, addItem, eliminaPlantas, totalPlantas, eraser }}              >
                  {props.children}
                </CartContext.Provider>
              );
}

export default CartContextProvider;