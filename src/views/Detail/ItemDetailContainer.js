import React, { useState, useEffect } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../../components/products/product/ItemDetail";
import { useParams } from "react-router-dom";
import { itemsCollection } from "../../firebase";

function ItemDetailContainer() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await itemsCollection.doc(id).get();
      console.log(response);
      setItem({ id: response.id, ...response.data() });
      console.log(item);
      setLoading(false);
    })();
  }, [id]);

  if (loading || !item) return <h1>Loading....</h1>;

  return <ItemDetail product={item} />;
}

export default ItemDetailContainer;
