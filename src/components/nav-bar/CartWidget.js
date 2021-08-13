import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';


const CartWidget = () => {
   return(
      <div className="nav-bar-shopIcon">   
            <Link to="/cart"><ShoppingCartIcon fontSize="large"/></Link>
         </div>
   )
}

export default CartWidget;