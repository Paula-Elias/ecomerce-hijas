import React from 'react'; 
import { Link } from "react-router-dom"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Item.css';


function Item(props){

  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.img} className="card-img-top" /> 
      </div>

      <div className="card-body">
        <h6 className="card-title"><Link
          to={{ pathname: `/itemdetail/${props.id}`, state: { test: "test" } }}
        > {props.nombre}</Link>  </h6>
        <h5 className="card-text text-secondary">Precio: $ {props.precio}</h5>
        <p className="btn btn-outline-sucess"> Familia de plantas:  {props.familia}   </p>

      </div>
</div>
  )
  
}

export default Item; 