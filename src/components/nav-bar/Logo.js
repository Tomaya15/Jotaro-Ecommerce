import React  from 'react'
import LogoImg from '../../assets/jotaro.png';
import {Link} from 'react-router-dom';

const Logo = () => {
   return(
      <Link to={'/'}><img src={LogoImg} alt="logo-imagen" className="nav-bar-logo"/></Link>
   )
}

export default Logo;