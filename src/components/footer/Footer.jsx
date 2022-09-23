import React from "react"
import "./Footer.css"
import {RiFacebookCircleFill, RiInstagramLine, RiTwitterFill} from "react-icons/ri";
import {BsTreeFill} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">KM</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer_socials">
        <a href="https://faceboook.com"><RiFacebookCircleFill /></a>
        <a href="https://instagram.com"><RiInstagramLine /></a>
        <a href="https://twitter.com"><RiTwitterFill /></a>
      </div> */}

      <div className="footer_copyrights">
        <small>&copy; Kseniia McFadden. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer;
