import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/kseniia-mcfadden/' target='_blank' rel="noreferrer" > <BsLinkedin /> </a>
        <a href='https://github.com/Khrebtova' target='_blank' rel='noreferrer'> <BsGithub /> </a>
    </div>
  )
}

export default Socials