import React,  {useState, useEffect} from 'react'; 
import ItemDetail from './ItemDetail'; 
import "firebase/firestore";
import {Spinner} from 'react-bootstrap'; 
import {getFirestore} from './../../firebase/firebase'; 


export default function ItemDetailContainer(props) {

    const [item, setItem] = useState(false);
    let id = props.match.params.id;

    
  useEffect(() => {
    const db = getFirestore()
    const itemCollection = db.collection("items") 
    const planta = itemCollection.doc(id)

    
    planta
    .get()
    .then((snapshot) => {
        const data = snapshot.data()
        setItem(data)
            if(snapshot.size === 0) {
            console.log('no resultados');
            }
      })
      
      .catch((err) =>  {
      console.log(err)
    }) 
    }, [])
   console.log(item)
 
    return (
        <div>  
            {item ?  ( <ItemDetail id={item.id} nombre={item.nombre} precio= {item.precio} 
             familia = {item.familia}   img={item.img} comentario={item.comentario} />) : 
            ( <p>  <Spinner animation="border" variant="success" /> Cargando...  <hr/><hr/> </p> )
            } 
           
         </div>
       
    );   
  
}
