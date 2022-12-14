import React from 'react'
import './Header.css'
import CTA from './CTA'
import Socials from './Socials'
import ME from '../../assets/me_1.jpg'

const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container" >
        <h5>Hello I'm</h5>
        <h1>Kseniia McFadden</h1>
        <h5 className='text-light'>Full-stack developer</h5>
        <CTA />
        <Socials />
        <a href="#contact" className="scroll_down">Scroll Down</a>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>
      </div>
    </header>
  )
}

export default Header