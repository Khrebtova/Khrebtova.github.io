import React from 'react'
import './About.css'
import ME from '../../assets/me_2.jpg'
import {RiAwardLine, RiFolder5Line} from 'react-icons/ri'
import {TbUsers} from 'react-icons/tb'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about_container'>
        
        <div className='about_me'>
          <div className='about_me_image'>
            <img src={ME} alt='about me' />
          </div>
        </div>
        
        <div className='about_content'>
          <div className='about_cards'>            
            <article className='about_card'>
              <RiAwardLine className='about_icon'/>
              <h5>Experience</h5>
              <small>10+ Years Working</small>
            </article>
            
            <article className='about_card'>
              <TbUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>No clients yet</small>
            </article>
            
            <article className='about_card'>
              <RiFolder5Line className='about_icon'/>
              <h5>Projects</h5>
              <small>5 projects</small>
            </article>
          </div>
          <p>
            Motivated software engineer recently graduated from Flatiron school. 
            Experienced in JavaScript, React, Ruby, Ruby on Rail, SQLite, PostgreSQL and quick to learn and employ additional languages, systems, and applications. 
            
          </p>
          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
      </div>
    </section>
  )
}

export default About