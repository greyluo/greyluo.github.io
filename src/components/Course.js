import React from 'react'

const Course = ({course}) => {
  let link = "https://catalog.ucsd.edu/courses/"+course.subject.toUpperCase()+'.html#'+course.subject+course.id
  const linkStyle = {
    "textDecoration":'underline dotted',
  };
  return (
    <div className=''>
      <p className='p-2'><a  className="text-light text-opacity-75" style={linkStyle} href={link}>{course.name}</a></p>
    </div>
  )
}
export default Course