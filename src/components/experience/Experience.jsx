import React from 'react'
import './Experience.css'
import {RiCheckboxCircleFill} from 'react-icons/ri'

const Experience = () => {
  const frontEnd = ["HTML", "CSS", "JavaScript", "React", "Redux", "Material UI"];
  const backEnd = ["Ruby", "Ruby on Rails", "SQLite", "PostgreSQL", "Active Record", "Sinatra"];

  const renderExperience = (array) => {
    return array.map((item => {
      return (
        <article className='experience_item'>
          <RiCheckboxCircleFill className='experience_icon' />
          <div>
            <h4>{item}</h4>
            <small className='text-light'>Experienced</small>
          </div>
        </article>
      )
    }))
  }

  return (
    <section id='experience'>
      <h5>What skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        
        <div className='experience_frontend'>
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            {renderExperience(frontEnd)}
          </div>
        </div>
        
        <div className='experience_backend'>
          <h3>Backend Development</h3>
          <div className='experience_content'>
            {renderExperience(backEnd)}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience