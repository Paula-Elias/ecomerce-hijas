import React from 'react'; 
import './Navbar.css'; 
import CartWidget from './CartWidget'; 
import { Link } from 'react-router-dom';
import Nosotros from '../pages/Nosotros';
import CategoriasListContainer from "../Category/categoriasListContainer";


class Navbar extends React.Component {

    render() {
  
        return (
  
            <nav className="navbar navbar-expand-md">
 
		    <a className="navbar-brand" href="/">Hijas Del Monte</a>
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">
			        <li className="nav-item">
			          	<Link to="/nosotros/" className="nav-link">Nosotros </Link>
						  
			        </li>
			        <li className="nav-item">
			          	<Link to="/ItemlistContainer/" className="nav-link">Tienda</Link>
			        </li>
			        <li className="nav-item">
			          	<Link to='/carrito'  className="nav-link">Carrito</Link>
			        </li>
					<li className="nav-item">
			          	<Link to="/categoryList" className="nav-link">Categorias</Link>
			        </li>
			    </ul>

				<CartWidget />
		    </div>
 
		</nav>
        )  
    }
  }

export default Navbar; 