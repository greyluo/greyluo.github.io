import React from 'react'

const Project = ({project}) => {
  let slist = project.description.split(";");
  const linkStyle = {
    "textDecoration":'underline dotted',
  };
  return (
    <div className='card p-3 bg-secondary bg-opacity-25 mb-4 radius-'>
      <div className='card-body'>
        <h4 className='card-title'>
        <a className=" text-light" style={linkStyle} href={project.link}>{project.name}</a></h4>
        <p className='card-subtitle text-end'>{project.duration}</p>
        
        {slist.map((element)=> (
          <li className='card-text p-2 text-light text-opacity-75'>{element}</li>
         
         
        )

        )}
       
        
        
      </div>
    </div>
  )
}

export default Project