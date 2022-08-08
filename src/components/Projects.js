import React from 'react'
import Project from './Project'

const Projects = ({projects}) => {
  return (
    <div id='Projects'  >
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