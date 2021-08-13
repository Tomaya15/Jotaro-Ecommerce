import { useState, useEffect } from "react";

function useGetData(url) {
   
   const [products, setProducts] = useState([]);

   useEffect(() => {
   const getData = async () => {
      const res = await fetch(url, {
         method: "GET",
      });

      const { productos } = await res.json();
      setProducts(productos);
      return productos;
   };
   getData();
   }, [url]);

   return { products };
}

export default useGetData; 