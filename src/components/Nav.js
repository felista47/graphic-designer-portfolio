import React from 'react'
import { FaSearch } from "react-icons/fa";
import photo from "../assets/photo.jpg"
import "../styles/Nav.css"

const Nav = () => {
  return (
    <div className='container'>
        <div className='logo'>
        <img className='photo' src={photo} alt="me" />
        </div>
        <div className='nav-links'>
        <li>featured</li>
        <li>previous work</li>
        <li>About Me</li>
        <FaSearch/>
        </div>
       
    </div>
  )
}

export default Nav