import React from 'react'
import './Services.css'
import {RiCheckFill} from 'react-icons/ri'

const Services = () => {
  const designServices = ['design', 'branding', 'social media']
  const frontEndServices = ['html', 'css', 'Javascript', 'React']
  const backEndServices = ['Ruby', 'Rails', 'SQL']

  const renderServices = (services) => {
    return services.map((service) => {
      return(
        <li key = {service}>
          <RiCheckFill className='service_icon'/>
          <p>{service}</p>
        </li>
      )
    })
  }

  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        
        <article className='service'>
          <div className='service_header'>
            <h3> Design </h3>
          </div>
            <ul className='service_list'>
              {renderServices(designServices)}
            </ul>
        </article>
        
        <article className='service'>
          <div className='service_header'>
            <h3> Front End Development </h3>
          </div>
            <ul className='service_list'>
              {renderServices(frontEndServices)}
            </ul>
        </article>

        <article className='service'>
          <div className='service_header'>
            <h3> Backend Development</h3>
          </div>
            <ul className='service_list'>
              {renderServices(backEndServices)}    
            </ul>
        </article>

      </div>
    </section>
  )
}

export default Services