import React from 'react'

const Contact = () => {

  const linkStyle = {
    "textDecoration":'underline dotted',
    "color":"white",

    //when hover, change color

  };
  return (
    <div className='d-flex align-items-center justify-content-center mt-4 p-3'>
      <div className='row'>
        <div className='card p-3 bg-secondary bg-opacity-25 ' id='Contact' >
          <div className='card-body'>
            <h1 className='card-title text-center'>Contact</h1>
            <p className='card-text py-3 text-center text-light'>
              <a style={linkStyle} href='https://github.com/greyluo/' >GitHub</a>
              &nbsp; &nbsp; &nbsp;
              <a style={linkStyle}href='mailto: g1luo@ucsd.edu'>g1luo@ucsd.edu</a>
            </p>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ml-3 pl-3'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact