import React, {useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../../components/products/ItemList';
import { itemsCollection } from '../../firebase'


function CategoryView() {
   
   const {categoryId} = useParams();

   const [items, setItems] = useState([]);
   
   const [productosAFiltrar, setProductosAFiltrar] = useState([]);


   useEffect(() => {
      (async () => { 
         const response = await itemsCollection.get();
         setItems(response.docs.map(item => ({id: item.id, ...item.data()})))
      })()
      if (items.length > 0) {
         const data = items?.filter((product) => {
            return product?.categoryId === parseInt(categoryId);
         });
            setProductosAFiltrar(data);
         }
   }, [items]) 

   return(
      <div>
         <ItemList products={productosAFiltrar}/>
      </div>   
   )
}

export default CategoryView