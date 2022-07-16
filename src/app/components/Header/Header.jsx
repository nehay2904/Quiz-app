import React from 'react'
import './Header.css'
import Image from '../../Images/Logo.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


function Header() {
  return (
   <div className="header">
      <div className="logo">
         <img src={Image} className="LogoImage" alt="" srcset="" />
      </div>
      <div className="profilePage">
        
         <a href='./'>  <AccountCircleIcon style={{width:30, height:30}}/></a>
      </div>
   </div>
  )
}

export default Header