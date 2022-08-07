import React from 'react'

const Course = ({course}) => {
  let link = "https://catalog.ucsd.edu/courses/"+course.subject.toUpperCase()+'.html#'+course.subject+course.id
  return (
    <div className='Course'>
      <h4><a href={link}>{course.name}</a></h4>
    </div>
  )
}

export default Course