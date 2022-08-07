import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
  return (
    <div className='Course'>
    {
            projects.map((project,index) => (
                <Project key={index} project= {project}></Project>
    ))
        }
    </div>
  )
}

export default Projects