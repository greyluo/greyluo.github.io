import React from 'react'
import Course from './Course'
import ucsd from "./ucsd.jpeg"

const Education = ({courses}) => {
 
  return (
    <div className='p-3 mx-3' id='Education'>
        <h1 className='text-center p-3'>Education</h1>
        <div className="card bg-secondary bg-opacity-25">
        <img src={ucsd} className="card-img-top w-auto" alt="ucsd"></img>
          <div className="card-body p-3">
          <h2 className='card-title p-2'>University of California, San Diego</h2>
          <p className='px-2 d-inline text-light text-opacity-50'>Major: Math-CS</p>
          <p className='px-2 d-inline text-light text-opacity-50'>GPA: 3.85</p>
          <p className='px-2 d-inline text-light text-opacity-50'>Expected Graduation: Fall 2023</p>
          <div className='Courses'>
            <h4 className='p-2 mt-3'>Related Courses</h4>
            {
                courses.map((course,index) => (
                  <Course key={index} course= {course}></Course>
            ))
          }
          </div>
        </div>       
        </div>
    </div>
  )
}

export default Education