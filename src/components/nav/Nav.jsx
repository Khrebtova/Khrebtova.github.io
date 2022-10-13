import React , { useState } from 'react'

import './Nav.css'
import { RiHomeHeartLine, RiUserLine, RiBook3Line, RiServiceLine, RiMessage2Line } from 'react-icons/ri'

const Nav = () => {  
  const [isActive, setIsActive] = useState('#home')

  return (
    <nav>       
      <a href="#home" className={ isActive === '#home' ? "active" : ""} onClick={()=>setIsActive('#home')}><RiHomeHeartLine /></a>
      <a href="#about" className={ isActive === '#about' ? "active" : ""} onClick={()=>setIsActive('#about')}><RiUserLine /></a>
      <a href="#experience" className={ isActive === '#experience' ? "active" : ""} onClick={()=>setIsActive('#experience')}><RiBook3Line /></a>
      <a href="#portfolio" className={ isActive === '#services' ? "active" : ""} onClick={()=>setIsActive('#portfolio')}><RiServiceLine /></a>
      <a href="#contact" className={ isActive === '#contact' ? "active" : ""} onClick={()=>setIsActive('#contact')}><RiMessage2Line /></a>
    </nav>
  )
}

export default Nav