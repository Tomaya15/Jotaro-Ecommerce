import React from "react";
import { useCartContext } from "../../../context/CartContext";
import ItemCount from "../../contador/itemCount";
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
  const { addToCart, realStock } = useCartContext();
  const stock = realStock(product);

  const onAdd = (qty) => addToCart(product, qty);

  return (
    <div className="detain-item-container">
      <h1>{product.title}</h1>
      <img src={product.pictureUrl} alt={product.title} className="imagen-itemdetail"/>
      <p>{product.description}</p>
      <h2>${product.price}</h2>
      {stock > 0 ? (
        <>
          <h4>Stock: {stock}</h4>
          <ItemCount onAdd={onAdd} stock={stock} />
        </>
      ) : (
        <h4>SIN STOCK</h4>
      )}
    </div>
  );
};

export default ItemDetail;
