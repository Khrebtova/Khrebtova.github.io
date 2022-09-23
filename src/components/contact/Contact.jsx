import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'
import { HiOutlineMail } from 'react-icons/hi'
import {RiMessengerLine, RiWhatsappLine } from 'react-icons/ri'

// https://www.emailjs.com/ 
// https://www.emailjs.com/docs/examples/reactjs/

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qras5qn', 'template_odvsipv', form.current, 'D84PzHtvZEM69gkAR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className='contact_container'>
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_icon'/>
            <h4>Email</h4>
            <h5>mcfaddenkseniia@gmail.com</h5>
            <a href="mailto:mcfaddenkseniia@gmail.com" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
          
          <article className='contact_option'>
            <RiMessengerLine className='contact_icon'/>
            <h4>Messenger</h4>
            <h5>Kseniia McFadden</h5>
            <a href="http://m.me/kseniya.hrebtova" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
          
          <article className='contact_option'>
            <RiWhatsappLine className='contact_icon'/>
            <h4>Whatsapp</h4>
            <h5>+13014331692</h5>
            <a href="https://api.whatsapp.com/send?phone=13014331692" target={'_blank'} rel="noreferrer">Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required/>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact