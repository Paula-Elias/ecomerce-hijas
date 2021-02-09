import React, {useEffect, useState} from 'react';
import "firebase/firestore";
import { Link } from 'react-router-dom';


function Recomendation() {


     const [item, setItem] = useState([]);

    useEffect(() => {
        setTimeout(() =>{
            const arrayDatos = fetch("data.json")
            arrayDatos.then(response => {
                return response.json()
            })
            .then(response => {
                setItem(response[4])
                
            })
        })
    },[])


    return (
     <div>
        <div>

        <h2 id="recomendation">Nuestra recomendación de la semana es:</h2><br />
        </div>
        {item ? (
        <div >
            <div >
                <div >
                    <img src= {item.img} alt="Portada" />
                </div>
            </div>
        <div >
            <h2 >{item.nombre}</h2>
            <p >{item.familia}</p>
         
            
            <button >
                <Link style= {{fontSize: '0.6 rem'}} exact to={ `/itemdetail/08DAxS7XK7o5OK5sooGD`}> 
                Podes comprarla acá</Link> </button>     
                <hr/> 
        </div>
      
    </div>
        ) : (
        <p>Trayendo información desde base de datos...</p>
        )}
    </div>
    ) 
             
}

export default Recomendation
