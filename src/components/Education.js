import React from 'react'
import Course from './Course'


const Education = ({courses}) => {
  return (
    <div id='Education'>
        <h2>Education</h2>
        <h3>University of California, San Diego</h3>
        <h4>Expected Graduation: June 2023</h4>
        <h4>Major: Math-CS</h4>
        <h4>Overall GPA: 3.84</h4>

        <div className='Courses'>
        {
                courses.map((course,index) => (
                    <Course key={index} course= {course}></Course>
        ))
            }
            
        </div>
           
        
        


    </div>
  )
}

export default Education