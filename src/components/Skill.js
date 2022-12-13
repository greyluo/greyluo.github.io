import React from 'react'

const Skill = ({skill}) => {
  let color = skill.field ? 'text-bg-primary' : 'text-bg-danger';
  return (
      <span className={"badge rounded mx-1 p-2 my-1 "+color}>{skill.name}</span>


  )
}

export default Skill