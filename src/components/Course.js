import React from 'react'
import { useState } from 'react';
const Course = ({course}) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };
  let link = "https://catalog.ucsd.edu/courses/"+course.subject.toUpperCase()+'.html#'+course.subject+course.id
  const linkStyle = {
    "textDecoration": isHover?'none':'underline dotted',

    //when hover, change color

  };
  return (
    <div>
      <p className='p-2'><a  className="text-light text-opacity-75" style={linkStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} href={link}>{course.name}</a></p>
    </div>
  )
}
export default Course