import React from 'react'
import Skill from './Skill';


 const Info = ({skills}) => {
  
  return (
    
    <div className='card p-3 bg-secondary bg-opacity-25 mx-3 mb-3' >
  
      <div className='card-body' >
        <h1 className='card-title text-center'>About Me</h1>
        <p className='card-text py-3 text-center'> Hi! My name is <span className='text-secondary' data-bs-toggle="tooltip" data-placement="top" title="Free to call me Grey!">Guidong</span> Luo. I am a rising sophomore majoring in Math-CS at UCSD. I am ready to take on a SWE intern in Winter 2022 or Summer 2023.</p>
      </div>
      <div className='d-flex px-5 m-2 justify-content-center'>
        <div className="row row-cols-auto"> {skills.map((skill, index) => (
                <Skill key={index} skill= {skill}></Skill>   
      ))}</div>
       
       
       

      </div>
    </div>
  )


}
export default Info;