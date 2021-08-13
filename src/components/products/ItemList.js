import React from 'react';
import Item from './product/Item';
import './item-list.css';


const ItemList = ({products}) => {

   return (  
      <div className="item-list-container">
         {
               products.map((item)=> {
               return <Item item={item} key={item.id}/>
            })
         }
      </div>
   )
}

export default ItemList;