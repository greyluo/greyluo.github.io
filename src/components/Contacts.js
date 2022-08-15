import React from 'react'

const Contacts = () => {
  const linkStyle = {
    "color":'white',
    "textDecoration":'underline dotted',
  };
  return (
    <div className='card p-3 bg-secondary bg-opacity-25 mx-3 mb-3' id='Contacts' > 
      <div className='card-body'>
      <h1 className='card-title text-center'>Contacts</h1>
        <p className='card-text py-3 text-center '> 
        <a style={linkStyle} href='https://github.com/greyluo/'>GitHub</a>
        &nbsp; &nbsp; &nbsp;
        <a style={linkStyle}href='mailto: g1luo@ucsd.edu'>g1luo@ucsd.edu</a>
        </p>
      </div>
    </div>
  )
}

export default Contacts