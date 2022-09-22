import React from 'react'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonial_container">
        
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src="https://i.pinimg.com/474x/4a/3a/78/4a3a782d6609fa600e98972c111a92fd.jpg" alt="client_avatar"/>
          </div>
          <h5 className='client_name'>Mike Wazowski</h5>
          <small className='client_review'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi.
          </small>
        </article>
        
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src="https://i.pinimg.com/474x/4a/3a/78/4a3a782d6609fa600e98972c111a92fd.jpg" alt="client_avatar"/>
          </div>
          <h5 className='client_name'>Mike Wazowski</h5>
          <small className='client_review'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi.
          </small>
        </article>
        
        <article className='testimonial'>
          <div className='client_avatar'>
            <img src="https://i.pinimg.com/474x/4a/3a/78/4a3a782d6609fa600e98972c111a92fd.jpg" alt="client_avatar"/>
          </div>
          <h5 className='client_name'>Mike Wazowski</h5>
          <small className='client_review'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus pariatur nemo nisi deserunt accusantium harum fugit sapiente vel, amet ipsum veniam, animi quisquam tempora officiis itaque esse, necessitatibus sequi. Commodi.
          </small>
        </article>
              
      </div>
    </section>
  )
}

export default Testimonial