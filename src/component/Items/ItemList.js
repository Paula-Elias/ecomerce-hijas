import React,  {useState, useEffect} from 'react'; 
import Item from './Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Spinner} from 'react-bootstrap';
import {getFirestore} from './../../firebase/firebase'; 



function ItemList(props) {

    const [items, setItems] = useState([]);

    useEffect(() => {
      const db = getFirestore()
      const items = db.collection("items")
   

      items
      .get()
      .then((snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id, 
            ...doc.data(),
          }));
          setItems(data)
          console.log( db.collection)

          if(snapshot.size === 0) {
            console.log('no resultados');
            }

        })
       .catch((err) =>  {
        console.log(err)
      }) 
      }, [])



    return(
      <div className="container-fluid d-flex">
        <div className="row justify-content-around col-md-auto"> 
                      {
                        items ? 
                        items.map((i,index)=>(
                          <Item key={index} id={i.id} nombre={i.nombre} precio={i.precio}
                           familia={i.familia}  img={i.img} comentario={i.comentario}/>
                        ) ) 
                        : 
                        <p>  <Spinner animation="border" variant="success" /> Cargando...</p>}
        </div>
      </div>
    ) 
};

export default ItemList; 