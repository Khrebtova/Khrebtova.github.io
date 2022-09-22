import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/project_1.jpg'
import IMG2 from '../../assets/project_2.jpg'
import IMG3 from '../../assets/project_3.jpg'
import IMG4 from '../../assets/project_4.jpg'
import IMG5 from '../../assets/project_5.jpg'

const Portfolio = () => {

  const projects=[
    {
      id: 1,
      title: "Get Together",
      image_url: IMG1,
      github_url: "https://github.com/Khrebtova/Get-together-app",
      live_demo: "https://youtu.be/ChkmYp4YDqc",
    }, 
    {
      id: 2,
      image_url: IMG2,
      title: "Project Tracker",
      github_url: "https://github.com/Khrebtova/project-tracker",
      live_demo: "https://youtu.be/FGiV7itvO40",
    }, 
    {
      id: 3,
      image_url: IMG3,
      title: "Bucket List",
      github_url: "https://github.com/Khrebtova/phase-3-project-bucket-list",
      live_demo: "https://youtu.be/TCsF1vku7oQ",
    }, 
    {
      id: 4,
      image_url: IMG4,
      title: "Watch List",
      github_url: "https://github.com/Khrebtova/phase-2-project-Watchlist",
      live_demo: "https://youtu.be/-SG1VXaxYck",
    }, 
    {
      id: 5,
      image_url: IMG5,
      title: "Lake Tahoe",
      github_url: "https://github.com/Khrebtova/phase-1-project-Lake-Tahoe",
      live_demo: "https://youtu.be/KjdRa-jtKmk",
    }
  ]

  const renderProjects = projects.map((project) => {
    return(
      <article className='portfolio_item' key={project.id}>
        <div className='portfolio_item_image'>
          <img src={project.image_url} alt={project.title} />
        </div>
        <h3>{project.title}</h3>
        <div className='portfolio_item_cta'>
          <a href={project.github_url} className='btn' target={'_blank'} rel="noreferrer">GitHub</a>
          <a href={project.live_demo} className='btn btn-primary' target={'_blank'} rel="noreferrer">Live Demo</a>
        </div>
      </article>
    )
  })

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {renderProjects}        
      </div>
    </section>
  )
}

export default Portfolio