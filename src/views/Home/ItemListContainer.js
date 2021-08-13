import React from 'react'
import { useEffect,useState } from 'react';
import ItemList from '../../components/products/ItemList';
import { itemsCollection } from '../../firebase';
import Banner from '../../assets/banner.jpg';
import "./ItemListContainer.css"


function ItemListContainer() {
   

   const [items, setItems] = useState([])
   const [itemsDestacados, setItemsDestacados] = useState([])




   useEffect(() => {
      (async () => { 
         const response = await itemsCollection.get();
         const localItems = response.docs.map(item => ({id: item.id, ...item.data()}))
         console.log(localItems)
         setItemsDestacados(localItems.filter( item => 
            item.destacado == true
         ))
         console.log(itemsDestacados)
      })()
   }, [])
 
   
   

   return (
      <div>
         <img src= {Banner} alt="Banner" className="banner"/>
         <h2 className="title">Productos Destacados</h2>
         <ItemList products={itemsDestacados}/>||
      </div>
   )
}

export default ItemListContainer

