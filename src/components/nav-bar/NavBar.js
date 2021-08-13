import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import MenuContainer from './MenuContainer';
import Logo from './Logo';

const NavBar = () =>{
   return (
      <div className='nav-bar'>
         <Logo/>
         <MenuContainer/>
         <CartWidget/>
      </div>
   )
}

export default NavBar;
