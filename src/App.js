import React,  { useEffect } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Navbar from './component/estaticos/Navbar'; 
import Footer from './component/estaticos/Footer';
import ItemDetailContainer from './component/Items/ItemDetailContainer'; 
import Cart from './component/Items/Cart';
import Home from './component/pages/home';
import ItemList from './component/Items/ItemList';
import CartContextProvider from '../src/Context/CartContext'; 
import CategoriaList from './component/Category/CategoriaList';
import CategoriasListContainer from './component/Category/categoriasListContainer'; 
import Nosotros from './component/pages/Nosotros';
import OrdenFinal from './component/Items/OrdenFinal';


function App() {


  return (
    <div className="App">
      <CartContextProvider> 
      <BrowserRouter>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Home}  />
      <Route exact path="/nosotros/" component= {Nosotros} /> 
      <Route path="/ItemlistContainer/" component={ItemList}  />
      <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
      <Route path='/carrito' component= {Cart} />
      <Route path='/category/:familia' component= {CategoriaList} /> 
      <Route path='/categoryList' component= {CategoriasListContainer} /> 
      <Route path='/OrdenFinal/' component= {OrdenFinal} />
      </Switch>
      <Footer />
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
