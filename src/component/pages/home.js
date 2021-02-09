
import React from 'react';
import { Link } from 'react-router-dom';
import   {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Recomendation from './Recomendation'; 


function home() {
    return (
        <div>
            <h2>
                    Bienvenido a nuestra exclusiva tienda de naturaleza viva
                </h2>
            <br></br>

            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="portada 1.jpg"
      alt="Naturaleza Viva"
    />
    <Carousel.Caption>
      <h3>Naturaleza Viva</h3>
      <h6>Un árbol es nuestro contacto más íntimo con la naturaleza.</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="portada 2.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>La complicidad de lo natural</h3>
      <h6>Si supiera que el mundo se acaba mañana, yo, hoy todavía, plantaría un árbol.</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="PS_producto 3.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Amor en forma de planta</h3>
      <h6>El amor por la jardinería es una semilla que una vez sembrada nunca muere..-Gertrude Jekyll </h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="PS_servicio 5.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Verde resurgir</h3>
      <h6>La naturaleza nunca ha traicionado a quién la ha amado..- William Wordsworth </h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<br />

<Recomendation />
          <h2>Mirá el catálogo más completo  que tenemos para vos: </h2>
            <h6> <button><Link  
          to={{ pathname: /ItemlistContainer/ }}
          > LIstado de articulos   </Link>  </button></h6>
      
        <hr></hr>
        </div>
           
    )
}

export default home
