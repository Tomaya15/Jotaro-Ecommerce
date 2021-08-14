import React from 'react';
import {Card,Icon,Image} from 'semantic-ui-react';
import ItemCount from '../../contador/itemCount';
import { useCartContext } from '../../../context/CartContext'
import { Link } from 'react-router-dom'



const Item = ({item}) => {

   const { addToCart, realStock } = useCartContext()

   const stock = realStock(item);

   const onAdd = qty => addToCart(item, qty);
  
   return (
      <Card style={{width:300, margin: 10, padding: 0}} key={item.id}>
         <Image style={{ height: 300 }}src={item.pictureUrl}/>
      <Card.Content>
         <Link to= {`/item/${item.id}`}>
            <Card.Header>{item.title}</Card.Header>
         </Link>
      </Card.Content>
      <Card.Content >
         <Icon name='dollar sign' color='green'/>
         {item.price}
      </Card.Content>
      {
            stock > 0 ? 
            <ItemCount onAdd={onAdd} stock={stock}/>:
            <h4>SIN STOCK</h4>
         }
      </Card>
   )
}

export default Item
