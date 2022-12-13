import React from 'react'
import Project from './Project'

const Projects = ({projects,skills}) => {
  return (
    <div className='card bg-dark mx-3 border-dark' id='Projects' >
      <div className='card-body'>
      <h1 className='card-title text-center p-1'>Projects</h1>

      {
        projects.map((project, index) => (
          <Project key={project.name} project= {project} skills={skills.filter(skill => project.language.split(",").includes(skill.name))}></Project>
      ))
      }
    </div>






</div>
  )
}

export default Projects