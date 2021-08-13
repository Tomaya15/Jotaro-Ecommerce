import React from 'react'
import { MenuItems } from './MenuItems';
import {Link} from 'react-router-dom'

const MenuContainer = () =>{ // Mapea los items
   return(
      <nav className="nav-bar-navegacion">
            <ul className='nav-bar-list'>
            {MenuItems.map((item) => {
               return(<li className="nav-bar-list-item"><Link to={`/category/${item.id}`}> {item.title}</Link></li>)
            })}
            </ul>
         </nav>
   )
}

export default MenuContainer;