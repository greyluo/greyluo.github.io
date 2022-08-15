import React from 'react'

const Project = ({project}) => {
  let slist = project.description.split(";");
  const linkStyle = {
    "textDecoration":'underline dotted',
  };
  const link = project.link;
  const name = project.name;
  const a = <a className=" text-light" href={link} style={linkStyle}> {name}</a>
  
  return (
    <div className='card p-3 bg-secondary bg-opacity-25 mt-4 radius-'>
      <div className='card-body'>
        <h4 className='card-title'>
        {link? a : name}
        </h4>
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