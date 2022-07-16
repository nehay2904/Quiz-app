import React from 'react'
import './Header.css'
import Image from '../../Images/Logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';


function Header() {
  return (
   <div className="header">
      <div className="logo">
         <img src={Image} className="LogoImage" alt="" srcset="" />
      </div>
      <div className="profilePage">
        
         <Link to="./profilepage">Profilepage</Link>
      </div>
   </div>
  )
}

export default Header