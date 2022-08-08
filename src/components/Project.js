import React from 'react'

const Project = ({project}) => {
  return (
    <div className='Project'>
        <h4><a href={project.link}>{project.name}</a></h4>
        <p>{project.description}</p>
        <p>{project.duration}</p>


    </div>
  )
}

export default Project