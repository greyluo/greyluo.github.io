import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
  return (
    <div className='card bg-dark bg-opacity-25 mx-3 border-dark' id='Projects'  >
      <div className='card-body'>
      <h1 className='card-title text-center mb-3 p-1'>Projects</h1>
      <div >
      {
        projects.map((project,index) => (
                <Project key={index} project= {project}></Project>   
      ))
      }
    </div>
    </div>
      
       
    
    


</div>
  )
}

export default Projects