import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
  return (
    <div className="p-5" id='Projects'  >
    <h2>Projects</h2>
    <div >
    {
        projects.map((project,index) => (
                <Project key={index} project= {project}></Project>   
    ))
        }
    </div>
       
    
    


</div>
  )
}

export default Projects