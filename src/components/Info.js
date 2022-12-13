import React from 'react'
import Skill from './Skill';


 const Info = ({skills}) => {

  return (

    <div className='card p-3 bg-secondary bg-opacity-25   mx-3 mb-3'  >

      <div className='card-body' >
        <h1 className='card-title text-center'>About Me</h1>
        <p className='card-text py-3 text-center'> Hi there! My name is <span className='text-info' data-bs-toggle="tooltip" data-placement="top" title="Free to call me Grey!">Guidong</span> Luo.  I am a second-year Math-CS major with 5 years of programming and application development experience. I am currently seeking an internship to gain industry experience. I am passionate about technology and eager to learn from experienced professionals.</p>
     </div>
      <div className='d-flex px-3 m-2 justify-content-center'>
        <div className="row row-cols-auto"> {skills.map((skill, index) => (
                <Skill key={index} skill= {skill}></Skill>
      ))}</div>




      </div>
    </div>
  )


}
export default Info;