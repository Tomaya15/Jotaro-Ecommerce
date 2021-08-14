import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeView from './views/Home/ItemListContainer';
import CategoryView from './views/Category/Category';
import { CartProvider } from './context/CartContext.jsx';
import ItemDetailContainer from './views/Detail/ItemDetailContainer';
import Cart from './views/Cart/Cart';
import Checkout from './views/Checkout/Checkout'
import Order from './views/Checkout/Order';
import history from './components/history';


function App() {
  
  return (
    <CartProvider>
      <Router history={history}>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/category/:categoryId" component={CategoryView} exact/>
            <Route path="/item/:id" component={ItemDetailContainer} exact/>
            <Route path="/cart" component={Cart}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/order" component={Order} />
            <Route path="*"><h1>404</h1></Route>
          </Switch> 
      </Router>
    </CartProvider>
  );
}

export default App;

