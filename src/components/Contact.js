import React from 'react'

const Contact = () => {
  const linkStyle = {
    "color":'white',
    "textDecoration":'underline dotted',
  };
  return (
    <div className='d-flex align-items-center justify-content-center mt-4 p-3'>
      <div className='row'>
        <div className='card p-3 bg-secondary bg-opacity-25 ' id='Contact' >
          <div className='card-body'>
            <h1 className='card-title text-center'>Contact</h1>
            <p className='card-text py-3 text-center '>
              <a style={linkStyle} href='https://github.com/greyluo/'>GitHub</a>
              &nbsp; &nbsp; &nbsp;
              <a style={linkStyle}href='mailto: g1luo@ucsd.edu'>g1luo@ucsd.edu</a>
            </p>
            <div className='d-flex align-items-center justify-content-center'>
              <div className='ml-3 pl-3'> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <div className='ml-3 pl-3'>
                <div className="align-self-center badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="guidongluo" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://www.linkedin.com/in/guidongluo?trk=profile-badge">Linkedin Page</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact