import React from 'react'
import Skill from './Skill'
import {useState} from 'react'
const Project = ({project,skills}) => {
  let slist = project.description.split(";");
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
 };
 const handleMouseLeave = () => {
    setIsHover(false);
 };
  const linkStyle = {
    "textDecoration": isHover?'none':'underline dotted',

    //when hover, change color

  };
  const link = project.link;
  const name = project.name;
  const a = <a className=" text-light" href={link} style={linkStyle} onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}> {name}</a>
  const listStyle = {
    "listStyleType":'disc',

  };
  return (
    <div className='card p-3 bg-secondary bg-opacity-25 mt-4 radius-'>

      <div className='card-body'>

          <h4 className='card-title'>
          {link? a : name}
          </h4>

        <p className='card-subtitle text-end'>{project.duration}</p>


    </div>
        <ul style={listStyle}>
          {slist.map((element)=> (
            <li className='card-text p-2 text-light text-opacity-75'>{element}</li>


          )

          )}
        </ul>
        <div className='text-end mx-3'> {skills.map((skill, index) => (
                  <Skill key={index} skill= {skill}></Skill>
          ))}</div>
      </div>

  )
}

export default Project