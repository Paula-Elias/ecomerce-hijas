import React, { useState, useEffect } from 'react';
import Item from '../Items/Item';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getFirestore} from '../../firebase/firebase'; 

function CategoriaList(props) {

    const [items, setItems] = useState([])
    const [ loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const items = db.collection("items")
        const familia = items.where('familia', '==', props.match.params.familia)

        familia
        .get()
        .then((snapshot) =>  {
            const data = snapshot.docs.map((doc) => ( {
                id: doc.id, 
                ...doc.data(),
            })); 
          console.log("--------------", data); 
            setItems(data)
            setLoading(false)
        })

    }, [[props.match.params.familia]])

    if(items.length > 0) {
        return items.map((p, i) => (
            p.familia != 'familia' ?
            <div /* className="container-fluid d-flex" */ >
                <div className="container-fluid   ">
              <Item key={i} id={p.id} img={p.img} nombre={p.nombre} precio= {p.precio} familia= {p.familia}  />
               </div>
            </div>
            :
            <div key= {{i}}>

            </div>
        )) 
    }    
    return <div style={{textAlign: 'left', marginLeft: '5vw'}}>
            'Loading...'
        </div> 
}

export default CategoriaList;

