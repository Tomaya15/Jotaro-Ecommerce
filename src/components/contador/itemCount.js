import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, onAdd }) => {
  const [toAdd, setToAdd] = useState(1);

  return (
    <div className="container">
      <div className="item-contador-container">
        <button onClick={() => setToAdd(toAdd - 1 ? toAdd - 1 : toAdd)}>
          -
        </button>
        <span>{toAdd}</span>
        <button onClick={() => setToAdd(toAdd === stock ? toAdd : toAdd + 1)}>
          +
        </button>
      </div>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={() => onAdd(toAdd)} className="button-on-item">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;

