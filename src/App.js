import './App.css';
import NavBar from './components/nav-bar/NavBar';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomeView from './views/Home/ItemListContainer';
import CategoryView from './views/Category/Category';
import { CartProvider } from './context/CartContext.jsx';
import ItemDetailContainer from './views/Detail/ItemDetailContainer';
import Cart from './views/Cart/Cart';


function App() {
  
  return (
    <CartProvider>
      <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route path="/category/:categoryId" component={CategoryView} exact/>
            <Route path="/item/:id" component={ItemDetailContainer} exact/>
            <Route path="/cart" component={Cart}/>
            <Route path="*"><h1>404</h1></Route>
          </Switch> 
      </Router>
    </CartProvider>
  );
}

export default App;

