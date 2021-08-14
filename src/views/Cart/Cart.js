import React from "react";
import { Redirect } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem } = useCartContext();

  if (!cart.length) return <Redirect to="/" />;

  return (
    <div className="cart">
      {cart.map(({ id, title, quantity }) => (
        <h1 key={id}>
          {" "}
          {title} - {quantity} -{" "}
          <button onClick={() => removeItem(id)}>x</button>
        </h1>
      ))}
      <h2>
        Total: $
        {cart
          .reduce((acc, { quantity, price }) => acc + quantity * price, 0)
          .toFixed(2)}
      </h2>
      <button onClick={clearCart}>VACIAR CARRITO</button>
      <Link to="/checkout"><button>PEDIR ORDEN</button></Link>
    </div>
  );
};

export default Cart;
