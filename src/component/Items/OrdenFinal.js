import React,  { useState, useEffect, useContext } from 'react'; 
import { Link } from "react-router-dom";
import  { CartContext } from '../../Context/CartContext'; 
import {getFirestore} from './../../firebase/firebase'; 
import firebase from 'firebase'; 
import '@firebase/firestore';
import { Col, Button, Form, Modal } from 'react-bootstrap';
import './Item.css';


function OrdenFinal() {
    const { plantas, totalPlantas, eraser } =  useContext(CartContext); 
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [orderId, setOrderID] = useState(false)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(/* console.log("aca hay un error") */)
    const toggle = () => setModal(!modal);

    const db = getFirestore(); 
    const orders = db.collection("orders");
    const nuevaOrden = {
      buyer: {name, phone, email},
      plantas,
      date:firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalPlantas(),
    }

   function comprar(e) { 
      e.preventDefault();
      orders.add(nuevaOrden)
    .then(({ id }) =>  {
      setOrderID(id)
      setModal(true)
    })
    .catch( err =>  {
      setError(err);
    })
    .finally(() =>  {
      setLoading(false); 
    })
    }
    
    function clearState(){
      toggle();
      eraser();
  }
    

    useEffect(()=>{
        console.log(plantas)
      })

      
      if(plantas.length === 0) {
        return(
          <button> <Link to="/ItemlistContainer/">Volver</Link> </button>
        )
      }else {
        return (
          <div> 
            <h4> Órdenes de compra:</h4>
              {plantas.map((planta, y) => (
                <Form.Group row key={y}>
                <Form.Label sm={8}>
                <p>Producto: {planta.nombre}</p>
              <p>Cantidad: {planta.cantidad}</p>
                </Form.Label>
            </Form.Group>
          ))}
              <h5>Total:</h5>
              <h5>${totalPlantas()}</h5>
              <hr></hr>
          <Form style={{margin: '0 0 0 5vw'}}>
          <Form.Group row>
                        <Form.Label for="name" sm={6}>Tu Nombre y apellido:</Form.Label>
                        <Col sm={6}>
                        <input onChange={(e)=>setName(e.target.value)} type="name" name="name" id="name" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="exampleEmail" sm={6}>Tu email:</Form.Label>
                        <Col sm={6}>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group row>
                        <Form.Label for="phone" sm={6}>Tu número de telefono:</Form.Label>
                        <Col sm={6}>
                        <input onChange={(e)=>setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder="" />
                        </Col>
                    </Form.Group>
                    <Form.Group check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                        <Button color='danger' onClick={(e)=>comprar(e)}>Finalizar compra</Button>
                        </Col>
                    </Form.Group>       
               {/*     MODAL     */}
                    <Modal show={modal} toggle={toggle}>
                        <Modal.Header toggle={toggle}>Tu número de orden es:</Modal.Header>
                        <Modal.Body>
                            {orderId}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button color="primary" onClick={clearState}>Limpiar Carrito</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancelar</Button>
                        </Modal.Footer>
                    </Modal>
          </Form>
      </div>
      )
   }              
} 

export default OrdenFinal; 